import React, { useState } from "react";
import "./stepper.css"; // Import the CSS file

const Stepper = () => {
  const [expanded, setExpanded] = useState(null);

  const handleToggle = (step) => {
    setExpanded(expanded === step ? null : step);
  };

  return (
    <div className="stepper-container">
      {/* Step 1 */}
      <div className={`step ${expanded === 1 ? "expanded" : ""}`}>
        <div className="step-header" onClick={() => handleToggle(1)}>
          <div className="step-left">
            <div className="step-number">Day 01</div>
          </div>
          <div className="step-right">
            <div className="step-title">
              Bandaranaike International Airport → Sigiriya
            </div>
          </div>
        </div>
        {expanded === 1 && (
          <div className="step-content">
            <p>This is expandable content for Day 1.</p>
          </div>
        )}
      </div>

      {/* Step 2 */}
      <div className={`step ${expanded === 2 ? "expanded" : ""}`}>
        <div className="step-header" onClick={() => handleToggle(2)}>
          <div className="step-left">
            <div className="step-number">Day 02</div>
          </div>
          <div className="step-right">
            <div className="step-title">Dambulla → Kandy</div>
          </div>
        </div>
        {expanded === 2 && (
          <div className="step-content">
            <p>This is expandable content for Day 2.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Stepper;
