import { MapPin, Calendar, GraduationCap, Vote, Newspaper, User } from "lucide-react";

const features = [
  {
    icon: MapPin,
    title: "Voting Location Finder",
    description: "Interactive map showing nearby polling stations and voting locations with directions.",
  },
  {
    icon: Calendar,
    title: "Elections Calendar",
    description: "Personalized election calendar with reminders for important dates based on your location.",
  },
  {
    icon: GraduationCap,
    title: "Civic Education Academy",
    description: "Comprehensive course library covering civic topics with progress tracking and certificates.",
  },
  {
    icon: Vote,
    title: "My Vote",
    description: "Secure storage for voting preferences and personalized voting tools to stay organized.",
  },
  {
    icon: Newspaper,
    title: "News & Updates",
    description: "Curated news feed focused on civic topics with real-time updates on elections.",
  },
  {
    icon: User,
    title: "User Profile",
    description: "Personalized experience with dark mode support and customizable preferences.",
  },
];

const Features = () => {
  return (
    <section id="features" className="bg-muted py-20 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center" data-aos="fade-up">
          <div className="mb-4 inline-block rounded-full bg-primary/10 px-4 py-2 text-sm font-semibold text-primary">
            Features
          </div>
          <h2 className="mb-4 text-3xl font-bold text-foreground md:text-4xl">
            Everything you get with CivicSpark
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            Access voting locations, election calendars, civic education, and much more, all in one place. Made for citizens, by engaged citizens!
          </p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group rounded-2xl bg-card p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div className="mb-4 inline-flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-hero">
                <feature.icon className="h-7 w-7 text-white" />
              </div>
              <h3 className="mb-3 text-xl font-bold text-card-foreground">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
