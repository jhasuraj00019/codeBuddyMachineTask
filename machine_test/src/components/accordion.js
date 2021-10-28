import React, { useState } from "react";
import { useHistory } from "react-router-dom";

const Accordion = () => {
  let history = useHistory();
  return (
    <>
      {/* <nav class="navbar navbar-inverse"> */}
      <div class="container-fluid">
        <div class="accordion" id="accordionExample">
          <div class="accordion-item">
            <h2 class="accordion-header" id="headingOne">
              <button
                class="accordion-button"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseOne"
                aria-expanded="true"
                aria-controls="collapseOne"
              >
                <b>Menu</b>
              </button>
            </h2>
            <div
              id="collapseOne"
              class="accordion-collapse collapse show"
              aria-labelledby="headingOne"
              data-bs-parent="#accordionExample"
            >
              <div class="accordion-body">
                <ul class="nav navbar-nav">
                  <li
                    class=""
                    onClick={() => {
                      history.push("/");
                    }}
                  >
                    <a>Step 1</a>
                  </li>
                  <li
                    onClick={() => {
                      history.push("/second");
                    }}
                  >
                    <a>Step 2</a>
                  </li>
                  <li
                    onClick={() => {
                      history.push("/third");
                    }}
                  >
                    <a>Step 3</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Accordion;
