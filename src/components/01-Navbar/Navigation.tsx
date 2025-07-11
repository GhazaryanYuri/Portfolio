// Importing dependencies
import { useState, useEffect } from "react";
import { Menu, X, Github, Linkedin, Mail } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    // { name: "Experience", href: "#experience" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-gray-900/95 backdrop-blur-md shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="text-2xl font-bold text-white"
          >
            Portfolio
          </motion.div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <motion.a
                key={item.name}
                href={item.href}
                whileHover={{ scale: 1.1 }}
                className="text-gray-300 hover:text-white transition-colors duration-200"
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </motion.a>
            ))}
          </div>

          {/* Social Links */}
          <div className="hidden md:flex space-x-4">
            <motion.a
              whileHover={{ scale: 1.2, rotate: 360 }}
              transition={{ duration: 0.3 }}
              href="https://github.com/GhazaryanYuri"
              className="text-gray-300 hover:text-white"
            >
              <Github size={20} />
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.2, rotate: 360 }}
              transition={{ duration: 0.3 }}
              href="#"
              className="text-gray-300 hover:text-white"
            >
              <Linkedin size={20} />
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.2, rotate: 360 }}
              transition={{ duration: 0.3 }}
              href="mailto:yuranar12@gmail.com"
              className="text-gray-300 hover:text-white"
            >
              <Mail size={20} />
            </motion.a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, scaleX: 0, scaleY: 0 }}
              animate={{ opacity: 1, scaleX: 1, scaleY: 1 }}
              exit={{ opacity: 0, scaleX: 0, scaleY: 0 }}
              className="md:hidden mt-4 bg-gray-800/95 backdrop-blur-md rounded-lg p-4 overflow-hidden"
            >
              <div className="space-y-2">
                {navItems.map((item, index) => (
                  <motion.a
                    key={item.name}
                    href={item.href}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="block py-3 px-4 text-gray-300 hover:text-white hover:bg-gray-700/50 rounded-lg transition-all duration-200"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.name}
                  </motion.a>
                ))}

                {/* Mobile Social Links */}
                <div className="flex justify-center space-x-4 pt-4 mt-4 border-t border-gray-700">
                  <motion.a
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.9 }}
                    href="#"
                    className="p-2 text-gray-300 hover:text-white hover:bg-gray-700/50 rounded-full transition-all duration-200"
                    onClick={() => setIsOpen(false)}
                  >
                    <Github size={20} />
                  </motion.a>
                  <motion.a
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.9 }}
                    href="#"
                    className="p-2 text-gray-300 hover:text-white hover:bg-gray-700/50 rounded-full transition-all duration-200"
                    onClick={() => setIsOpen(false)}
                  >
                    <Linkedin size={20} />
                  </motion.a>
                  <motion.a
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.9 }}
                    href="#"
                    className="p-2 text-gray-300 hover:text-white hover:bg-gray-700/50 rounded-full transition-all duration-200"
                    onClick={() => setIsOpen(false)}
                  >
                    <Mail size={20} />
                  </motion.a>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
};

export default Navigation;
