import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FiArrowRight } from 'react-icons/fi';
import { GiNetworkBars } from 'react-icons/gi';
import { IoWifi } from 'react-icons/io5';
import { BsBattery } from 'react-icons/bs';
import mtn from '../assets/images/mtn.jpg';
import vodafone from '../assets/images/voda.png';
import airtel from '../assets/images/airtel.png';

const Editcard11 = () => {
  const navigate = useNavigate();
  const transactions = [
    {
      id: 1,
      name: 'Yaw Ofosu',
      method: 'MTN mobile money',
      amount: 'GHS 145.00',
      status: 'Success',
      statusColor: 'text-green-500',
      logo: mtn,
    },
    {
      id: 2,
      name: 'Bernard Nyarko',
      method: 'Vodafone cash',
      amount: 'GHS 145.00',
      status: 'Success',
      statusColor: 'text-green-500',
      logo: vodafone,
    },
    {
      id: 3,
      name: 'Paul Allotey',
      method: 'Bank Pickup',
      amount: 'GHS 145.00',
      status: 'Success',
      statusColor: 'text-green-500',
      logo: 'https://via.placeholder.com/40/000000/FFFFFF?text=BA',
    },
    {
      id: 4,
      name: 'Yussif Adams',
      method: 'Bank Pickup',
      amount: 'GHS 145.00',
      status: 'Fail',
      statusColor: 'text-red-500',
      logo: 'https://via.placeholder.com/40/000000/FFFFFF?text=BA',
    },
    {
      id: 5,
      name: 'Agnes Quaye',
      method: 'Airtel cash',
      amount: 'GHS 145.00',
      status: 'Fail',
      statusColor: 'text-red-500',
      logo: airtel,
    },
  ];

  return (
    <div className="h-screen w-full bg-white flex flex-col relative">
      {/* Navbar */}
      <div className="text-center py-4 border-b border-gray-300 bg-black text-white relative">
        <h2 className="text-lg font-semibold">Payment</h2>

        {/* Icons at the top-left corner */}
        <div className="absolute top-2 right-2 flex space-x-2">
          <GiNetworkBars />
          <IoWifi />
          <BsBattery />
        </div>
      </div>

      {/* Tabs */}
      <div className="flex justify-center mt-4 space-x-4 px-4">
        <button className="w-1/2 px-2 py-2 border border-gray-300 font-semibold rounded-sm">
          Edit details
        </button>
        <button className="w-1/2 px-2 py-2 bg-black text-white font-semibold rounded-sm">
          History
        </button>
      </div>

      {/* Search Bar */}
      <div className="px-4 mt-6">
        <input
          type="text"
          placeholder="Search history"
          className="w-full p-3 border border-gray-300 mb-4"
        />
      </div>

      {/* Transaction List */}
      <div className="px-4">
        {transactions.map((transaction) => (
          <div
            key={transaction.id}
            className="flex flex-col md:flex-row md:items-center md:justify-between bg-gray-100 p-4 mb-4"
          >
            <div className="flex items-center mb-4 md:mb-0">
              <img
                src={transaction.logo}
                alt={transaction.name}
                className="w-10 h-10 rounded-full mr-3"
              />
              <div>
                <p className="text-gray-800 font-semibold">{transaction.name}</p>
                <p className="text-gray-500 text-sm">{transaction.method}</p>
              </div>
            </div>
            <div className="text-left md:text-right">
              <p className="text-gray-800 font-semibold">{transaction.amount}</p>
              <p className={`${transaction.statusColor} text-sm`}>{transaction.status}</p>
            </div>
          </div>
        ))}
        <button
          onClick={() => navigate('/editcard12')} // Replace '/next-page' with the actual route
          className="mt-8 flex items-center justify-center text-blue-500 text-lg font-medium">
          Next <FiArrowRight className="ml-2" />
        </button>
      </div>
    </div>
  );
};

export default Editcard11;