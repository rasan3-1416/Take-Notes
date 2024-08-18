import React from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <>
      <Helmet>
        <title>404 not found</title>
      </Helmet>
      <div className="h-[70vh] flex flex-col justify-center items-center">
        <h4 className="text-[2.5rem] font-bold mb-4">404 Not Found Page</h4>
        <Link to={"/"} className="btn btn-primary">
          Go Back To Homepage
        </Link>
      </div>
    </>
  );
};

export default NotFound;
