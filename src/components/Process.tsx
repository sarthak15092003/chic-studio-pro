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
  },
  {
    number: 2,
    icon: Palette,
    title: "Design",
    description:
      "Our creative team crafts innovative concepts and experiences tailored to your unique requirements.",
  },
  {
    number: 3,
    icon: Rocket,
    title: "Deliver",
    description:
      "Flawless execution with meticulous attention to every detail, ensuring seamless event delivery.",
  },
  {
    number: 4,
    icon: TrendingUp,
    title: "Amplify",
    description:
      "Post-event engagement strategies that extend your reach and maximize brand impact.",
  },
];

export const Process = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="process" className="py-24 lg:py-32 bg-background" ref={ref}>
      <div className="container mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-accent font-medium text-sm uppercase tracking-wider">
            Our Process
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mt-4 mb-6">
            How We Create Magic
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A proven methodology refined over two decades to deliver exceptional
            experiences, every single time.
          </p>
        </motion.div>

        {/* Process Steps */}
        <div className="relative">
          {/* Connection Line */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-border -translate-y-1/2" />

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.15 * index }}
                className="relative"
              >
                <div className="bg-background border border-border rounded-2xl p-8 text-center hover:border-accent/30 hover:shadow-lg transition-all duration-300 relative z-10">
                  {/* Step Number */}
                  <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-accent/10 flex items-center justify-center relative">
                    <span className="text-2xl font-bold text-accent font-display">
                      {step.number}
                    </span>
                    <div className="absolute -inset-2 rounded-full border-2 border-dashed border-accent/30" />
                  </div>

                  {/* Icon */}
                  <div className="w-12 h-12 mx-auto mb-4 rounded-xl bg-secondary flex items-center justify-center">
                    <step.icon className="w-6 h-6 text-primary" />
                  </div>

                  <h3 className="font-display text-xl font-semibold text-foreground mb-3">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
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
