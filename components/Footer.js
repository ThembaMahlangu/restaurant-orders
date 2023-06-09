// components/Footer.js
import { FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-6">
      <div className="container mx-auto px-4 md:px-8 lg:px-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Everything Foodie</h3>
            <p>
              South Africa's favorite fast food destination. Quality and taste
              you can trust.
            </p>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-gray-400">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-400">
                  Menu
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-400">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-400">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Follow Us</h3>
            <div className="flex space-x-4">
              <a
                href="https://www.facebook.com/EverythingFoodie"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xl hover:text-gray-400"
              >
                <FaFacebookF />
              </a>
              <a
                href="https://www.instagram.com/EverythingFoodie"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xl hover:text-gray-400"
              >
                <FaInstagram />
              </a>
              <a
                href="https://www.twitter.com/EverythingFoodie"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xl hover:text-gray-400"
              >
                <FaTwitter />
              </a>
            </div>
          </div>
        </div>
        <hr className="my-6" />
        <div className="text-center">
          <p>
            &copy; {new Date().getFullYear()} Everything Foodie. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;