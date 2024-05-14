"use client";

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { FaLinkedin, FaInstagram, FaGithub, FaHome, FaUser, FaBriefcase, FaEnvelope, FaTools } from 'react-icons/fa';

const Sidebar = () => {
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'portfolio', 'skills', 'contact'];
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

  const handleClick = (e, section) => {
    e.preventDefault();
    const element = document.getElementById(section);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(section);
    }
  };

  return (
    <nav className="h-full w-1/6 bg-black text-white flex flex-col items-center p-4 fixed">
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
      <ul className="w-full">
        <li className="mb-4">
          <a
            href="#home"
            onClick={(e) => handleClick(e, 'home')}
            className={`w-full flex items-center justify-center text-center py-2 rounded hover:text-[#489BD7]`}
          >
            <FaHome className={`mr-2 ${activeSection === 'home' ? 'text-[#489BD7]' : ''}`} /> Home
          </a>
        </li>
        <li className="mb-4">
          <a
            href="#about"
            onClick={(e) => handleClick(e, 'about')}
            className={`w-full flex items-center justify-center text-center py-2 rounded hover:text-[#489BD7]`}
          >
            <FaUser className={`mr-2 ${activeSection === 'about' ? 'text-[#489BD7]' : ''}`} /> About
          </a>
        </li>
        <li className="mb-4">
          <a
            href="#portfolio"
            onClick={(e) => handleClick(e, 'portfolio')}
            className={`w-full flex items-center justify-center text-center py-2 rounded hover:text-[#489BD7]`}
          >
            <FaBriefcase className={`mr-2 ${activeSection === 'portfolio' ? 'text-[#489BD7]' : ''}`} /> Portfolio
          </a>
        </li>
        <li className="mb-4">
          <a
            href="#skills"
            onClick={(e) => handleClick(e, 'skills')}
            className={`w-full flex items-center justify-center text-center py-2 rounded hover:text-[#489BD7]`}
          >
            <FaTools className={`mr-2 ${activeSection === 'skills' ? 'text-[#489BD7]' : ''}`} /> Skills
          </a>
        </li>
        <li className="mb-4">
          <a
            href="#contact"
            onClick={(e) => handleClick(e, 'contact')}
            className={`w-full flex items-center justify-center text-center py-2 rounded hover:text-[#489BD7]`}
          >
            <FaEnvelope className={`mr-2 ${activeSection === 'contact' ? 'text-[#489BD7]' : ''}`} /> Contact
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Sidebar;

