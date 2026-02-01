import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Check, Heart, Home, Trophy, Handshake } from "lucide-react";

const features = [
  "Pan-India execution capability",
  "Dedicated account management",
  "Real-time project tracking",
  "Transparent pricing",
  "Post-event analytics & reporting",
];

const highlights = [
  {
    icon: Heart,
    title: "Passionate Team",
    description:
      "A dedicated team of event professionals who bring enthusiasm and expertise to every project.",
    color: "from-pink to-purple",
  },
  {
    icon: Home,
    title: "In-house Resources",
    description:
      "Extensive inventory and workforce enabling quick deployment and seamless execution.",
    color: "from-purple to-blue",
  },
  {
    icon: Trophy,
    title: "Proven Excellence",
    description:
      "Consistent delivery of high-quality events across diverse formats and scales.",
    color: "from-yellow to-pink",
  },
  {
    icon: Handshake,
    title: "Trusted Partnerships",
    description:
      "Long-standing relationships with India's leading corporate and consumer brands.",
    color: "from-cyan to-purple",
  },
];

export const WhyUs = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-24 lg:py-32 bg-background relative overflow-hidden" ref={ref}>
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-20 right-20 w-72 h-72 bg-pink/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-20 w-72 h-72 bg-purple/5 rounded-full blur-3xl" />
      </div>
      
      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-4 py-2 rounded-full bg-accent/10 text-accent font-bold text-sm uppercase tracking-wider mb-4">
              Why Kashish Events
            </span>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mt-4 mb-6">
              Your Trusted Partner for
              <span className="text-gradient-warm"> Exceptional Events</span>
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              With two decades of experience and an unwavering commitment to
              excellence, we've become the preferred choice for brands seeking
              impactful event experiences.
            </p>

            {/* Feature List */}
            <ul className="space-y-4">
              {features.map((feature, index) => (
                <motion.li
                  key={feature}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.1 * index }}
                  className="flex items-center gap-4"
                >
                  <div className="w-8 h-8 rounded-lg bg-gradient-accent flex items-center justify-center flex-shrink-0">
                    <Check className="w-5 h-5 text-accent-foreground" />
                  </div>
                  <span className="text-foreground font-semibold">{feature}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Right Content - Highlights Grid */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid sm:grid-cols-2 gap-6"
          >
            {highlights.map((highlight, index) => (
              <motion.div
                key={highlight.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                className="bg-secondary/50 rounded-3xl p-6 border border-border hover:border-accent hover:shadow-xl transition-all duration-300 group"
              >
                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${highlight.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                  <highlight.icon className="w-7 h-7 text-primary-foreground" />
                </div>
                <h4 className="font-display text-lg font-bold text-foreground mb-2">
                  {highlight.title}
                </h4>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {highlight.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};
