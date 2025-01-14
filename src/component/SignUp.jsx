import React, { useState } from 'react';
import Nav from './Nav';

const SignUpPage = () => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="flex flex-col md:flex-row h-screen">
      <Nav />
      <div className="w-full md:w-1/2 flex flex-col justify-center items-center bg-gradient-to-br from-blue-600 to-blue-400 text-white p-8 animate-fade">
        <div className="text-center max-w-lg space-y-6">
          <div className="text-6xl">🚀</div>
          <h1 className="text-5xl font-extrabold font-poppins mb-4">Create Your Account</h1>
          <p className="text-lg font-lato leading-relaxed">
            Join us and start your journey towards greatness. It's quick and easy!
          </p>
        </div>
      </div>

      {/* Right (Form with Gradient Background) */}
      <div className="w-full md:w-1/2 flex items-center justify-center bg-gradient-to-br from-blue-400 to-teal-300 p-6 animate-fade">
        <div className="flex flex-col gap-4 w-3/4 bg-white rounded-lg p-8 shadow-lg">
          <label className="flex items-center gap-2">
            <p className="w-1/3 font-lato">First Name:</p>
            <input
              type="text"
              placeholder="Enter your first name"
              className="border rounded-full p-2 w-full focus:outline-blue-500"
            />
          </label>
          <label className="flex items-center gap-2">
            <p className="w-1/3 font-lato">Last Name:</p>
            <input
              type="text"
              placeholder="Enter your last name"
              className="border rounded-full p-2 w-full focus:outline-blue-500"
            />
          </label>
          <label className="flex items-center gap-2">
            <p className="w-1/3 font-lato">Email:</p>
            <input
              type="email"
              placeholder="you@example.com"
              className="border rounded-full p-2 w-full focus:outline-blue-500"
            />
          </label>
          <label className="flex items-center gap-2 relative">
            <p className="w-1/3 font-lato">Password:</p>
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Create a strong password"
              minLength={8}
              className="border rounded-full p-2 w-full focus:outline-blue-500"
            />
            <button
              type="button"
              onClick={togglePasswordVisibility}
              className="absolute right-4 text-gray-500 hover:text-blue-500 focus:outline-none"
            >
              {showPassword ? "👁️" : "👁️‍🗨️"}
            </button>
          </label>

          <div className="flex justify-between items-center">
            <label className="flex items-center gap-2 font-lato">
              <input type="checkbox" className="accent-blue-500" />
              <span>Agree to terms and conditions</span>
            </label>
          </div>

          <button
            type="submit"
            className="bg-[#0766ff] text-white p-2 rounded-full hover:bg-[rgb(79,141,255)] hover:shadow-lg transform hover:scale-105 transition-transform font-poppins"
          >
            Sign Up
          </button>
        </div>
      </div>
    </div>
  );
};

export default SignUpPage;