import React from "react";
import Banner from "../Banner/Banner";
import JobCategory from "../JobCategory/JobCategory";
import FeaturedJobs from "../FeaturedJobs/FeaturedJobs";
import { useLoaderData } from "react-router-dom";

const Home = () => {
  const jobsData = useLoaderData();
  return (
    <div>
      <Banner></Banner>
      <JobCategory></JobCategory>
      <FeaturedJobs jobsData={jobsData}></FeaturedJobs>
    </div>
  );
};

export default Home;
