import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { getFcmToken } from '../Services/firebase'; // Ensure this path and file are correct

const Onboarding1 = () => {
  const [code, setCode] = useState(['', '', '', '']);
  const [error, setError] = useState('');
  const [resendLoading, setResendLoading] = useState(false);
  const navigate = useNavigate();

  // Handle input change
  const handleChange = (e, index) => {
    const value = e.target.value.replace(/[^0-9]/g, '');
    if (value.length <= 1) {
      const newCode = [...code];
      newCode[index] = value;
      setCode(newCode);

      // Move to next input
      if (value && index < code.length - 1) {
        document.getElementById(`digit-${index + 1}`).focus();
      }
    }
  };

  // Confirm OTP
  const handleConfirm = async () => {
    const fullCode = code.join('');
    if (fullCode.length < 4) {
      setError('Please enter the full verification code.');
      return;
    }

    try {
      setError('');
      const fcmToken = await getFcmToken();

      if (!fcmToken) {
        setError('Failed to retrieve device token. Please try again.');
        return;
      }

      const response = await axios.post(
        `https://sandbox.maestroafrica.com/auth/api/v1/otp?fcm-token=${fcmToken}`,
        {
          otp: fullCode,
        }
      );

      if (response.status === 200) {
        navigate('/onboarding2');
      } else {
        setError('Invalid code. Please try again.');
      }
    } catch (err) {
      console.error('Verification error:', err.response?.data || err.message);
      setError('Something went wrong. Please try again.');
    }
  };

  // Resend OTP (dummy or placeholder endpoint)
  const handleResend = async () => {
    try {
      setResendLoading(true);
      await axios.get('/auth/api/v1/otp'); // Replace with correct resend endpoint
      alert('Verification code resent.');
    } catch (err) {
      console.error('Resend error:', err.response?.data || err.message);
      alert('Failed to resend code.');
    } finally {
      setResendLoading(false);
    }
  };

  return (
    <div className="font-sans bg-gray-100 min-h-screen w-full flex flex-col items-center justify-center px-6">
      <p className="text-center text-sm text-gray-600">
        A verification code has been sent to your phone number.
      </p>
      <p className="text-center text-sm text-gray-600 mb-6">
        Enter the code below.
      </p>

      {/* OTP Input */}
      <div className="flex justify-center space-x-4 mb-4">
        {code.map((digit, index) => (
          <input
            key={index}
            id={`digit-${index}`}
            type="text"
            maxLength="1"
            value={digit}
            onChange={(e) => handleChange(e, index)}
            className="w-12 h-12 text-center text-lg font-medium border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        ))}
      </div>

      {/* Error Message */}
      {error && <p className="text-red-500 text-sm mb-4">{error}</p>}

      {/* Resend Code */}
      <button
        onClick={handleResend}
        disabled={resendLoading}
        className="text-blue-500 text-sm font-medium mb-6"
      >
        {resendLoading ? 'Resending...' : 'Resend verification code'}
      </button>

      {/* Confirm Button */}
      <button
        onClick={handleConfirm}
        className="w-full max-w-md bg-black text-white text-sm font-medium py-3 rounded"
      >
        Confirm
      </button>
    </div>
  );
};

export default Onboarding1;
