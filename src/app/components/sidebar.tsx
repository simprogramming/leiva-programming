"use client";
import SocialMediaIcons from './SocialMediaIcons';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import { FaLinkedin, FaInstagram, FaGithub, FaHome, FaUser, FaBriefcase, FaEnvelope, FaTools, FaBars } from 'react-icons/fa';

const Sidebar = () => {
  const [activeSection, setActiveSection] = useState('');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'portfolio', 'skills'];
      let currentSection = '';

      sections.forEach((section) => {
        const element = document.getElementById(section);
        if (element && window.scrollY >= element.offsetTop - 100) {
          currentSection = section;
        }
      });

      setActiveSection(currentSection);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, section: string) => {
    e.preventDefault();
    const element = document.getElementById(section);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(section);
    }
    setIsDropdownOpen(false); // Close the dropdown after clicking a link
  };

  return (
    <>
      <div className="lg:hidden flex justify-between items-center p-4 bg-black text-white fixed top-0 left-0 right-0 z-50">
        <h1 className="text-xl font-bold">Simon Leiva</h1>
        <button onClick={() => setIsDropdownOpen(!isDropdownOpen)} className="text-white">
          <FaBars size={30} />
        </button>
      </div>
      {isDropdownOpen && (
        <div className="lg:hidden bg-black text-white w-full fixed top-14 left-0 z-50 p-4">
          <ul className="flex flex-col items-start space-y-4">
            {['home', 'about', 'portfolio', 'skills'].map((section, index) => (
              <li key={index} className="w-full">
                <a
                  href={`#${section}`}
                  onClick={(e) => handleClick(e, section)}
                  className={`w-full flex items-center py-2 rounded hover:text-[#489BD7] ${activeSection === section ? 'text-[#489BD7]' : ''}`}
                >
                  {section === 'home' && <FaHome className="mr-2" />}
                  {section === 'about' && <FaUser className="mr-2" />}
                  {section === 'portfolio' && <FaBriefcase className="mr-2" />}
                  {section === 'skills' && <FaTools className="mr-2" />}
                  {section.charAt(0).toUpperCase() + section.slice(1)}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
      <nav className="hidden lg:flex h-full w-1/6 bg-black text-white flex-col items-center p-4 fixed">
        <div className="mb-8">
          <Image
            src="/simprofile.jpg"
            alt="Profile Picture"
            width={200}
            height={200}
            className="rounded-full border-4 border-gray-700"
          />
        </div>
        <h1 className="text-xl font-bold mb-4">Simon Leiva</h1>
        <div className="flex flex-row items-center mb-8">
          <a href="https://www.linkedin.com/in/simonleiva/" target="_blank" className="mr-4 hover:text-[#489BD7]">
            <FaLinkedin size={30} />
          </a>
          <a href="https://github.com/simprogramming" target="_blank" className="mr-4 hover:text-[#489BD7]">
            <FaGithub size={30} />
          </a>
          <a href="https://www.instagram.com/simonleiva/" target="_blank" className="mr-4 hover:text-[#489BD7]">
            <FaInstagram size={30} />
          </a>
        </div>
        <ul className="w-full flex flex-col items-start pl-10">
          {['home', 'about', 'portfolio', 'skills'].map((section, index) => (
            <li key={index} className="mb-4 w-full">
              <a
                href={`#${section}`}
                onClick={(e) => handleClick(e, section)}
                className={`w-full flex items-center text-center py-2 rounded hover:text-[#489BD7] ${activeSection === section ? 'text-[#489BD7]' : ''}`}
              >
                {section === 'home' && <FaHome className="mr-2" />}
                {section === 'about' && <FaUser className="mr-2" />}
                {section === 'portfolio' && <FaBriefcase className="mr-2" />}
                {section === 'skills' && <FaTools className="mr-2" />}
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
};

export default Sidebar;
