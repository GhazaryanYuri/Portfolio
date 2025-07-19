import Navigation from "./components/01-Navbar/Navigation";
import Hero from "./components/02-Hero/Hero";
import About from "./components/03-About/About";
import Skills from "./components/04-Skills/Skills";
import Projects from "./components/05-Projects/Projects";
// import Experience from "./components/06-Experiance/Experience";
import Contact from "./components/07-Contact/Contact";
import Footer from "./components/08-Footer/Footer";

function App() {
  return (
    <div className="bg-gray-900 overflow-hidden">
      <Navigation />
      <Hero />
      <About />
      <Skills />
      <Projects />
      {/* Temporarily not avaivable */}
      {/* <Experience /> */}
      {/* ------------------------- */}
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
