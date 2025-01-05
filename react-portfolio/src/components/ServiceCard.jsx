import arrowright from '../assets/right-arrow-bold.png';

const ServiceCard = ({ icon, title, description, gradientFrom, gradientTo, linkColor }) => {
  return (
    <div className={`border border-gray-300 dark:border-gray-700 rounded-lg p-8 hover:shadow-lg cursor-pointer hover:bg-gradient-to-r ${gradientFrom} ${gradientTo} dark:hover:from-indigo-700 dark:hover:to-purple-700 hover:-translate-y-1 duration-300`}>
      <img src={icon} alt={`${title} Icon`} className='w-12 mb-4'/>
      <h3 className='text-xl font-semibold mb-2 text-gray-800 dark:text-gray-100'>{title}</h3>
      <p className='text-sm leading-6 text-gray-600 dark:text-gray-300'>
        {description}
      </p>
      <a href="#home" className={`flex items-center gap-2 text-sm mt-4 ${linkColor}`}>
        Read More <img src={arrowright} alt="Arrow Icon" className='w-4'/>
      </a>
    </div>
  );
};

export default ServiceCard;
