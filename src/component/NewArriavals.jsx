import React from 'react';
import { Link } from 'react-router-dom';

const NewArrivals = () => {
  const products = [
    {
      id: 1,
      name: 'Cold Crewneck Sweater',
      price: '$70.30',
      image: 'https://images.pexels.com/photos/2658451/pexels-photo-2658451.jpeg?auto=compress&cs=tinysrgb&w=1200',
      label: 'Best Seller',
    },
    {
      id: 2,
      name: 'Bow Tie',
      price: '$50.00',
      image: 'https://images.pexels.com/photos/161030/groom-wedding-marry-marriage-161030.jpeg?auto=compress&cs=tinysrgb&w=1200',
      label: 'New',
    },
    {
      id: 3,
      name: 'Moccasins',
      price: '$40.00',
      image: 'https://images.pexels.com/photos/10538743/pexels-photo-10538743.jpeg?auto=compress&cs=tinysrgb&w=1200',
      label: 'Top Rate',
    },
    {
      id: 4,
      name: 'Puffer Jacket',
      price: '$60.30',
      image: 'https://images.pexels.com/photos/7026775/pexels-photo-7026775.jpeg?auto=compress&cs=tinysrgb&w=1200',
      label: 'New',
    },
    {
      id: 4,
      name: 'Jean Jacket',
      price: '$45.80',
      image: 'https://images.pexels.com/photos/6843231/pexels-photo-6843231.jpeg?auto=compress&cs=tinysrgb&w=800',
      label: 'Top Rate',
    },
    {
      id: 4,
      name: 'Cargo Trousers',
      price: '$14.20',
      image: 'https://media.istockphoto.com/id/181865530/photo/cargo-pants.jpg?b=1&s=612x612&w=0&k=20&c=c--XvqpztNEYAf2oddL34abw0HEaRi371OOs4w790Pc=',
      label: 'Best Seller',
    },
    {
      id: 4,
      name: 'Turtle Neck',
      price: '$30.50',
      image: 'https://images.pexels.com/photos/10939146/pexels-photo-10939146.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      label: 'New',
    },
    {
      id: 4,
      name: 'Blue Geans Trouser',
      price: '$60.30',
      image: 'https://media.istockphoto.com/id/639511940/photo/beautiful-denim-pants.jpg?b=1&s=612x612&w=0&k=20&c=tqlxWhlI687DOAnrA4tw9_7oJmM_wVoLEb8REuvEACs=',
      label: 'Best Seller',
    },
  ];

  return (
      <div className="bg-gray-100 py-12">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Our Top Collection</h2>
          <p className="text-lg mb-14">There are some product that we featured for choose your best</p>

          {/* Updated Buttons with Hover Effects */}
          <div className="flex justify-center mb-10 space-x-4">
            <button className="px-4 py-2 bg-transparent text-black font-semibold rounded-lg hover:underline focus:underline hover transition delay-300 duration-300 ease-in-out">
              Best Seller
            </button>
            <button className="px-4 py-2 bg-transparent text-black font-semibold rounded-lg hover:underline focus:underline hover transition delay-300 duration-300 ease-in-out">
              New Arrivals
            </button>
            <button className="px-4 py-2 bg-transparent text-black font-semibold rounded-lg hover:underline focus:underline hover transition delay-300 duration-300 ease-in-out">
              Top Rate
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {products.map((product) => (
              <div key={product.id} className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="relative">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-56 object-cover"
                  />
                  <div className="absolute top-2 right-2 bg-blue-500 text-white px-3 py-1 rounded-full text-xs">
                    {product.label}
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="text-xl font-semibold">{product.name}</h3>
                  <p className="text-lg text-gray-600">{product.price}</p>
                  <button className="mt-4 w-full bg-black text-white py-2 rounded-full hover:bg-gray-800">
                    Add to Cart
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Center the View All Product button */}
          <div className="mt-11 flex justify-center">
          <Link to="/viewallproducts">
          <button className="flex items-center border border-black py-3 px-10 bg-white text-black rounded-lg hover:bg-gray-100">
              <span className="mr-2">View All Products</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="w-5 h-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                />
              </svg>
            </button>
          </Link>
          </div>
        </div>
      </div>
  );
};

export default NewArrivals;
