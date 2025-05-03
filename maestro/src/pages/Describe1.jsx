import React from 'react';
import { Link } from 'react-router-dom';


const Describe1 = () => {
  return (
    <div className="h-auto w-full max-w-3xl bg-white p-6 mx-auto shadow-md">
      {/* Step Header */}
      <div className="text-gray-500 text-sm mb-4">Step 1 of 2</div>
      <div className="text-black text-lg font-semibold mb-6">Describe your cargo</div>

      {/* Cargo Type Input */}
      <div className="mb-6">
        <label className="block text-gray-500 text-sm mb-2">Cargo Type eg; iron rods</label>
        <input
          type="text"
          placeholder="Cargo Type eg; iron rods"
          className="w-full bg-gray-100 border border-gray-300 px-4 py-2 text-gray-700"
        />
      </div>

      {/* Hazardous Substance Toggle */}
      <div className="flex items-center justify-between mb-6">
        <label className="text-gray-700 text-sm">Cargo possess hazardous substance?</label>
        <input type="checkbox" className="toggle-checkbox" />
      </div>

      {/* Hazardous Substance Type Dropdown */}
      <div className="mb-6">
        <label className="block text-gray-500 text-sm mb-2">Hazardous Substance Type</label>
        <select className="w-full bg-gray-100 border border-gray-300 px-4 py-2 text-gray-700">
          <option>Select hazardous substance type</option>
        </select>
      </div>

      {/* Weight and Packaging */}
      <div className="flex flex-col md:flex-row md:justify-between md:space-x-4 mb-6">
        {/* Weight */}
        <div className="w-full md:w-1/2 mb-4 md:mb-0">
          <label className="block text-gray-500 text-sm mb-2">Weight</label>
          <div className="flex items-center gap-2 bg-gray-100 border border-gray-300">
            <input
              type="text"
              placeholder="Weight"
              className="w-full bg-transparent px-4 py-2 text-gray-700 rounded-l-md"
            />
            <select className="bg-transparent border-l border-gray-300 px-2 py-2 text-gray-700">
              <option>Kg</option>
            </select>
          </div>
        </div>

        {/* Packaging */}
        <div className="w-full md:w-1/2">
          <label className="block text-gray-500 text-sm mb-2">Packaging</label>
          <div className="flex items-center bg-gray-100 border border-gray-300">
            <input
              type="text"
              placeholder="Packaging"
              className="w-full bg-transparent px-4 py-2 text-gray-700 rounded-l-md"
            />
            <select className="bg-transparent border-l border-gray-300 px-2 py-2 text-gray-700">
              <option>Qty</option>
            </select>
          </div>
        </div>
      </div>

      {/* Upload Cargo Documents */}
      <div className="mb-6">
        <a href="#" className="text-blue-500 text-sm flex items-center">
          <span className="mr-2">↥</span> Upload cargo documents
        </a>
      </div>

      {/* Continue Button */}
      <div>
        <Link to="/describe2" className=" block w-full bg-yellow-400 text-black font-semibold py-3 shadow- text-center">
          Continue
        </Link>
      </div>
    </div>
  );
};

export default Describe1;