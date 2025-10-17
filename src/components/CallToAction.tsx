import { Button } from "@/components/ui/button";
import { Download, Apple } from "lucide-react";
import screenshotAcademy from "@/assets/screenshot-academy.png";

const CallToAction = () => {
  return (
    <section id="download" className="bg-gradient-hero py-20">
      <div className="container mx-auto px-4">
        <div className="grid items-center gap-12 md:grid-cols-2">
          <div className="text-center text-white md:text-left" data-aos="fade-right">
            <h2 className="mb-4 text-3xl font-bold md:text-4xl">
              Take your civic engagement into your own hands.
            </h2>
            <p className="mb-8 text-lg text-white/90">
              Download CivicSpark today and start your journey toward informed, active citizenship.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row sm:justify-center md:justify-start">
              <Button 
                size="lg" 
                className="group bg-white text-primary hover:bg-white/90 hover:shadow-lg transition-all duration-300"
              >
                <Apple className="mr-2 h-5 w-5 transition-transform group-hover:scale-110" />
                Download on App Store
              </Button>
              <Button 
                size="lg" 
                className="group bg-white text-primary hover:bg-white/90 hover:shadow-lg transition-all duration-300"
              >
                <Download className="mr-2 h-5 w-5 transition-transform group-hover:scale-110" />
                Get it on Play Store
              </Button>
            </div>
          </div>
          
          <div className="flex justify-center" data-aos="fade-left">
            <div className="w-64 md:w-80">
              <div className="rounded-[2.5rem] bg-gray-900 p-2 shadow-2xl">
                <img 
                  src={screenshotAcademy} 
                  alt="CivicSpark App" 
                  className="w-full rounded-[2rem]"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;