import { SET_BMI } from "../state/actions/actionTypes";

const onSubmitHandler = (
  event,
  calculationSystem,
  dispatch
) => {
  event.preventDefault();
  const [bmiValue, bmiMessage] = calculateBmi(
    event.target.weight.value,
    event.target.height.value,
    calculationSystem
  );
  dispatch({
    type: SET_BMI,
    payload: { bmiValue: bmiValue, bmiMessage: bmiMessage },
  });
};

const calculateBmi = (weight, height, calculationSystem) => {
  const bmiValue =
    calculationSystem === "Metric"
      ? (weight / (((height / 100) * height) / 100)).toFixed(2)
      : (703 * (weight / (height * height))).toFixed(2);
  const bmiMessage = setBmiMessage(bmiValue);
  
  return [bmiValue, bmiMessage];
};

const setBmiMessage = (finalBMI) => {
  if (finalBMI < 18.5) {
    return "Underweight";
  }

  if (finalBMI > 18.5 && finalBMI < 25) {
    return "Normal";
  }

  if (finalBMI > 25 && finalBMI < 30) {
    return "Overweight";
  }

  if (finalBMI > 30) {
    return "Obese";
  }
};

export { calculateBmi, onSubmitHandler };
