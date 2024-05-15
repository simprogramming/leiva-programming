import Image from 'next/image';

function About() {
  return (
    <section id="about" className="min-h-screen bg-white p-8 pt-20 pb-20">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-blue-900 mb-6">About</h2>
        <p className="text-lg text-gray-700 mb-6">
          I am a curious and adventurous individual who loves to explore the world, travel, learn, and discover new things. Whether I&apos;m hiking to the top of a hill in British Columbia or delving into the latest tech trends, my passion for discovery drives me. Captured at the summit after an 10-hour hike, the photo is a testament to my perseverance and love for adventure. As a web developer, I bring this same curiosity and drive to every project, always eager to tackle new challenges and deliver innovative solutions.
        </p>
        <div className="flex flex-col md:flex-row mb-6">
          <div className="w-full md:w-1/2 mb-4 md:mb-0">
              <Image
                src="/topofhill.jpg"
                alt="Simon Leiva"
                width={650}
                height={450}
                className="w-full h-full"
              />
          </div>
          <div className="w-full md:w-1/2 md:pl-8">
            <h3 className="text-2xl font-semibold text-blue-900 mb-2">Full Stack Web Developer</h3>
            <p className="text-lg text-gray-700 mb-4">
              I specialize in creating responsive, dynamic web applications that meet clients&apos; needs and exceed their expectations.
            </p>
            <ul className="text-lg text-gray-700 mb-4">
              <li><strong>City:</strong> Montreal</li>
              <li><strong>Email:</strong> simonleiva1@hotmail.com</li>
              <li><strong>Education:</strong> <a href="https://www.lewagon.com" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">Le Wagon Bootcamp</a></li>
              <li><strong>Age:</strong> 29</li>
              <li><strong>Languages:</strong> French, English, Spanish</li>
              <li><strong>Freelance:</strong> Available</li>
            </ul>
            <p className="text-lg text-gray-700">
              As a skilled web developer, I offer a blend of technical skills and creative vision. I am dedicated to delivering high-quality, efficient, and visually appealing web solutions that drive results and help businesses succeed online.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
