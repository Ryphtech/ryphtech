import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Code } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Projects', path: '/projects' },
    { name: 'Blog', path: '/blog' },
    { name: 'Team', path: '/team' },
    { name: 'Testimonials', path: '/testimonials' },
    { name: 'Contact', path: '/contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Dark mode is enabled by default at document level

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-white/90 dark:bg-dark-800/90 backdrop-blur-custom shadow-lg' 
        : 'bg-transparent'
    }`}>
      <div className="container-custom">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-to-r from-primary-600 to-purple-600 rounded-lg flex items-center justify-center">
              <Code className="w-6 h-6 text-white" />
            </div>
            <span className="text-xl lg:text-2xl font-bold font-poppins gradient-text">
              RyphTech
            </span>
          </Link>

                     {/* Desktop Navigation */}
           <div className="hidden lg:flex items-center space-x-8">
             {navItems.map((item) => (
               <Link
                 key={item.name}
                 to={item.path}
                 onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                 className={`font-medium transition-colors duration-300 ${
                   location.pathname === item.path
                     ? 'text-primary-600 dark:text-primary-400'
                     : 'text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400'
                 }`}
               >
                 {item.name}
               </Link>
             ))}
           </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center space-x-4">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden p-2 rounded-lg bg-gray-100 dark:bg-dark-700 hover:bg-gray-200 dark:hover:bg-dark-600 transition-colors duration-300"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

                 {/* Mobile Navigation */}
         {isOpen && (
           <div className="lg:hidden bg-white dark:bg-dark-800 shadow-lg rounded-lg mt-2 mb-4">
             <div className="px-4 py-2 space-y-2">
               {navItems.map((item) => (
                 <Link
                   key={item.name}
                   to={item.path}
                   onClick={() => {
                     setIsOpen(false);
                     window.scrollTo({ top: 0, behavior: 'smooth' });
                   }}
                   className={`block py-2 px-3 rounded-lg font-medium transition-colors duration-300 ${
                     location.pathname === item.path
                       ? 'text-primary-600 dark:text-primary-400 bg-primary-50 dark:bg-primary-900/20'
                       : 'text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 hover:bg-gray-50 dark:hover:bg-dark-700'
                   }`}
                 >
                   {item.name}
                 </Link>
               ))}
             </div>
           </div>
         )}
      </div>
    </nav>
  );
};

export default Navbar;
