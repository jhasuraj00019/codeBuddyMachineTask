import React, { useState } from "react";
import { useHistory } from "react-router-dom";

const Step1 = () => {
  let history = useHistory();

  return (
    <>
      <div className="container bg-white">
        <h1>Step 1</h1>

        <div className="row">
          <input
            type="text"
            placeholder="Enter your Name"
            className="form-control m-3 col-lg"
          />

          <input
            type="text"
            placeholder="Enter Address"
            className="form-control m-3 col-lg"
          />
        </div>

        <div className="">
          <button className="btn btn-secondary m-2" disabled>
            Previous
          </button>
          <button
            className="btn btn-success m-2"
            onClick={() => {
              history.push("/second");
            }}
          >
            Next
          </button>
        </div>
      </div>
    </>
  );
};

export default Step1;
