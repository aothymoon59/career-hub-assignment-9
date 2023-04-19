import React from "react";

const JobCategoryCard = ({ category }) => {
  const { category_logo, category_name, jobs_available } = category;
  return (
    <div className="p-5 md:p-10 bg-[#F9F8FF] rounded-lg">
      <div className="bg-[#EFECFF] w-fit p-4 rounded-lg mb-8">
        <img src={category_logo} alt={category_name} />
      </div>
      <h4 className="text-xl font-extrabold text-[#474747] mb-2">
        {category_name}
      </h4>
      <p className="text-[#A3A3A3] font-medium">{jobs_available}</p>
    </div>
  );
};

export default JobCategoryCard;
