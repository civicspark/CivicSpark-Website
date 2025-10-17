const stats = [
  {
    number: "50,000+",
    label: "Monthly active users",
    sublabel: "(and growing)",
  },
  {
    number: "3,500+",
    label: "Voting locations mapped",
    sublabel: "across the US",
  },
  {
    number: "#1",
    label: "Top civic engagement app",
    sublabel: "for informed citizens",
  },
];

const Stats = () => {
  return (
    <section className="border-y border-border bg-background py-16">
      <div className="container mx-auto px-4">
        <div className="grid gap-8 md:grid-cols-3">
          {stats.map((stat, index) => (
            <div key={index} className="text-center" data-aos="fade-up" data-aos-delay={index * 100}>
              <div className="mb-2 text-4xl font-bold text-primary md:text-5xl">
                {stat.number}
              </div>
              <div className="text-lg font-semibold text-foreground">
                {stat.label}
              </div>
              <div className="text-sm text-muted-foreground">
                {stat.sublabel}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;