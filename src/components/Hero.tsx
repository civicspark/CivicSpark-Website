import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";
import screenshotHome from "@/assets/screenshot-home.png";
import screenshotCalendar from "@/assets/screenshot-calendar.png";

const Hero = () => {
  return (
    <section className="relative overflow-clip bg-gradient-hero py-20 md:py-32">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(255,255,255,0.1),transparent_50%)]" />
      
      <div className="container relative mx-auto px-4">
        <div className="grid items-center gap-12 md:grid-cols-2">
          {/* Left Content */}
          <div className="text-center md:text-left">
            <div className="mb-6 inline-block rounded-full bg-white/20 px-4 py-2 text-sm font-medium text-white backdrop-blur-sm">
              Empowering Civic Engagement
            </div>
            
            <h1 className="mb-6 text-4xl font-bold leading-tight text-white md:text-5xl lg:text-6xl">
              Navigate Your Civic Journey.
            </h1>
            
            <p className="mb-8 text-lg text-white/90 md:text-xl">
              The best way to stay informed about elections, find voting locations, and become an engaged citizen.
            </p>
            
            <div className="flex flex-col gap-4 sm:flex-row sm:justify-center md:justify-start">
              <Button 
                size="lg" 
                className="group bg-white text-primary hover:bg-white/90 hover:shadow-lg transition-all duration-300"
                asChild
              >
                <a href="#download">
                  <Download className="mr-2 h-5 w-5 transition-transform group-hover:scale-110" />
                  Download App
                </a>
              </Button>
            </div>
          </div>
          
          {/* Right Content - Phone Mockups */}
          <div className="relative flex justify-center md:justify-end">
            <div className="relative">
              {/* Main Phone */}
              <div className="relative z-10 w-64 md:w-72">
                <div className="rounded-[2.5rem] bg-gray-900 p-2 shadow-2xl">
                  <img 
                    src={screenshotHome} 
                    alt="CivicSpark Home Screen" 
                    className="w-full rounded-[2rem]"
                  />
                </div>
              </div>
              
              {/* Secondary Phone */}
              <div className="absolute -right-16 top-12 w-56 opacity-90 md:-right-20 md:w-64">
                <div className="rounded-[2.5rem] bg-gray-900 p-2 shadow-2xl">
                  <img 
                    src={screenshotCalendar} 
                    alt="CivicSpark Calendar Screen" 
                    className="w-full rounded-[2rem]"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;