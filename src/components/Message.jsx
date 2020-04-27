import React from "react";
import { useSelector } from "react-redux";

const Message = () => {
  const bmiMessage = useSelector((state) => state.bmiMessage);
  const bmiValue = useSelector((state) => state.bmiValue);
  return (
    <p id="bmi-message">
      You are {bmiMessage} with a BMI of {bmiValue}
    </p>
  );
};

export default Message;
