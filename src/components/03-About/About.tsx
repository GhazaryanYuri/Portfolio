// Importing dependencies
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Award, Coffee, Users, Clock } from "lucide-react";
import PersonalImg from "../../images/personal_image.webp";

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const stats = [
    { icon: Award, number: "11+", label: "Projects Completed" },
    { icon: Coffee, number: "50+", label: "Cups of Coffee" },
    { icon: Users, number: "3+", label: "Happy Clients" },
    { icon: Clock, number: "6+", label: "Month Experience" },
  ];

  return (
    <section id="about" className="py-20 bg-gray-900">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            About <span className="text-purple-400">Me</span>
          </h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            I'm a passionate developer with a keen eye for design and a love for
            creating seamless user experiences that make a difference.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="relative">
              <div className="w-full h-[540px]  rounded-2xl overflow-hidden">
                <img
                  src={PersonalImg}
                  alt="Profile"
                  className="w-full h-full object-cover"
                />
              </div>
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute -top-4 -right-4 w-20 h-20 bg-purple-500 rounded-full flex items-center justify-center"
              >
                <Award className="text-white" size={30} />
              </motion.div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <h3 className="text-2xl font-bold text-white mb-6">
              Turning ideas into digital reality
            </h3>
            <p className="text-gray-300 mb-6 leading-relaxed">
              With over 6+ month of experience in web development, I specialize
              in creating modern, responsive, and user-friendly applications. My
              passion lies in combining clean code with beautiful design to
              deliver exceptional digital experiences.
            </p>
            <p className="text-gray-300 mb-8 leading-relaxed">
              I'm constantly learning new technologies and staying up-to-date
              with the latest industry trends to ensure I can provide the best
              solutions for my clients and projects.
            </p>

            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.8, delay: 0.6 + index * 0.1 }}
                  className="text-center p-4 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors duration-300"
                >
                  <stat.icon
                    className="text-purple-400 mx-auto mb-2"
                    size={24}
                  />
                  <div className="text-2xl font-bold text-white">
                    {stat.number}
                  </div>
                  <div className="text-gray-400 text-sm">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
