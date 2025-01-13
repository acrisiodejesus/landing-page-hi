import Features from "@/components/Features";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/navbar";
import Pricing from "@/components/Pricing";

export default function Home() {
  return (
    <main className="min-h-screen pt-16">
      <Navbar />
      <Hero />
      <Features />
      <Pricing />
      <Footer />
    </main>
  );
}
