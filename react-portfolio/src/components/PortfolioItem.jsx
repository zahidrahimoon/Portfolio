import PropTypes from 'prop-types';
import sendicon from '../assets/send-icon.png';

const PortfolioItem = ({ image, title, subtitle }) => {
  return (
    <div className="aspect-square bg-no-repeat bg-center bg-cover rounded-lg relative cursor-pointer group"
         style={{ backgroundImage: `url(${image})` }}>
      <div className="bg-white dark:bg-gray-800 w-10/12 rounded-md absolute bottom-5 left-1/2 transform -translate-x-1/2 py-3 px-5 flex items-center justify-between duration-500 group-hover:bottom-7 shadow-md transition-transform">
        <div>
          <h2 className="font-semibold text-gray-800 dark:text-white">{title}</h2>
          <p className="text-sm text-gray-700 dark:text-gray-400">{subtitle}</p>
        </div>
        <div className="border rounded-full border-black dark:border-white w-9 aspect-square flex items-center justify-center shadow-[2px_2px_0_#000] dark:shadow-[2px_2px_0_#fff] group-hover:bg-gray-200 dark:group-hover:bg-gray-700 transition">
          <img src={sendicon} alt="send icon" className="w-5" />
        </div>
      </div>
    </div>
  );
};

PortfolioItem.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
};

export default PortfolioItem;
