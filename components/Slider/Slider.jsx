// components/PriceSlider.js
import { useState } from "react";

const Slider = ({ min = 0, max = 1000, onChange }) => {
  const [value, setValue] = useState(max);

  const handleChange = (event) => {
    const newValue = event.target.value;
    setValue(newValue);
    onChange(newValue);
  };

  const handleInputChange = (event) => {
    const newValue = Math.min(max, Math.max(min, event.target.value));
    setValue(newValue);
    onChange(newValue);
  };

  return (
    <div className="flex flex-col items-center pt-4">
      <input
        type="range"
        min={min}
        max={max}
        step="1"
        value={value}
        onChange={handleChange}
        className="w-full h-2 bg-gray-300 rounded-lg cursor-pointer"
      />
      <input
        type="number"
        value={value}
        onChange={handleInputChange}
        className="mt-4 p-2 border border-gray-300 rounded-md"
        min={min}
        max={max}
      />
      <p className="mt-2 text-gray-700">Prix: {value} DH</p>
    </div>
  );
};

export default Slider;
