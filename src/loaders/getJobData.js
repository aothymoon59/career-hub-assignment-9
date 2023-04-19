import { getStoredJob } from "../utils/fakeDB";

export const jobsData = async () => {
  const allJobsData = await fetch("/jobdata.json");
  const jobs = await allJobsData.json();

  const savedJob = getStoredJob();
  let jobArr = [];
  for (const id in savedJob) {
    const foundJob = jobs.find((singleJob) => singleJob.id == id);
    if (foundJob) {
      foundJob.count = savedJob[id];
      jobArr.push(foundJob);
    }
  }
  return { jobArr, jobs };
};
