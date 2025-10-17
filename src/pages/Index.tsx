
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ScreenshotCarousel from "@/components/ScreenshotCarousel";
import Features from "@/components/Features";
import CallToAction from "@/components/CallToAction";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background overflow-hidden">
      <Header />
      <main id="home">
        <Hero />
        <ScreenshotCarousel />
        <Features />
        <CallToAction />
      </main>
      <Footer />
    </div>
  );
};

export default Index;

