import React from 'react'
import Nav from './Nav'

const Hero = () => {
  return (
    <div className="font-sans bg-gray-50">
      <Nav />
    {/* Nesting of my Nav */}
  {/* this was where i nested  nav in this section */}
  {/* Hero Section */}
  <section className="bg-gradient-to-r from-blue-500 to-purple-500 text-white text-center py-20">
    <h1 className="text-5xl font-bold mb-4"><span className='text-8xl font-mono'>W</span>elcome to <span className='font-serif'>Maklu Blog!</span></h1>
    <p className="text-lg mb-8">Explore a curated collection of top products. Shop now and discover amazing deals!</p>
    <a href="#products" className="bg-yellow-500 text-black py-2 px-6 rounded-full hover:bg-yellow-400 transition">Shop Now</a>
  </section>

  {/* Featured Products Section */}
  <section id="products" className="py-16 px-4">
    <h2 className="text-3xl font-semibold text-center mb-12">Featured Products</h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
      {/* Product 1 */}
      <div className="bg-white rounded-lg shadow-lg overflow-hidden">
        <img src="https://images.pexels.com/photos/19374318/pexels-photo-19374318/free-photo-of-nike-air-jordan-i-in-with-green-elements.jpeg?auto=compress&cs=tinysrgb&w=800" alt="Product 1" className="w-full h-48 object-cover" />
        <div className="p-4">
          <h3 className="text-xl font-semibold">Product 1</h3>
          <p className="text-gray-600">$199.99</p>
          <button className="bg-blue-500 text-white py-2 px-4 rounded-full mt-4 hover:bg-blue-400 transition">Add to Cart</button>
        </div>
      </div>

      {/* Product 2 */}
      <div className="bg-white rounded-lg shadow-lg overflow-hidden">
        <img src="https://images.pexels.com/photos/4252970/pexels-photo-4252970.jpeg?auto=compress&cs=tinysrgb&w=800" alt="Product 2" className="w-full h-48 object-cover" />
        <div className="p-4">
          <h3 className="text-xl font-semibold">Product 2</h3>
          <p className="text-gray-600">$249.99</p>
          <button className="bg-blue-500 text-white py-2 px-4 rounded-full mt-4 hover:bg-blue-400 transition">Add to Cart</button>
        </div>
      </div>

      {/* Product 3 */}
      <div className="bg-white rounded-lg shadow-lg overflow-hidden">
        <img src="https://images.pexels.com/photos/9252069/pexels-photo-9252069.png?auto=compress&cs=tinysrgb&w=800" alt="Product 3" className="w-full h-48 object-cover" />
        <div className="p-4">
          <h3 className="text-xl font-semibold">Product 3</h3>
          <p className="text-gray-600">$149.99</p>
          <button className="bg-blue-500 text-white py-2 px-4 rounded-full mt-4 hover:bg-blue-400 transition">Add to Cart</button>
        </div>
      </div>

      {/* Product 4 */}
      <div className="bg-white rounded-lg shadow-lg overflow-hidden">
        <img src="https://images.pexels.com/photos/7543639/pexels-photo-7543639.jpeg?auto=compress&cs=tinysrgb&w=800" alt="Product 4" className="w-full h-48 object-cover" />
        <div className="p-4">
          <h3 className="text-xl font-semibold">Product 4</h3>
          <p className="text-gray-600">$99.99</p>
          <button className="bg-blue-500 text-white py-2 px-4 rounded-full mt-4 hover:bg-blue-400 transition">Add to Cart</button>
        </div>
      </div>
    </div>
  </section>
</div>
  )
}

export default Hero