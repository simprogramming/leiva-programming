import Image from 'next/image';

function Portfolio() {
  const freelanceProjects = [
    {
      logo: '/logo/madamesmithlogo.png',
      name: 'Madame Smith',
      link: 'https://madame-smith.netlify.app/',
    },
    {
      logo: '/logo/LogoAtie&Hatietspbg.png',
      name: 'Atie & Hatie',
      link: 'https://www.atiehatie.com/',
    },
    {
      logo: '/logo/leivainvestinglogo.png',
      name: 'Leiva Investing Inc',
      link: 'https://leiva-investing-inc.fly.dev/',
    },
  ];

  const effetMonstreProjects = [
    {
      logo: '/simprofile.jpg',
      name: 'L\'Effet Monstre Project 1',
      link: 'https://example.com',
    },
    {
      logo: '/simprofile.jpg',
      name: 'L\'Effet Monstre Project 2',
      link: 'https://example.com',
    },
    {
      logo: '/simprofile.jpg',
      name: 'L\'Effet Monstre Project 3',
      link: 'https://example.com',
    },
    {
      logo: '/simprofile.jpg',
      name: 'L\'Effet Monstre Project 4',
      link: 'https://example.com',
    },
  ];

  return (
    <section id="portfolio" className="min-h-screen bg-gray-900 text-white p-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-center">Portfolio</h2>

        <div className="mb-12">
          <h3 className="text-3xl font-semibold mb-6">Freelancing</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {freelanceProjects.map((project, index) => (
              <a key={index} href={project.link} target="_blank" rel="noopener noreferrer" className="group block p-6 rounded-lg bg-gray-800 hover:bg-gray-700 transition">
                <div className="flex items-center justify-center mb-4">
                  <Image src={project.logo} alt={project.name} width={80} height={80} />
                </div>
                <h4 className="text-xl font-bold text-center">{project.name}</h4>
              </a>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-3xl font-semibold mb-6">L'Effet Monstre</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {effetMonstreProjects.map((project, index) => (
              <a key={index} href={project.link} target="_blank" rel="noopener noreferrer" className="group block p-6 rounded-lg bg-gray-800 hover:bg-gray-700 transition">
                <div className="flex items-center justify-center mb-4">
                  <Image src={project.logo} alt={project.name} width={50} height={50} />
                </div>
                <h4 className="text-xl font-bold text-center">{project.name}</h4>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Portfolio;
