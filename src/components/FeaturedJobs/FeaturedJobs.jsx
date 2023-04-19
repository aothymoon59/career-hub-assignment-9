import React, { useEffect, useState } from "react";
import SingleFeatureCard from "../SingleFeatureCard/SingleFeatureCard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleUp } from "@fortawesome/free-solid-svg-icons";

const FeaturedJobs = ({ jobsData }) => {
  const [jobs, setJobs] = useState([]);
  useEffect(() => {
    setJobs(jobsData.slice(0, 4));
  }, []);

  const handleSeeAll = () => {
    setJobs(jobsData);
  };

  const handleSeeLess = () => {
    setJobs(jobsData.slice(0, 4));
  };

  return (
    <div className="w-full max-w-screen-xl mx-auto py-3 md:py-5 px-4 md:px-8 mt-16 md:mt-32">
      <h2 className="text-[#1A1919] text-3xl sm:text-5xl font-extrabold text-center mb-4">
        Featured Jobs
      </h2>
      <p className="text-[#757575] font-medium mb-8 text-center">
        Explore thousands of job opportunities with all the information you
        need. Its your future
      </p>
      <div className="grid gap-6 md:grid-cols-2">
        {jobs.map((job) => (
          <SingleFeatureCard job={job} key={job.id}></SingleFeatureCard>
        ))}
      </div>
      <div className={`${jobs.length > 4 ? "hidden" : ""} text-center`}>
        <button
          onClick={handleSeeAll}
          className="mt-10 my-btn px-3 sm:px-7 py-2 sm:py-5 text-sm sm:text-xl"
        >
          See All Jobs
        </button>
      </div>
      <div className={`${jobs.length > 4 ? "" : "hidden"} text-center`}>
        <button
          onClick={handleSeeLess}
          className="mt-10 my-btn px-3 sm:px-7 py-2 sm:py-5 text-sm sm:text-xl"
        >
          See Less <FontAwesomeIcon icon={faAngleUp} />
        </button>
      </div>
    </div>
  );
};

export default FeaturedJobs;
