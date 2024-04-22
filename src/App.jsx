import { useEffect, useState } from "react";
import DotGroup from "./components/DotGroup";
import LineGradient from "./components/LineGradient";
import Navbar from "./apps/navbar/Navbar";
import Projects from "./apps/Projects/Projects";
import useMediaQuery from "./hooks/useMediaQuery";
import Landing from "./apps/Landing/Landing";
import MySkills from "./apps/Skill/MySkills";
import Contact from "./apps/Contact/Contact";
import Footer from "./apps/Footer/Footer";
import Abilities from "./apps/Ability/Abilities";
import RefrenceProjects from "./apps/Experiences/RefrenceProjects";
import Experiences from "./apps/Experiences/Experiences";
import DarkMode from "./components/DarkMode";

function App() {
  const [selectedPage, setSelectedPage] = useState("home");
  const [isTopOfPage, setIsTopOfPage] = useState(true);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) {
        setIsTopOfPage(true);
      }
      if (window.scrollY !== 0) {
        setIsTopOfPage(false);
      }
    };
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <main className="app bg-deep-blue">
      <Navbar
        isTopOfPage={isTopOfPage}
        selectedPage={selectedPage}
        setSelectedPage={setSelectedPage}
      />
      <DarkMode />
      <Landing setSelectedPage={setSelectedPage} />
      <MySkills />
      <Experiences />
      <Abilities />
      <Projects />
      <Contact />

      <Footer />
    </main>
  );
}

export default App;
