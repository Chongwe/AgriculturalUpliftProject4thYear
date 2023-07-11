import React, { useState } from 'react';
import { calculateBroilerFeedFormulation, calculateLayersFeedFormulation } from './FeedFormulations';


/* The `FeedFormulationCalculator` component is a React functional component that represents a form for
calculating chicken feed formulation. */
const FeedFormulationCalculator = () => {
  const [chickenType, setChickenType] = useState('');
  const [age, setAge] = useState('');
  const [feedAmount, setFeedAmount] = useState('');
  const [result, setResult] = useState('');

  /**
   * The function `handleChickenTypeChange` updates the value of `chickenType` based on the value of
   * the event target.
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
   * @returns The function `calculateFeedFormulation` returns nothing.
   */
  const calculateFeedFormulation = () => {
    if (!chickenType || !age || !feedAmount) {
      setResult('Please fill in all fields.');
      return;
    }

    const parsedAge = parseInt(age, 10);
    const parsedFeedAmount = parseFloat(feedAmount);

    if (isNaN(parsedAge) || isNaN(parsedFeedAmount)) {
      setResult('Please enter valid numeric values.');
      return;
    }

    let formulation;

    if (chickenType === 'broilers') {
      formulation = calculateBroilerFeedFormulation(parsedAge, parsedFeedAmount);
    } else if (chickenType === 'layers') {
      formulation = calculateLayersFeedFormulation(parsedAge, parsedFeedAmount);
    } else {
      setResult('Invalid chicken type selected.');
      return;
    }

    setResult(formatFormulationResult(formulation));
  };

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
        <tbody>
          {tableRows}
        </tbody>
      </table>
    );
  };

  return (
    <div className="container mx-auto mt-8 px-4">
      <h1 className="text-3xl font-semibold mb-4">Chicken Feed Formulation Calculator</h1>
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