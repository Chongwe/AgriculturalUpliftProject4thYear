import React, { useState } from 'react';

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
      <div className="max-w-md mx-auto mt-8 p-4 bg-white shadow-lg rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Maize Seed Calculator</h2>
        <div className="mb-4">
          <label className="block font-medium">Field Size (in acres):</label>
          <input
            type="number"
            className="w-full rounded-lg border border-gray-300 py-2 px-3"
            value={fieldSize}
            onChange={(e) => setFieldSize(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label className="block font-medium">Row Spacing (in meters):</label>
          <input
            type="number"
            className="w-full rounded-lg border border-gray-300 py-2 px-3"
            value={rowSpacing}
            onChange={(e) => setRowSpacing(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label className="block font-medium">Station Spacing (in meters):</label>
          <input
            type="number"
            className="w-full rounded-lg border border-gray-300 py-2 px-3"
            value={stationSpacing}
            onChange={(e) => setStationSpacing(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label className="block font-medium">Seeds per Station:</label>
          <input
            type="number"
            className="w-full rounded-lg border border-gray-300 py-2 px-3"
            value={seedsPerStation}
            onChange={(e) => setSeedsPerStation(e.target.value)}
          />
        </div>
        <button
          className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600"
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
      const resultInKilograms = (totalStemSize / 100) / 50;
      setResult(resultInKilograms.toFixed(2));
    };
  
    return (
      <div className="max-w-md mx-auto mt-8 p-4 bg-white shadow-lg rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Cassava Stem Calculator</h2>
        <div className="mb-4">
          <label className="block font-medium">Field Size (in acres):</label>
          <input
            type="number"
            className="w-full rounded-lg border border-gray-300 py-2 px-3"
            value={fieldSize}
            onChange={(e) => setFieldSize(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label className="block font-medium">Row Spacing (in meters):</label>
          <input
            type="number"
            className="w-full rounded-lg border border-gray-300 py-2 px-3"
            value={rowSpacing}
            onChange={(e) => setRowSpacing(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label className="block font-medium">Station Spacing (in meters):</label>
          <input
            type="number"
            className="w-full rounded-lg border border-gray-300 py-2 px-3"
            value={stationSpacing}
            onChange={(e) => setStationSpacing(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label className="block font-medium">Stems per Station:</label>
          <input
            type="number"
            className="w-full rounded-lg border border-gray-300 py-2 px-3"
            value={stemsPerStation}
            onChange={(e) => setStemsPerStation(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label className="block font-medium">Stem Size:</label>
          <input
            type="number"
            className="w-full rounded-lg border border-gray-300 py-2 px-3"
            value={stemSize}
            onChange={(e) => setStemSize(e.target.value)}
          />
        </div>
        <button
          className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600"
          onClick={calculateSeeds}
        >
          Calculate
        </button>
        {result && (
          <div className="mt-4">
            <p>Number of bundles Required: {result} bundles of 50, 1 meter stems </p>
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

      </div>
    </div>
  );
};

export default Planters;
