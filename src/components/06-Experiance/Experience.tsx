// Importing dependencies
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Calendar, MapPin, Briefcase } from "lucide-react";

const Experience = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const experiences = [
    {
      title: "Senior Frontend Developer",
      company: "TechCorp Solutions",
      location: "San Francisco, CA",
      period: "2022 - Present",
      description:
        "Leading frontend development team, architecting scalable React applications, and mentoring junior developers.",
      achievements: [
        "Improved application performance by 40%",
        "Led migration to TypeScript",
        "Implemented design system adopted company-wide",
      ],
    },
    {
      title: "Full Stack Developer",
      company: "StartupXYZ",
      location: "Remote",
      period: "2021 - 2022",
      description:
        "Developed and maintained full-stack applications using React, Node.js, and PostgreSQL.",
      achievements: [
        "Built MVP that attracted 10K+ users",
        "Reduced API response time by 60%",
        "Implemented real-time features using Socket.io",
      ],
    },
    {
      title: "Frontend Developer",
      company: "WebAgency Pro",
      location: "New York, NY",
      period: "2020 - 2021",
      description:
        "Created responsive web applications and collaborated with design teams to deliver pixel-perfect implementations.",
      achievements: [
        "Delivered 15+ client projects",
        "Improved mobile performance by 35%",
        "Established code review process",
      ],
    },
  ];

  return (
    <section id="experience" className="py-20 bg-gray-800">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Work <span className="text-purple-400">Experience</span>
          </h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            My professional journey and the experiences that shaped my career.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-0.5 h-full bg-purple-500"></div>

            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className={`relative mb-12 ${
                  index % 2 === 0
                    ? "md:text-right md:pr-8"
                    : "md:text-left md:pl-8"
                }`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-4 md:left-1/2 transform -translate-x-1/2 w-4 h-4 bg-purple-500 rounded-full border-4 border-gray-800 z-10"></div>

                <div
                  className={`ml-12 md:ml-0 ${
                    index % 2 === 0 ? "md:mr-8" : "md:ml-8"
                  }`}
                >
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    className="bg-gray-900 rounded-xl p-6 hover:shadow-2xl transition-all duration-300"
                  >
                    <div className="flex items-center gap-2 mb-2">
                      <Briefcase className="text-purple-400" size={18} />
                      <h3 className="text-xl font-bold text-white">
                        {exp.title}
                      </h3>
                    </div>
                    <h4 className="text-purple-300 font-semibold mb-2">
                      {exp.company}
                    </h4>

                    <div className="flex flex-wrap gap-4 mb-4 text-sm text-gray-400">
                      <div className="flex items-center gap-1">
                        <Calendar size={14} />
                        {exp.period}
                      </div>
                      <div className="flex items-center gap-1">
                        <MapPin size={14} />
                        {exp.location}
                      </div>
                    </div>

                    <p className="text-gray-300 mb-4">{exp.description}</p>

                    <div className="space-y-2">
                      <h5 className="text-white font-semibold">
                        Key Achievements:
                      </h5>
                      <ul className="space-y-1">
                        {exp.achievements.map((achievement, achIndex) => (
                          <li
                            key={achIndex}
                            className="text-gray-300 text-sm flex items-start gap-2"
                          >
                            <span className="text-purple-400 mt-1">•</span>
                            {achievement}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
