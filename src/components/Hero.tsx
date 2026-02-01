import { motion } from "framer-motion";
import { ArrowUpRight, ChevronDown, Sparkles, Star, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";

export const Hero = () => {
  const [countdown, setCountdown] = useState({
    days: 0,
    hours: 0,
    mins: 0,
    secs: 0,
  });

  useEffect(() => {
    const targetDate = new Date("2025-11-22").getTime();

    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate - now;

      setCountdown({
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        mins: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        secs: Math.floor((distance % (1000 * 60)) / 1000),
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-hero">
      {/* Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Floating shapes */}
        <motion.div
          className="absolute top-20 right-20 w-20 h-20 bg-yellow/20 rounded-full blur-2xl"
          animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0.8, 0.5] }}
          transition={{ duration: 4, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-40 left-20 w-32 h-32 bg-pink/20 rounded-full blur-3xl"
          animate={{ scale: [1.2, 1, 1.2], opacity: [0.6, 0.3, 0.6] }}
          transition={{ duration: 5, repeat: Infinity }}
        />
        <motion.div
          className="absolute top-1/3 right-1/4 w-16 h-16 bg-cyan/20 rounded-full blur-xl"
          animate={{ y: [0, -30, 0] }}
          transition={{ duration: 6, repeat: Infinity }}
        />

        {/* Decorative icons */}
        <motion.div
          className="absolute top-32 right-32 text-yellow"
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        >
          <Sparkles className="w-8 h-8" />
        </motion.div>
        <motion.div
          className="absolute bottom-32 right-48 text-pink-light"
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 3, repeat: Infinity }}
        >
          <Star className="w-6 h-6" />
        </motion.div>
        <motion.div
          className="absolute top-48 left-32 text-cyan"
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <Zap className="w-6 h-6" />
        </motion.div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 lg:px-12 pt-20 pb-32 lg:pb-40">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-primary-foreground/10 backdrop-blur-sm border border-primary-foreground/20 mb-8"
            >
              <span className="w-2 h-2 rounded-full bg-yellow animate-pulse" />
              <span className="text-sm text-primary-foreground font-semibold">
                Since 2005 • 20+ Years of Excellence
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="font-display text-5xl md:text-6xl lg:text-7xl font-bold text-primary-foreground leading-[1.1] mb-6"
            >
              Designing
              <br />
              <span className="text-gradient-warm">Experiences.</span>
              <br />
              Delivering Impact.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="text-lg text-primary-foreground/70 mb-10 max-w-lg leading-relaxed"
            >
              India's trusted partner for high-impact corporate events, delivering
              seamless execution and unforgettable brand experiences nationwide.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.5 }}
              className="flex flex-wrap gap-4"
            >
              <Button
                size="lg"
                onClick={() => scrollToSection("#contact")}
                className="bg-accent hover:bg-accent/90 text-accent-foreground px-8 py-6 text-lg font-bold group shadow-glow-pink rounded-xl"
              >
                Get in Touch
                <ArrowUpRight className="ml-2 w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={() => scrollToSection("#work")}
                className="border-primary-foreground/30 text-primary-foreground bg-primary-foreground/10 hover:bg-primary-foreground/20 hover:text-primary-foreground px-8 py-6 text-lg font-bold rounded-xl"
              >
                View Our Work
              </Button>
            </motion.div>
          </div>

          {/* Right Content - Countdown */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.6 }}
            className="hidden lg:block"
          >
            <div className="bg-primary-foreground/10 backdrop-blur-md rounded-3xl p-8 border border-primary-foreground/20">
              <div className="text-center mb-6">
                <span className="text-yellow font-bold text-sm tracking-wider">NEXT BIG EVENT</span>
                <h3 className="font-display text-3xl font-bold text-primary-foreground mt-2">
                  Corporate Summit 2025
                </h3>
              </div>

              <div className="grid grid-cols-4 gap-4 mb-6">
                {[
                  { value: countdown.days, label: "Days" },
                  { value: countdown.hours, label: "Hrs" },
                  { value: countdown.mins, label: "Mins" },
                  { value: countdown.secs, label: "Secs" },
                ].map((item) => (
                  <div
                    key={item.label}
                    className="bg-primary-foreground/10 rounded-2xl p-4 text-center border border-primary-foreground/10"
                  >
                    <div className="font-display text-3xl font-bold text-primary-foreground">
                      {item.value.toString().padStart(2, "0")}
                    </div>
                    <div className="text-primary-foreground/60 text-sm font-medium uppercase tracking-wider">
                      {item.label}
                    </div>
                  </div>
                ))}
              </div>

              <div className="flex gap-4">
                <div className="flex-1 bg-pink/20 rounded-xl p-4 text-center">
                  <div className="font-display text-2xl font-bold text-primary-foreground">500+</div>
                  <div className="text-primary-foreground/70 text-sm">Attendees</div>
                </div>
                <div className="flex-1 bg-yellow/20 rounded-xl p-4 text-center">
                  <div className="font-display text-2xl font-bold text-primary-foreground">20+</div>
                  <div className="text-primary-foreground/70 text-sm">Speakers</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.5 }}
        onClick={() => scrollToSection("#about")}
        className="absolute bottom-28 left-1/2 -translate-x-1/2 text-primary-foreground/60 hover:text-primary-foreground transition-colors"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <ChevronDown className="w-8 h-8" />
        </motion.div>
      </motion.button>

      {/* Marquee Banner */}
      <div className="absolute bottom-0 left-0 right-0 bg-yellow py-4 overflow-hidden">
        <div className="flex animate-marquee whitespace-nowrap">
          {Array.from({ length: 10 }).map((_, i) => (
            <span key={i} className="mx-8 font-display text-lg font-bold text-purple-deep flex items-center gap-4">
              CORPORATE EVENTS <Star className="w-4 h-4" /> BRAND ACTIVATIONS <Star className="w-4 h-4" /> CONFERENCES <Star className="w-4 h-4" /> PRODUCT LAUNCHES
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};
