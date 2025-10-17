import screenshotCalendar from "@/assets/screenshot-calendar.png";
import screenshotVote from "@/assets/screenshot-vote.png";
import screenshotAcademy from "@/assets/screenshot-academy.png";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

const screenshots = [
  {
    image: screenshotCalendar,
    title: "View elections at a glance",
    description: "Calendar",
  },
  {
    image: screenshotVote,
    title: "Plan your voting easily",
    description: "My Vote",
  },
  {
    image: screenshotAcademy,
    title: "Learn civic engagement",
    description: "Academy",
  },
];

const ScreenshotCarousel = () => {
  return (
    <section id="screenshots" className="overflow-hidden bg-background py-16">
      <div className="container mx-auto px-4">
        <h2 className="mb-12 text-center text-3xl font-bold text-foreground md:text-4xl" data-aos="fade-up">
          See CivicSpark in Action
        </h2>
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          plugins={[
            Autoplay({
              delay: 3000,
            }),
          ]}
          className="w-full"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          <CarouselContent className="-ml-4">
            {screenshots.map((screenshot, index) => (
              <CarouselItem key={index} className="pl-4 md:basis-1/2 lg:basis-1/3">
                <div className="text-center">
                  <div className="mb-4 rounded-3xl bg-gradient-hero p-6">
                    <div className="overflow-hidden rounded-2xl bg-gray-900">
                      <img
                        src={screenshot.image}
                        alt={screenshot.title}
                        className="w-full"
                      />
                    </div>
                  </div>
                  <h3 className="mb-1 font-bold text-foreground">{screenshot.title}</h3>
                  <p className="text-sm text-muted-foreground">{screenshot.description}</p>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </section>
  );
};

export default ScreenshotCarousel;
