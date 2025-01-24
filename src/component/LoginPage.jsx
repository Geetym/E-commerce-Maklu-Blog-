import React, { useState } from "react";
import Nav from "./Nav";

const LoginPage = () => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="flex flex-col md:flex-row min-h-screen">
      <Nav />
      {/* Left Section */}
      <div className="w-full md:w-1/2 flex flex-col justify-center items-center bg-gradient-to-br from-blue-600 to-blue-400 text-white p-6">
        <div className="text-center max-w-lg space-y-4">
          <div className="text-5xl">🌟</div>
          <h1 className="text-2xl sm:text-4xl font-extrabold font-poppins mb-4">
            Welcome Back!
          </h1>
          <p className="text-sm sm:text-base font-lato leading-relaxed">
            Reconnect with your goals and explore exciting opportunities. Let’s achieve greatness together!
          </p>
        </div>
      </div>

      {/* Right Section */}
      <div className="w-full md:w-1/2 flex items-center justify-center bg-gradient-to-br from-blue-400 to-teal-300 p-6">
        <div className="flex flex-col gap-4 w-full max-w-xs sm:max-w-sm bg-white rounded-lg p-4 sm:p-6 shadow-lg">
          <label className="flex flex-col gap-2">
            <span className="font-lato text-sm">Email:</span>
            <input
              type="email"
              placeholder="you@example.com"
              className="border rounded-full p-2 w-full focus:outline-blue-500 text-sm"
            />
          </label>
          <label className="flex flex-col gap-2 relative">
            <span className="font-lato text-sm">Password:</span>
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Enter your password"
              minLength={8}
              className="border rounded-full p-2 w-full focus:outline-blue-500 text-sm"
            />
            <button
              type="button"
              onClick={togglePasswordVisibility}
              className="absolute right-4 top-9 text-gray-500 hover:text-blue-500 focus:outline-none"
            >
              {showPassword ? "👁️" : "👁️‍🗨️"}
            </button>
          </label>

          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2">
            <label className="flex items-center gap-2 font-lato text-sm">
              <input type="checkbox" className="accent-blue-500" />
              <span>Remember me</span>
            </label>
            <a
              href="#"
              className="text-blue-600 hover:underline text-sm"
            >
              Forgotten password?
            </a>
          </div>

          <button
            type="submit"
            className="bg-[#0766ff] text-white p-3 rounded-full hover:bg-[rgb(79,141,255)] hover:shadow-lg transform hover:scale-105 transition-transform font-poppins text-sm"
          >
            Login
          </button>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;