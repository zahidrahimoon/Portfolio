import ServiceCard from './ServiceCard';
import webicon from '../assets/web-icon.png';
import mobileicon from '../assets/mobile-icon.png';
import uiux from '../assets/ui-icon.png';
import graphics from '../assets/graphics-icon.png';

const Services = () => {
  return (
    <div id="services" className="w-full px-[12%] py-20 bg-gray-50 dark:bg-gray-900 scroll-mt-20 font-playfair">
      <h4 className="text-center text-lg text-gray-600 dark:text-gray-300 mb-2">
        What I Offer
      </h4>
      <h2 className="text-center text-5xl font-bold text-gray-800 dark:text-white mb-8">
        My Services
      </h2>
      <p className='text-center max-w-2xl mx-auto text-gray-700 dark:text-gray-300 mb-16'>
        As a versatile web developer, I offer a range of services to help you establish and enhance your online presence. From intuitive web designs to robust backend solutions, I am here to cater to your digital needs.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 my-10">
        <ServiceCard
          icon={webicon}
          title="Web Design"
          description="Creating visually appealing and user-friendly web designs tailored to your brand's identity and goals."
          gradientFrom="from-indigo-100"
          gradientTo="to-purple-100"
          linkColor="text-indigo-600 dark:text-indigo-300"
        />
        <ServiceCard
          icon={mobileicon}
          title="Mobile App Development"
          description="Developing responsive and engaging mobile applications that provide a seamless user experience across devices."
          gradientFrom="from-green-100"
          gradientTo="to-blue-100"
          linkColor="text-green-600 dark:text-green-300"
        />
        <ServiceCard
          icon={uiux}
          title="UI/UX Design"
          description="Crafting intuitive user interfaces and engaging user experiences to enhance usability and satisfaction."
          gradientFrom="from-yellow-100"
          gradientTo="to-orange-100"
          linkColor="text-yellow-600 dark:text-yellow-300"
        />
        <ServiceCard
          icon={graphics}
          title="Graphics Design"
          description="Delivering creative graphic design solutions that bring your visual ideas to life and communicate your brand effectively."
          gradientFrom="from-pink-100"
          gradientTo="to-red-100"
          linkColor="text-pink-600 dark:text-pink-300"
        />
      </div>
    </div>
  );
};

export default Services;
