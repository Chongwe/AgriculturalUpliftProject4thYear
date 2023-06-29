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




// import React, { useState } from 'react';

// const VARIETIES = {
//   Chalimbana: 44.5,
//   Chitembana: 28.9,
//   GG7: 44.5,
//   Nsinjiro: 40.5,
//   Manipintar: 32.4,
//   Mawanga: 32.4,
//   RG1: 32.4,
//   'Chalimbana 2005': 44.5,
//   Malimba: 18.2,
//   Kakoma: 24.3,
//   Baka: 24.3,
//   Chitala: 44.5,
// };

// function App() {
//   const [fieldSize, setFieldSize] = useState('');
//   const [variety, setVariety] = useState('');

//   const calculateSeedRequirement = () => {
//     if (fieldSize && variety) {
//       const seedRate = VARIETIES[variety];
//       const seedRequirement = fieldSize * seedRate;
//       return `${seedRequirement.toFixed(2)} kg`;
//     }
//     return '';
//   };

//   return (
//     <div className="container mx-auto py-8">
//       <h1 className="text-2xl font-bold mb-4">Groundnut Planting Calculator</h1>

//       <div className="mb-4">
//         <label htmlFor="fieldSize" className="font-bold">
//           Field Size (in acres):
//         </label>
//         <input
//           type="number"
//           id="fieldSize"
//           className="border p-2"
//           value={fieldSize}
//           onChange={(e) => setFieldSize(parseFloat(e.target.value))}
//         />
//       </div>

//       <div className="mb-4">
//         <label htmlFor="variety" className="font-bold">
//           Groundnut Variety:
//         </label>
//         <select
//           id="variety"
//           className="border p-2"
//           value={variety}
//           onChange={(e) => setVariety(e.target.value)}
//         >
//           <option value="">Select a variety</option>
//           {Object.keys(VARIETIES).map((variety) => (
//             <option key={variety} value={variety}>
//               {variety}
//             </option>
//           ))}
//         </select>
//       </div>

//       <div>
//         <label className="font-bold">Seed Requirement:</label>
//         <div className="border p-2">{calculateSeedRequirement()}</div>
//       </div>
//     </div>
//   );
// }

// export default App;



// import React, { useState } from 'react';
// import { calculateBroilerFeedFormulation, calculateLayersFeedFormulation } from './FeedFormulations';

// const FeedFormulationCalculator = () => {
//   const [chickenType, setChickenType] = useState('');
//   const [age, setAge] = useState('');
//   const [feedAmount, setFeedAmount] = useState('');
//   const [result, setResult] = useState('');

//   const handleChickenTypeChange = (event) => {
//     setChickenType(event.target.value);
//   };

//   const handleAgeChange = (event) => {
//     setAge(event.target.value);
//   };

//   const handleFeedAmountChange = (event) => {
//     setFeedAmount(event.target.value);
//   };

//   const calculateFeedFormulation = () => {
//     if (!chickenType || !age || !feedAmount) {
//       setResult('Please fill in all fields.');
//       return;
//     }

//     const parsedAge = parseInt(age, 10);
//     const parsedFeedAmount = parseFloat(feedAmount);

//     if (isNaN(parsedAge) || isNaN(parsedFeedAmount)) {
//       setResult('Please enter valid numeric values.');
//       return;
//     }

//     let formulation;

//     if (chickenType === 'broilers') {
//       formulation = calculateBroilerFeedFormulation(parsedAge, parsedFeedAmount);
//     } else if (chickenType === 'layers') {
//       formulation = calculateLayersFeedFormulation(parsedAge, parsedFeedAmount);
//     } else {
//       setResult('Invalid chicken type selected.');
//       return;
//     }

//     setResult(formatFormulationResult(formulation));
//   };

//   const formatFormulationResult = (formulation) => {
//     const tableRows = Object.entries(formulation).map(([key, value]) => (
//       <tr key={key}>
//         <td>{key}</td>
//         <td>{value.toFixed(2)} kg</td>
//       </tr>
//     ));

//     return (
//       <table className="mt-4">
//         <thead>
//           <tr>
//             <th>Ingredient</th>
//             <th>Amount</th>
//           </tr>
//         </thead>
//         <tbody>
//           {tableRows}
//         </tbody>
//       </table>
//     );
//   };

//   return (
//     <div className="container mx-auto mt-8 px-4">
//       <h1 className="text-3xl font-semibold mb-4">Chicken Feed Formulation Calculator</h1>
//       <div className="mb-4">
//         <label className="block">
//           Chicken Type:
//           <select
//             className="form-select mt-1"
//             value={chickenType}
//             onChange={handleChickenTypeChange}
//           >
//             <option value="">Select</option>
//             <option value="broilers">Broilers</option>
//             <option value="layers">Layers</option>
//           </select>
//         </label>
//       </div>
//       <div className="mb-4">
//         <label className="block">
//           Age (in weeks):
//           <input
//             type="number"
//             className="form-input mt-1"
//             value={age}
//             onChange={handleAgeChange}
//           />
//         </label>
//       </div>
//       <div className="mb-4">
//         <label className="block">
//           Feed Amount (in kilograms):
//           <input
//             type="number"
//             step="0.01"
//             className="form-input mt-1"
//             value={feedAmount}
//             onChange={handleFeedAmountChange}
//           />
//         </label>
//       </div>
//       <button
//         className="bg-blue-500 hover:bg-blue-600 text-white font-semibold px-4 py-2 rounded"
//         onClick={calculateFeedFormulation}
//       >
//         Calculate
//       </button>
//       {result && (
//         <div className="mt-4">
//           <h2 className="text-lg font-semibold mb-2">Feed Formulation:</h2>
//           {result}
//         </div>
//       )}
//     </div>
//   );
// };

// export default FeedFormulationCalculator;








// import React, { useState } from 'react';

// const CassavaStemCalculator = () => {
//   const [fieldSize, setFieldSize] = useState('');
//   const [rowSpacing, setRowSpacing] = useState('');
//   const [stationSpacing, setStationSpacing] = useState('');
//   const [stemsPerStation, setStemsPerStation] = useState('');
//   const [stemSize, setStemSize] = useState('');
//   const [result, setResult] = useState('');

//   const calculateSeeds = () => {
//     const areaInSquareMeters = fieldSize * 4047;
//     const totalStations = (areaInSquareMeters / rowSpacing) * (1 / stationSpacing);
//     const totalStems = totalStations * stemsPerStation;
//     const totalStemSize = totalStems * stemSize;
//     const resultInKilograms = (totalStemSize / 100) / 50;
//     setResult(resultInKilograms.toFixed(2));
//   };

//   return (
//     <div className="max-w-md mx-auto mt-8 p-4 bg-white shadow-lg rounded-lg">
//       <h2 className="text-2xl font-bold mb-4">Cassava Stem Calculator</h2>
//       <div className="mb-4">
//         <label className="block font-medium">Field Size (in acres):</label>
//         <input
//           type="number"
//           className="w-full rounded-lg border border-gray-300 py-2 px-3"
//           value={fieldSize}
//           onChange={(e) => setFieldSize(e.target.value)}
//         />
//       </div>
//       <div className="mb-4">
//         <label className="block font-medium">Row Spacing (in meters):</label>
//         <input
//           type="number"
//           className="w-full rounded-lg border border-gray-300 py-2 px-3"
//           value={rowSpacing}
//           onChange={(e) => setRowSpacing(e.target.value)}
//         />
//       </div>
//       <div className="mb-4">
//         <label className="block font-medium">Station Spacing (in meters):</label>
//         <input
//           type="number"
//           className="w-full rounded-lg border border-gray-300 py-2 px-3"
//           value={stationSpacing}
//           onChange={(e) => setStationSpacing(e.target.value)}
//         />
//       </div>
//       <div className="mb-4">
//         <label className="block font-medium">Stems per Station:</label>
//         <input
//           type="number"
//           className="w-full rounded-lg border border-gray-300 py-2 px-3"
//           value={stemsPerStation}
//           onChange={(e) => setStemsPerStation(e.target.value)}
//         />
//       </div>
//       <div className="mb-4">
//         <label className="block font-medium">Stem Size:</label>
//         <input
//           type="number"
//           className="w-full rounded-lg border border-gray-300 py-2 px-3"
//           value={stemSize}
//           onChange={(e) => setStemSize(e.target.value)}
//         />
//       </div>
//       <button
//         className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600"
//         onClick={calculateSeeds}
//       >
//         Calculate
//       </button>
//       {result && (
//         <div className="mt-4">
//           <p>Number of bundles Required: {result} bundles of 50, 1 meter stems </p>
//         </div>
//       )}
//     </div>
//   );
// };

// export default CassavaStemCalculator;








// import React, { useState } from 'react';

// const MaizeSeedCalculator = () => {
//   const [fieldSize, setFieldSize] = useState('');
//   const [rowSpacing, setRowSpacing] = useState('');
//   const [stationSpacing, setStationSpacing] = useState('');
//   const [seedsPerStation, setSeedsPerStation] = useState('');
//   const [result, setResult] = useState('');

//   const calculateSeeds = () => {
//     const areaInSquareMeters = fieldSize * 4047;
//     const totalStations = (areaInSquareMeters / rowSpacing) * (1 / stationSpacing);
//     const totalSeeds = totalStations * seedsPerStation;
//     const weightInKilograms = totalSeeds / 1600;
//     setResult(weightInKilograms.toFixed(2));
//   };

//   return (
//     <div className="max-w-md mx-auto mt-8 p-4 bg-white shadow-lg rounded-lg">
//       <h2 className="text-2xl font-bold mb-4">Maize Seed Calculator</h2>
//       <div className="mb-4">
//         <label className="block font-medium">Field Size (in acres):</label>
//         <input
//           type="number"
//           className="w-full rounded-lg border border-gray-300 py-2 px-3"
//           value={fieldSize}
//           onChange={(e) => setFieldSize(e.target.value)}
//         />
//       </div>
//       <div className="mb-4">
//         <label className="block font-medium">Row Spacing (in meters):</label>
//         <input
//           type="number"
//           className="w-full rounded-lg border border-gray-300 py-2 px-3"
//           value={rowSpacing}
//           onChange={(e) => setRowSpacing(e.target.value)}
//         />
//       </div>
//       <div className="mb-4">
//         <label className="block font-medium">Station Spacing (in meters):</label>
//         <input
//           type="number"
//           className="w-full rounded-lg border border-gray-300 py-2 px-3"
//           value={stationSpacing}
//           onChange={(e) => setStationSpacing(e.target.value)}
//         />
//       </div>
//       <div className="mb-4">
//         <label className="block font-medium">Seeds per Station:</label>
//         <input
//           type="number"
//           className="w-full rounded-lg border border-gray-300 py-2 px-3"
//           value={seedsPerStation}
//           onChange={(e) => setSeedsPerStation(e.target.value)}
//         />
//       </div>
//       <button
//         className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600"
//         onClick={calculateSeeds}
//       >
//         Calculate
//       </button>
//       {result && (
//         <div className="mt-4">
//           <p>Number of Seeds Required: {result} kgs</p>
//         </div>
//       )}
//     </div>
//   );
// };

// export default MaizeSeedCalculator;











// import React, { useState } from "react";

// const CompostCalculator = () => {
//   const [acres, setAcres] = useState("");
//   const [manureAmount, setManureAmount] = useState("");
//   const [result, setResult] = useState("");

//   const calculateManureNeeded = () => {
//     const manurePerAcre = 4589; // amount of manure per acre in kgs
//     const manureNeeded = acres * manurePerAcre;
//     const manureInTonnes = (manureNeeded / 907).toFixed(1); // 1 tonne = 907kgs
//     setResult(
//       `${manureNeeded} kgs (${manureInTonnes} tonnes) of compost manure needed for ${acres} acres.`
//     );
//   };

//   const calculateLandNeeded = () => {
//     const animalManurePercentage = 0.3;
//     const plantResiduePercentage = 0.4;
//     const virginSoilPercentage = 0.3;

//     const animalManureAmount = (manureAmount * animalManurePercentage).toFixed(
//       1
//     );
//     const plantResidueAmount = manureAmount * plantResiduePercentage;
//     const virginSoilAmount = manureAmount * virginSoilPercentage;
//     const waterNeedded = manureAmount * 0.35; // asumming 1kg = 1lt

//     setResult(
//       `Animal Manure: ${animalManureAmount} kgs, Plant Residue: ${plantResidueAmount} kgs, Virgin Soil: ${virginSoilAmount} kgs for ${manureAmount} kgs of compost manure and ${waterNeedded} litres of water (Asuming 1kg = 1 lt)`
//     );
//   };

//   const handleAcresChange = (e) => {
//     const value = e.target.value;
//     if (value >= 0) {
//       setAcres(value);
//     }
//   };

//   const handleManureAmountChange = (e) => {
//     const value = e.target.value;
//     if (value >= 0) {
//       setManureAmount(value);
//     }
//   };

//   return (
//     <div className="container  border border-goldenrod rounded-lg p-4 mx-auto mt-8">
//       <h1 className="text-3xl  text-goldenrod font-bold mb-4">
//         Compost Manure Calculator
//       </h1>

//       <div className="flex flex-col space-y-4">
//         <div className="flex flex-col space-y-2">
//           <label htmlFor="acres" className="font-semibold">
//             Number of Acres:
//           </label>
//           <input
//             id="acres"
//             type="number"
//             className="px-4 py-2 transition-all duration-500 hover:scale-95 border focus:outline-none w-56 border-green-300 rounded-md"
//             value={acres}
//             onChange={handleAcresChange}
//           />
//         </div>

//         <div className="flex flex-col space-y-2">
//           <label htmlFor="manureAmount" className="font-semibold">
//             Manure Amount (in kgs):
//           </label>
//           <input
//             id="manureAmount"
//             type="number"
//             className="px-4 py-2 transition-all duration-500 hover:scale-95 border focus:outline-none w-56 border-green-300 rounded-md"
//             value={manureAmount}
//             onChange={handleManureAmountChange}
//           />
//         </div>

//         <div className="flex space-x-4">
//           <button
//             className=" bg-green-500 transition-all duration-500 hover:scale-95 hover:bg-goldenrod py-2 px-4  text-white  rounded-xl focus:outline-none"
//             onClick={calculateManureNeeded}
//             disabled={!acres}
//           >
//             Calculate Manure Needed
//           </button>

//           <button
//             className=" bg-green-500 transition-all duration-500 hover:scale-95 hover:bg-goldenrod py-2 px-4  text-white  rounded-xl focus:outline-none"
//             onClick={calculateLandNeeded}
//             disabled={!manureAmount}
//           >
//             Calculate Material Composition
//           </button>
//         </div>

//         {result && <p className="font-semibold">{result}</p>}
//       </div>
//     </div>
//   );
// };

// export default CompostCalculator;
