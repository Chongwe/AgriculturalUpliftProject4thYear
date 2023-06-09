import React, { useState } from 'react';

const ChickenFeedCalculator = () => {
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
    <div className="container border border-goldenrod rounded-lg p-2 mx-auto mt-2">
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

          <table className="w-full mt-2 border border-collapse">
            <thead className='items-center'>
              <tr>
                <th className="py-2 -px-4 font-bold">Weeks</th>
                <th className="py-2 -px-4 font-bold">Amount (kg)</th>
              </tr>
              

            </thead>
            <tbody className='items-center'>
              {feedAmounts.map(({ week, amount }) => (
                <tr key={week} >
                  <td className=" px-12 py-2">{week}</td>
                  <td className="px-12 py-2">{amount}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default ChickenFeedCalculator;
