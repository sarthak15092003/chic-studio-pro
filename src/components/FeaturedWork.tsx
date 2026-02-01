import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowUpRight, Users, Newspaper, ThumbsUp, Building2, ShoppingBag, Smartphone, Briefcase, Store } from "lucide-react";
import { Button } from "@/components/ui/button";
import featuredImage from "@/assets/featured-event.jpg";

const stats = [
  { icon: Users, value: "500+", label: "Attendees" },
  { icon: Newspaper, value: "50+", label: "Media Coverage" },
  { icon: ThumbsUp, value: "100%", label: "Client Satisfaction" },
];

const industries = [
  { icon: Building2, title: "NSE & BSE", description: "Financial sector events" },
  { icon: ShoppingBag, title: "FMCG", description: "Brand activations" },
  { icon: Smartphone, title: "Consumer Electronics", description: "Tech launches" },
  { icon: Briefcase, title: "Corporate", description: "Conferences & summits" },
  { icon: Store, title: "Retail", description: "Exhibitions & pop-ups" },
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
    <section id="work" className="py-24 lg:py-32 bg-secondary/50 relative overflow-hidden" ref={ref}>
      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-accent/10 text-accent font-bold text-sm uppercase tracking-wider mb-4">
            Featured Work
          </span>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mt-4 mb-6">
            Experience
            <span className="text-gradient"> Highlights</span>
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
          className="bg-background rounded-3xl overflow-hidden border border-border shadow-xl mb-20"
        >
          <div className="grid lg:grid-cols-2">
            {/* Image */}
            <div className="relative h-72 lg:h-auto overflow-hidden">
              <img
                src={featuredImage}
                alt="LG G Flex 2 Launch Event"
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-purple-deep/60 to-transparent" />
              <div className="absolute top-6 left-6">
                <span className="px-4 py-2 bg-gradient-accent text-accent-foreground text-sm font-bold rounded-full shadow-glow-pink">
                  Featured Campaign
                </span>
              </div>
            </div>

            {/* Content */}
            <div className="p-8 lg:p-12 flex flex-col justify-center">
              <h3 className="font-display text-3xl lg:text-4xl font-bold text-foreground mb-4">
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
                  <div key={stat.label} className="text-center p-4 rounded-2xl bg-secondary/50">
                    <div className="w-12 h-12 mx-auto mb-3 rounded-xl bg-gradient-accent flex items-center justify-center">
                      <stat.icon className="w-6 h-6 text-accent-foreground" />
                    </div>
                    <div className="font-display text-2xl font-bold text-foreground">
                      {stat.value}
                    </div>
                    <div className="text-xs text-muted-foreground font-medium">{stat.label}</div>
                  </div>
                ))}
              </div>

              <Button
                onClick={scrollToContact}
                className="w-fit bg-gradient-accent hover:opacity-90 text-accent-foreground font-bold group shadow-glow-pink rounded-xl px-6"
              >
                Discuss Your Event
                <ArrowUpRight className="ml-2 w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
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
          <h3 className="font-display text-2xl md:text-3xl lg:text-4xl font-bold text-foreground text-center mb-4">
            Expertise Across <span className="text-gradient-warm">Sectors</span>
          </h3>
          <p className="text-muted-foreground text-center mb-10 max-w-2xl mx-auto">
            From finance to technology, retail to enterprise—we bring specialized
            knowledge to every industry.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {industries.map((industry, index) => (
              <motion.div
                key={industry.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                className="bg-background rounded-2xl p-6 border border-border hover:border-accent hover:shadow-xl transition-all duration-300 text-center group"
              >
                <div className="w-14 h-14 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-purple to-pink flex items-center justify-center group-hover:scale-110 transition-transform">
                  <industry.icon className="w-7 h-7 text-primary-foreground" />
                </div>
                <h4 className="font-bold text-foreground mb-1">{industry.title}</h4>
                <p className="text-muted-foreground text-sm">{industry.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
