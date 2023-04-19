import React, { useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import AppliedCard from "../AppliedCard/AppliedCard";

const AppliedJobs = () => {
  const { jobArr } = useLoaderData();

  const [jobArrData, setArrData] = useState(jobArr);
  const [filterData, setFilterData] = useState(jobArr);

  const handleChange = (e) => {
    let filteredOption = e.target.value;
    const remaining = filterData.filter(
      (jobData) => jobData.remote_or_onsite === filteredOption
    );
    setArrData(remaining);
  };

  return (
    <>
      <div className="w-full max-w-screen-xl mx-auto bg-[#F9F9FF]">
        <div className="bg-[url('https://i.ibb.co/pf7qwYs/Vector.png')] bg-no-repeat bg-left-bottom min-h-[300px] flex justify-center items-center">
          <h2 className="font-extrabold text-[32px] text-[#1A1919]">
            Applied Jobs
          </h2>
        </div>
      </div>

      <div className="w-full max-w-screen-xl mx-auto mt-16 md:mt-32 py-3 md:py-5 px-4 md:px-8">
        <div>
          <div className="text-right">
            <select
              onChange={handleChange}
              defaultValue="Option 1"
              className="select sm:text-xl text-[#474747] font-semibold w-full mb-8 max-w-[150px] bg-[#F4F4F4]"
            >
              <option value="Option 1" disabled>
                Filter By
              </option>
              <option value="Onsite">Onsite</option>
              <option value="Remote">Remote</option>
            </select>
          </div>
          {jobArrData.length > 0 ? (
            <div>
              {jobArrData.map((singleJob) => (
                <AppliedCard
                  key={singleJob.id}
                  singleJob={singleJob}
                ></AppliedCard>
              ))}
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center">
              <p className="font-medium text-2xl sm:text-3xl">
                No Jobs Applied !!!
              </p>
              <Link
                to="/"
                className="my-btn px-3 mt-6 sm:px-7 py-2 sm:py-5 text-sm sm:text-xl"
              >
                Back to homepage
              </Link>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default AppliedJobs;
