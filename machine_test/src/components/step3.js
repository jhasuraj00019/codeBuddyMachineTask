import React from "react";
import { useHistory } from "react-router-dom";

const Step3 = () => {
  let history = useHistory();
  return (
    <>
      <div className="container">
        <h1>Step 3</h1>

        <div className="row">
          <input
            type="text"
            placeholder="Enter Password"
            className="form-control m-3 col-lg"
          />

          <input
            type="text"
            placeholder="Confirm Passowrd"
            className="form-control m-3 col-lg"
          />
        </div>

        <div className="">
          <button
            className="btn btn-secondary m-2"
            onClick={() => {
              history.push("/second");
            }}
          >
            Previous
          </button>
          <button className="btn btn-success m-2" disabled>
            Next
          </button>
        </div>
      </div>
    </>
  );
};

export default Step3;
