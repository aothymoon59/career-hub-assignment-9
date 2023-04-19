import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot, faDollarSign } from "@fortawesome/free-solid-svg-icons";

const SingleFeatureCard = ({ job }) => {
  const {
    id,
    company_logo,
    job_title,
    company_name,
    remote_or_onsite,
    fulltime_or_parttime,
    salary,
    location,
  } = job;

  return (
    <div className="card  items-start justify-start rounded-md border border-[#E8E8E8]">
      <figure className="px-10 pt-10 mb-8">
        <img src={company_logo} alt={job_title} />
      </figure>
      <div className="card-body px-10 pt-0 pb-10">
        <h2 className="font-extrabold text-xl md:text-2xl mb-2 text-[#474747]">
          {job_title}
        </h2>
        <p className="text-[#757575] text-lg md:text-xl font-semibold mb-4">
          {company_name}
        </p>
        <div className="flex gap-4">
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
        <div className="card-actions">
          <Link
            to={`/job/${id}`}
            className="my-btn px-3 sm:px-7 py-2 sm:py-5 text-sm sm:text-xl"
          >
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SingleFeatureCard;
