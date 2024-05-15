import Home from "./Home"
import About from "./About"
import Portfolio from "./Portfolio";
import Skills from "./Skills";
import Image from 'next/image';

const ContentWrapper = () => {
  return (
    <div className="flex-1 text-white mt-20 lg:mt-0">
      <div className="fixed top-0 left-0 w-full h-screen z-0 lg:left-[16.6667%] lg:w-[83.3333%]">
        <Image
          src="/beach.jpg"
          alt="Background Image"
          layout="fill"
          objectFit="cover"
          quality={100}
          className="w-full h-full"
        />
      </div>
      <div className="relative w-full lg:w-[83.3333%] lg:ml-[16.6667%] z-10">
        <Home />
        <About />
        <Portfolio />
        <Skills />
      </div>
    </div>
  );
};

export default ContentWrapper;
