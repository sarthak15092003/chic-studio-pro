import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Search, Palette, Rocket, TrendingUp } from "lucide-react";

const steps = [
  {
    number: 1,
    icon: Search,
    title: "Discover",
    description:
      "We dive deep into understanding your brand, objectives, and audience to lay the foundation for success.",
    color: "from-pink to-purple",
  },
  {
    number: 2,
    icon: Palette,
    title: "Design",
    description:
      "Our creative team crafts innovative concepts and experiences tailored to your unique requirements.",
    color: "from-purple to-blue",
  },
  {
    number: 3,
    icon: Rocket,
    title: "Deliver",
    description:
      "Flawless execution with meticulous attention to every detail, ensuring seamless event delivery.",
    color: "from-yellow to-pink",
  },
  {
    number: 4,
    icon: TrendingUp,
    title: "Amplify",
    description:
      "Post-event engagement strategies that extend your reach and maximize brand impact.",
    color: "from-cyan to-purple",
  },
];

export const Process = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="process" className="py-24 lg:py-32 bg-background relative overflow-hidden" ref={ref}>
      {/* Background decoration */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-purple/5 via-pink/5 to-yellow/5 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-accent/10 text-accent font-bold text-sm uppercase tracking-wider mb-4">
            Our Process
          </span>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mt-4 mb-6">
            How We Create
            <br />
            <span className="text-gradient-warm">Magic</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A proven methodology refined over two decades to deliver exceptional
            experiences, every single time.
          </p>
        </motion.div>

        {/* Process Steps */}
        <div className="relative">
          {/* Connection Line - Desktop */}
          <div className="hidden lg:block absolute top-32 left-[10%] right-[10%] h-1 bg-gradient-to-r from-pink via-purple to-yellow rounded-full" />

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.15 * index }}
                className="relative group"
              >
                <div className="bg-background border-2 border-border rounded-3xl p-8 text-center hover:border-accent hover:shadow-2xl transition-all duration-300 relative z-10">
                  {/* Step Number - Large Background */}
                  <div className="absolute -top-6 left-1/2 -translate-x-1/2">
                    <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${step.color} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                      <span className="text-xl font-bold text-primary-foreground font-display">
                        {step.number}
                      </span>
                    </div>
                  </div>

                  {/* Icon */}
                  <div className="w-16 h-16 mx-auto mt-8 mb-6 rounded-2xl bg-secondary flex items-center justify-center group-hover:bg-accent/10 transition-colors">
                    <step.icon className="w-8 h-8 text-primary group-hover:text-accent transition-colors" />
                  </div>

                  <h3 className="font-display text-2xl font-bold text-foreground mb-3">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
