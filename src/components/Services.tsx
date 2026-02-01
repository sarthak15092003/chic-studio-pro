import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Calendar, Users, Megaphone, Rocket, Store, Globe, ArrowUpRight } from "lucide-react";

const services = [
  {
    icon: Calendar,
    title: "Integrated Events",
    description:
      "Comprehensive event solutions that seamlessly blend strategy, design, and execution for maximum impact.",
    color: "from-pink to-purple",
    bgColor: "bg-pink/5",
  },
  {
    icon: Users,
    title: "Corporate Conferences",
    description:
      "Professional conference management from intimate board meetings to large-scale conventions.",
    color: "from-purple to-blue",
    bgColor: "bg-purple/5",
  },
  {
    icon: Megaphone,
    title: "Brand Activations",
    description:
      "Engaging brand experiences that connect with audiences and create lasting impressions.",
    color: "from-yellow to-pink",
    bgColor: "bg-yellow/5",
  },
  {
    icon: Rocket,
    title: "Product Launches",
    description:
      "Spectacular launch events that generate buzz and position your product for success.",
    color: "from-cyan to-purple",
    bgColor: "bg-cyan/5",
  },
  {
    icon: Store,
    title: "Exhibitions & Retail",
    description:
      "Innovative exhibition design and retail event solutions that drive engagement.",
    color: "from-pink to-yellow",
    bgColor: "bg-pink/5",
  },
  {
    icon: Globe,
    title: "Large-scale Campaigns",
    description:
      "End-to-end campaign execution across multiple cities and formats nationwide.",
    color: "from-purple to-pink",
    bgColor: "bg-purple/5",
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
    <section id="services" className="py-24 lg:py-32 bg-secondary/50 relative overflow-hidden" ref={ref}>
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-20 w-64 h-64 bg-purple/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-20 w-64 h-64 bg-pink/10 rounded-full blur-3xl" />
      </div>
      
      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-accent/10 text-accent font-bold text-sm uppercase tracking-wider mb-4">
            Our Services
          </span>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mt-4 mb-6">
            Comprehensive Event
            <br />
            <span className="text-gradient">Solutions</span>
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
              className={`group ${service.bgColor} backdrop-blur-sm rounded-3xl p-8 border border-border hover:border-accent/30 hover:shadow-2xl transition-all duration-300 relative overflow-hidden`}
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />
              
              <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-6 group-hover:scale-110 group-hover:shadow-lg transition-all duration-300`}>
                <service.icon className="w-8 h-8 text-primary-foreground" />
              </div>
              
              <h3 className="font-display text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                {service.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {service.description}
              </p>
              
              <div className="mt-6 flex items-center text-accent font-semibold text-sm opacity-0 group-hover:opacity-100 transition-opacity">
                Learn more <ArrowUpRight className="w-4 h-4 ml-1" />
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* End-to-End Capabilities */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="bg-gradient-hero rounded-3xl p-8 lg:p-12 relative overflow-hidden"
        >
          {/* Decorative elements */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-pink/20 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-yellow/10 rounded-full blur-3xl" />
          
          <h3 className="font-display text-2xl md:text-3xl lg:text-4xl font-bold text-primary-foreground mb-12 text-center relative z-10">
            End-to-End Capabilities
          </h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
            {capabilities.map((cap, index) => (
              <motion.div
                key={cap.number}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.5 + 0.1 * index }}
                className="text-center group"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary-foreground/10 border border-primary-foreground/20 mb-4 group-hover:bg-yellow group-hover:border-yellow transition-all duration-300">
                  <span className="text-2xl font-bold text-primary-foreground group-hover:text-purple-deep font-display">
                    {cap.number}
                  </span>
                </div>
                <h4 className="text-primary-foreground font-bold text-lg mb-2">
                  {cap.title}
                </h4>
                <p className="text-primary-foreground/70 text-sm">
                  {cap.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
