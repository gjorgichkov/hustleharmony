import { Link } from "react-router-dom";
import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="w-full py-4 px-4 mt-10 border-t border-white/10">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
        <div className="flex flex-col items-center md:items-start space-y-3">
          <div className="flex space-x-4">
            <Link
              to="#"
              className="text-gray-400 hover:text-teal transition-colors"
            >
              <Facebook size={20} />
            </Link>
            <Link
              to="#"
              className="text-gray-400 hover:text-teal transition-colors"
            >
              <Twitter size={20} />
            </Link>
            <Link
              to="#"
              className="text-gray-400 hover:text-teal transition-colors"
            >
              <Instagram size={20} />
            </Link>
            <Link
              to="#"
              className="text-gray-400 hover:text-teal transition-colors"
            >
              <Linkedin size={20} />
            </Link>
          </div>
          <p className="text-sm text-gray-400">
            © 2025 HustleHarmony. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
