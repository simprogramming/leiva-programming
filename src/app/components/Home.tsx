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
      <div className="absolute inset-0 flex flex-col items-center lg:items-start justify-start pt-[25%] lg:pt-[9%] lg:pl-[37%]">
        <h1 className="text-white text-5xl md:text-5xl lg:text-6xl font-bold text-center lg:text-left">Simon Leiva</h1>
        <p className="text-white text-3xl font-medium mt-4 text-center lg:text-left relative">
          I&apos;m <span className="typed relative inline-block border-b-2 border-blue-500"></span>
        </p>
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
