import React, { useState } from 'react';
import Die from './Dice';

const RollDice = () => {
  const [die1, setDie1] = useState(1);
  const [die2, setDie2] = useState(1);
  const [rolling, setRolling] = useState(false);

  const roll = () => {
    setRolling(true);
    setTimeout(() => {
      setDie1(Math.floor(Math.random() * 6) + 1);
      setDie2(Math.floor(Math.random() * 6) + 1);
      setRolling(false);
    }, 1000);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <div className="flex justify-center mb-8">
        <Die face={die1} />
        <Die face={die2} />
      </div>
      <button
        className={`py-4 px-8 rounded-lg text-white ${
          rolling ? 'bg-gray-400 cursor-not-allowed' : 'bg-blue-500 hover:bg-blue-600'
        }`}
        disabled={rolling}
        onClick={roll}
      >
        {rolling ? 'Rolling...' : 'Roll Dice!'}
      </button>
    </div>
  );
};

export default RollDice;
