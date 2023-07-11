import React, { useState } from "react";
import {
  calculateBroilerFeedFormulation,
  calculateLayersFeedFormulation,
} from "./FeedFormulations";


/* The `FeedFormulationCalculator` component is a React functional component that represents a form for
calculating chicken feed formulation. */
const FeedFormulationCalculator = () => {
  /* The line `const [chickenType, setChickenType] = useState('');` is using the `useState` hook from
React to declare a state variable called `chickenType` and a corresponding setter function called
`setChickenType`. */
  const [chickenType, setChickenType] = useState("");
  /* The line `const [age, setAge] = useState('');` is using the `useState` hook from React to declare a
state variable called `age` and a corresponding setter function called `setAge`. The initial value
of the `age` state variable is set to an empty string (''). This allows us to keep track of the
value of the age input field in the form and update it when the user enters a new value. The
`setAge` function can be used to update the value of the `age` state variable. */
  const [age, setAge] = useState("");
  /* The line `const [feedAmount, setFeedAmount] = useState('');` is using the `useState` hook from React
to declare a state variable called `feedAmount` and a corresponding setter function called
`setFeedAmount`. The initial value of the `feedAmount` state variable is set to an empty string
(''). This allows us to keep track of the value of the feed amount input field in the form and
update it when the user enters a new value. The `setFeedAmount` function can be used to update the
value of the `feedAmount` state variable. */
  const [feedAmount, setFeedAmount] = useState("");
  const [result, setResult] = useState("");

  /**
   *  event handler functions for handling changes in chicken type, age,
   * and feed amount.
   */
  const handleChickenTypeChange = (event) => {
    setChickenType(event.target.value);
  };

  /**
   * The handleAgeChange function updates the age state based on the value of the event target.
   */
  const handleAgeChange = (event) => {
    setAge(event.target.value);
  };

  /**
   * The function `handleFeedAmountChange` updates the state variable `feedAmount` with the value from
   * the event target.
   */
  const handleFeedAmountChange = (event) => {
    setFeedAmount(event.target.value);
  };

  /**
   * The function calculates the feed formulation based on the chicken type, age, and feed amount
   * provided.
   * @returns the result of the feed formulation calculation.
   */
  const calculateFeedFormulation = () => {
    if (!chickenType || !age || !feedAmount) {
      setResult("Please fill in all fields.");
      return;
    }

    const parsedAge = parseInt(age, 10);
    const parsedFeedAmount = parseFloat(feedAmount);

    if (isNaN(parsedAge) || isNaN(parsedFeedAmount)) {
      setResult("Please enter valid numeric values.");
      return;
    }

    let formulation;

    if (chickenType === "broilers") {
      formulation = calculateBroilerFeedFormulation(
        parsedAge,
        parsedFeedAmount
      );
    } else if (chickenType === "layers") {
      formulation = calculateLayersFeedFormulation(parsedAge, parsedFeedAmount);
    } else {
      setResult("Invalid chicken type selected.");
      return;
    }

    setResult(formatFormulationResult(formulation));
  };

  /**
   * The function `formatFormulationResult` takes a formulation object and returns a formatted table
   * displaying the ingredients and their corresponding amounts.
   * @returns The function `formatFormulationResult` is returning a JSX element, specifically a table
   * with two columns: "Ingredient" and "Amount". The table rows are dynamically generated based on the
   * `formulation` object passed as an argument to the function. Each row represents an entry in the
   * `formulation` object, with the key displayed in the first column and the corresponding value
   * displayed in the second column
   */
  const formatFormulationResult = (formulation) => {
    const tableRows = Object.entries(formulation).map(([key, value]) => (
      <tr key={key}>
        <td>{key}</td>
        <td>{value.toFixed(2)} kg</td>
      </tr>
    ));

    return (
      <table className="mt-4">
        <thead>
          <tr>
            <th>Ingredient</th>
            <th>Amount</th>
          </tr>
        </thead>
        <tbody>{tableRows}</tbody>
      </table>
    );
  };

  /* The `return` statement in the code is returning a JSX element, which represents the structure and
 content of the user interface for the FeedFormulationCalculator component. */
  return (
    <div className="container mx-auto mt-8 px-4">
      <h1 className="text-3xl font-semibold mb-4">
        Chicken Feed Formulation Calculator
      </h1>
      <div className="mb-4">
        <label className="block">
          Chicken Type:
          <select
            className="form-select mt-1"
            value={chickenType}
            onChange={handleChickenTypeChange}
          >
            <option value="">Select</option>
            <option value="broilers">Broilers</option>
            <option value="layers">Layers</option>
          </select>
        </label>
      </div>
      <div className="mb-4">
        <label className="block">
          Age (in weeks):
          <input
            type="number"
            className="form-input mt-1"
            value={age}
            onChange={handleAgeChange}
          />
        </label>
      </div>
      <div className="mb-4">
        <label className="block">
          Feed Amount (in kilograms):
          <input
            type="number"
            step="0.01"
            className="form-input mt-1"
            value={feedAmount}
            onChange={handleFeedAmountChange}
          />
        </label>
      </div>
      <button
        className="bg-blue-500 hover:bg-blue-600 text-white font-semibold px-4 py-2 rounded"
        onClick={calculateFeedFormulation}
      >
        Calculate
      </button>
      {result && (
        <div className="mt-4">
          <h2 className="text-lg font-semibold mb-2">Feed Formulation:</h2>
          {result}
        </div>
      )}
    </div>
  );
};

export default FeedFormulationCalculator;
