import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ImageWithFallback from "./components/ui/ImageWithFallback";
import WhatsAppButton from "./components/ui/WhatsAppButton";

function App() {
  return (
    <div className="relative min-h-screen w-full bg-slate-950 text-white overflow-hidden selection:bg-blue-500 selection:text-white">
      <ImageWithFallback
        src="/background_image.png"
        fallbackSrc="https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1920&auto=format&fit=crop"
        alt="Fondo de topografía de líneas"
        className="fixed inset-0 w-full h-screen object-cover opacity-20 blur-[1px] -z-20 pointer-events-none"
      />

      <div className="fixed inset-0 bg-linear-to-b from-slate-950/40 via-slate-950/80 to-slate-950 -z-10 pointer-events-none" />

      <Header />

      <main className="relative z-10">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>

      <WhatsAppButton />
      <Footer />
    </div>
  );
}

export default App;
