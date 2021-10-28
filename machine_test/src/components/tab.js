import React from "react";
import { useHistory } from "react-router-dom";
import "./tab.css";

const Tab = () => {
  let history = useHistory();
  return (
    <>
      {/* <nav class="navbar navbar-inverse">
        <div class="container-fluid">
          <ul class="nav navbar-nav">
            <li
              class=""
              onClick={() => {
                history.push("/");
              }}
            >
              <a href="#">Step 1</a>
            </li>
            <li
              onClick={() => {
                history.push("/second");
              }}
            >
              <a href="#">Step 2</a>
            </li>
            <li
              onClick={() => {
                history.push("/third");
              }}
            >
              <a href="#">Step 3</a>
            </li>
          </ul>
        </div>
      </nav> */}

      {/* <div className="container border"> */}
        {/* <nav class="navbar navbar-light light-blue lighten-4">
          <a class="navbar-brand" href="#">
            Navbar
          </a>

          <button
            class="navbar-toggler toggler-example"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent1"
            aria-controls="navbarSupportedContent1"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="dark-blue-text">
              <i class="fas fa-bars fa-1x"></i>
            </span>
          </button>

          <div class="collapse navbar-collapse" id="navbarSupportedContent1">
            <ul class="navbar-nav mr-auto">
              <li class="nav-item active">
                <a class="nav-link" href="#">
                  Step 1
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  Step 2
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  Step 3
                </a>
              </li>
            </ul>
          </div>
        </nav> */}
      {/* </div> */}

      <div className="container-fluid bg-dark text-white">
        <ul class="nav justify-content-center">
          <li
            class="nav-item mx-5 my-4"
            onClick={() => {
              history.push("/");
            }}
          >
            <h3>Step1</h3>
          </li>
          <li
            class="nav-item mx-5 my-4"
            onClick={() => {
              history.push("/second");
            }}
          >
            <h3>Step2</h3>
          </li>
          <li
            class="nav-item mx-5 my-4"
            onClick={() => {
              history.push("/third");
            }}
          >
            <h3>Step3</h3>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Tab;
