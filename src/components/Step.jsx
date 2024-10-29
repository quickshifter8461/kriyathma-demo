import React from "react";
import SubStep from "./SubStep";
import data from "../assets/data";

const Step = ({
  expanded,
  handleExpand,
  subStep,
  handleSubStep,
  innerStep,
  handleInnerStep,
}) => (
  <div className="border rounded bg-white m-5 p-3">
    <div className="d-flex justify-content-between fw-semibold">
      {!expanded ? <div>STEP 1/3</div> : <div>Step 1</div>}

      {expanded ? (
        <button
          onClick={handleExpand}
          className="btn btn-light text-primary fw-semibold"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="bi bi-chevron-up"
            viewBox="0 0 16 16"
          >
            <path
              fillRule="evenodd"
              d="M7.646 4.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 5.707l-5.646 5.647a.5.5 0 0 1-.708-.708z"
            />
          </svg>
        </button>
      ) : (
        <div>4 Prompts | 5 mins</div>
      )}
    </div>
    <div className="d-flex justify-content-between">
      <div>
        {!expanded? (<div>
            <h1 className="fs-2 fw-bold">{data.title}</h1> <p>{data.description}</p>
        </div>):(<h1 className="fs-5 fw-bold">{data.title}</h1>)}
      </div>
      <div>
        {!expanded && (
          <button
            onClick={handleExpand}
            className="btn btn-light text-primary mt-2 p-4 fw-semibold rounded-4"
          >
            Get Started
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-chevron-right"
              viewBox="0 0 16 16"
            >
              <path
                fillRule="evenodd"
                d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708"
              />
            </svg>
          </button>
        )}
      </div>
    </div>
    {expanded && (
      <div>
        <p>{data.expandedDescription}</p>
        <hr />
        <SubStep
          subStep={subStep}
          handleSubStep={handleSubStep}
          innerStep={innerStep}
          handleInnerStep={handleInnerStep}
        />
      </div>
    )}
  </div>
);

export default Step;
