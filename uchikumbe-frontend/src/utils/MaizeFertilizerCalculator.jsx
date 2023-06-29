import React, { useState } from 'react';

const FertilizerCalculator = () => {
  const [acres, setAcres] = useState('');
  const [fertilizerType, setFertilizerType] = useState('');
  const [fertilizerResult, setFertilizerResult] = useState(null);

  const handleAcresChange = (e) => {
    const value = e.target.value;
    if (value >= 0) {
      setAcres(value);
    }
  };

  const handleFertilizerTypeChange = (e) => {
    setFertilizerType(e.target.value);
  };

  const calculateFertilizer = () => {
    const npk = 40 * acres;
    const urea = fertilizerType === 'npk-urea' ? 40 * acres : 0;
    const can = fertilizerType === 'npk-can' ? 80 * acres : 0;

    return { npk, urea, can };
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const fertilizer = calculateFertilizer();
    setFertilizerResult(fertilizer);
  };

  return (
    <div className="container border border-goldenrod rounded-lg p-2 mx-auto mt-8">
      <h1 className="text-3xl  text-goldenrod font-bold mb-4"> Maize Fertilizer Calculator</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block mb-2">Number of Acres:</label>
          <input
            type="number"
            value={acres}
            onChange={handleAcresChange}
            className="px-4 py-2 transition-all duration-500 hover:scale-95 border focus:outline-none w-56 border-green-300 rounded-md"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block mb-2">Fertilizer Type:</label>
          <select
            value={fertilizerType}
            onChange={handleFertilizerTypeChange}
            className="px-4 py-2 border focus:outline-none w-56 border-green-300 rounded-md"
            required
          >
            <option value="">Select</option>
            <option value="npk-urea">NPK & Urea</option>
            <option value="npk-can">NPK & CAN</option>
          </select>
        </div>
        <button
          type="submit"
          className="bg-green-500 transition-all duration-500 hover:scale-95 hover:bg-goldenrod py-2 px-4  text-white  rounded-xl focus:outline-none"
        >
          Calculate
        </button>
      </form>
      {fertilizerResult && (
        <div className="mt-4">
          <h2 className="text-lg font-semibold mb-2">Fertilizer Amounts:</h2>
          <p>NPK  {fertilizerResult.npk} kg</p>
          <p>Urea  {fertilizerResult.urea} kg</p>
          <p>CAN  {fertilizerResult.can} kg</p>
        </div>
      )}
    </div>
  );
};

export default FertilizerCalculator;
