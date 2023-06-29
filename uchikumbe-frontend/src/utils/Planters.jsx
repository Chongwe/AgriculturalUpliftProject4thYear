import React, { useState } from 'react';
import GroundNutsSeed from "./GroundNutsSeed"


export const MaizeSeedCalculator = () => {
    const [fieldSize, setFieldSize] = useState('');
    const [rowSpacing, setRowSpacing] = useState('');
    const [stationSpacing, setStationSpacing] = useState('');
    const [seedsPerStation, setSeedsPerStation] = useState('');
    const [result, setResult] = useState('');
  
    const calculateSeeds = () => {
      const areaInSquareMeters = fieldSize * 4047;
      const totalStations = (areaInSquareMeters / rowSpacing) * (1 / stationSpacing);
      const totalSeeds = totalStations * seedsPerStation;
      const weightInKilograms = totalSeeds / 1600;
      setResult(weightInKilograms.toFixed(2));
    };
  
    return (
      <div className="container border border-goldenrod rounded-lg p-4 mx-auto mt-2">
        <h2 className="text-2xl font-bold mb-4">Maize Seed Calculator</h2>
        <div className="mb-4">
          <label className="block font-medium">Field Size (in acres):</label>
          <input
            type="number"
            className="px-4 py-2 transition-all duration-500 hover:scale-95 border focus:outline-none w-56 border-green-300 rounded-md"
            value={fieldSize}
            onChange={(e) => setFieldSize(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label className="block font-medium">Row Spacing (in meters):</label>
          <input
            type="number"
            className="px-4 py-2 transition-all duration-500 hover:scale-95 border focus:outline-none w-56 border-green-300 rounded-md"
            value={rowSpacing}
            onChange={(e) => setRowSpacing(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label className="block font-medium">Station Spacing (in meters):</label>
          <input
            type="number"
            className="px-4 py-2 transition-all duration-500 hover:scale-95 border focus:outline-none w-56 border-green-300 rounded-md"
            value={stationSpacing}
            onChange={(e) => setStationSpacing(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label className="block font-medium">Seeds per Station:</label>
          <input
            type="number"
            className="px-4 py-2 transition-all duration-500 hover:scale-95 border focus:outline-none w-56 border-green-300 rounded-md"
            value={seedsPerStation}
            onChange={(e) => setSeedsPerStation(e.target.value)}
          />
        </div>
        <button
          className="bg-green-500 transition-all duration-500 hover:scale-95 hover:bg-goldenrod py-2 px-4  text-white  rounded-xl focus:outline-none"
          onClick={calculateSeeds}
        >
          Calculate
        </button>
        {result && (
          <div className="mt-4">
            <p>Number of Seeds Required: {result} kgs</p>
          </div>
        )}
      </div>
    );
  };

export const CassavaStemCalculator = () => {
    const [fieldSize, setFieldSize] = useState('');
    const [rowSpacing, setRowSpacing] = useState('');
    const [stationSpacing, setStationSpacing] = useState('');
    const [stemsPerStation, setStemsPerStation] = useState('');
    const [stemSize, setStemSize] = useState('');
    const [result, setResult] = useState('');
  
    const calculateSeeds = () => {
      const areaInSquareMeters = fieldSize * 4047;
      const totalStations = (areaInSquareMeters / rowSpacing) * (1 / stationSpacing);
      const totalStems = totalStations * stemsPerStation;
      const totalStemSize = totalStems * stemSize;
      const resultInKilograms = (totalStemSize / 100);
      setResult(resultInKilograms.toFixed(0));
    };
  
    return (
      <div className="container border border-goldenrod rounded-lg p-4 mx-auto mt-2">
        <h2 className="text-2xl font-bold mb-4">Cassava Stem Calculator</h2>
        <div className="mb-4">
          <label className="block font-medium">Field Size (in acres):</label>
          <input
            type="number"
            className="px-4 py-2 transition-all duration-500 hover:scale-95 border focus:outline-none w-56 border-green-300 rounded-md"
            value={fieldSize}
            onChange={(e) => setFieldSize(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label className="block font-medium">Row Spacing (in meters):</label>
          <input
            type="number"
            className="px-4 py-2 transition-all duration-500 hover:scale-95 border focus:outline-none w-56 border-green-300 rounded-md"
            value={rowSpacing}
            onChange={(e) => setRowSpacing(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label className="block font-medium">Station Spacing (in meters):</label>
          <input
            type="number"
            className="px-4 py-2 transition-all duration-500 hover:scale-95 border focus:outline-none w-56 border-green-300 rounded-md"
            value={stationSpacing}
            onChange={(e) => setStationSpacing(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label className="block font-medium">Stems per Station:</label>
          <input
            type="number"
            className="px-4 py-2 transition-all duration-500 hover:scale-95 border focus:outline-none w-56 border-green-300 rounded-md"
            value={stemsPerStation}
            onChange={(e) => setStemsPerStation(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label className="block font-medium">Stem Size in metres:</label>
          <input
            type="number"
            className="px-4 py-2 transition-all duration-500 hover:scale-95 border focus:outline-none w-56 border-green-300 rounded-md"
            value={stemSize}
            onChange={(e) => setStemSize(e.target.value)}
          />
        </div>
        <button
          className="bg-green-500 transition-all duration-500 hover:scale-95 hover:bg-goldenrod py-2 px-4  text-white  rounded-xl focus:outline-none"
          onClick={calculateSeeds}
        >
          Calculate
        </button>
        {result && (
          <div className="mt-4">
            <p className=''>Number of Required stems:<span className='font-bold text-lg text-green-900'> {result}  one meter stems</span> </p>
          </div>
        )}
      </div>
    );
  };


const Planters = () => {
  return (
    <div className="flex justify-center items-center ">
      <div className="w-full flex-col h-auto min-w-screen-sm flex gap-4">
        <MaizeSeedCalculator />
        <CassavaStemCalculator />
        <GroundNutsSeed />

      </div>
    </div>
  );
};

export default Planters;
