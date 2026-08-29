import { useEffect, useState } from "react";
import Loader from "./components/Loader";
import CustomCursor from "./components/CustomCursor";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Certifications from "./components/Certifications";
import AnalyticsWorkflow from "./components/AnalyticsWorkflow";
import Projects from "./components/Projects";
import Journey from "./components/Journey";
import GithubSection from "./components/GithubSection";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const t = setTimeout(() => setLoading(false), 1400);
    return () => clearTimeout(t);
  }, []);

  return (
    <>
      <Loader show={loading} />
      <CustomCursor />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Certifications />
        <AnalyticsWorkflow />
        <Projects />
        <Journey />
        <GithubSection />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
