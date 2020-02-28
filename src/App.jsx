import React, { Component } from "react";
import Form from "./components/Form";
import Message from './components/Message';
import { calculateBmi } from "./helpers/bmiHelper";

class App extends Component {
  state = {
    weight: "",
    height: "",
    bmiValue: "",
    bmiMessage: "",
    calculationSystem: "metric"
  };

  onChangeHandler = e => this.setState({ [e.target.name]: e.target.value });

  onSubmitHandler = e => {
    e.preventDefault();
    const [ bmiValue, bmiMessage] = calculateBmi(
      this.state.weight,
      this.state.height,
      this.state.calculationSystem
    );
    this.setState({ bmiValue: bmiValue, bmiMessage: bmiMessage });
  };

  render() {
    return (
      <div>
        <h1 id='title'>The BMI Calculator</h1>
        <h2 id='subtitle'>In Metric and Imperial system</h2>
        <Form
          weight={this.state.weight}
          height={this.state.height}
          onChangeHandler={this.onChangeHandler}
          onSubmitHandler={this.onSubmitHandler}
          calculationSystem={this.state.calculationSystem}
        />
        {this.state.bmiValue && (
          <Message
            bmiValue={this.state.bmiValue}
            bmiMessage={this.state.bmiMessage}
            />
        )}
      </div>
    );
  }
}

export default App;
