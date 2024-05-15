import { FaLinkedin, FaInstagram, FaGithub } from 'react-icons/fa';

function SocialMediaIcons() {
  return (
    <div className="flex justify-center text-black items-center mb-10 lg:hidden">
      <a href="https://www.linkedin.com/in/simonleiva/" target="_blank" rel="noopener noreferrer" className="mx-2 hover:text-[#489BD7]">
        <FaLinkedin size={30} />
      </a>
      <a href="https://github.com/simprogramming" target="_blank" rel="noopener noreferrer" className="mx-2 hover:text-[#489BD7]">
        <FaGithub size={30} />
      </a>
      <a href="https://www.instagram.com/simonleiva/" target="_blank" rel="noopener noreferrer" className="mx-2 hover:text-[#489BD7]">
        <FaInstagram size={30} />
      </a>
    </div>
  );
}

export default SocialMediaIcons;
