const addToDb = (id) => {
  let appliedJob = {};

  // get previous data from local storage
  const storedJob = localStorage.getItem("applied-job");
  if (storedJob) {
    appliedJob = JSON.parse(storedJob);
  }

  //   add count
  const count = appliedJob[id];
  if (count) {
    const newCount = count + 1;
    appliedJob[id] = newCount;
  } else {
    appliedJob[id] = 1;
  }

  localStorage.setItem("applied-job", JSON.stringify(appliedJob));
};

const getStoredJob = () => {
  let appliedJob = {};

  // get data from local storage
  const storedJob = localStorage.getItem("applied-job");
  if (storedJob) {
    appliedJob = JSON.parse(storedJob);
  }
  return appliedJob;
};

export { addToDb, getStoredJob };
