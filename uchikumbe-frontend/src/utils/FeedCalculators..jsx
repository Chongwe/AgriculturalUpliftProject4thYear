import React, { useState } from 'react';
import { calculateBroilerFeedFormulation, calculateLayersFeedFormulation } from './FeedFormulations';

export const ChickenFeedCalculator = () => {
    const [chickenType, setChickenType] = useState('broilers');
    const [numChickens, setNumChickens] = useState(0);
    const [feedAmounts, setFeedAmounts] = useState([]);
  
    const handleChickenTypeChange = (e) => {
      setChickenType(e.target.value);
    };
  
    const handleNumChickensChange = (e) => {
      setNumChickens(e.target.value);
    };
  
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
    const [chickenType, setChickenType] = useState('');
    const [age, setAge] = useState('');
    const [feedAmount, setFeedAmount] = useState('');
    const [result, setResult] = useState('');
  
    const handleChickenTypeChange = (event) => {
      setChickenType(event.target.value);
    };
  
    const handleAgeChange = (event) => {
      setAge(event.target.value);
    };
  
    const handleFeedAmountChange = (event) => {
      setFeedAmount(event.target.value);
    };
  
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
          <td className='text-goldenrod pl-4'>{key}</td>
          <td className='font-bold pl-4 text-green-700 '>{value.toFixed(2)} kg</td>
        </tr>
      ));
  
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
