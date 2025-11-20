import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Experience from '../components/Experience';
import Projects from '../components/Projects';
import Skills from '../components/Skills';
import Contact from '../components/Contact';
import ChatWidget from '../components/ChatWidget';

export default function Home() {
  return (
    <div className="relative min-h-screen bg-black text-zinc-300">
      <div className="noise-bg"></div>
      <Navbar />
      <main className="relative z-10">
        <Hero />
        <Experience />
        <Projects />
        <Skills />
      </main>
      <Contact />
      <ChatWidget />
    </div>
  );
}
