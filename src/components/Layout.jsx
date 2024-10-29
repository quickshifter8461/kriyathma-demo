import React, { useState } from "react";
import Step from "./Step";

const Layout = () => {
  const [expanded, setExpanded] = useState(false);
  const [subStep, setSubStep] = useState(false);
  const [innerStep, setInnerStep] = useState(false);

  const handleExpand = () => setExpanded(!expanded);
  const handleSubStep = () => setSubStep(!subStep);
  const handleInnerStep = () => {
    setInnerStep(!innerStep);
    console.log(innerStep);
  };

  return (
    <div className="d-flex flex-col">
      <aside className="side-bar w-25"></aside>
      <div className="main bg-light bg-gradient">
        <Step
          expanded={expanded}
          handleExpand={handleExpand}
          subStep={subStep}
          handleSubStep={handleSubStep}
          innerStep={innerStep}
          handleInnerStep={handleInnerStep}
        />
      </div>
    </div>
  );
};

export default Layout;
