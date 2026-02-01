import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Calendar, Users, Megaphone, Rocket, Store, Globe } from "lucide-react";

const services = [
  {
    icon: Calendar,
    title: "Integrated Events",
    description:
      "Comprehensive event solutions that seamlessly blend strategy, design, and execution for maximum impact.",
  },
  {
    icon: Users,
    title: "Corporate Conferences",
    description:
      "Professional conference management from intimate board meetings to large-scale conventions.",
  },
  {
    icon: Megaphone,
    title: "Brand Activations",
    description:
      "Engaging brand experiences that connect with audiences and create lasting impressions.",
  },
  {
    icon: Rocket,
    title: "Product Launches",
    description:
      "Spectacular launch events that generate buzz and position your product for success.",
  },
  {
    icon: Store,
    title: "Exhibitions & Retail",
    description:
      "Innovative exhibition design and retail event solutions that drive engagement.",
  },
  {
    icon: Globe,
    title: "Large-scale Campaigns",
    description:
      "End-to-end campaign execution across multiple cities and formats nationwide.",
  },
];

const capabilities = [
  {
    number: "01",
    title: "Strategy & Concept",
    description: "Deep dive into your brand objectives to craft concepts that resonate.",
  },
  {
    number: "02",
    title: "Design & Production",
    description: "State-of-the-art design and world-class production capabilities.",
  },
  {
    number: "03",
    title: "Logistics & Execution",
    description: "Seamless on-ground operations with meticulous attention to detail.",
  },
  {
    number: "04",
    title: "Post-event Amplification",
    description: "Extended brand engagement and content distribution strategies.",
  },
];

export const Services = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="services" className="py-24 lg:py-32 bg-secondary/30" ref={ref}>
      <div className="container mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-accent font-medium text-sm uppercase tracking-wider">
            Our Services
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mt-4 mb-6">
            Comprehensive Event Solutions
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            From concept to execution, we offer end-to-end event management services
            tailored to your brand's unique requirements.
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20"
        >
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              className="group bg-background rounded-2xl p-8 border border-border hover:border-accent/30 hover:shadow-xl transition-all duration-300"
            >
              <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-accent/20 group-hover:scale-110 transition-all duration-300">
                <service.icon className="w-7 h-7 text-primary group-hover:text-accent transition-colors" />
              </div>
              <h3 className="font-display text-xl font-semibold text-foreground mb-3">
                {service.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* End-to-End Capabilities */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="bg-primary rounded-3xl p-8 lg:p-12"
        >
          <h3 className="font-display text-2xl md:text-3xl font-bold text-primary-foreground mb-10 text-center">
            End-to-End Capabilities
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {capabilities.map((cap, index) => (
              <div key={cap.number} className="text-center">
                <div className="text-accent text-4xl font-bold mb-4 font-display">
                  {cap.number}
                </div>
                <h4 className="text-primary-foreground font-semibold text-lg mb-2">
                  {cap.title}
                </h4>
                <p className="text-primary-foreground/70 text-sm">
                  {cap.description}
                </p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
