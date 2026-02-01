import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { MapPin, Phone, Mail, Send, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { toast } from "sonner";

const contactInfo = [
  {
    icon: MapPin,
    title: "Our Office",
    lines: ["J-14, Kailash Colony, Greater Kailash,", "New Delhi – 110048"],
    href: "https://maps.google.com/?q=J-14, Kailash Colony, Greater Kailash, New Delhi – 110048",
    color: "from-pink to-purple",
  },
  {
    icon: Phone,
    title: "Phone",
    lines: ["+91 90153 84411"],
    href: "tel:+919015384411",
    color: "from-purple to-blue",
  },
  {
    icon: Mail,
    title: "Email",
    lines: ["eventkashish@gmail.com"],
    href: "mailto:eventkashish@gmail.com",
    color: "from-yellow to-pink",
  },
];

export const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [eventType, setEventType] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    if (!eventType) {
      toast.error("Please select an event type");
      setIsSubmitting(false);
      return;
    }

    const formData = new FormData(e.currentTarget);
    formData.append("event_type", eventType);

    try {
      const response = await fetch("https://formsubmit.co/ajax/eventkashish@gmail.com", {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        toast.success("Message sent successfully! We'll get back to you soon.");
        (e.target as HTMLFormElement).reset();
        setEventType("");
      } else {
        toast.error("Something went wrong. Please try again.");
      }
    } catch (error) {
      toast.error("Network error. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-24 lg:py-32 bg-secondary/50 relative overflow-hidden" ref={ref}>
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-20 right-20 w-72 h-72 bg-pink/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-20 w-72 h-72 bg-purple/5 rounded-full blur-3xl" />
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
            Get in Touch
          </span>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mt-4 mb-6">
            Let's Create Something
            <br />
            <span className="text-gradient-warm">Extraordinary</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Ready to discuss your next event? Our team is here to help you craft
            experiences that resonate with your audience and elevate your brand.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-2 space-y-6"
          >
            {contactInfo.map((info, index) => (
              <motion.div
                key={info.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.3 + 0.1 * index }}
                className="flex gap-4 p-6 rounded-2xl bg-background border border-border hover:border-accent hover:shadow-lg transition-all duration-300 group"
              >
                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${info.color} flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform`}>
                  <info.icon className="w-7 h-7 text-primary-foreground" />
                </div>
                <div>
                  <h4 className="font-bold text-foreground mb-1">{info.title}</h4>
                  {info.href ? (
                    <a
                      href={info.href}
                      target={info.href.startsWith("http") ? "_blank" : undefined}
                      rel={info.href.startsWith("http") ? "noopener noreferrer" : undefined}
                      className="text-muted-foreground hover:text-accent transition-colors"
                    >
                      {info.lines.join(", ")}
                    </a>
                  ) : (
                    info.lines.map((line, i) => (
                      <p key={i} className="text-muted-foreground">
                        {line}
                      </p>
                    ))
                  )}
                </div>
              </motion.div>
            ))}

            {/* Decorative */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="bg-gradient-hero rounded-3xl p-6 text-center"
            >
              <Sparkles className="w-8 h-8 text-yellow mx-auto mb-3" />
              <p className="text-primary-foreground font-semibold">
                Let's make your next event unforgettable!
              </p>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="lg:col-span-3"
          >
            <form
              onSubmit={handleSubmit}
              className="bg-background rounded-3xl p-8 lg:p-10 border border-border shadow-xl"
            >
              <h3 className="font-display text-2xl font-bold text-foreground mb-8">
                Send us a Message
              </h3>

              <input type="hidden" name="_subject" value="New Contact Form Submission - Kashish Events" />
              <input type="hidden" name="_template" value="table" />
              <input type="hidden" name="_captcha" value="false" />

              <div className="grid sm:grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="block text-sm font-semibold text-foreground mb-2">
                    Name
                  </label>
                  <Input
                    required
                    name="name"
                    placeholder="Your name"
                    className="bg-secondary/50 border-border focus:border-accent rounded-xl h-12"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-foreground mb-2">
                    Company
                  </label>
                  <Input
                    required
                    name="company"
                    placeholder="Company name"
                    className="bg-secondary/50 border-border focus:border-accent rounded-xl h-12"
                  />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="block text-sm font-semibold text-foreground mb-2">
                    Email
                  </label>
                  <Input
                    type="email"
                    required
                    name="email"
                    placeholder="your@email.com"
                    className="bg-secondary/50 border-border focus:border-accent rounded-xl h-12"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-foreground mb-2">
                    Phone
                  </label>
                  <Input
                    required
                    type="tel"
                    name="phone"
                    placeholder="+91 XXXXX XXXXX"
                    className="bg-secondary/50 border-border focus:border-accent rounded-xl h-12"
                  />
                </div>
              </div>

              <div className="mb-6">
                <label className="block text-sm font-semibold text-foreground mb-2">
                  Event Type
                </label>
                <Select value={eventType} onValueChange={setEventType}>
                  <SelectTrigger className="bg-secondary/50 border-border focus:border-accent rounded-xl h-12">
                    <SelectValue placeholder="Select event type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="conference">Corporate Conference</SelectItem>
                    <SelectItem value="activation">Brand Activation</SelectItem>
                    <SelectItem value="launch">Product Launch</SelectItem>
                    <SelectItem value="exhibition">Exhibition</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="mb-8">
                <label className="block text-sm font-semibold text-foreground mb-2">
                  Message
                </label>
                <Textarea
                  required
                  name="message"
                  placeholder="Tell us about your event..."
                  rows={4}
                  className="bg-secondary/50 border-border focus:border-accent rounded-xl resize-none"
                />
              </div>

              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-accent hover:opacity-90 text-accent-foreground py-6 text-lg font-bold group rounded-xl shadow-glow-pink"
              >
                {isSubmitting ? (
                  "Sending..."
                ) : (
                  <>
                    Send Message
                    <Send className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </>
                )}
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
