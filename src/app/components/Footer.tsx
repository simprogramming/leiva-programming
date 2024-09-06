const Footer = () => {
    return (
      <footer className="bg-black text-white py-6">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-center">
            <p className="text-sm">&copy; {new Date().getFullYear()} Simon Leiva. All rights reserved.</p>
            {/* Hide social media div on mobile, show on medium and larger screens */}
            <div className="hidden md:flex space-x-4">
              <a href="https://www.linkedin.com/in/simonleiva" target="_blank" rel="noopener noreferrer" className="hover:underline">
                LinkedIn
              </a>
              <a href="https://github.com/leivaprogramming" target="_blank" rel="noopener noreferrer" className="hover:underline">
                GitHub
              </a>
              <a href="mailto:simonleiva1@hotmail.com" className="hover:underline">
                Contact
              </a>
            </div>
          </div>
        </div>
      </footer>
    );
  };
  
  export default Footer;
  