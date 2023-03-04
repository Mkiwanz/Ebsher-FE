import React from "react";
import "./StepCompletionLine.css"; // import your CSS file

function StepCompletionLine({ currentStep }) {
  const totalSteps = 2;

  return (
    <div className="step-completion-line">
      {[...Array(totalSteps)].map((_, index) => (
        <div key={index} className={`step ${currentStep === index + 1 ? "active" : ""}`}>
          {index + 1}
        </div>
      ))}
    </div>
  );
}

export default StepCompletionLine;
