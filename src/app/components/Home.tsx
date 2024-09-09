"use client";
import { useEffect } from 'react';
import Typed from 'typed.js';

function Home() {
  useEffect(() => {
    const options = {
      strings: ['Developer', 'Project Manager', 'Freelancer'],
      typeSpeed: 100,
      backSpeed: 50,
      backDelay: 2000,
      loop: true,
    };

    const typed = new Typed('.typed', options);

    // Cleanup on unmount
    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <section id="home" className="relative h-screen pb-20">
      {/* Main Info */}
      <div className="absolute inset-0 flex flex-col items-center lg:items-start justify-start pt-[5%] lg:pt-[4%] lg:pl-[9%]">
        <h1 className="text-gray text-4xl md:text-5xl lg:text-6xl font-bold text-center lg:text-left">Simon Leiva</h1>
        <p className="text-gray text-2xl lg:text-3xl font-medium mt-4 text-center lg:text-left relative">
          I&apos;m a <span className="typed relative inline-block border-b-2 border-blue-500"></span>
        </p>
      </div>

      {/* Hire Me Button */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <a
          href="mailto:simonleiva1@hotmail.com"
          className="bg-white text-black font-bold py-3 px-6 rounded-lg shadow-lg hover:bg-black hover:text-white transition duration-300"
        >
          Hire Me
        </a>
      </div>

      {/* Arrow */}
      <div className="absolute bottom-20 lg:bottom-10 w-full flex justify-center animate-bounce">
        <svg className="w-12 h-12 text-gray" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
        </svg>
      </div>

      <style jsx>{`
        .typed::after {
          content: '';
          display: block;
          width: 100%;
          height: 3px;
          background-color: #489BD7;
          position: absolute;
          bottom: -2px;
          left: 0;
        }
      `}</style>
    </section>
  );
}

export default Home;
