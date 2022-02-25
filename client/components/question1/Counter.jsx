import { useState } from 'react';

export const Counter = ({ min, max }) => {
  const [counter, setCounter] = useState(min > 0 ? parseInt(min, 10) : max < 0 ? parseInt(max, 10) : 0);

  return (
    <div className="inline-block mr-4">
      <div>
        Min: {min} Max: {max}
      </div>
      <div className="text-2xl">{counter}</div>
      <button
        className="inline-block border-red-700 border-2 p-1 mr-2"
        onClick={() => {
          if (counter > min) setCounter(counter - 1);
        }}
      >
        Decrement
      </button>
      <button
        className="inline-block border-green-700 border-2 p-1"
        onClick={() => {
          if (counter < max) setCounter(counter + 1);
        }}
      >
        Increment
      </button>
    </div>
  );
};
