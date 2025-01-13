export default function Footer() {
  return (
    <footer className="bg-white px-5 py-8">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
        <div className="font-semibold text-xl">Landing</div>
        <div className="flex space-x-8">
          <a href="#home" className="text-gray-700 hover:text-gray-900">
            Home
          </a>
          <a href="#about" className="text-gray-700 hover:text-gray-900">
            About
          </a>
          <a href="#contact" className="text-gray-700 hover:text-gray-900">
            Contact
          </a>
        </div>
        <div className="flex space-x-4">
          <a href="#" className="text-gray-400 hover:text-gray-600">
            <img src="/api/placeholder/24/24" alt="Facebook" />
          </a>
          <a href="#" className="text-gray-400 hover:text-gray-600">
            <img src="/api/placeholder/24/24" alt="Twitter" />
          </a>
          <a href="#" className="text-gray-400 hover:text-gray-600">
            <img src="/api/placeholder/24/24" alt="Instagram" />
          </a>
        </div>
      </div>
    </footer>
  );
}
