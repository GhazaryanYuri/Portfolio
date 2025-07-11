// Importing dependencies
import { motion } from "framer-motion";
import { Heart, ArrowUp } from "lucide-react";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-gray-900 border-t border-gray-800">
      <div className="container mx-auto px-6 py-12">
        <div className="text-center">
          <motion.button
            onClick={scrollToTop}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="mb-8 p-3 bg-purple-500 hover:bg-purple-600 text-white rounded-full transition-colors duration-300 mx-auto block"
          >
            <ArrowUp size={24} />
          </motion.button>

          <div className="mb-8">
            <h3 className="text-2xl font-bold text-white mb-4">
              Yuri Ghazaryan
            </h3>
            <p className="text-gray-300 max-w-md mx-auto">
              Frontend Web Developer.
            </p>
          </div>

          <div className="flex justify-center space-x-8 mb-8">
            <a
              href="#home"
              className="text-gray-400 hover:text-white transition-colors duration-300"
            >
              Home
            </a>
            <a
              href="#about"
              className="text-gray-400 hover:text-white transition-colors duration-300"
            >
              About
            </a>
            <a
              href="#projects"
              className="text-gray-400 hover:text-white transition-colors duration-300"
            >
              Projects
            </a>
            <a
              href="#contact"
              className="text-gray-400 hover:text-white transition-colors duration-300"
            >
              Contact
            </a>
          </div>

          <div className="border-t border-gray-800 pt-8">
            <p className="text-gray-400 flex items-center justify-center gap-2">
              Made with <Heart className="text-red-500" size={16} /> by Yuri
              Ghazaryan
            </p>
            <p className="text-gray-500 text-sm mt-2">
              © {new Date().getFullYear()} All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
