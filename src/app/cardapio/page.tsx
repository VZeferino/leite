import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import MenuFull from "@/components/MenuFull";

export default function CardapioPage() {
  return (
    <main>
      <Navbar />
      <div className="pt-20"></div> {/* Espaço para o navbar fixo */}
      <MenuFull />
      <Footer />
    </main>
  );
} 