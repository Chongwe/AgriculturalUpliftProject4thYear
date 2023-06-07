import React, { useState } from 'react';

export const SeedCalculator = () => {
  const [landSize, setLandSize] = useState(1);
  const [seedType, setSeedType] = useState('');
  const [seedQuantity, setSeedQuantity] = useState(0);

  const calculateSeedQuantity = () => {
    let quantity = 0;

    switch (seedType) {
      case 'maize':
        quantity = landSize * 10; // Assume 10 kg of maize seed per acre
        break;
      case 'soybeans':
        quantity = landSize * 30; // Assume 30 kg of soybean seed per acre
        break;
      case 'pigeon peas':
        quantity = landSize * 30; // Assume 30 kg of pigeon pea seed per acre
        break;
      case 'beans':
        quantity = landSize * 30; // Assume 30 kg of bean seed per acre
        break;
      case 'groundnuts':
        quantity = landSize * 17; // Assume 35 kg of groundnut seed per acre
        break;
      case 'rice':
        quantity = landSize * 25; // Assume 25 kg of rice seed per acre
        break;
      default:
        break;
    }

    setSeedQuantity(quantity);
  };

  const handleLandSizeChange = (e) => {
    const value = parseFloat(e.target.value);
    if (value >= 0) {
      setLandSize(value);
    }
  };

  return (
    <div className="rounded-lg p-5">
      <h1 className="text-2xl font-bold mb-5">Seed Planting Calculator</h1>
      <div className="flex flex-col gap-4">
        <div className="flex items-center">
          <label className="w-40">Land Size (hectares):</label>
          <input
            type="number"
            className="border p-1"
            value={landSize}
            onChange={handleLandSizeChange}
          />
        </div>
        <div className="flex items-center">
          <label className="w-40">Select Seed Type:</label>
          <select
            className="border p-1"
            value={seedType}
            onChange={(e) => setSeedType(e.target.value)}
          >
            <option value=""> Select </option>
            <option value="maize">Maize</option>
            <option value="soybeans">Soybeans</option>
            <option value="pigeon peas">Pigeon Peas</option>
            <option value="beans">Beans</option>
            <option value="groundnuts">Groundnuts</option>
            <option value="rice">Rice</option>
          </select>
        </div>

        <button
          className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-md"
          onClick={calculateSeedQuantity}
          disabled={!landSize || !seedType}
        >
          Calculate Seed Quantity
        </button>

        {seedType && (
          <div className="flex items-center">
            <label className="w-40">Seed Quantity (kg):</label>
            <input
              type="number"
              className="border p-1"
              value={seedQuantity}
              readOnly
            />
          </div>
        )}
      </div>
    </div>
  );
};


export const FeedCalculator = () => {
  const [animal, setAnimal] = useState('');
  const [count, setCount] = useState(1);
  const [totalFeed, setTotalFeed] = useState();

  const calculateTotalFeed = () => {
    let feedQuantity = 0;

    switch (animal) {
      case 'goat':
        feedQuantity = count * 2; // Assume 2 kg of feed per goat per day
        break;
      case 'cow':
        feedQuantity = count * 10; // Assume 10 kg of feed per cow per day
        break;
      case 'pig':
        feedQuantity = count * 5; // Assume 5 kg of feed per pig per day
        break;
      case 'chicken':
        feedQuantity = count * 0.5; // Assume 0.5 kg of feed per chicken per day
        break;
      case 'sheep':
        feedQuantity = count * 0.3; // Assume 0.3 kg of feed per duck per day
        break;
      default:
        break;
    }

    setTotalFeed(feedQuantity);
  };

  const handleCountChange = (e) => {
    const value = parseInt(e.target.value);
    if (value >= 0) {
      setCount(value);
    }
  };

  return (
    <div className="rounded-lg p-5">
      <h1 className="text-2xl font-bold mb-5">Livestock Feed Calculator</h1>
      <div className="flex flex-col gap-4">
        <div className="flex items-center">
          <label className="w-40">Select an Animal:</label>
          <select
            className="border p-1"
            value={animal}
            onChange={(e) => setAnimal(e.target.value)}
          >
            <option value=""> Select </option>
            <option value="goat">Goats</option>
            <option value="cow">Cows</option>
            <option value="pig">Pigs</option>
            <option value="chicken">Chicken</option>
            <option value="duck">Duck</option>
          </select>
        </div>
        {animal && (
          <div className="flex items-center">
            <label className="w-40">Number of {animal}s:</label>
            <input
              type="number"
              className="border p-1"
              value={count}
              onChange={handleCountChange}
            />
          </div>
        )}
        <button
          className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-md"
          onClick={calculateTotalFeed}
          disabled={!animal || count === 0}
        >
          Calculate Total Feed per Day
        </button>

        {animal && (
          <div className="flex items-center">
            <label className="w-40">Total Feed Required per Day:</label>
            <input
              type="number"
              className="border p-1"
              value={totalFeed}
              readOnly
            />
          </div>
        )}
      </div>
    </div>
  );
};



const App = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="w-full max-w-3xl flex gap-4">
        <SeedCalculator />
        <FeedCalculator />
      </div>
    </div>
  );
};

export default App;
