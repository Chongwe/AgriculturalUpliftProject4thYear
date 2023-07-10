import React, { useState } from 'react';
import { calculateBroilerFeedFormulation, calculateLayersFeedFormulation } from './FeedFormulations';

export const ChickenFeedCalculator = () => {
    /*  hooks from React to create state variables and their
    corresponding setter functions. */
    const [chickenType, setChickenType] = useState('broilers');
    const [numChickens, setNumChickens] = useState(0);
    const [feedAmounts, setFeedAmounts] = useState([]);
  
   /**
    * The function `handleChickenTypeChange` updates the value of `chickenType` based on the value of
    * the target element.
    */
    const handleChickenTypeChange = (e) => {
      setChickenType(e.target.value);
    };
  
   /**
    * The function `handleNumChickensChange` updates the state variable `numChickens` with the value
    * from an input field.
    */
    const handleNumChickensChange = (e) => {
      setNumChickens(e.target.value);
    };
  
    /**
     * The function calculates the total feed amounts needed for a certain number of chickens over a
     * specified number of weeks based on the type of chicken.
     */
    const calculateFeedAmounts = () => {
      const weeks = chickenType === 'broilers' ? 9 : 19;
      const feedQuantities = {
        broilers: [0.167, 0.375, 0.65, 0.945, 1.215, 1.434, 1.593, 1.691, 1.715],
        laying: [
          0.1, 0.18, 0.25, 0.32, 0.43, 0.47, 0.51, 0.55, 0.59, 0.62,
          0.65, 0.68, 0.71, 0.74, 0.77, 0.80, 0.85, 0.88, 0.95
        ],
      };
  
      const feedPerChickenPerWeeks = feedQuantities[chickenType];
      const totalFeedAmounts = feedPerChickenPerWeeks
        .slice(0, weeks)
        .map((feedPerWeek, index) => ({
          week: index + 1,
          amount: (feedPerWeek * numChickens).toFixed(2),
        }));
  
      setFeedAmounts(totalFeedAmounts);
    };
  
  /* The code block is defining a React functional component called `ChickenFeedCalculator`. This
  component renders a form for calculating the amount of feed needed for a certain number of
  chickens over a specified number of weeks. */
    return (
      <div className="container border border-goldenrod rounded-lg p-4 mx-auto mt-2">
        <h1 className="text-3xl  text-goldenrod font-bold mb-4">Chicken Feed Calculator</h1>
  
        <div className="mb-4">
          <label className="block mb-2 font-bold" htmlFor="chickenType">
            Chicken Type:
          </label>
          <select
            id="chickenType"
            className="px-4 py-2 border focus:outline-none w-56 border-green-300 rounded-md"
            value={chickenType}
            onChange={handleChickenTypeChange}
          >
            <option value="broilers">Broilers</option>
            <option value="laying">Laying Chickens</option>
          </select>
        </div>
  
        <div className="mb-4">
          <label className="block mb-2 font-bold" htmlFor="numChickens">
            Number of Chickens:
          </label>
          <input
            id="numChickens"
            type="number"
            className="px-4 py-2 transition-all duration-500 hover:scale-95 border focus:outline-none w-56 border-green-300 rounded-md"
            value={numChickens}
            onChange={handleNumChickensChange}
          />
        </div>
  
        <button
          className="bg-green-500 transition-all duration-500 hover:scale-95 hover:bg-goldenrod py-2 px-4  text-white  rounded-xl focus:outline-none"
          onClick={calculateFeedAmounts}
        >
          Calculate
        </button>
  
        {feedAmounts.length > 0 && (
          <div className="mt-4">
            <p className="font-bold text-green-900 ">Feed Amounts per Week:</p>
            <hr className="my-4 border-goldenrod" />
  
            <table className="w-full mt-2  shadow-xl rounded-xl border-collapse">
              <thead className='items-center'>
                <tr>
                  <th className="py-2 -ml-4 font-bold">Weeks</th>
                  <th className="py-2 -ml-4 font-bold">Amount (kg)</th>
                </tr>
                
  
              </thead>
              <tbody className='items-center'>
                {feedAmounts.map(({ week, amount }) => (
                  <tr key={week} className='' >
                    <td className=" px-16 py-2">{week}</td>
                    <td className="px-16 py-2">{amount}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    );
  };


export const FeedFormulationCalculator = () => {
 /* `useState` hook from React to create state variables and their
 corresponding setter functions. */
    const [chickenType, setChickenType] = useState('');
    const [age, setAge] = useState('');
    const [feedAmount, setFeedAmount] = useState('');
    const [result, setResult] = useState('');
  
   /**
    * The function `handleChickenTypeChange` updates the state variable `chickenType` with the value of
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
  
   /* The `formatFormulationResult` function takes in a `formulation` object as a parameter. It then
   maps over the entries of the `formulation` object and creates a table row for each entry. Each
   table row consists of two table cells: one for the ingredient name (`key`) and one for the amount
   (`value`). The ingredient name is displayed in goldenrod color and the amount is displayed in
   bold green color. The amount is also formatted to have two decimal places using the `toFixed`
   method. Finally, the function returns the table rows wrapped in a `<div>` element. */
    const formatFormulationResult = (formulation) => {
      const tableRows = Object.entries(formulation).map(([key, value]) => (
        <tr key={key}>
          <td className='text-goldenrod pl-4'>{key}</td>
          <td className='font-bold pl-4 text-green-700 '>{value.toFixed(2)} kg</td>
        </tr>
      ));
  
   /* The code block is defining a function called `formatFormulationResult` that takes in a
   `formulation` object as a parameter. */
      return (
        <div className=' shadow-lg m-2 rounded-lg p-2 items-center justify-center'>
            <table className="mt-4">
            <thead>
                <tr>
                <th className='text-goldenrod '>Ingredient</th>
                <th className='text-goldenrod '>Amount</th>
                </tr>
            </thead>
            <tbody>
                {tableRows}
            </tbody>
            </table>
        </div>
      );
    };
  
  /* component that renders a form for calculating chicken feed formulation.
  It includes input fields for selecting the chicken type, entering the age of the chicken in weeks,
  and entering the feed amount in kilograms. There is also a "Calculate" button that triggers the
  calculation of the feed formulation. The result of the calculation is displayed below the button
  if there is a result available. */
    return (
      <div className="container  border border-goldenrod rounded-lg p-4  mx-auto mt-8 ">
        <h1 className="text-3xl  text-goldenrod font-bold mb-4  ">Chicken Feed Formulation </h1>
        <div className="mb-4">
          <label className="block">
            Chicken Type:
          </label>
            <select
            className="px-4 py-2 border focus:outline-none w-56 border-green-300 rounded-md"
            value={chickenType}
              onChange={handleChickenTypeChange}
            >
              <option value="">Select</option>
              <option value="broilers">Broilers</option>
              <option value="layers">Layers</option>
            </select>
        </div>
        <div className="mb-4">
          <label className="block">
            Age (in weeks):
          </label>
            <input
              type="number"
              className="px-4 py-2 transition-all duration-500 hover:scale-95 border focus:outline-none w-56 border-green-300 rounded-md"
              value={age}
              onChange={handleAgeChange}
            />
         
        </div>
        <div className="mb-4">
          <label className="block">
            Feed Amount (in kilograms):
          </label>
            <input
              type="number"
              step="0.01"
              className="px-4 py-2 transition-all duration-500 hover:scale-95 border focus:outline-none w-56 border-green-300 rounded-md"
              value={feedAmount}
              onChange={handleFeedAmountChange}
            />
        
        </div>
        <button
          className="bg-green-500 transition-all duration-500 hover:scale-95 hover:bg-goldenrod py-2 px-4  text-white  rounded-xl focus:outline-none"
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



/**
 * The `FeedCalculator` component renders two child components, `ChickenFeedCalculator` and
 * `FeedFormulationCalculator`, within a flex container.
 * @returns The `FeedCalculator` component is returning a JSX element. It is a `div` element with the
 * class name "flex justify-center items-center". Inside the `div`, there is another `div` element with
 * the class name "w-full flex-col h-auto min-w-screen-sm flex gap-4". Inside this second `div`, there
 * are two components rendered: `ChickenFeedCalculator` and
 */
const FeedCalculator = () => {
  return (
    <div className="flex justify-center items-center ">
      <div className="w-full flex-col h-auto min-w-screen-sm flex gap-4">
        <ChickenFeedCalculator />
        <FeedFormulationCalculator />

      </div>
    </div>
  );
};

export default FeedCalculator;
