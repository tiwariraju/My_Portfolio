import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Responsibilities from './components/Responsibilities';
import Achievements from './components/Achievements';
import Skills from './components/Skills';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import FeaturedProjects from './components/FeaturedProjects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Experience />
        <Responsibilities />
        <Achievements />
        <Skills />
        <Services />
        <Portfolio />
        <FeaturedProjects />
        <Contact />
      </main>
      <Footer />
      <ScrollToTop />
    </>
  );
}
