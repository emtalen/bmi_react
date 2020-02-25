import React from "react";

const Form = props => {

  const weightPlaceholder = props.calculationSystem == 'metric' ? 'Weight in kgs' : 'Weight in pounds'
  const heightPlaceholder = props.calculationSystem == 'metric' ? 'Height in cm' : 'Height in inches'

  return (
    <form onSubmit={props.onSubmitHandler}>

      <select name= 'calculationSystem' id='selectmethod' 
        onChange={props.onChangeHandler}>
        <option name='metric' value='metric'>Metric</option>
        <option name='imperial' value='imperial'>Imperial</option>
      </select>

      <label htmlFor="weight">Weight</label>
      <input
        type="number"
        required
        placeholder={weightPlaceholder}
        value={props.weight}
        name="weight"
        id="weight"
        onChange={props.onChangeHandler}
      />
      <label htmlFor="height">Height</label>
      <input
        type="number"
        required
        placeholder={heightPlaceholder}
        value={props.height}
        name="height"
        id="height"
        onChange={props.onChangeHandler}
      />
      <button id='calculate'>Calculate BMI</button>
    </form>
  );
};

export default Form;