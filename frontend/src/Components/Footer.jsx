const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-4 bottom-0 relative">
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} E-Cart. All rights reserved.
        </p>
        <div className="flex space-x-4 mt-2 md:mt-0">
          <a href="/" className="hover:underline text-sm">
            Home
          </a>
         
        </div>
      </div>
    </footer>
  );
};

export default Footer;
