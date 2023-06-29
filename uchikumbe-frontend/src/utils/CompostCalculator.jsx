import React, { useState } from 'react';

const VARIETIES = {
  Chalimbana: { seedRate: 44.5, spacing: '75 by 15 1 seed' },
  Chitembana: { seedRate: 28.9, spacing: '75 by 15 1 seed' },
  GG7: { seedRate: 44.5, spacing: '75 by 15 1 seed' },
  Nsinjiro: { seedRate: 40.5, spacing: '75 by 15 1 seed' },
  Manipintar: { seedRate: 32.4, spacing: '75 by 15 1 seed' },
  Mawanga: { seedRate: 32.4, spacing: '75 by 15 1 seed' },
  RG1: { seedRate: 32.4, spacing: '75 by 15 1 seed' },
  'Chalimbana 2005': { seedRate: 44.5, spacing: '75 by 15 1 seed' },
  Malimba: { seedRate: 18.2, spacing: '75 by 10 1 seed' },
  Kakoma: { seedRate: 24.3, spacing: '75 by 10 1 seed' },
  Baka: { seedRate: 24.3, spacing: '75 by 10 1 seed' },
  Chitala: { seedRate: 44.5, spacing: '75 by 10 1 seed' },
};

function App() {
  const [fieldSize, setFieldSize] = useState('');
  const [variety, setVariety] = useState('');
  const [seedRequirement, setSeedRequirement] = useState('');
  const [recommendedSpacing, setRecommendedSpacing] = useState('');

  const calculateSeedRequirement = () => {
    if (fieldSize && variety) {
      const selectedVariety = VARIETIES[variety];
      const seedRate = selectedVariety.seedRate;
      const spacing = selectedVariety.spacing;
      const calculatedSeedRequirement = (fieldSize * seedRate).toFixed(2);
      setSeedRequirement(calculatedSeedRequirement);
      setRecommendedSpacing(spacing);
    }
  };

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-2xl font-bold mb-4">Groundnut Planting Calculator</h1>

      <div className="mb-4">
        <label htmlFor="fieldSize" className="font-bold">
          Field Size (in acres):
        </label>
        <input
          type="number"
          id="fieldSize"
          className="border p-2"
          value={fieldSize}
          onChange={(e) => setFieldSize(parseFloat(e.target.value))}
        />
      </div>

      <div className="mb-4">
        <label htmlFor="variety" className="font-bold">
          Groundnut Variety:
        </label>
        <select
          id="variety"
          className="border p-2"
          value={variety}
          onChange={(e) => setVariety(e.target.value)}
        >
          <option value="">Select a variety</option>
          {Object.keys(VARIETIES).map((variety) => (
            <option key={variety} value={variety}>
              {variety}
            </option>
          ))}
        </select>
      </div>

      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={calculateSeedRequirement}
      >
        Calculate
      </button>

      {seedRequirement && (
        <div className="mt-4">
          <label className="font-bold">Seed Requirement:</label>
          <div className="border p-2">{seedRequirement} kg</div>
        </div>
      )}

      {recommendedSpacing && (
        <div className="mt-4">
          <label className="font-bold">Recommended Spacing:</label>
          <div className="border p-2">{recommendedSpacing}</div>
        </div>
      )}
    </div>
  );
}

export default App;




