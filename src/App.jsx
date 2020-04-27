import React from "react";
import Form from "./components/Form";
import Message from "./components/Message";
import { useSelector } from "react-redux";

const App = () => {
  const bmiValue = useSelector((state) => state.bmiValue);
  const calculationSystem = useSelector(state => state.calculationSystem)

  return (
    <div>
      <h1 id="title">The BMI Calculator</h1>
      <h2 id="subtitle">In Metric and Imperial system</h2>
      <Form />
      {bmiValue && <Message />}
    </div>
  );
};

export default App;
