import React from 'react';
import { FaGooglePlay, FaApple, FaFacebook, FaTwitter, FaInstagram, FaYoutube } from 'react-icons/fa';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white py-12 p-3 relative top-[200px]">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
        
        {/* Download Section */}
        <div>
          <h2 className="text-xl font-bold">Download Deenee</h2>
          <div className="mt-4 space-y-3">
            <a href="#" className="flex items-center bg-gray-800 hover:bg-gray-700 text-white px-4 py-2 rounded-lg w-48">
              <FaGooglePlay className="text-xl mr-2" />
              <span>Get it on Google Play</span>
            </a>
            <a href="#" className="flex items-center bg-gray-800 hover:bg-gray-700 text-white px-4 py-2 rounded-lg w-48">
              <FaApple className="text-xl mr-2" />
              <span>Download on the App Store</span>
            </a>
          </div>
        </div>

        {/* Support Links */}
        <div>
          <h2 className="text-xl font-bold">Support</h2>
          <ul className="mt-4 space-y-2 text-gray-400">
            <li><a href="#" className="hover:text-white">FAQs</a></li>
            <li><a href="#" className="hover:text-white">Terms of Service</a></li>
            <li><a href="#" className="hover:text-white">Privacy Policy</a></li>
          </ul>

          <h2 className="text-xl font-bold mt-6">We are social</h2>
          <div className="flex space-x-4 mt-3">
            <a href="#" className="text-gray-400 hover:text-white"><FaFacebook size={20} /></a>
            <a href="#" className="text-gray-400 hover:text-white"><FaTwitter size={20} /></a>
            <a href="#" className="text-gray-400 hover:text-white"><FaInstagram size={20} /></a>
            <a href="#" className="text-gray-400 hover:text-white"><FaYoutube size={20} /></a>
          </div>
        </div>

        {/* Newsletter Subscription */}
        <div>
          <h2 className="text-xl font-bold">SUBSCRIBE TO OUR NEWSLETTER!</h2>
          <form className="mt-4 space-y-3">
            <input 
              type="text" 
              placeholder="Name" 
              className="w-full px-4 py-2 rounded-lg bg-gray-800 text-white border border-gray-600 focus:border-white focus:outline-none"
            />
            <input 
              type="email" 
              placeholder="Email" 
              className="w-full px-4 py-2 rounded-lg bg-gray-800 text-white border border-gray-600 focus:border-white focus:outline-none"
            />
            <button className="w-full bg-purple-600 hover:bg-purple-500 text-white font-semibold px-4 py-2 rounded-lg">
              Subscribe
            </button>
          </form>
        </div>

      </div>

      {/* Copyright */}
      <div className="text-center text-gray-500 text-sm mt-8">
        © {new Date().getFullYear()} YAKIN. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
