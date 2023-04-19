import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot, faDollarSign } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const AppliedCard = ({ singleJob }) => {
  const {
    id,
    company_logo,
    job_title,
    company_name,
    remote_or_onsite,
    fulltime_or_parttime,
    location,
    salary,
  } = singleJob;
  return (
    <div className="w-full grid md:grid-cols-[3fr,1fr] items-center mb-6  p-7 border border-[#E8E8E8] rounded-lg">
      <div className="flex flex-col md:flex-row md:items-center gap-7">
        <div className="bg-[#F4F4F4] w-full md:w-[240px] md:h-[240px] rounded-lg p-10 flex items-center justify-center">
          <img src={company_logo} alt={company_name} />
        </div>
        <div>
          <h2 className="text-[#474747] text-2xl font-extrabold mb-2">
            {job_title}
          </h2>
          <p className="text-[#757575] font-semibold text-2xl mb-4">
            {company_name}
          </p>
          <div className="flex gap-4 mb-6">
            <div className="font-extrabold my-gradient-text py-2 px-5 border border-[my-gradient-text] rounded">
              {remote_or_onsite}
            </div>
            <div className="font-extrabold my-gradient-text py-2 px-5 border border-[my-gradient-text] rounded">
              {fulltime_or_parttime}
            </div>
          </div>
          <div className="flex gap-6 text-base sm:text-sm lg:text-xl mt-4 mb-6">
            <span className="">
              <FontAwesomeIcon icon={faLocationDot} /> {location}
            </span>
            <span>
              <FontAwesomeIcon icon={faDollarSign} /> {salary}
            </span>
          </div>
        </div>
      </div>
      <div className="text-left md:text-right">
        <Link
          to={`/job/${id}`}
          className="my-btn px-3 sm:px-7 md:px-4 py-2 sm:py-5 text-sm sm:text-xl"
        >
          View Details
        </Link>
      </div>
    </div>
  );
};

export default AppliedCard;
