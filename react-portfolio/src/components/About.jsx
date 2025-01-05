import userimg from '../assets/user-image.png';
import codeicon from '../assets/code-icon.png';
import edu from '../assets/edu-icon.png';
import project from '../assets/project-icon.png';
import vscode from '../assets/vscode.png';
import firebase from '../assets/firebase.png';
import figma from '../assets/figma.png';
import dbIcon from '../assets/mongodb.png';
import git from '../assets/git.png';
import circulartext from '../assets/circular-text.png';
import dev from '../assets/dev-icon.png';

const About = () => {
  return (
    <div id='about' className='w-full px-[12%] py-16 bg-gray-50 dark:bg-gray-800 font-playfair relative overflow-hidden'>
      <h4 className='text-center text-lg text-gray-600 dark:text-gray-300 mb-2'>Introduction</h4>
      <h2 className='text-center text-5xl font-bold text-gray-800 dark:text-white mb-12'>About Me</h2>

      <div className="flex flex-col lg:flex-row items-center gap-16 my-20 relative z-10">
        <div className='max-w-max mx-auto relative'>
          <img src={userimg} alt="User Profile" className='w-64 sm:w-80 rounded-3xl shadow-lg max-w-none' />
          <div className="bg-white w-1/2 aspect-square absolute right-0 bottom-0 rounded-full translate-x-1/4 translate-y-1/3 shadow-[0_4px_55px_rgba(149,0,162,0.15)] flex items-center justify-center">
            <img src={circulartext} alt="circulartext" className='w-full' />
            <img src={dev} alt="Developer Icon" className='w-1/4 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2' />
          </div>
        </div>
        <div className="flex-1 text-center lg:text-left">
          <p className='mb-10 max-w-2xl text-gray-700 dark:text-gray-200 leading-relaxed'>
            Hello! I'm a passionate developer with a knack for building robust and scalable web applications. My expertise spans both frontend and backend technologies, allowing me to create seamless, user-friendly, and efficient solutions. I love turning complex problems into elegant solutions and crafting user experiences that are both engaging and intuitive.
          </p>
          <ul className='grid grid-cols-1 md:grid-cols-3 gap-6'>
            <li className='border-[0.5px] border-gray-400 rounded-xl p-6 cursor-pointer hover:bg-[#fcf4ff] dark:hover:bg-gray-700 transition duration-500 hover:shadow-lg transform hover:-translate-y-1'>
              <img src={codeicon} alt="Code Icon" className='w-10 mb-4 mx-auto lg:mx-0' />
              <h3 className='text-xl font-semibold text-gray-700 dark:text-gray-300'>Programming Languages</h3>
              <p className='text-gray-600 dark:text-gray-400 text-sm mt-2'>HTML, CSS, JavaScript, TypeScript</p>
            </li>
            <li className='border-[0.5px] border-gray-400 rounded-xl p-6 cursor-pointer hover:bg-[#fcf4ff] dark:hover:bg-gray-700 transition duration-500 hover:shadow-lg transform hover:-translate-y-1'>
              <img src={edu} alt="Education Icon" className='w-10 mb-4 mx-auto lg:mx-0' />
              <h3 className='text-xl font-semibold text-gray-700 dark:text-gray-300'>Education</h3>
              <p className='text-gray-600 dark:text-gray-400 text-sm mt-2'>BS in Computer Science</p>
            </li>
            <li className='border-[0.5px] border-gray-400 rounded-xl p-6 cursor-pointer hover:bg-[#fcf4ff] dark:hover:bg-gray-700 transition duration-500 hover:shadow-lg transform hover:-translate-y-1'>
              <img src={project} alt="Projects Icon" className='w-10 mb-4 mx-auto lg:mx-0' />
              <h3 className='text-xl font-semibold text-gray-700 dark:text-gray-300'>Projects</h3>
              <p className='text-gray-600 dark:text-gray-400 text-sm mt-2'>E-commerce Website, Portfolio, Todo App</p>
            </li>
          </ul>

          <h4 className='my-6 text-2xl font-semibold text-gray-700 dark:text-gray-300'>Tools I Use</h4>
          <ul className='flex flex-wrap justify-center lg:justify-start gap-4'>
            <li className='flex items-center justify-center w-12 sm:w-14 aspect-square border border-gray-500 rounded-lg cursor-pointer hover:-translate-y-1 duration-500'>
              <img src={vscode} alt="VS Code" className='w-5 sm:w-7' />
            </li>
            <li className='flex items-center justify-center w-12 sm:w-14 aspect-square border border-gray-500 rounded-lg cursor-pointer hover:-translate-y-1 duration-500'>
              <img src={firebase} alt="Firebase" className='w-5 sm:w-7' />
            </li>
            <li className='flex items-center justify-center w-12 sm:w-14 aspect-square border border-gray-500 rounded-lg cursor-pointer hover:-translate-y-1 duration-500'>
              <img src={figma} alt="Figma" className='w-5 sm:w-7' />
            </li>
            <li className='flex items-center justify-center w-12 sm:w-14 aspect-square border border-gray-500 rounded-lg cursor-pointer hover:-translate-y-1 duration-500'>
              <img src={dbIcon} alt="MongoDB" className='w-5 sm:w-7' />
            </li>
            <li className='flex items-center justify-center w-12 sm:w-14 aspect-square border border-gray-500 rounded-lg cursor-pointer hover:-translate-y-1 duration-500'>
              <img src={git} alt="Git" className='w-5 sm:w-7' />
            </li>
          </ul>
        </div>
      </div>

      {/* Background Decoration */}
      <div className='absolute -top-20 -left-20 w-96 h-96 bg-purple-300 rounded-full opacity-20 filter blur-3xl z-0'></div>
      <div className='absolute -bottom-20 -right-20 w-96 h-96 bg-orange-300 rounded-full opacity-20 filter blur-3xl z-0'></div>
    </div>
  );
};

export default About;
