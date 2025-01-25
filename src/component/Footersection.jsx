import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faTwitter, faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";

const Footersection = () => {
  return (
    <footer className="bg-white">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 mt-40">
        {/* Logo Section */}
        <div>
          <h1 className="text-xl font-bold text-black">
            Maklu Blog<span className="text-red-500">.</span>
          </h1>
        </div>

        {/* Category Section */}
        <div>
          <h3 className="text-lg font-semibold text-black mb-4">Category</h3>
          <ul className="space-y-2">
            <li>Men</li>
            <li>Women</li>
            <li>Kids</li>
            <li>Accessories</li>
            <li>Shoe</li>
          </ul>
        </div>

        {/* Useful Link Section */}
        <div>
          <h3 className="text-lg font-semibold text-black mb-4">Useful Link</h3>
          <ul className="space-y-2">
            <li>News & Tips</li>
            <li>About Us</li>
            <li>Terms & Conditions</li>
            <li>Our Shop</li>
            <li>Contact Us</li>
          </ul>
        </div>

        {/* Contact Section */}
        <div>
          <h3 className="text-lg font-semibold text-black mb-4">Contact</h3>
          <p className="text-sm">4708 Ruecker Wall, Kassandratown, HI</p>
          <p className="text-sm">+2(305) 587-3407</p>
          <p className="text-sm">info@example.com</p>
          <div className="flex space-x-4 mt-4">
            <a
              href="https://www.facebook.com/profile.php?id=100093187556660&mibextid=ZbWKwL"
              className="text-blue-700 hover:text-[#ff4136]"
            >
              <FontAwesomeIcon icon={faFacebook} />
            </a>
            <a
              href="https://x.com/Gee_tym?t=i3IsG8nTSEQerHo2Q7sWVg&s=09"
              className="text-blue-700 hover:text-[#ff4136]"
            >
              <FontAwesomeIcon icon={faTwitter} />
            </a>
            <a
              href="Wa.me/+234 9130032227"
              className="text-blue-700 hover:text-[#ff4136]"
            >
              <FontAwesomeIcon icon={faWhatsapp} />
            </a>
          </div>
        </div>

        {/* Newsletter Section */}
        <div>
          <h3 className="text-lg font-semibold text-black mb-4">Newsletter</h3>
          <p className="text-sm">4708 Ruecker Wall, Kassandratown, HI 97729</p>
          <div className="mt-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-black"
            />
            <button className="bg-black text-white px-4 py-2 rounded-md mt-2 w-full hover:bg-gray-800">
              Subscribe
            </button>
          </div>
        </div>
      </div>

      {/* Footer Payment Methods and Copyright */}
      <div className="bg-[#ebeceb] mt-10 py-3">
        <div className="max-w-7xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between space-y-4 sm:space-y-0">
          {/* Payment Icons */}
          <div className="flex space-x-6 ">
            <Link to={"/americanexpresscard"}>
              <img
                src="data:image/png;base64,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"
                alt="American Express"
                className="w-16 h-11"
              />
            </Link>
           
           <Link to={"/visacard"}>
            <img
                src="data:image/jpeg;base64,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"
                alt="Visa"
                className="w-16 h-11"
              />
           </Link>
            
            <Link to={"/vervecard"}>
              <img
                src="data:image/png;base64,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"
                alt="Verve"
                className="w-16 h-11"
              />
            </Link>
           
           <Link to={"/mastercard"}>
              <img
                src="data:image/png;base64,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"
                alt="Master card"
                className="w-16 h-11"
              />
           </Link>
           
          </div>

          {/* Copyright Text */}
          <p className="text-base text-[rgb(132,132,132)] font-medium text-center sm:text-right">
            Maklu Blog © 2025 All Right Reserved
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footersection;
