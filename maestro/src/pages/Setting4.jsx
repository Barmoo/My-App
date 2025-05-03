import React from 'react';
import { Link } from 'react-router-dom';

const Setting4 = () => {
  return (
    <div className="font-sans bg-gray-100 min-h-screen w-full p-6 flex flex-col items-center">
      <h2 className="text-sm font-medium text-gray-500 mb-4">Add favourite locations</h2>

      {/* Input Section */}
      <div className="w-full max-w-md mb-6">
        <input
          type="text"
          value="Olebu Ablekuma Kingdom hall"
          className="w-full bg-gray-200 text-base p-3 focus:outline-none"
          readOnly
        />
      </div>

      {/* Add Location Button */}
      <button className="text-blue-500 text-sm font-medium mb-4">+ Add location</button>

      {/* Selected Location */}
      <div className="flex items-center w-full max-w-md mb-6">
        <span className="text-black text-lg mr-2">■</span>
        <p className="text-base">Olebu Ablekuma Kingdom hall</p>
      </div>

      {/* Save Button */}
      <Link to="/setting5" className="bg-black text-white text-base font-medium py-3 px-6 w-full max-w-md">
        Save
      </Link>
    </div>
  );
};

export default Setting4;