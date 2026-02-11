import Layout from './components/layout/Layout';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Methodology from './components/sections/Methodology';
import Skills from './components/sections/Skills';
import Projects from './components/sections/Projects';
import Experience from './components/sections/Experience';
import Contact from './components/sections/Contact';

function App() {
  return (
    <Layout>
      <Hero />
      <About />
      <Methodology />
      <Skills />
      <Projects />
      <Experience />
      <Contact />
    </Layout>
  );
}

export default App;
