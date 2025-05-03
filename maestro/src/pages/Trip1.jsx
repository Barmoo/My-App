import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FiArrowRight } from 'react-icons/fi';


const Trip1 = () => {
  const navigate = useNavigate();
  return (
    <div className="font-sans bg-gray-100 min-h-screen w-full p-6 flex flex-col items-center">
      {/* Trip Details Card */}
      <div className="bg-white rounded-lg shadow-md p-4 w-full max-w-md mt-6">
        {/* Map Section */}
        <div className="mb-4">
          <img
            src="https://via.placeholder.com/300x150"
            alt="Map"
            className="w-full h-40 object-cover rounded-md"
          />
        </div>

        {/* From and To Section */}
        <div className="mb-4">
          <div className="flex items-center mb-2">
            <span className="text-yellow-500 text-lg mr-2">●</span>
            <p className="text-sm">
              From: <strong>Industrial area</strong>
            </p>
          </div>
          <div className="flex items-center">
            <span className="text-black text-lg mr-2">■</span>
            <p className="text-sm">
              To: <strong>Olebu Ablekuma Kingdom hall</strong>
            </p>
          </div>
        </div>

        {/* Cargo Details */}
        <div className="mb-4">
          <p className="text-sm">
            <strong>Cargo Type:</strong> Iron rods
          </p>
          <p className="text-sm">
            <strong>Weight:</strong> 567 lbs
          </p>
          <p className="text-sm">12th August 2020</p>
        </div>

        {/* Driver Details */}
        <div className="flex items-center mb-4">
          <img
            src="https://via.placeholder.com/80"
            alt="Driver"
            className="w-16 h-16 rounded-full border-2 border-yellow-500 object-cover mr-4"
          />
          <div>
            <p className="text-sm">
              <strong>Truck Driver:</strong> Yaw Ofosu
            </p>
            <p className="text-sm">
              <strong>Truck Reg.:</strong> Volvo, GT 2345 X
            </p>
          </div>
        </div>

        {/* Review and Delete Section */}
        <div className="flex items-center justify-between">
          <button className="text-blue-500 text-sm font-medium">View Review</button>
          <button className="text-red-500 text-sm font-medium">Delete</button>
        </div>

        {/* Star Rating */}
        <div className="flex justify-start mt-4">
          {[...Array(3)].map((_, index) => (
            <span key={index} className="text-yellow-500 text-lg">★</span>
          ))}
          {[...Array(2)].map((_, index) => (
            <span key={index} className="text-gray-300 text-lg">★</span>
          ))}
          <button
            onClick={() => navigate('/trip2')} // Replace '/next-page' with the actual route
            className="mt-8 flex items-center justify-center text-blue-500 text-lg font-medium">
            Next <FiArrowRight className="ml-2" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Trip1;