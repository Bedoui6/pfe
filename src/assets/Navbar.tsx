import React, { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import myImage from "./images/Logo.png";
import { Link } from "react-scroll"; // Import for smooth scrolling

const Navbar: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full bg-white shadow-md z-50 p-3">
      <div className="flex justify-between items-center py-4 px-6 md:px-12">
        {/* Logo */}
        <a href="/" className="text-4xl font-bold text-purple-600">
        <img src={myImage} alt="My Image" width="100" />
        </a>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6 text-black font-semibold">
          <li>
            <Link to="hero" smooth={true} duration={500} className="cursor-pointer hover:text-purple-500 transition-all duration-300">
              Home
            </Link>
          </li>
          <li>
            <Link to="features" smooth={true} duration={500} className="cursor-pointer hover:text-purple-500 transition-all duration-300">
              Features
            </Link>
          </li>
          <li>
          <a href="/faq" className="cursor-pointer hover:text-purple-500 transition-all duration-300">
            FAQs
          </a>
          </li>
          <li>
            <Link to="contact" smooth={true} duration={500} className="cursor-pointer hover:text-purple-500 transition-all duration-300">
              Get in touch
            </Link>
          </li>
        </ul>

        {/* Buttons */}
        <div className="hidden md:flex items-center space-x-4">
          <a href="#" className="bg-purple-600 text-white py-2 px-4 rounded-lg hover:bg-purple-700 transition-all duration-300">
            Download
          </a>
          <a href="/signin" className="text-purple-600 font-semibold hover:text-purple-800 transition-all duration-300">
            sign in
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden text-2xl text-black" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <AiOutlineClose /> : <AiOutlineMenu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white w-full absolute left-0 top-16 shadow-lg py-4 p-3">
          <ul className="flex flex-col space-y-4 text-left text-black font-semibold">
            <li>
              <Link to="hero" smooth={true} duration={500} className="cursor-pointer hover:text-purple-500" onClick={() => setMenuOpen(false)}>
                Home
              </Link>
            </li>
            <hr />
            <li>
              <Link to="features" smooth={true} duration={500} className="cursor-pointer hover:text-purple-500" onClick={() => setMenuOpen(false)}>
                Features
              </Link>
            </li>
            <hr />
            <li>
              <Link to="faqs" smooth={true} duration={500} className="cursor-pointer hover:text-purple-500" onClick={() => setMenuOpen(false)}>
                FAQs
              </Link>
            </li>
            <hr />
            <li>
              <Link to="contact" smooth={true} duration={500} className="cursor-pointer hover:text-purple-500" onClick={() => setMenuOpen(false)}>
                Get in touch
              </Link>
            </li>
            <hr />
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
