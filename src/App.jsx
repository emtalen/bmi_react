import React from "react";
import InputForm from "./components/Form";
import Message from "./components/Message";
import { useSelector } from "react-redux";
import HeaderComponent from "./components/HeaderComponent";

const App = () => {
  const bmiValue = useSelector((state) => state.bmiValue);
  const calculationSystem = useSelector(state => state.calculationSystem)

  return (
    <>
      <HeaderComponent/>
      <InputForm />
      {bmiValue && <Message />}
    </>
  );
};

export default App;
