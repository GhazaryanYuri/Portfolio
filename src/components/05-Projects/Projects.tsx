// Importing dependencies
import { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { ExternalLink, Github, ChevronLeft, ChevronRight } from "lucide-react";

// Importing images
import QRMenuBg from "../../images/QR-Menu-Armenia-bg.jpg";
import AcmeRocketsBg from "../../images/acme-rockets-bg.jpg";
import TicTacToeBg from "../../images/tic-tac-toe-bg.png";
import RingkuBg from "../../images/ringku-bg.png";
import AgencyLandingPageBg from "../../images/Agency-Website-Langing-Page-bg.png";
import TodoBg from "../../images/todo-bg.png";
import RegiMBg from "../../images/regim-bg.avif";
import SaaSBg from "../../images/SaaS-Landing-Page-bg.png";
import CalculatorBg from "../../images/calculator-app-bg.png";
import ECommerceBg from "../../images/e-commerece-bg.png";

const Projects = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [currentProject, setCurrentProject] = useState(0);

  const projects = [
    {
      title: "QR Menu Armenia",
      description:
        "A full-stack e-commerce solution with modern UI/UX, payment integration, and admin dashboard.",
      image: QRMenuBg,
      tags: ["React", "Python3", "FastAPI", "AWS", "EC2", "S3"],
      github: "#",
      demo: "https://qrmenuarmenia.site/",
      active: true,
    },
    {
      title: "Acme Rockets",
      description:
        "A sleek and responsive landing page for Acme Rocket, showcasing modern design and smooth user experience.",
      image: AcmeRocketsBg,
      tags: ["HTML 5", "JavaScript", "Tailwind v3"],
      github: "#",
      demo: "https://ghazaryanyuri.github.io/tailwindcss-lesson-project/build/index.html",
      active: true,
    },
    {
      title: "Tic Tac Toe",
      description:
        "A classic Tic-Tac-Toe game built with clean UI and interactive gameplay using JavaScript.",
      image: TicTacToeBg,
      tags: ["HTML 5", "CSS 3", "JavaScript"],
      github: "#",
      demo: "https://ghazaryanyuri.github.io/Tic-Tac-Toe/index.html",
      active: true,
    },
    {
      title: "Ringku Financial Web App",
      description:
        "Developed the frontend for Ringku, a modern financial web app with a clean interface and responsive design for seamless user interaction.",
      image: RingkuBg,
      tags: ["HTML 5", "CSS 3", "JavaScript"],
      github: "#",
      demo: "https://ghazaryanyuri.github.io/ringku-website-project/index.html",
      active: true,
    },
    {
      title: "Agency Landing Page",
      description:
        "Designed and built a professional agency landing page with a modern layout, smooth animations, and fully responsive design.",
      image: AgencyLandingPageBg,
      tags: ["HTML 5", "Tailwind v4"],
      github: "#",
      demo: "https://ghazaryanyuri.github.io/agency-website/build/index.html",
      active: true,
    },
    {
      title: "Todo App",
      description:
        "Created a simple and intuitive To-Do app with dynamic task management and a clean, responsive user interface.",
      image: TodoBg,
      tags: ["HTML 5", "CSS 3", "JavaScript"],
      github: "#",
      demo: "https://ghazaryanyuri.github.io/todo-app/index.html",
      active: true,
    },
    {
      title: "Random Jokes App",
      description:
        "Built a fun and lightweight Random Jokes app that fetches and displays jokes using an external API with a user-friendly design.",
      image: null,
      tags: ["HTML 5", "CSS 3", "JavaScript", "Open Source API"],
      github: "#",
      demo: "https://ghazaryanyuri.github.io/randomJokes-app/index.html",
      active: true,
    },
    {
      title: "RegiM Landing Page",
      description:
        "Crafted the RegiM landing page with a modern aesthetic, responsive layout, and engaging visuals to highlight the brand’s services.",
      image: RegiMBg,
      tags: ["Vue", "Tailwind v3"],
      github: "#",
      demo: "https://ghazaryanyuri.github.io/RegiM-Vue.JS/index.html",
      active: true,
    },
    {
      title: "Traseve Travel Web App",
      description:
        "Developed the Traseve travel landing page with an eye-catching design, smooth scrolling, and responsive sections to showcase travel destinations effectively.",
      image: null,
      tags: ["React", "CSS 3"],
      github: "#",
      demo: "https://ghazaryanyuri.github.io/Traseve-Travel/",
      active: true,
    },
    {
      title: "SaaS Landing Page",
      description:
        "Designed and developed a sleek SaaS landing page featuring a modern UI, clear call-to-actions, and fully responsive layout for optimal user engagement.",
      image: SaaSBg,
      tags: ["React", "CSS 3", "TypeScript"],
      github: "#",
      demo: "https://ghazaryanyuri.github.io/SaaS-Landing-Page/",
      active: true,
    },
    {
      title: "Calculator App",
      description:
        "Built a functional and responsive calculator app with a clean UI, supporting basic arithmetic operations using JavaScript.",
      image: CalculatorBg,
      tags: ["HTML 5", "CSS 3", "JavaScript"],
      github: "#",
      demo: "https://ghazaryanyuri.github.io/calculator-app/",
      active: true,
    },
    {
      title: "E-Commerece Website",
      description:
        "E-Commerece website with modern design. This is not a real E-Commerece website, this is only for practice.",
      image: ECommerceBg,
      tags: ["React", "React Router", "TypeScript", "Tailwind CSS v4"],
      github: "#",
      demo: "#",
      active: false,
    },
  ];

  const nextProject = () => {
    setCurrentProject((prev) => (prev + 1) % projects.length);
  };

  const prevProject = () => {
    setCurrentProject((prev) => (prev - 1 + projects.length) % projects.length);
  };

  return (
    <section id="projects" className="py-20 bg-gray-900">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Featured <span className="text-purple-400">Projects</span>
          </h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Here are some of my recent projects that showcase my skills and
            creativity.
          </p>
        </motion.div>

        <div className="relative max-w-6xl mx-auto">
          {/* Project Carousel */}
          <div className="overflow-hidden">
            <motion.div
              animate={{ x: -currentProject * 100 + "%" }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="flex"
            >
              {projects.map((project, index) => (
                <div key={index} className="w-full flex-shrink-0 px-4">
                  <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8, delay: index * 0.2 }}
                    className="bg-gray-800 rounded-2xl overflow-hidden hover:shadow-2xl transition-shadow duration-300"
                  >
                    <div className="relative group">
                      {project.image ? (
                        <img
                          src={project.image}
                          alt={project.title}
                          className="w-full h-72 object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                      ) : (
                        <div className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300 grid place-content-center place-items-center text-purple-500">
                          THERE IS NO IMAGE FOUND
                        </div>
                      )}
                      <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      <div className="absolute bottom-4 right-4 flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <motion.a
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                          href={project.github}
                          target="_blank"
                          className="p-2 bg-gray-800 rounded-full text-white hover:bg-purple-500 transition-colors duration-300"
                        >
                          <Github size={20} />
                        </motion.a>
                        <motion.a
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                          href={project.demo}
                          className="p-2 bg-gray-800 rounded-full text-white hover:bg-purple-500 transition-colors duration-300"
                        >
                          <ExternalLink size={20} />
                        </motion.a>
                      </div>
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-bold text-white mb-3">
                        {project.title}
                      </h3>
                      <p className="text-gray-300 mb-4 line-clamp-2">
                        {project.description}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {project.tags.map((tag, tagIndex) => (
                          <span
                            key={tagIndex}
                            className="px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-sm"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                      {!project.active && (
                        <div className="mt-4 p-4 text-white text-2xl font-bold tracking-wide">
                          Coming Soon
                        </div>
                      )}
                    </div>
                  </motion.div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={prevProject}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-4 bg-purple-500 hover:bg-purple-600 text-white p-3 rounded-full transition-colors duration-300 shadow-lg"
          >
            <ChevronLeft size={24} />
          </button>
          <button
            onClick={nextProject}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-4 bg-purple-500 hover:bg-purple-600 text-white p-3 rounded-full transition-colors duration-300 shadow-lg"
          >
            <ChevronRight size={24} />
          </button>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-8 space-x-2">
            {projects.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentProject(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentProject
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

export default Projects;
