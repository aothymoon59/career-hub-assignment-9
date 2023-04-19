import React from "react";
import { Link, useRouteError } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTriangleExclamation } from "@fortawesome/free-solid-svg-icons";

const ErrorPage = () => {
  const { error, status } = useRouteError();
  return (
    <section className="flex items-center h-screen w-full max-w-screen-xl mx-auto py-3 md:py-5 px-4 md:px-8">
      <div className="flex flex-col items-center justify-center px-5 mx-auto my-8">
        <div className="max-w-md text-center">
          <h2 className="mb-3 font-extrabold text-5xl md:text-6xl text-red-600">
            <span className="sr-only">Error</span> {status || 404}
          </h2>
          <FontAwesomeIcon
            className="text-5xl  text-red-600"
            icon={faTriangleExclamation}
          />
          <p className="text-2xl text-red-600 font-semibold md:text-3xl mb-8">
            {error?.message}
          </p>
          <Link
            to="/"
            className="my-btn px-3 sm:px-7 py-2 sm:py-5 text-sm sm:text-xl"
          >
            Back to homepage
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ErrorPage;
