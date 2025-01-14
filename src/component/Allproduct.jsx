import React from "react";
import Nav from "./Nav";

const Allproduct = () => {
  return (
    <div className="bg-gray-50">
      {/* Header Section */}
      <Nav />
      <div className="bg-blue-100 py-12">
        <div className="max-w-7xl mx-auto text-center px-4">
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-800">
            Shop Page 1
          </h1>
          <p className="text-gray-600 mt-2 text-sm sm:text-base">
            <span className="text-gray-500">Home</span> &gt; Shop Page 1
          </p>
        </div>
      </div>

      {/* Filters and Sorting Section */}
      <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between border-b border-gray-200 pb-4 space-y-4 sm:space-y-0">
          {/* Left Controls */}
          <div className="flex items-center gap-4">
            <button className="flex items-center gap-2 text-gray-700">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zm0 6a1 1 0 011-1h10a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1v-2zm0 6a1 1 0 011-1h13a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1v-2z"
                />
              </svg>
              Filter
            </button>
            <p className="text-gray-500 text-sm sm:text-base">
              Showing 1–12 of 50 Results
            </p>
          </div>

          {/* Right Controls */}
          <div className="flex items-center gap-4 overflow-x-auto">
            <div className="flex items-center gap-2">
              <p className="text-gray-500 text-sm sm:text-base">Sort by</p>
              <select className="border border-gray-300 rounded-md p-1 text-sm sm:text-base">
                <option value="9">9</option>
                <option value="12">12</option>
                <option value="24">24</option>
              </select>
            </div>
            <div className="flex items-center gap-2">
              <p className="text-gray-500 text-sm sm:text-base">Sort by</p>
              <select className="border border-gray-300 rounded-md p-1 text-sm sm:text-base">
                <option value="popularity">Popularity</option>
                <option value="price">Price</option>
              </select>
            </div>
            <div className="flex items-center gap-2">
              <button className="p-2 border border-gray-300 rounded">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16m-7 6h7"
                  />
                </svg>
              </button>
              <button className="p-2 border border-gray-300 rounded">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h8m-8 6h4"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Product Grid */}
      <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {/* Single Product */}
          {[...Array(12)].map((_, index) => (
            <div
              key={index}
              className="border rounded-lg overflow-hidden bg-white shadow hover:shadow-lg"
            >
              <img
                src="https://via.placeholder.com/300"
                alt={`Product ${index + 1}`}
                className="w-full h-64 object-cover"
              />
              <div className="p-4">
                <h3 className="text-gray-700 text-lg font-semibold">
                  Product Name {index + 1}
                </h3>
                <p className="text-gray-500 mt-1">$29.99</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Allproduct;
