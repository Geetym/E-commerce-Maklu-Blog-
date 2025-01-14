import React from 'react';

const Endofseason = () => {
  return (
    <div className="relative bg-gray-100">
      {/* Full Section Wrapper */}
      <div
        className="flex items-center justify-center h-[80vh] bg-cover bg-center"
        style={{
          backgroundImage:
            'url(https://images.pexels.com/photos/8201201/pexels-photo-8201201.jpeg?auto=compress&cs=tinysrgb&w=800)',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          imageRendering: 'crisp-edges',
        }}
      >
        {/* Centered Content */}
        <div className="bg-white bg-opacity-90 p-8 rounded-lg shadow-lg w-[90%] md:w-[60%] text-center">
          <h1 className="text-4xl font-bold mb-4">End of Season Clearance Sale</h1>
          <p className="text-2xl font-semibold text-gray-700 mb-4">upto 50%</p>
          <p className="text-gray-600 text-sm mb-6">
            Welcome to the new range of shaving products from master barber.
            We have over three decades of experience in the male grooming industry.
          </p>
          <button className="bg-black text-white py-3 px-6 rounded-full text-sm font-semibold hover:bg-gray-800 transition">
            Shop Now <span aria-hidden="true">→</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Endofseason;