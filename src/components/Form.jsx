import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { onSubmitHandler } from "../helpers/bmiHelper";
import { CHANGE_CALCULATION } from "../state/actions/actionTypes";
import { FormField, TextInput, Button, Select, Form } from "grommet";

const InputForm = () => {
  const dispatch = useDispatch();
  const calculationSystem = useSelector((state) => state.calculationSystem);

  const weightPlaceholder =
    calculationSystem == "Metric" ? "Weight in kgs" : "Weight in pounds";
  const heightPlaceholder =
    calculationSystem == "Metric" ? "Height in cm" : "Height in inches";

  return (
    <Form
      onSubmit={( event ) => {
        onSubmitHandler(event, calculationSystem, dispatch);
      }}
    >

      <Select
      id='selectmethod'
      margin='medium'
        options={["Metric", "Imperial"]}
        value={calculationSystem}
        onChange={({ option }) =>
          dispatch({
            type: CHANGE_CALCULATION,
            payload: { calculationSystem: option },
          })
        }
      />

      <FormField htmlFor="weight" id="weight-label" margin='small'>
        <TextInput
          required
          placeholder={weightPlaceholder}
          name="weight"
          id="weight"
        />
      </FormField>

      <FormField htmlFor="height" id="height-label" margin='small'>
        <TextInput
          type="number"
          required
          placeholder={heightPlaceholder}
          name="height"
          id="height"
        />
      </FormField>

      <Button type='submit' id="calculate" label='Calculate BMI' margin='small'/>
    </Form>
  );
};

export default InputForm;
