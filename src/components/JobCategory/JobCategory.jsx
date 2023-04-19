import React, { useEffect, useState } from "react";
import JobCategoryCard from "../JobCategoryCard/JobCategoryCard";

const JobCategory = () => {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    fetch("/category.json")
      .then((res) => res.json())
      .then((data) => setCategories(data));
  }, []);
  return (
    <div className="w-full max-w-screen-xl mx-auto py-3 md:py-5 px-4 md:px-8 mt-16 md:mt-32">
      <h2 className="text-[#1A1919] text-3xl sm:text-5xl font-extrabold text-center mb-4">
        Job Category List
      </h2>
      <p className="text-[#757575] font-medium mb-8 text-center">
        Explore thousands of job opportunities with all the information you
        need. Its your future
      </p>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {categories.map((category, i) => (
          <JobCategoryCard category={category} key={i}></JobCategoryCard>
        ))}
      </div>
    </div>
  );
};

export default JobCategory;
