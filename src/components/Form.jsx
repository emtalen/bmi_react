import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { onSubmitHandler } from "../helpers/bmiHelper";
import { CHANGE_CALCULATION } from "../state/actions/actionTypes";
import { FormField, TextInput, Button, Select, Form } from "grommet";

const InputForm = () => {
  const dispatch = useDispatch();
  const calculationSystem = useSelector((state) => state.calculationSystem);

  const weightPlaceholder =
    calculationSystem == "metric" ? "Weight in kgs" : "Weight in pounds";
  const heightPlaceholder =
    calculationSystem == "metric" ? "Height in cm" : "Height in inches";

  return (
    <Form
      onSubmit={({ event }) => {
        onSubmitHandler(
          event,
          calculationSystem,
          dispatch
        );
      }}
    >
      {/* <select
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
      </select> */}

      <Select
        options={["Metric", "Imperial"]}
        value={calculationSystem}
        onChange={({ option }) =>
          dispatch({
            type: CHANGE_CALCULATION,
            payload: { calculationSystem: (option) },
          })
        }
      />

      <FormField htmlFor="weight" id="weight-label">
        Weight
      </FormField>
      <TextInput
        required
        placeholder={weightPlaceholder}
        name="weight"
        id="weight"
      />

      <FormField htmlFor="height" id="height-label">
        Height
      </FormField>
      <TextInput
        type="number"
        required
        placeholder={heightPlaceholder}
        name="height"
        id="height"
      />

      <Button id="calculate">Calculate BMI</Button>
    </Form>
  );
};

export default InputForm;
