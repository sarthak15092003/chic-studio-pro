import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Lightbulb, Target, Users, Award } from "lucide-react";

const stats = [
  { value: "20+", label: "Years Experience" },
  { value: "500+", label: "Events Delivered" },
  { value: "100+", label: "Brand Partners" },
  { value: "Pan India", label: "Presence" },
];

const values = [
  {
    icon: Lightbulb,
    title: "Creative Excellence",
    description: "Innovative concepts that captivate audiences and elevate brands.",
  },
  {
    icon: Target,
    title: "Precision Execution",
    description: "Meticulous planning and flawless delivery, every single time.",
  },
  {
    icon: Users,
    title: "Dedicated Team",
    description: "Passionate professionals committed to your event's success.",
  },
  {
    icon: Award,
    title: "Proven Track Record",
    description: "Trusted by leading corporate and consumer brands across India.",
  },
];

export const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-24 lg:py-32 bg-background" ref={ref}>
      <div className="container mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-accent font-medium text-sm uppercase tracking-wider">
            About Us
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mt-4 mb-6">
            Crafting Memorable Experiences
            <br />
            <span className="text-primary">Since 2005</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-3xl mx-auto leading-relaxed">
            Kashish Events has been at the forefront of India's event management
            industry for over two decades. We blend creativity with precision to
            deliver high-impact experiences that resonate with audiences and drive
            lasting brand connections.
          </p>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-20"
        >
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className="text-center p-8 rounded-2xl bg-secondary/50 border border-border hover:border-accent/30 transition-colors"
            >
              <div className="font-display text-4xl md:text-5xl font-bold text-primary mb-2">
                {stat.value}
              </div>
              <div className="text-muted-foreground font-medium">{stat.label}</div>
            </div>
          ))}
        </motion.div>

        {/* Philosophy */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h3 className="font-display text-3xl font-bold text-foreground mb-6">
              Our Philosophy
            </h3>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              We believe every event is an opportunity to create something
              extraordinary. Our approach combines strategic thinking with creative
              innovation, ensuring each experience we craft not only meets but
              exceeds expectations.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed">
              From intimate corporate gatherings to large-scale brand activations,
              we bring the same level of dedication, attention to detail, and
              passion to every project.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-primary/5 rounded-3xl p-8 lg:p-10 border border-primary/10"
          >
            <h4 className="font-display text-xl font-semibold text-foreground mb-4">
              Our Vision & Mantra
            </h4>
            <blockquote className="text-xl md:text-2xl font-display text-primary italic leading-relaxed">
              "Creating impact-driven experiences that build lasting brand
              partnerships and unforgettable memories."
            </blockquote>
          </motion.div>
        </div>

        {/* Values */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {values.map((value, index) => (
            <div
              key={value.title}
              className="group p-6 rounded-2xl bg-background border border-border hover:border-accent/30 hover:shadow-lg transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-colors">
                <value.icon className="w-6 h-6 text-accent" />
              </div>
              <h4 className="font-display text-lg font-semibold text-foreground mb-2">
                {value.title}
              </h4>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {value.description}
              </p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
