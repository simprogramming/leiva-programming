import Home from "./Home"
import About from "./About"
import Image from 'next/image';

const ContentWrapper = () => {

  return (
    <div className="flex-1 text-white ">
      <div className="fixed top-0 left-[16.6667%] w-[83.3333%] h-screen z-0">
        <Image
          src="/beach.jpg"
          alt="Background Image"
          layout="fill"
          objectFit="cover"
          quality={100}
          className="w-full h-full"
        />
      </div>
      <div className="relative ml-[16.6667%] w-[83.3333%] z-10 bg-transparent">
        <Home />
        <About />
        <section id="portfolio" className="h-screen bg-gray-900">Portfolio Content</section>
        <section id="contact" className="h-screen bg-">Contact Content</section>
      </div>
    </div>
  );
};

export default ContentWrapper;

