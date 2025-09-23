import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Systems from "@/components/Systems";
import Why from "@/components/Why";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-zinc-900 w-full max-w-[100vw]">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Systems />
        <Why />
        <Testimonials />
        <Contact />
        <Footer />
      </main>
    </div>
  );
}
