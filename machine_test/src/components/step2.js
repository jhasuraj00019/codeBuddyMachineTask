import React from "react";
import { useHistory } from "react-router-dom";

const Step2 = () => {
  let history = useHistory();

  return (
    <>
      <div className="container">
        <h1>Step 2</h1>

        <div className="row">
          <input
            type="text"
            placeholder="Enter your Username"
            className="form-control m-3 col-lg"
          />

          <input
            type="text"
            placeholder="Enter your Email"
            className="form-control m-3 col-lg"
          />
        </div>

        <div className="">
          <button
            className="btn btn-secondary m-2"
            onClick={() => {
              history.push("/");
            }}
          >
            Previous
          </button>
          <button
            className="btn btn-success m-2"
            onClick={() => {
              history.push("/third");
            }}
          >
            Next
          </button>
        </div>
      </div>
    </>
  );
};

export default Step2;
