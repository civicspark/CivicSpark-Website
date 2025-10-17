import { Quote } from "lucide-react";

const Testimonial = () => {
  return (
    <section id="testimonials" className="bg-gradient-card py-20">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-3xl text-center" data-aos="fade-up">
          <div className="mb-6 flex justify-center">
            <div className="rounded-full bg-primary/10 p-4">
              <Quote className="h-8 w-8 text-primary" />
            </div>
          </div>
          
          <blockquote className="mb-6 text-xl italic text-foreground md:text-2xl">
            "This app helps me to avoid the hassle of searching for voting locations and staying updated on elections. With CivicSpark, I can simply open the app and I'm informed within a few seconds."
          </blockquote>
          
          <div className="text-sm font-semibold text-muted-foreground">
            App Store Reviewer
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;