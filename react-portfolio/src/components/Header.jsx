import profile from '../assets/profile-img.png';
import hand from '../assets/hand-icon.png';
import arrowLight from '../assets/right-arrow-white.png'; // Light mode arrow
import arrowDark from '../assets/right-arrow-dark.png'; // Dark mode arrow
import download from '../assets/download-icon.png';

const Header = () => {
  const isDarkMode = document.documentElement.classList.contains('dark'); // Check for dark mode

  return (
    <div className='w-full  text-center mx-auto h-screen flex flex-col items-center justify-center gap-8 p-6 font-playfair bg-white dark:bg-gray-900'>
      <img 
        src={profile} 
        alt="profile" 
        className='rounded-full w-40 h-40 border-4 border-gradient-to-r from-[#b820e6] to-[#da7d20] shadow-xl transform transition-transform hover:scale-105' 
      />
      <h3 className='flex items-center gap-2 text-2xl md:text-3xl font-semibold mb-4 text-gray-900 dark:text-white'>
        Hi! I'm Zahid Rahi <img src={hand} alt="hand" className='w-8 animate-pulse' />
      </h3>
      <h1 className='text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight text-gray-900 dark:text-white'>
        MERN Stack Developer from Pakistan
      </h1>
      <p className='max-w-3xl mx-auto text-lg md:text-xl mt-4 mb-8 text-gray-700 dark:text-gray-300'>
        Passionate developer with experience in building scalable web applications using modern technologies. Let's create something amazing together!
      </p>
      <div className='flex flex-col md:flex-row gap-4'>
        <a 
          href="#contact" 
          className='inline-flex items-center px-8 py-3 border rounded-full bg-gradient-to-r from-[#b820e6] to-[#da7d20] text-white font-semibold text-lg shadow-lg transition-transform duration-300 hover:scale-105 hover:shadow-xl dark:hover:shadow-lg'
        >
          Contact Us <img src={isDarkMode ? arrowDark : arrowLight} alt="arrow" className='w-5 ml-2' />
        </a>
        <a 
          href="/resume" download
          className='inline-flex items-center px-8 py-3 border border-gray-500 rounded-full text-gray-800 font-semibold text-lg shadow-lg transition-transform duration-300 hover:bg-gray-100 dark:bg-white dark:hover:bg-gray-100'
        >
          Resume <img src={download} alt="download" className='w-5 ml-2' />
        </a>
      </div>
    </div>
  );
};

export default Header;
