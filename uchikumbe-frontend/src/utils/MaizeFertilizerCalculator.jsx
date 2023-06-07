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
    <div className="container border rounded-md min-w-[300px] border-green-400 mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4"> Maize Fertilizer Calculator</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block mb-2">Number of Acres:</label>
          <input
            type="number"
            value={acres}
            onChange={handleAcresChange}
            className="border border-gray-300 rounded px-2 py-1"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block mb-2">Fertilizer Type:</label>
          <select
            value={fertilizerType}
            onChange={handleFertilizerTypeChange}
            className="border border-gray-300 rounded px-2 py-1"
            required
          >
            <option value="">Select</option>
            <option value="npk-urea">NPK & Urea</option>
            <option value="npk-can">NPK & CAN</option>
          </select>
        </div>
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-600 text-white rounded px-4 py-2"
        >
          Calculate
        </button>
      </form>
      {fertilizerResult && (
        <div className="mt-4">
          <h2 className="text-lg font-semibold mb-2">Fertilizer Amounts:</h2>
          <p>NPK - Wokulutsa: {fertilizerResult.npk} kg</p>
          <p>Urea - Wobeleketsa: {fertilizerResult.urea} kg</p>
          <p>CAN - Wobeleketsa: {fertilizerResult.can} kg</p>
        </div>
      )}
    </div>
  );
};

export default FertilizerCalculator;
