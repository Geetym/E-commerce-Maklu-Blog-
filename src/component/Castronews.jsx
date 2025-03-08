import React from 'react';

const Castronews = () => {
  return (
    <div className="bg-gray-50 p-8 mt-32">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-800">Castro News</h1>
        <p className="text-gray-600 mt-2">Excepteur sint occaecat cupidatat non proident sunt</p>
        <div className="flex justify-center mt-2">
          <span className="w-16 border-b-2 border-gray-300"></span>
        </div>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Card 1 */}
        <div className="bg-white shadow-md rounded-lg overflow-hidden">
          <img
            src="https://images.pexels.com/photos/5706277/pexels-photo-5706277.jpeg?auto=compress&cs=tinysrgb&w=800"
            alt="Clothing"
            className="w-full h-48 object-cover"
          />
          <div className="p-6">
            <p className="text-sm text-gray-500 mb-2">May 05, 2020</p>
            <h2 className="text-xl font-semibold text-gray-800 mb-4">
              Why is a ticket to Lagos so expensive?
            </h2>
            <p className="text-sm text-gray-600 mb-4">
              by admin | 03 Comments
            </p>
            <p className="text-gray-600 text-sm">
              Tempor incididunt labore dolore magna aliqua. enim minim veniam quis nostrud exercitation laboris.
            </p>
            <button className="flex items-center text-blue-500 hover:underline mt-4">
              Read More
              <span className="ml-2">→</span>
            </button>
          </div>
        </div>

        {/* Card 2 */}
        <div className="bg-white shadow-md rounded-lg overflow-hidden">
          <img
            src="https://images.pexels.com/photos/17245493/pexels-photo-17245493/free-photo-of-a-man-wearing-sunglasses-and-a-green-sweater.jpeg?auto=compress&cs=tinysrgb&w=800"
            alt="Person"
            className="w-full h-48 object-cover"
          />
          <div className="p-6">
            <p className="text-sm text-gray-500 mb-2">May 04, 2020</p>
            <h2 className="text-xl font-semibold text-gray-800 mb-4">
              But I must explain to you how all this mistaken idea.
            </h2>
            <p className="text-sm text-gray-600 mb-4">
              by admin | 07 Comments
            </p>
            <p className="text-gray-600 text-sm">
              Tempor incididunt labore dolore magna aliqua. enim minim veniam quis nostrud exercitation laboris.
            </p>
            <button className="flex items-center text-blue-500 hover:underline mt-4">
              Read More
              <span className="ml-2">→</span>
            </button>
          </div>
        </div>

        {/* Card 3 */}
        <div className="bg-white shadow-md rounded-lg overflow-hidden">
          <img
            src="https://media.istockphoto.com/id/1293762741/photo/modern-living-room-interior-3d-render.jpg?b=1&s=612x612&w=0&k=20&c=Xn8GRsOPbIU6dXFusKB8R8UzWfSkbxgHjV3cRnGtMi8="
            alt="Interior"
            className="w-full h-48 object-cover"
          />
          <div className="p-6">
            <p className="text-sm text-gray-500 mb-2">May 03, 2020</p>
            <h2 className="text-xl font-semibold text-gray-800 mb-4">
              The Biebers Just Switched Up Their Couple Style
            </h2>
            <p className="text-sm text-gray-600 mb-4">
              by admin | 05 Comments
            </p>
            <p className="text-gray-600 text-sm">
              Tempor incididunt labore dolore magna aliqua. enim minim veniam quis nostrud exercitation laboris.
            </p>
            <button className="flex items-center text-blue-500 hover:underline mt-4">
              Read More
              <span className="ml-2">→</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Castronews;