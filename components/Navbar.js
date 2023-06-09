import Link from 'next/link';
import { useRouter } from 'next/router';
import { FiTwitter, FiInstagram, FiFacebook, FiMenu, FiX } from 'react-icons/fi';
import { useState } from 'react';

const Navbar = () => {
  const router = useRouter();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const isActive = (pathname) => {
    return router.pathname === pathname ? 'text-primary' : 'text-gray-500';
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between py-4 px-8 bg-gray-800 shadow-lg">
      <Link href="/" legacyBehavior>
        <a className="text-2xl font-bold text-primary">Everything Foodie</a>
      </Link>

      <div className="hidden sm:flex items-center space-x-4 flex-grow">
        <div className="flex items-center space-x-4 flex-grow justify-center">
          <Link href="/" legacyBehavior>
            <a className={`nav-link ${isActive('/')}`}>Home</a>
          </Link>
          <Link href="/menu" legacyBehavior>
            <a className={`nav-link ${isActive('/menu')}`}>Menu</a>
          </Link>
          <Link href="/about" legacyBehavior>
            <a className={`nav-link ${isActive('/about')}`}>About</a>
          </Link>
          <Link href="/contact" legacyBehavior>
            <a className={`nav-link ${isActive('/contact')}`}>Contact</a>
          </Link>
        </div>

        <div className="flex items-center space-x-4">
          <a href="https://twitter.com/everythingfoodie" target="_blank" rel="noopener noreferrer" className="nav-link">
            <FiTwitter className="text-white text-xl hover:text-primary transition-colors duration-300" />
          </a>
          <a href="https://instagram.com/everythingfoodie" target="_blank" rel="noopener noreferrer" className="nav-link">
            <FiInstagram className="text-white text-xl hover:text-primary transition-colors duration-300" />
          </a>
          <a href="https://facebook.com/everythingfoodie" target="_blank" rel="noopener noreferrer" className="nav-link">
            <FiFacebook className="text-white text-xl hover:text-primary transition-colors duration-300" />
          </a>
        </div>
      </div>

      <div className="sm:hidden">
        <button
          type="button"
          className="block text-gray-500 hover:text-primary focus:text-primary focus:outline-none"
          onClick={toggleMenu}
        >
          {isMenuOpen ? (
            <FiX className="h-6 w-6 fill-current" />
          ) : (
            <FiMenu className="h-6 w-6 fill-current" />
          )}
        </button>
        {isMenuOpen && (
          <div className="mt-2 space-y-2">
            <Link href="/" legacyBehavior>
              <a className={`block nav-link ${isActive('/')}`}>Home</a>
            </Link>
            <Link href="/menu" legacyBehavior>
              <a className={`block nav-link ${isActive('/menu')}`}>Menu</a>
            </Link>
            <Link href="/about" legacyBehavior>
              <a className={`block nav-link ${isActive('/about')}`}>About</a>
            </Link>
            <Link href="/contact" legacyBehavior>
              <a className={`block nav-link ${isActive('/contact')}`}>Contact</a>
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
