import React, { useState } from 'react';

const Americanexpress = () => {
  const [formData, setFormData] = useState({
    cardNumber: '',
    cardHolder: '',
    expirationMonth: '',
    expirationYear: '',
    cvv: '',
    firstName: '',
    lastName: '',
    address: '',
    city: '',
    postalCode: '',
    state: '',
    phone: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('American Express card details submitted:', formData);
  };

  return (
    <div className="max-w-lg mx-auto p-6 bg-white shadow-md rounded-lg">
      <h2 className="text-2xl font-bold text-center mb-6">Add American Express Payment</h2>
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Card Information */}
        <div>
          <label htmlFor="cardNumber" className="block mb-2 text-sm font-medium text-gray-700">
            Card Number
          </label>
          <input
            type="text"
            id="cardNumber"
            name="cardNumber"
            value={formData.cardNumber}
            onChange={handleChange}
            placeholder="1234 567890 12345"
            maxLength="15"
            required
            className="w-full p-3 border rounded-md focus:ring-blue-500 focus:border-blue-500"
          />
        </div>
        <div>
          <label htmlFor="cardHolder" className="block mb-2 text-sm font-medium text-gray-700">
            Cardholder Name
          </label>
          <input
            type="text"
            id="cardHolder"
            name="cardHolder"
            value={formData.cardHolder}
            onChange={handleChange}
            placeholder="Your Name"
            required
            className="w-full p-3 border rounded-md focus:ring-blue-500 focus:border-blue-500"
          />
        </div>
        <div className="flex gap-4">
          <div className="flex-1">
            <label htmlFor="expirationMonth" className="block mb-2 text-sm font-medium text-gray-700">
              Expiration Month
            </label>
            <select
              id="expirationMonth"
              name="expirationMonth"
              value={formData.expirationMonth}
              onChange={handleChange}
              required
              className="w-full p-3 border rounded-md focus:ring-blue-500 focus:border-blue-500"
            >
              <option value="" disabled>
                Month
              </option>
              {[...Array(12).keys()].map((month) => (
                <option key={month + 1} value={month + 1}>
                  {month + 1}
                </option>
              ))}
            </select>
          </div>
          <div className="flex-1">
            <label htmlFor="expirationYear" className="block mb-2 text-sm font-medium text-gray-700">
              Expiration Year
            </label>
            <select
              id="expirationYear"
              name="expirationYear"
              value={formData.expirationYear}
              onChange={handleChange}
              required
              className="w-full p-3 border rounded-md focus:ring-blue-500 focus:border-blue-500"
            >
              <option value="" disabled>
                Year
              </option>
              {Array.from({ length: 10 }, (_, i) => new Date().getFullYear() + i).map((year) => (
                <option key={year} value={year}>
                  {year}
                </option>
              ))}
            </select>
          </div>
          <div className="flex-1">
            <label htmlFor="cvv" className="block mb-2 text-sm font-medium text-gray-700">
              CVV
            </label>
            <input
              type="password"
              id="cvv"
              name="cvv"
              value={formData.cvv}
              onChange={handleChange}
              placeholder="1234"
              maxLength="4"
              required
              className="w-full p-3 border rounded-md focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
        </div>

        {/* Billing Address */}
        <div>
          <label htmlFor="firstName" className="block mb-2 text-sm font-medium text-gray-700">
            First Name
          </label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            placeholder="First Name"
            required
            className="w-full p-3 border rounded-md focus:ring-blue-500 focus:border-blue-500"
          />
        </div>
        <div>
          <label htmlFor="lastName" className="block mb-2 text-sm font-medium text-gray-700">
            Last Name
          </label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            placeholder="Last Name"
            required
            className="w-full p-3 border rounded-md focus:ring-blue-500 focus:border-blue-500"
          />
        </div>
        <div>
          <label htmlFor="address" className="block mb-2 text-sm font-medium text-gray-700">
            Billing Address
          </label>
          <input
            type="text"
            id="address"
            name="address"
            value={formData.address}
            onChange={handleChange}
            placeholder="Billing Address"
            required
            className="w-full p-3 border rounded-md focus:ring-blue-500 focus:border-blue-500"
          />
        </div>
        <div>
          <label htmlFor="city" className="block mb-2 text-sm font-medium text-gray-700">
            City
          </label>
          <input
            type="text"
            id="city"
            name="city"
            value={formData.city}
            onChange={handleChange}
            placeholder="City"
            required
            className="w-full p-3 border rounded-md focus:ring-blue-500 focus:border-blue-500"
          />
        </div>
        <div className="flex gap-4">
          <div className="flex-1">
            <label htmlFor="state" className="block mb-2 text-sm font-medium text-gray-700">
              State
            </label>
            <input
              type="text"
              id="state"
              name="state"
              value={formData.state}
              onChange={handleChange}
              placeholder="State"
              required
              className="w-full p-3 border rounded-md focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
          <div className="flex-1">
            <label htmlFor="postalCode" className="block mb-2 text-sm font-medium text-gray-700">
              Postal Code
            </label>
            <input
              type="text"
              id="postalCode"
              name="postalCode"
              value={formData.postalCode}
              onChange={handleChange}
              placeholder="Postal Code"
              required
              className="w-full p-3 border rounded-md focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
        </div>
        <div>
          <label htmlFor="phone" className="block mb-2 text-sm font-medium text-gray-700">
            Phone
          </label>
          <input
            type="text"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="Phone Number"
            required
            className="w-full p-3 border rounded-md focus:ring-blue-500 focus:border-blue-500"
          />
        </div>

        <button
          type="submit"
          className="w-full py-3 bg-blue-500 text-white font-bold rounded-md hover:bg-blue-600"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Americanexpress;
