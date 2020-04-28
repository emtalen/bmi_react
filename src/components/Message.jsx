import React from "react";
import { useSelector } from "react-redux";
import { Heading } from "grommet";

const Message = () => {
  const bmiMessage = useSelector((state) => state.bmiMessage);
  const bmiValue = useSelector((state) => state.bmiValue);
  return (
    <Heading id="bmi-message" level='4'>
      You are {bmiMessage} with a BMI of {bmiValue}
    </Heading>
  );
};

export default Message;
