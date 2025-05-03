import React from 'react';
import { Link } from 'react-router-dom';

const Setting1 = () => {
  return (
    <div className="font-sans bg-gray-100 min-h-screen w-full p-4">
      <h1 className="bg-black text-white text-lg text-center font-bold mb-4 px-4 py-3">Settings</h1>

      {/* Account Section */}
      <div className="mb-6">
        <h2 className="text-sm font-medium text-gray-500 mb-2">Account</h2>
        <div className="bg-white shadow-md p-4 flex items-center">
          <img
            src="c:/Users/Bella/OneDrive/Desktop/Maestro/settings/iOS- Maestro- Settings 2@3x.png"
            alt="Profile"
            className="w-16 h-16 rounded-full border-2 border-yellow-500 object-cover mr-4"
          />
          <div className="flex-1">
            <p className="text-base font-medium">Edward Yeboah</p>
            <p className="text-sm text-gray-500">0202024965</p>
          </div>
          <span className="text-gray-400 text-lg">&gt;</span>
        </div>
      </div>

      {/* Favourite Destinations Section */}
      <div>
        <h2 className="text-sm font-medium text-gray-500 mb-2">Favourite Destinations</h2>
        <div className="bg-white shadow-md p-4">
          <button className="text-blue-500 text-sm font-medium mb-4">+ Add location</button>
          <div className="flex items-center">
            <span className="text-black text-lg mr-2">■</span>
            <Link to="/setting2" className="text-base">Olebu Ablekuma Kingdom hall</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Setting1;