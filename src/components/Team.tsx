import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Quote, Sparkles } from "lucide-react";

export const Team = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-24 lg:py-32 bg-gradient-hero relative overflow-hidden" ref={ref}>
      {/* Decorative elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-64 h-64 bg-pink/20 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-20 w-64 h-64 bg-yellow/10 rounded-full blur-3xl" />
        <motion.div
          className="absolute top-32 right-32 text-yellow"
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        >
          <Sparkles className="w-8 h-8" />
        </motion.div>
      </div>
      
      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-4xl mx-auto"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-primary-foreground/10 text-yellow font-bold text-sm uppercase tracking-wider mb-4">
            Our Team
          </span>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mt-4 mb-6">
            Passionate Professionals,
            <br />
            <span className="text-gradient-warm">Exceptional Results</span>
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
            <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-12 h-12 rounded-2xl bg-gradient-warm flex items-center justify-center">
              <Quote className="w-6 h-6 text-purple-deep" />
            </div>
            <blockquote className="font-display text-2xl md:text-3xl text-primary-foreground italic leading-relaxed mt-4">
              "Our strength lies in our people—experienced, passionate, and driven
              to create extraordinary experiences."
            </blockquote>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
