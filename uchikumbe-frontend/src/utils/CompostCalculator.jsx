import React, { useState } from 'react';

const CompostCalculator = () => {
  const [acres, setAcres] = useState('');
  const [manureAmount, setManureAmount] = useState('');
  const [result, setResult] = useState('');

  const calculateManureNeeded = () => {
    const manurePerAcre = 4589; // amount of manure per acre in kgs 
    const manureNeeded = acres * manurePerAcre;
    const manureInTonnes = (manureNeeded / 907).toFixed(1); // 1 tonne = 907kgs
    setResult(`${manureNeeded} kgs (${manureInTonnes} tonnes) of compost manure needed for ${acres} acres.`);
  };

  const calculateLandNeeded = () => {
    const animalManurePercentage = 0.3;
    const plantResiduePercentage = 0.4;
    const virginSoilPercentage = 0.3;

    const animalManureAmount = manureAmount * animalManurePercentage;
    const plantResidueAmount = manureAmount * plantResiduePercentage;
    const virginSoilAmount = manureAmount * virginSoilPercentage;
    const waterNeedded = manureAmount * 0.35; // asumming 1kg = 1lt

    setResult(
      `Animal Manure: ${animalManureAmount} kgs, Plant Residue: ${plantResidueAmount} kgs, Virgin Soil: ${virginSoilAmount} kgs for ${manureAmount} kgs of compost manure and ${waterNeedded} litres of water (Asuming 1kg = 1 lt)`
    );
  };

  const handleAcresChange = (e) => {
    const value = e.target.value;
    if (value >= 0) {
      setAcres(value);
    }
  };

  const handleManureAmountChange = (e) => {
    const value = e.target.value;
    if (value >= 0) {
      setManureAmount(value);
    }
  };

  return (
    <div className="container mx-auto mt-8">
      <h1 className="text-3xl font-bold mb-4">Compost Manure Calculator</h1>

      <div className="flex flex-col space-y-4">
        <div className="flex flex-col space-y-2">
          <label htmlFor="acres" className="font-semibold">Number of Acres:</label>
          <input
            id="acres"
            type="number"
            className="px-4 py-2 border w-56 border-green-300 rounded-md"
            value={acres}
            onChange={handleAcresChange}
          />
        </div>

        <div className="flex flex-col space-y-2">
          <label htmlFor="manureAmount" className="font-semibold">Manure Amount (in kgs):</label>
          <input
            id="manureAmount"
            type="number"
            className="px-4 py-2 border active:border-none w-56 border-green-300 rounded-md"
            value={manureAmount}
            onChange={handleManureAmountChange}
          />
        </div>

        <div className="flex space-x-4">
          <button
            className="px-4 py-2 bg-blue-500 text-white rounded-md"
            onClick={calculateManureNeeded}
            disabled={!acres}
          >
            Calculate Manure Needed
          </button>

          <button
            className="px-4 py-2 bg-blue-500 text-white rounded-md"
            onClick={calculateLandNeeded}
            disabled={!manureAmount}
          >
            Calculate Material Composition 
          </button>
        </div>

        {result && <p className="font-semibold">{result}</p>}
      </div>
    </div>
  );
};

export default CompostCalculator;
