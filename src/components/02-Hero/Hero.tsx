// Importing dependencies
import { motion } from "framer-motion";
import { Download, Code, Sparkles } from "lucide-react";

const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(120,119,198,0.3),transparent_50%)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(255,119,198,0.3),transparent_50%)]"></div>

      {/* Floating Elements */}
      <motion.div
        animate={{
          y: [0, -20, 0],
          rotate: [0, 360],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-20 left-20 text-purple-400 opacity-20"
      >
        <Code size={40} />
      </motion.div>
      <motion.div
        animate={{
          y: [0, 20, 0],
          rotate: [0, -360],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute bottom-20 right-20 text-pink-400 opacity-20"
      >
        <Sparkles size={50} />
      </motion.div>

      <div className="container mx-auto px-6 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h1
            className="text-5xl md:text-7xl font-bold text-white mb-6"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Hi, I'm{" "}
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Yuri Ghazaryan
            </span>
          </motion.h1>

          <motion.p
            className="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Frontend Web Developer.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-full font-semibold hover:shadow-lg transition-all duration-300"
              href="#projects"
            >
              View My Work
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 border-2 border-purple-400 text-purple-400 rounded-full font-semibold hover:bg-purple-400 hover:text-white transition-all duration-300 flex items-center gap-2"
              href="Yuri_Ghazaryan_Personal_CV.pdf"
              download="Yuri_Ghazaryan_Personal_CV.pdf"
            >
              <Download size={20} />
              Download CV
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
