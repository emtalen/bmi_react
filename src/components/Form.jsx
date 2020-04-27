import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { onSubmitHandler } from "../helpers/bmiHelper";
import { CHANGE_CALCULATION } from "../state/actions/actionTypes";

const Form = () => {
  const dispatch = useDispatch();
  const calculationSystem = useSelector((state) => state.calculationSystem);

  const weightPlaceholder =
    calculationSystem == "metric" ? "Weight in kgs" : "Weight in pounds";
  const heightPlaceholder =
    calculationSystem == "metric" ? "Height in cm" : "Height in inches";

  return (
    <form
      onSubmit={(event) =>
        onSubmitHandler(
          event,
          event.target.elements.weight.value,
          event.target.elements.height.value,
          calculationSystem,
          dispatch
        )
      }
    >
      <select
        name="calculationSystem"
        id="selectmethod"
        onChange={(event) =>
          dispatch({
            type: CHANGE_CALCULATION,
            payload: { calculationSystem: event.target.value },
          })
        }
      >
        <option name="metric" value="metric">
          Metric
        </option>
        <option name="imperial" value="imperial">
          Imperial
        </option>
      </select>
      <br />

      <label htmlFor="weight" id="weight-label">
        Weight
      </label>
      <input
        type="number"
        required
        placeholder={weightPlaceholder}
        name="weight"
        id="weight"
      />
      <br />
      <label htmlFor="height" id="height-label">
        Height
      </label>
      <input
        type="number"
        required
        placeholder={heightPlaceholder}
        name="height"
        id="height"
      />
      <br />
      <button id="calculate">Calculate BMI</button>
    </form>
  );
};

export default Form;
