// Importing dependencies
import { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { ChevronLeft, ChevronRight } from "lucide-react";

const Skills = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [currentSlide, setCurrentSlide] = useState(0);

  const skillCategories = [
    {
      title: "Frontend",
      skills: [
        { name: "HTML 5", level: 95, color: "from-orange-600 to-orange-700" },
        { name: "CSS 3", level: 85, color: "from-blue-500 to-blue-600" },
        {
          name: "JavaScript",
          level: 70,
          color: "from-yellow-300 to-yellow-400",
        },
        { name: "Tailwind CSS", level: 92, color: "from-cyan-400 to-cyan-500" },
        { name: "TypeScript", level: 70, color: "from-blue-500 to-blue-600" },
        { name: "React", level: 65, color: "from-cyan-400 to-sky-500" },
        { name: "Vue", level: 15, color: "from-green-400 to-emerald-600" },
      ],
    },
    {
      title: "Mobile Development",
      skills: [
        { name: "React Native", level: 15, color: "from-cyan-400 to-sky-600" },
        { name: "Expo", level: 15, color: "from-sky-500 to-blue-700" },
      ],
    },
    {
      title: "Tools & Others",
      skills: [
        { name: "Git", level: 90, color: "from-orange-500 to-orange-600" },
        { name: "GitHub", level: 85, color: "from-gray-100 to-gray-300" },
        { name: "Figma", level: 88, color: "from-purple-500 to-purple-600" },
      ],
    },
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % skillCategories.length);
  };

  const prevSlide = () => {
    setCurrentSlide(
      (prev) => (prev - 1 + skillCategories.length) % skillCategories.length
    );
  };

  return (
    <section id="skills" className="py-20 bg-gray-800">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            My <span className="text-purple-400">Skills</span>
          </h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Here are the technologies and tools I work with to bring ideas to
            life.
          </p>
        </motion.div>

        <div className="relative max-w-4xl mx-auto">
          {/* Carousel */}
          <div className="overflow-hidden">
            <motion.div
              animate={{ x: -currentSlide * 100 + "%" }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="flex"
            >
              {skillCategories.map((category, index) => (
                <div key={index} className="w-full flex-shrink-0 px-4">
                  <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8, delay: index * 0.2 }}
                    className="bg-gray-900 rounded-2xl p-8"
                  >
                    <h3 className="text-2xl font-bold text-white mb-8 text-center">
                      {category.title}
                    </h3>
                    <div className="space-y-6">
                      {category.skills.map((skill, skillIndex) => (
                        <motion.div
                          key={skillIndex}
                          initial={{ opacity: 0, x: -20 }}
                          animate={inView ? { opacity: 1, x: 0 } : {}}
                          transition={{
                            duration: 0.6,
                            delay: skillIndex * 0.1,
                          }}
                          className="group"
                        >
                          <div className="flex justify-between items-center mb-2">
                            <span className="text-white font-medium">
                              {skill.name}
                            </span>
                            <span className="text-gray-400 text-sm">
                              {skill.level}%
                            </span>
                          </div>
                          <div className="w-full bg-gray-700 rounded-full h-2">
                            <motion.div
                              className={`h-2 rounded-full bg-gradient-to-r ${skill.color}`}
                              initial={{ width: 0 }}
                              animate={
                                inView ? { width: `${skill.level}%` } : {}
                              }
                              transition={{
                                duration: 1,
                                delay: skillIndex * 0.1,
                              }}
                            />
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-4 bg-purple-500 hover:bg-purple-600 text-white p-2 rounded-full transition-colors duration-300"
          >
            <ChevronLeft size={24} />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-4 bg-purple-500 hover:bg-purple-600 text-white p-2 rounded-full transition-colors duration-300"
          >
            <ChevronRight size={24} />
          </button>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-8 space-x-2">
            {skillCategories.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentSlide
                    ? "bg-purple-500 scale-125"
                    : "bg-gray-600 hover:bg-gray-500"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
