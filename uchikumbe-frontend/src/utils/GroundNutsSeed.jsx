import React, { useState } from 'react';

/* The `VARIETIES` constant is an object that stores information about different groundnut varieties.
Each variety is represented as a key-value pair, where the key is the variety name and the value is
an object containing the seed rate and spacing information for that variety. The seed rate is the
amount of seed required per acre, and the spacing is the recommended distance between plants in the
field. */
const VARIETIES = {
  Chalimbana: { seedRate: 44.5, spacing: '75cm  by  15cm ' },
  Chitembana: { seedRate: 28.9, spacing: '75cm  by  15cm ' },
  GG7: { seedRate: 44.5, spacing: '75cm  by  15cm ' },
  Nsinjiro: { seedRate: 40.5, spacing: '75cm  by  15cm ' },
  Manipintar: { seedRate: 32.4, spacing: '75cm  by  15cm ' },
  Mawanga: { seedRate: 32.4, spacing: '75cm  by 15cm ' },
  RG1: { seedRate: 32.4, spacing: '75cm  byc  15cm ' },
  'Chalimbana 2005': { seedRate: 44.5, spacing: '75cm  by  15cm ' },
  Malimba: { seedRate: 18.2, spacing: '75cm  by  10cm ' },
  Kakoma: { seedRate: 24.3, spacing: '75cm  by  10cm ' },
  Baka: { seedRate: 24.3, spacing: '75cm  by  10cm ' },
  Chitala: { seedRate: 44.5, spacing: '75cm  by  10cm ' },
};

/* The `App` function is a React component that represents the main application. It uses the `useState`
hook to define and manage the state of the application. */
function App() {
  const [fieldSize, setFieldSize] = useState('');
  const [variety, setVariety] = useState('');
  const [seedRequirement, setSeedRequirement] = useState('');
  const [recommendedSpacing, setRecommendedSpacing] = useState('');

  /**
   * The function calculates the seed requirement and recommended spacing based on the field size and
   * selected variety.
   */
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
    <div className="container border border-goldenrod rounded-lg p-4 mx-auto mt-2">
    <h1 className="text-3xl  text-goldenrod font-bold mb-4">Groundnut Planting Calculator</h1>

      <div className="mb-4">
        <label htmlFor="fieldSize" className="font-bold">
          Field Size (in acres):
        </label>
        <input
          type="number"
          id="fieldSize"
          className="px-4 py-2 border focus:outline-none w-56 border-green-300 rounded-md"
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
          className="px-4 py-2 border focus:outline-none w-56 border-green-300 rounded-md"
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
          className="bg-green-500 transition-all duration-500 hover:scale-95 hover:bg-goldenrod py-2 px-4  text-white  rounded-xl focus:outline-none"
          onClick={calculateSeedRequirement}
      >
        Calculate
      </button>

      {seedRequirement && (
        <div className="mt-4">
          <label className="font-bold">Seed Requirement:</label>
          <div className=" rounded-md font-bold  text-green-900 p-2">{seedRequirement} kg</div>
        </div>
      )}

      {recommendedSpacing && (
        <div className="mt-4">
          <label className="">Recommended Spacing (1 Seed/station) :</label>
          <div className=" rounded-md font-bold  text-green-900 p-2">{recommendedSpacing}</div>
        </div>
      )}
    </div>
  );
}

export default App;




