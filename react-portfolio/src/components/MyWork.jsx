import { useState } from 'react';
import PortfolioItem from './PortfolioItem';
import work1 from '../assets/work-1.png';
import work2 from '../assets/work-2.png';
import work3 from '../assets/work-3.png';
import work4 from '../assets/work-4.png';
import work5 from '../assets/work-1.png';
import work6 from '../assets/work-2.png';

const MyWork = () => {
  const [showAll, setShowAll] = useState(false);

  const toggleShowAll = () => {
    setShowAll(!showAll);
  };

  const projects = [
    { id: 1, image: work1, title: 'Frontend Development', subtitle: 'Web Design' },
    { id: 2, image: work2, title: 'Backend Development', subtitle: 'API Integration' },
    { id: 3, image: work3, title: 'UI/UX Design', subtitle: 'Mobile App' },
    { id: 4, image: work4, title: 'Full Stack Project', subtitle: 'E-commerce' },
    { id: 5, image: work5, title: 'React Application', subtitle: 'Interactive UI' },
    { id: 6, image: work6, title: 'Node.js Backend', subtitle: 'RESTful API' },
  ];

  const visibleProjects = showAll ? projects : projects.slice(0, 4);

  return (
    <div
      id="mywork"
      className="w-full px-[12%] py-20 bg-gray-50 dark:bg-gray-900 scroll-mt-20 font-playfair relative overflow-hidden"
    >
      <h4 className="text-center text-lg text-gray-600 dark:text-gray-300 mb-2">
        My Portfolio
      </h4>
      <h2 className="text-center text-5xl font-bold text-gray-800 dark:text-white mb-8">
        My Latest Work
      </h2>
      <p className="text-center max-w-2xl mx-auto text-gray-700 dark:text-gray-300 mb-16">
        As a versatile web developer, I offer a range of services to help you
        establish and enhance your online presence. From intuitive web designs
        to robust backend solutions, I am here to cater to your digital needs.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 my-10">
        {visibleProjects.map((project) => (
          <PortfolioItem
            key={project.id}
            image={project.image}
            title={project.title}
            subtitle={project.subtitle}
          />
        ))}
      </div>

      <div className='absolute -top-20 -left-20 w-96 h-96 bg-purple-300 rounded-full opacity-20 filter blur-3xl z-0'></div>
      <div className='absolute -bottom-20 -right-20 w-96 h-96 bg-orange-300 rounded-full opacity-20 filter blur-3xl z-0'></div>

      <button onClick={toggleShowAll} className='w-max flex items-center justify-center gap-2 text-gray-700 border-[0.5px] border-gray-700 rounded-full py-3 px-10 mx-auto my-20'>
        {showAll ? 'Show Less' : 'Show More'}
      </button>
    </div>
  );
};

export default MyWork;
