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
      <div className="absolute inset-0 flex flex-col items-center lg:items-start justify-start pt-[20%] lg:pt-[8%] lg:pl-[37%]">
        <h1 className="text-white text-4xl md:text-5xl lg:text-6xl font-bold text-center lg:text-left">Simon Leiva</h1>
        <p className="text-white text-2xl lg:text-3xl font-medium mt-4 text-center lg:text-left relative">
          I&apos;m <span className="typed relative inline-block border-b-2 border-blue-500"></span>
        </p>
      </div>
      <div className="absolute mb-10 lg:mb-5 bottom-20 lg:bottom-10 w-full flex justify-center animate-bounce">
        <svg className="w-20 h-20 text-white lg:text-blue-900" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
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
