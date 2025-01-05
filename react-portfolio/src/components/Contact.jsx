import work from '../assets/work-1.png'

const Contact = () => {
  return (
    <div id="contact" className="w-full px-[12%] py-20 scroll-mt-20 bg-gray-100 dark:bg-gray-900 font-playfair">
      <div className="flex flex-col md:flex-row items-center justify-between">
        {/* Left Side: Image */}
        <div className="w-full md:w-1/2 mb-10 md:mb-0">
          <img
            src={work} 
            alt="Contact"
            className="w-full h-full object-cover rounded-md shadow-lg"
          />
        </div>

        {/* Right Side: Contact Form */}
        <div className="w-full md:w-1/2">
          <h4 className="text-center text-lg text-gray-600 dark:text-gray-300 mb-2">
            Connect With Me
          </h4>
          <h2 className="text-center text-5xl font-bold text-gray-800 dark:text-white mb-8">
            Get In Touch
          </h2>
          <p className="text-center max-w-md mx-auto text-gray-700 dark:text-gray-300 mb-16">
            I'm here to help you build your next project. Feel free to reach out to me using the form below, and I'll get back to you as soon as possible.
          </p>
          <form action="" className="max-w-md mx-auto space-y-6">
            <div className="flex flex-col space-y-4">
              <label htmlFor="name" className="text-sm font-medium text-gray-700 dark:text-gray-300">Name</label>
              <input
                id="name"
                type="text"
                placeholder="Enter Your Name"
                className="p-3 outline-none border border-gray-300 rounded-md bg-white focus:ring-2 focus:ring-indigo-500 dark:bg-gray-800 dark:border-gray-600 dark:focus:ring-indigo-400 dark:text-gray-100"
              />
            </div>
            <div className="flex flex-col space-y-4">
              <label htmlFor="email" className="text-sm font-medium text-gray-700 dark:text-gray-300">Email</label>
              <input
                id="email"
                type="email"
                placeholder="Enter Your Email"
                className="p-3 outline-none border border-gray-300 rounded-md bg-white focus:ring-2 focus:ring-indigo-500 dark:bg-gray-800 dark:border-gray-600 dark:focus:ring-indigo-400 dark:text-gray-100"
              />
            </div>
            <div className="flex flex-col space-y-4">
              <label htmlFor="message" className="text-sm font-medium text-gray-700 dark:text-gray-300">Message</label>
              <textarea
                 id="message"
                placeholder="Enter Your Message"
                rows="5"
                className="p-3 outline-none border border-gray-300 rounded-md bg-white resize-none focus:ring-2 focus:ring-indigo-500 dark:bg-gray-800 dark:border-gray-600 dark:focus:ring-indigo-400 dark:text-gray-100"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full py-3 px-4 bg-indigo-600 text-white font-semibold rounded-md hover:bg-indigo-700 transition duration-300 ease-in-out dark:bg-indigo-500 dark:hover:bg-indigo-600"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
