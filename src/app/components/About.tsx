import Image from 'next/image';
import SocialMediaIcons from './SocialMediaIcons';

function About() {
  return (
    <section id="about" className="min-h-screen bg-white p-8 pt-12 pb-20">
      <div className="max-w-7xl mx-auto">
        <SocialMediaIcons />
        <h2 className="text-4xl font-bold text-blue-900 mb-6">About</h2>
        <p className="text-lg text-gray-700 mb-6">
          I’m someone who’s always been driven by curiosity and a thirst for adventure, whether that means traveling to new places, hiking through stunning landscapes, or exploring the latest in technology. The photo you see here was taken at the top of a hill in British Columbia after a challenging 10-hour hike — it’s a reminder of my determination and love for pushing boundaries. As a web developer, I bring that same energy and passion to every project I work on, always eager to embrace new challenges and deliver creative, effective solutions.
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
              I specialize in building responsive, dynamic web applications tailored to clients’ unique needs, consistently exceeding their expectations.
            </p>
            <ul className="text-lg text-gray-700 mb-4">
              <li><strong>City:</strong> Montreal</li>
              <li><strong>Email:</strong> simonleiva1@hotmail.com</li>
              <li><strong>Education:</strong> <a href="https://www.lewagon.com" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">Le Wagon Bootcamp</a></li>
              <li><strong>Languages:</strong> French, English, Spanish</li>
            </ul>
            <p className="text-lg text-gray-700">
              Results-driven Full Stack web developer with nearly five years of hands-on experience, blending self-taught expertise in computer science with a deep passion for innovation. I have successfully led the end-to-end development of complex web applications, from concept to launch. Proficient in Ruby on Rails and Next.js, I specialize in building scalable, high-performance systems that meet the evolving needs of modern businesses. My technical proficiency spans SQL, APIs, external libraries, and microservices, ensuring secure, optimized code. A natural leader and mentor, I thrive in collaborative environments, driving continuous improvement and delivering impactful results across multidisciplinary teams.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
