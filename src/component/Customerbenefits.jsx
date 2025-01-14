import React from 'react';

const CustomerBenefits = () => {
  return (
    <div className="flex flex-wrap justify-between items-center p-6 bg-white border border-gray-200 rounded-lg shadow-sm mt-32">
      {/* Free Shipping */}
      <div className="flex flex-col items-center text-center w-1/4 px-4">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-12 h-12 text-gray-600">
          <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 15h16.5M3.75 15a2.25 2.25 0 01-2.25-2.25V8.25A2.25 2.25 0 013.75 6h12a2.25 2.25 0 012.25 2.25v4.5a2.25 2.25 0 012.25 2.25m-18 0v1.5a2.25 2.25 0 002.25 2.25h15a2.25 2.25 0 002.25-2.25V15m-4.5 0v1.5m-12 0v1.5m9-1.5h.008v.008H15v-.008z" />
        </svg>
        <h3 className="text-lg font-bold text-gray-800 mt-2">Free Shipping</h3>
        <p className="text-sm text-gray-500">Free shipping on orders over $100</p>
      </div>

      {/* Secure Payment */}
      <div className="flex flex-col items-center text-center w-1/4 px-4">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-12 h-12 text-gray-600">
          <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 9.75a3.75 3.75 0 00-7.5 0v1.5h7.5v-1.5zM9 12a3 3 0 013-3h0a3 3 0 013 3v6a3 3 0 01-6 0v-6z" />
        </svg>
        <h3 className="text-lg font-bold text-gray-800 mt-2">Secure Payment</h3>
        <p className="text-sm text-gray-500">We ensure secure payment with PEV</p>
      </div>

      {/* Support 24/7 */}
      <div className="flex flex-col items-center text-center w-1/4 px-4">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-12 h-12 text-gray-600">
          <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 15.75a3.75 3.75 0 116.75 0v3.75h-6.75v-3.75zm0 3.75h6.75v3.75m0-3.75v3.75" />
        </svg>
        <h3 className="text-lg font-bold text-gray-800 mt-2">Support 24/7</h3>
        <p className="text-sm text-gray-500">Contact us 24 hours a day, 7 days a week</p>
      </div>

      {/* 30 Days Return */}
      <div className="flex flex-col items-center text-center w-1/4 px-4">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-12 h-12 text-gray-600">
          <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 15h16.5m-16.5 0a2.25 2.25 0 01-2.25-2.25v-4.5A2.25 2.25 0 013.75 6h16.5a2.25 2.25 0 012.25 2.25v4.5A2.25 2.25 0 0119.75 15M6.75 6.75L12 12m0 0l5.25-5.25M12 12v6" />
        </svg>
        <h3 className="text-lg font-bold text-gray-800 mt-2">30 Days Return</h3>
        <p className="text-sm text-gray-500">Simply return it within 30 days for an exchange</p>
      </div>
    </div>
  );
};

export default CustomerBenefits;
