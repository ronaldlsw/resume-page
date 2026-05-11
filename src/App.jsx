import Layout from "./components/layout/Layout";
import Hero from "./components/sections/Hero";
import About from "./components/sections/About";
import Projects from "./components/sections/Projects";
import TechStack from "./components/sections/TechStack";
import Certifications from "./components/sections/Certifications";
import Testimonials from "./components/sections/Testimonials";
import Achievements from "./components/sections/Achievements";
import Timeline from "./components/sections/Timeline";
import Contact from "./components/sections/Contact";

export default function App() {
  return (
    <Layout>
      <Hero />
      <About />
      <Projects />
      <TechStack />
      <Certifications />
      {/* <Testimonials /> */}
      <Achievements />
      <Timeline />
      <Contact />
    </Layout>
  );
}
