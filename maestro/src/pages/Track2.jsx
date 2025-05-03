import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FiArrowRight } from 'react-icons/fi';

const Track2 = () => {
  const navigate = useNavigate();
  return (
    <div className="font-sans bg-gray-100 min-h-screen w-full p-6 flex flex-col items-center">
      {/* Card 1 */}
      <div className="bg-white rounded-lg shadow-md p-4 mb-6 w-full max-w-md">
        <div className="mb-4">
          <div className="flex items-center mb-2">
            <span className="text-yellow-500 text-lg mr-2">●</span>
            <p className="text-sm">
              From: <strong>Industrial Area</strong>
            </p>
          </div>
          <div className="flex items-center">
            <span className="text-black text-lg mr-2">■</span>
            <p className="text-sm">
              To: <strong>Olebu Ablekuma Kingdom hall</strong>
            </p>
          </div>
        </div>
        <div className="mb-4">
          <p className="text-sm">
            <strong>Cargo Type:</strong> Iron rods
          </p>
          <p className="text-sm">12th August 2020</p>
        </div>
        <div className="text-right mb-4">
          <p className="text-sm">
            <strong>Weight:</strong> 567 lbs
          </p>
          <p className="text-sm">
            <strong>Driver:</strong> Yaw Ofosu
          </p>
        </div>
        <button className="w-full bg-black text-white text-sm font-medium py-2 mb-4">
          View Cargo
        </button>
        <button className="w-full border border-blue-500 text-blue-500 text-sm font-medium py-2 ">
          Track Cargo
        </button>
      </div>

      {/* Card 2 */}
      <div className="bg-white shadow-md  rounded-lg p-4 w-full max-w-md">
        <div className="mb-4">
          <div className="flex items-center mb-2">
            <span className="text-yellow-500 text-lg mr-2">●</span>
            <p className="text-sm">
              From: <strong>Industrial Area</strong>
            </p>
          </div>
          <div className="flex items-center">
            <span className="text-black text-lg mr-2">■</span>
            <p className="text-sm">
              To: <strong>Olebu Ablekuma Kingdom hall</strong>
            </p>
          </div>
        </div>
        <div className="mb-4">
          <p className="text-sm">
            Cargo Type: <strong>Iron rods</strong>
          </p>
          <p className="text-sm">
            Weight: <strong>567 lbs</strong>
          </p>
          <p className="text-sm">
            Driver: <strong>Yaw Ofosu</strong>
          </p>
          <p className="text-sm">12th August 2020</p>
        </div>
        <button className="w-full bg-gray-400 text-white text-sm font-medium py-2">
          Awaiting Pickup
        </button>
        <button
          onClick={() => navigate('/track3')} // Replace '/next-page' with the actual route
          className="mt-8 flex items-center justify-center text-blue-500 text-lg font-medium">
          Next <FiArrowRight className="ml-2" />
        </button>
      </div>
    </div>
  );
};

export default Track2;