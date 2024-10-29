import React from "react";

import data from "../assets/data";
import InnerStep from "./InnerStep";

const SubStep = ({ subStep, handleSubStep, innerStep, handleInnerStep }) => (
  <div>
    <div className="d-flex justify-content-between">
      <div>
        <p>Question 1 of 3</p>
      </div>
      <button onClick={handleSubStep} className="btn">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="26"
          height="26"
          fill="currentColor"
          className="bi bi-plus"
          viewBox="0 0 16 16"
        >
          <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4" />
        </svg>
      </button>
    </div>
    <h5>{data.subSteps.description}</h5>
    {subStep && (
      <InnerStep innerStep={innerStep} handleInnerStep={handleInnerStep} />
    )}
  </div>
);

export default SubStep;
