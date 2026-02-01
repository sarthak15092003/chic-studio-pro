import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Lightbulb, Target, Users, Award, ArrowUpRight } from "lucide-react";

const stats = [
  { value: "20+", label: "Years Experience", color: "bg-pink/10 border-pink/20" },
  { value: "500+", label: "Events Delivered", color: "bg-yellow/10 border-yellow/20" },
  { value: "100+", label: "Brand Partners", color: "bg-cyan/10 border-cyan/20" },
  { value: "Pan India", label: "Presence", color: "bg-purple-light/10 border-purple-light/20" },
];

const values = [
  {
    icon: Lightbulb,
    title: "Creative Excellence",
    description: "Innovative concepts that captivate audiences and elevate brands.",
    gradient: "from-pink to-purple",
  },
  {
    icon: Target,
    title: "Precision Execution",
    description: "Meticulous planning and flawless delivery, every single time.",
    gradient: "from-yellow to-pink",
  },
  {
    icon: Users,
    title: "Dedicated Team",
    description: "Passionate professionals committed to your event's success.",
    gradient: "from-cyan to-purple",
  },
  {
    icon: Award,
    title: "Proven Track Record",
    description: "Trusted by leading corporate and consumer brands across India.",
    gradient: "from-purple to-pink",
  },
];

export const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-24 lg:py-32 bg-background relative overflow-hidden" ref={ref}>
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-pink/5 to-transparent rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-purple/5 to-transparent rounded-full blur-3xl" />
      
      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-accent/10 text-accent font-bold text-sm uppercase tracking-wider mb-4">
            About Us
          </span>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mt-4 mb-6">
            Crafting Memorable
            <br />
            <span className="text-gradient">Experiences Since 2005</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-3xl mx-auto leading-relaxed">
            Kashish Events has been at the forefront of India's event management
            industry for over two decades. We blend creativity with precision to
            deliver high-impact experiences.
          </p>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6 mb-20"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.4, delay: 0.1 * index }}
              className={`text-center p-6 lg:p-8 rounded-2xl ${stat.color} border hover:shadow-lg transition-all duration-300`}
            >
              <div className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-2">
                {stat.value}
              </div>
              <div className="text-muted-foreground font-medium text-sm lg:text-base">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Philosophy */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-20">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h3 className="font-display text-3xl lg:text-4xl font-bold text-foreground mb-6">
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
            className="relative"
          >
            <div className="bg-gradient-hero rounded-3xl p-8 lg:p-10">
              <h4 className="font-display text-xl font-bold text-primary-foreground mb-4 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-yellow" />
                Our Vision & Mantra
              </h4>
              <blockquote className="text-xl md:text-2xl font-display text-primary-foreground/90 leading-relaxed">
                "Creating impact-driven experiences that build lasting brand
                partnerships and unforgettable memories."
              </blockquote>
            </div>
            {/* Decorative element */}
            <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-yellow rounded-2xl -z-10" />
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
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              className="group p-6 rounded-2xl bg-background border border-border hover:border-accent/30 hover:shadow-xl transition-all duration-300 relative overflow-hidden"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${value.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />
              <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${value.gradient} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                <value.icon className="w-7 h-7 text-primary-foreground" />
              </div>
              <h4 className="font-display text-lg font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                {value.title}
              </h4>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {value.description}
              </p>
              <ArrowUpRight className="w-5 h-5 text-accent absolute top-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
