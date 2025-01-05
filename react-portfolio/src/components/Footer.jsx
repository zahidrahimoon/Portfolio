import { FaFacebook, FaInstagram, FaWhatsapp, FaTwitter, FaTiktok } from 'react-icons/fa';
import logo from '../assets/logo.png';

const Footer = () => {
  return (
    <footer className="w-full bg-gray-200 dark:bg-gray-800 text-gray-800 dark:text-gray-300 py-10 px-[12%]">
      <div className="flex flex-col md:flex-row justify-between items-center">
        {/* Logo and Description */}
        <div className="mb-8 md:mb-0">
          <img
            src={logo}
            alt="Logo"
            className="w-32 h-auto mb-4"
          />
          <p className="text-sm max-w-xs text-gray-700 dark:text-gray-300">
            Your Company is committed to providing the best service possible. Follow us on social media for updates and offers.
          </p>
        </div>

        {/* Social Media Links */}
        <div className="flex space-x-6">
          <a
            href="https://www.facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-indigo-600 dark:text-gray-300 dark:hover:text-indigo-400 transition duration-300"
          >
            <FaFacebook size={24} />
          </a>
          <a
            href="https://www.instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-indigo-600 dark:text-gray-300 dark:hover:text-indigo-400 transition duration-300"
          >
            <FaInstagram size={24} />
          </a>
          <a
            href="https://www.whatsapp.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-indigo-600 dark:text-gray-300 dark:hover:text-indigo-400 transition duration-300"
          >
            <FaWhatsapp size={24} />
          </a>
          <a
            href="https://www.twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-indigo-600 dark:text-gray-300 dark:hover:text-indigo-400 transition duration-300"
          >
            <FaTwitter size={24} />
          </a>
          <a
            href="https://www.tiktok.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-indigo-600 dark:text-gray-300 dark:hover:text-indigo-400 transition duration-300"
          >
            <FaTiktok size={24} />
          </a>
        </div>
      </div>

      {/* Copyright Information */}
      <div className="mt-8 text-center text-xs text-gray-600 dark:text-gray-500">
        © {new Date().getFullYear()} Your Company. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
