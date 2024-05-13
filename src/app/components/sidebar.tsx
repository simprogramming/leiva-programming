// components/Sidebar.js
import Image from 'next/image';
import { FaLinkedin, FaInstagram, FaFacebook } from 'react-icons/fa';

const Sidebar = () => {
  return (
    <nav className="h-full w-1/6 bg-black text-white flex flex-col items-center p-4 fixed">
      <div className="mb-8">
        <Image
          src="/simprofile.jpg"
          alt="Profile Picture"
          width={150}
          height={150}
          className="rounded-full border-4 border-gray-700"
        />
      </div>
      <h1 className="text-xl font-bold mb-4">Simon Leiva</h1>
      <div className="flex flex-row items-center mb-8">
        <a href="https://www.linkedin.com" className="mr-4 hover:text-gray-400">
          <FaLinkedin size={30} />
        </a>
        <a href="https://www.instagram.com" className="mr-4 hover:text-gray-400">
          <FaInstagram size={30} />
        </a>
        <a href="https://www.facebook.com" className="mr-4 hover:text-gray-400">
          <FaFacebook size={30} />
        </a>
      </div>
      <ul className="w-full">
        <li className="mb-4">
          <a href="#home" className="w-full block text-center py-2 rounded hover:bg-gray-700">Home</a>
        </li>
        <li className="mb-4">
          <a href="#about" className="w-full block text-center py-2 rounded hover:bg-gray-700">About</a>
        </li>
        <li className="mb-4">
          <a href="#skills" className="w-full block text-center py-2 rounded hover:bg-gray-700">Skills</a>
        </li>
        <li className="mb-4">
          <a href="#portfolio" className="w-full block text-center py-2 rounded hover:bg-gray-700">Portfolio</a>
        </li>
        <li className="mb-4">
          <a href="#contact" className="w-full block text-center py-2 rounded hover:bg-gray-700">Contact</a>
        </li>
      </ul>
    </nav>
  );
};

export default Sidebar;
