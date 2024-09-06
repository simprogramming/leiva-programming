import Home from "./Home"
import About from "./About"
import Portfolio from "./Portfolio";
import Skills from "./Skills";
import Footer from "./Footer";
import Image from 'next/image';
import Qr from './Qr'

const ContentWrapper = () => {
  return (
    <div className="flex-1 text-white mt-20 lg:mt-0">
      <div className="fixed top-0 left-0 w-full h-screen z-0 lg:left-[16.6667%] lg:w-[83.3333%]">
        <Image
          src="/river.jpg"
          alt="Background Image"
          layout="fill"
          objectFit="cover"
          className="w-full h-full"
          priority
        />
      </div>
      <div className="relative w-full lg:w-[83.3333%] lg:ml-[16.6667%] z-10">
        <Home />
        <About />
        <Portfolio />
        <Skills />
        <Qr />
        <Footer />
      </div>
    </div>
  );
};

export default ContentWrapper;
