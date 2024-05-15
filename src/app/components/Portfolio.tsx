import Image from 'next/image';
import { FaExternalLinkAlt } from 'react-icons/fa';

function Portfolio() {
  const freelanceProjects = [
    {
      logo: '/logo/madamesmithlogo.png',
      name: 'Madame Smith',
      link: 'https://madame-smith.netlify.app/',
      description: 'Interactive Restaurant Menu'
    },
    {
      logo: '/logo/atiehatie.png',
      name: 'Atie & Hatie',
      link: 'https://www.atiehatie.com/',
      description: 'E-Commerce Solution'
    },
    {
      logo: '/logo/leivainvestinglogo.png',
      name: 'Leiva Investing Inc',
      link: 'https://leiva-investing-inc.fly.dev/',
      description: 'Finance Blog'
    },
  ];

  const effetMonstreProjects = [
    {
      logo: '/logo/pdq.png',
      name: 'Les Produits du Québec',
      link: 'https://lesproduitsduquebec.com/',
      description: 'Non-Profit Organization in Quebec'
    },
    {
      logo: '/logo/ifivemelogo.png',
      name: 'IFiveMe',
      link: 'https://www.ifiveme.com/',
      description: 'Virtual Business Cards'
    },
    {
      logo: '/logo/mc2.png',
      name: 'MC2',
      link: 'https://mc2is.ca/',
      description: 'Health Resource Center'
    },
    {
      logo: '/logo/dx.jpeg',
      name: 'DX',
      link: 'https://dx.ca/',
      description: 'E-Commerce Solution'
    },
  ];

  return (
    <section id="portfolio" className="min-h-screen bg-customLightBlue text-customDarkBlue p-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-center mt-10">Portfolio</h2>

        <div className="mb-12">
          <h3 className="text-3xl font-semibold mb-6">Freelancing</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {freelanceProjects.map((project, index) => (
              <a 
                key={index} 
                href={project.link} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="group block p-6 rounded-lg bg-white hover:bg-customGray transition shadow-md"
              >
                <div className="flex items-center justify-center mb-4">
                  <Image src={project.logo} alt={project.name} width={80} height={80} />
                </div>
                <h4 className="text-xl mb-2 font-bold text-center text-customDarkBlue">{project.name}</h4>
                <p className="text-sm text-center text-customDarkBlue">{project.description}</p>
              </a>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-3xl font-semibold mb-6 flex items-center">
            L&apos;Effet Monstre
            <a
              href="https://www.effetmonstre.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="ml-2 text-blue-500 hover:text-blue-300 transition"
            >
              <FaExternalLinkAlt className="w-4 h-4" />
            </a>
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {effetMonstreProjects.map((project, index) => (
              <a 
                key={index} 
                href={project.link} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="group block p-6 rounded-lg bg-white hover:bg-customGray transition shadow-md"
              >
                <div className="flex items-center justify-center mb-4">
                  <Image src={project.logo} alt={project.name} width={80} height={80} />
                </div>
                <h4 className="text-xl mb-2 font-bold text-center text-customDarkBlue">{project.name}</h4>
                <p className="text-sm text-center text-customDarkBlue">{project.description}</p>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Portfolio;
