import { useState, useEffect } from 'react';
import logoLight from "../assets/logo.png"; 
import logoDark from "../assets/logo_dark.png";   
import arrowLight from "../assets/arrow-icon.png"; 
import arrowDark from "../assets/arrow-icon-dark.png";   
import moon from "../assets/moon_icon.png";
import sun from "../assets/sun_icon.png";
import menuLight from '../assets/menu-black.png'; // Light mode menu icon
import menuDark from '../assets/menu-white.png'; // Dark mode menu icon
import MobileMenu from "./MobileMenu";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Toggle mobile menu visibility
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Toggle theme mode
  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  // Apply dark mode class based on state
  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  return (
    <>
      <nav className="font-playfair w-full fixed px-5 lg:px-8 xl:px-[8%] py-4 flex items-center justify-between z-50 bg-white dark:bg-gray-900 shadow-md transition duration-200 ease-in-out">
        <img 
          src={isDarkMode ? logoDark : logoLight} 
          className="w-28 cursor-pointer mr-14" 
          alt="Logo" 
        />
        <ul className="hidden md:flex items-center gap-6 lg:gap-8 rounded-full px-12 py-3 bg-white shadow-sm bg-opacity-50 dark:bg-gray-800 dark:text-white">
          <li>
            <a href="#home" className="hover:text-gray-700 dark:hover:text-gray-300 transition duration-200 ease-in-out">Home</a>
          </li>
          <li>
            <a href="#about" className="hover:text-gray-700 dark:hover:text-gray-300 transition duration-200 ease-in-out">About us</a>
          </li>
          <li>
            <a href="#services" className="hover:text-gray-700 dark:hover:text-gray-300 transition duration-200 ease-in-out">Services</a>
          </li>
          <li>
            <a href="#mywork" className="hover:text-gray-700 dark:hover:text-gray-300 transition duration-200 ease-in-out">My Work</a>
          </li>
          <li>
            <a href="#contact" className="hover:text-gray-700 dark:hover:text-gray-300 transition duration-200 ease-in-out">Contact us</a>
          </li>
        </ul>
        <div className="flex items-center gap-6">
          <button onClick={toggleTheme}>
            <img src={isDarkMode ? sun : moon} alt="Toggle theme" className="w-6" />
          </button>
          <a
            href="#contact"
            className="hidden lg:flex items-center gap-3 px-10 py-2.5 border-2 border-gray-500 rounded-full ml-4 hover:bg-gray-100 dark:hover:bg-gray-700 dark:text-white transition duration-200 ease-in-out"
          >
            Contact Us <img src={isDarkMode ? arrowDark : arrowLight} alt="arrow" className="w-3" />
          </a>
          <button onClick={toggleMenu} className="block md:hidden ml-3">
            <img src={isDarkMode ? menuDark : menuLight} alt="menu-icon" className="w-6" />
          </button>
        </div>
        <MobileMenu toggleMenu={toggleMenu} isMenuOpen={isMenuOpen} />
      </nav>
    </>
  );
};

export default Navbar;
