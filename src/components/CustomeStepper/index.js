import React, { useEffect, useState } from "react";
import "./CustomStepper.css";
import MKButton from "components/MKButton";
import { useNavigate } from "react-router-dom";

const CustomStepper = ({ steps, initBtnHandle }) => {
  const [activeStep, setActiveStep] = useState(0);
  const navigation = useNavigate();
  const [initStep, setInitSpet] = useState(initBtnHandle);

  console.log("Stesp", activeStep === 0);

  const handleNext = () => {
    if (activeStep < steps.length - 1) {
      setActiveStep((prevStep) => prevStep + 1);
    }
    if (activeStep < steps.length) {
      navigation("/pages/tour-map");
      console.log("last");
    }
  };

  const handleBack = () => {
    if (activeStep > 0) {
      setActiveStep((prevStep) => prevStep - 1);
    }
  };

  useEffect(() => {
    console.log("asasasasasasas------", initBtnHandle);
    if (activeStep < steps.length - 1 && initBtnHandle && activeStep === 0) {
      setActiveStep((prevStep) => prevStep + 1);
    }
  }, [initBtnHandle]);

  return (
    <div>
      <div className="stepper-container">
        {steps.slice(0, -1).map((step, index) => (
          <div
            key={index}
            className={`step ${index <= activeStep - 1 ? "active" : ""}`}
          ></div>
        ))}
      </div>

      {/* Display content based on the active step */}
      <div className="content">{steps[activeStep].content}</div>

      {!(activeStep === 0) ? (
        <div className="stepper-buttons">
          <MKButton
            disabled={activeStep === 0}
            onClick={handleBack}
            circular
            variant="outlined"
            color="black"
          >
            Back
          </MKButton>
          <MKButton
            onClick={handleNext}
            circular
            variant="contained"
            color="black"
          >
            Continue
          </MKButton>
        </div>
      ) : null}
    </div>
  );
};

export default CustomStepper;
