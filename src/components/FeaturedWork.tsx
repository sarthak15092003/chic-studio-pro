import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowRight, Users, Newspaper, ThumbsUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import featuredImage from "@/assets/featured-event.jpg";

const stats = [
  { icon: Users, value: "500+", label: "Attendees" },
  { icon: Newspaper, value: "50+", label: "Media Coverage" },
  { icon: ThumbsUp, value: "100%", label: "Client Satisfaction" },
];

const industries = [
  { title: "NSE & BSE", description: "Financial sector events and corporate communications" },
  { title: "FMCG", description: "Consumer goods brand activations and launches" },
  { title: "Consumer Electronics", description: "Tech product launches and experience centers" },
  { title: "Corporate & Enterprise", description: "Conferences, summits, and leadership events" },
  { title: "Retail & Exhibitions", description: "Trade shows, pop-ups, and retail activations" },
];

export const FeaturedWork = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const scrollToContact = () => {
    const element = document.querySelector("#contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="work" className="py-24 lg:py-32 bg-secondary/30" ref={ref}>
      <div className="container mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-accent font-medium text-sm uppercase tracking-wider">
            Featured Work
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mt-4 mb-6">
            Experience Highlights
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Showcasing innovation, creativity, and flawless execution that defines
            our approach to every event.
          </p>
        </motion.div>

        {/* Featured Case Study */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-background rounded-3xl overflow-hidden border border-border mb-20"
        >
          <div className="grid lg:grid-cols-2">
            {/* Image */}
            <div className="relative h-64 lg:h-auto">
              <img
                src={featuredImage}
                alt="LG G Flex 2 Launch Event"
                className="w-full h-full object-cover"
              />
              <div className="absolute top-6 left-6">
                <span className="px-4 py-2 bg-accent text-accent-foreground text-sm font-medium rounded-full">
                  Featured Campaign
                </span>
              </div>
            </div>

            {/* Content */}
            <div className="p-8 lg:p-12 flex flex-col justify-center">
              <h3 className="font-display text-3xl font-bold text-foreground mb-4">
                LG G Flex 2 Launch
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-8">
                A groundbreaking product launch that showcased LG's innovative curved
                smartphone to media, influencers, and industry stakeholders. The event
                featured immersive brand experiences, interactive product demos, and
                spectacular stage design that captured the essence of technological
                innovation.
              </p>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-4 mb-8">
                {stats.map((stat) => (
                  <div key={stat.label} className="text-center">
                    <div className="w-10 h-10 mx-auto mb-2 rounded-lg bg-accent/10 flex items-center justify-center">
                      <stat.icon className="w-5 h-5 text-accent" />
                    </div>
                    <div className="font-display text-xl font-bold text-foreground">
                      {stat.value}
                    </div>
                    <div className="text-xs text-muted-foreground">{stat.label}</div>
                  </div>
                ))}
              </div>

              <Button
                onClick={scrollToContact}
                className="w-fit bg-primary hover:bg-primary/90 text-primary-foreground group"
              >
                Discuss Your Event
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </div>
        </motion.div>

        {/* Industries */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <h3 className="font-display text-2xl md:text-3xl font-bold text-foreground text-center mb-4">
            Expertise Across Sectors
          </h3>
          <p className="text-muted-foreground text-center mb-10 max-w-2xl mx-auto">
            From finance to technology, retail to enterprise—we bring specialized
            knowledge and tailored solutions to every industry we serve.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-4">
            {industries.map((industry, index) => (
              <motion.div
                key={industry.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                className="bg-background rounded-xl p-6 border border-border hover:border-accent/30 hover:shadow-lg transition-all duration-300 text-center"
              >
                <h4 className="font-semibold text-foreground mb-2">{industry.title}</h4>
                <p className="text-muted-foreground text-sm">{industry.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
