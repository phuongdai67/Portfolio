import About from "./components/About/About";
import Hero from "./components/Hero/Hero";
import Skills from "./components/Skills/Skills";

export default function Home() {
  return (
    <main className="flex flex-col items-center min-h-screen p-8 sm:p-20 gap-16">
      <Hero />
      <Skills />
      <About />
    </main>
  );
}
