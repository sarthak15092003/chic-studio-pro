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
  },
  {
    icon: Home,
    title: "In-house Resources",
    description:
      "Extensive inventory and workforce enabling quick deployment and seamless execution.",
  },
  {
    icon: Trophy,
    title: "Proven Excellence",
    description:
      "Consistent delivery of high-quality events across diverse formats and scales.",
  },
  {
    icon: Handshake,
    title: "Trusted Partnerships",
    description:
      "Long-standing relationships with India's leading corporate and consumer brands.",
  },
];

export const WhyUs = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-24 lg:py-32 bg-background" ref={ref}>
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <span className="text-accent font-medium text-sm uppercase tracking-wider">
              Why Kashish Events
            </span>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mt-4 mb-6">
              Your Trusted Partner for
              <span className="text-primary"> Exceptional Events</span>
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
                  className="flex items-center gap-3"
                >
                  <div className="w-6 h-6 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0">
                    <Check className="w-4 h-4 text-accent" />
                  </div>
                  <span className="text-foreground font-medium">{feature}</span>
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
                className="bg-secondary/50 rounded-2xl p-6 border border-border hover:border-accent/30 hover:shadow-lg transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                  <highlight.icon className="w-6 h-6 text-primary" />
                </div>
                <h4 className="font-display text-lg font-semibold text-foreground mb-2">
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
