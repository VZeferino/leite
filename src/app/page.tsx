import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import MenuSimple from "@/components/MenuSimple";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <About />
      <MenuSimple />
      <Testimonials />
      <Contact />
      <Footer />
    </main>
  );
}
