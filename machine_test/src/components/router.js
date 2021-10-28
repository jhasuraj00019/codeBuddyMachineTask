import React, { useState } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Step1 from "./step1";
import Step2 from "./step2";
import Step3 from "./step3";
import Tab from "./tab";
import Accordion from "./accordion";

const Router = () => {
  const [size, setSize] = useState(window.innerWidth);
  console.log("size", size);
  console.log("window", window.innerWidth);

  const handleResize = () => {
    setSize(window.innerWidth);
    return size;
  };

  window.addEventListener("resize", handleResize);

  return (
    <BrowserRouter>
      {/* <Header/> */}

      {size >= 768 ? <Tab /> : <Accordion />}

      <Route exact path="/" component={Step1} />
      <Route path="/second" component={Step2} />
      <Route path="/third" component={Step3} />
    </BrowserRouter>
  );
};
export default Router;
