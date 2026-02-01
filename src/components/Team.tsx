import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Quote } from "lucide-react";

export const Team = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-24 lg:py-32 bg-primary" ref={ref}>
      <div className="container mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-4xl mx-auto"
        >
          <span className="text-accent font-medium text-sm uppercase tracking-wider">
            Our Team
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-primary-foreground mt-4 mb-6">
            Passionate Professionals,
            <br />
            Exceptional Results
          </h2>
          <p className="text-primary-foreground/80 text-lg leading-relaxed mb-12">
            Behind every successful event is a team of dedicated professionals who
            bring expertise, creativity, and unwavering commitment to excellence.
            From strategic planners to creative designers, logistics experts to
            on-ground execution teams—each member plays a vital role in bringing
            your vision to life.
          </p>

          {/* Quote */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="relative bg-primary-foreground/10 backdrop-blur-sm rounded-3xl p-8 lg:p-12 border border-primary-foreground/20"
          >
            <Quote className="w-12 h-12 text-accent mb-6 mx-auto" />
            <blockquote className="font-display text-2xl md:text-3xl text-primary-foreground italic leading-relaxed">
              "Our strength lies in our people—experienced, passionate, and driven
              to create extraordinary experiences."
            </blockquote>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
