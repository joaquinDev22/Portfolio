import MobileMenu from "./components/navigation/MobileMenu";
import AboutMe from "./components/sections/AboutMe";
import Habilities from "./components/sections/Habilities";
import Projects from "./components/sections/Projects";
import Footer from "./components/staticComponents/Footer";
import Header from "./components/staticComponents/Header";
import MenuProvider from "./context/MenuContext";
import { SkillsProvider } from "./context/SkillsContext";

export default function App() {
  return (
    <MenuProvider>
      <SkillsProvider>
        <div className="min-h-screen flex flex-col bg-slate-950 text-white overflow-x-hidden">
          <Header />
          <MobileMenu />
          <main className="flex-grow pt-18 sm:pt-28">
            <AboutMe />
            <Habilities />
            <Projects />
          </main>
          <Footer />
        </div>
      </SkillsProvider>
    </MenuProvider>
  );
}
