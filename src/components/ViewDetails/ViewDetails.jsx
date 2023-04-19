import React, { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLocationDot,
  faDollarSign,
  faCalendarDays,
  faPhone,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";
import { addToDb } from "../../utils/fakeDB";
import toast from "react-hot-toast";

const ViewDetails = () => {
  const allData = useLoaderData();
  const { id } = useParams();
  const [jobDetails, setJobDetails] = useState({});
  useEffect(() => {
    const singleDetailsData = allData.find((data) => data.id == id);
    setJobDetails(singleDetailsData);
  }, []);

  const {
    job_description,
    job_responsibility,
    educational_requirements,
    experiences,
    salary,
    job_title,
    contact_information,
    location,
  } = jobDetails;

  const handleApply = (id) => {
    addToDb(id);
    toast.success("Successfully Applied");
  };

  return (
    <>
      <div className="w-full max-w-screen-xl mx-auto bg-[#F9F9FF]">
        <div className="bg-[url('https://i.ibb.co/pf7qwYs/Vector.png')] bg-no-repeat bg-left-bottom min-h-[300px] flex justify-center items-center">
          <h2 className="font-extrabold text-[32px] text-[#1A1919]">
            Job Details
          </h2>
        </div>
      </div>
      <div className="w-full max-w-screen-xl mx-auto mt-16 md:mt-32 py-3 md:py-5 px-4 md:px-0 grid md:grid-cols-[3fr,1fr] gap-6">
        <div className="flex flex-col gap-6">
          <p className="font-medium text-[#757575]">
            <span className="font-extrabold text-[#1A1919]">
              Job Description:
            </span>{" "}
            {job_description}
          </p>
          <p className="font-medium text-[#757575]">
            <span className="font-extrabold text-[#1A1919]">
              Job Responsibility:
            </span>{" "}
            {job_responsibility}
          </p>
          <p className="font-medium text-[#757575]">
            <span className="font-extrabold text-[#1A1919]">
              Educational Requirements:
            </span>
            <br />
            {educational_requirements}
          </p>
          <p className="font-medium text-[#757575]">
            <span className="font-extrabold text-[#1A1919]">Experiences:</span>
            <br />
            {experiences}
          </p>
        </div>
        <div>
          <div className="bg-[#F4F2FF] p-[30px] rounded-lg">
            <h2 className="font-extrabold text-xl text-[#1A1919]">
              Job Details
            </h2>
            <hr className="my-6" />
            <h2 className="font-bold text-[#474747]">
              <FontAwesomeIcon icon={faDollarSign} /> Salary:{" "}
              <span className="font-medium text-[#757575]">{salary}</span>
            </h2>
            <h2 className="font-bold text-[#474747] mt-4">
              <FontAwesomeIcon icon={faCalendarDays} /> Job Title:{" "}
              <span className="font-medium text-[#757575]">{job_title}</span>
            </h2>
            <h2 className="font-extrabold text-xl text-[#1A1919] mt-8">
              Contact Information
            </h2>
            <hr className="my-6" />
            <h2 className="font-bold text-[#474747]">
              <FontAwesomeIcon icon={faPhone} /> Phone:{" "}
              <span className="font-medium text-[#757575]">
                {contact_information?.phone}
              </span>
            </h2>
            <h2 className="font-bold text-[#474747] mt-4">
              <FontAwesomeIcon icon={faEnvelope} /> Email:{" "}
              <span className="font-medium text-[#757575]">
                {contact_information?.email}
              </span>
            </h2>
            <h2 className="font-bold text-[#474747] mt-4">
              <FontAwesomeIcon icon={faLocationDot} /> Address:{" "}
              <span className="font-medium text-[#757575]">{location}</span>
            </h2>
          </div>
          <button
            onClick={() => handleApply(id)}
            className="w-full mt-6 my-btn px-3 sm:px-7 py-2 sm:py-5 text-sm sm:text-xl"
          >
            Apply Now
          </button>
        </div>
      </div>
    </>
  );
};

export default ViewDetails;
