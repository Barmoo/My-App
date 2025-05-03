import React from 'react';
import { Link } from 'react-router-dom';

const Editcard9 = () => {
  return (
    <div className="h-screen w-full bg-gray-100 flex items-center justify-center px-4">
      <div className="bg-white w-full max-w-md  shadow-lg p-6 text-center">
        <h3 className="text-lg font-semibold mb-4">Delete Payment Method</h3>
        <p className="text-gray-700 text-sm mb-2">
          Are you sure you want to
        </p>
        <p className="text-gray-700 text-sm mb-4">delete Payment account?</p>
        <button className="w-full bg-yellow-400 text-black font-semibold py-3 mb-4">
          Yes, Delete
        </button>
        <Link to="/editcard10" className="block w-full text-gray-700 font-semibold py-3 text-center">
          Cancel
        </Link>
      </div>
    </div>
  );
};

export default Editcard9;