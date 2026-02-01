import { motion } from "framer-motion";
import { ArrowUp, Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

const footerLinks = {
  services: [
    { label: "Integrated Events", href: "#services" },
    { label: "Corporate Conferences", href: "#services" },
    { label: "Brand Activations", href: "#services" },
    { label: "Product Launches", href: "#services" },
  ],
  company: [
    { label: "About Us", href: "#about" },
    { label: "Our Process", href: "#process" },
    { label: "Featured Work", href: "#work" },
    { label: "Contact", href: "#contact" },
  ],
};

const socialLinks = [
  { icon: Facebook, href: "#", label: "Facebook" },
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
];

export const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-gradient-hero text-primary-foreground relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 right-20 w-64 h-64 bg-pink/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-20 w-64 h-64 bg-yellow/5 rounded-full blur-3xl" />
      </div>
      
      <div className="container mx-auto px-6 lg:px-12 py-16 relative z-10">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-gradient-warm flex items-center justify-center">
                <span className="text-purple-deep font-display font-bold text-2xl">
                  K
                </span>
              </div>
              <span className="font-display font-bold text-2xl">
                Kashish Events
              </span>
            </div>
            <p className="text-primary-foreground/70 leading-relaxed max-w-sm mb-6">
              India's trusted partner for high-impact corporate events, delivering
              seamless execution and unforgettable brand experiences since 2005.
            </p>
            
            {/* Social Links */}
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 rounded-xl bg-primary-foreground/10 border border-primary-foreground/20 flex items-center justify-center hover:bg-accent hover:border-accent transition-all duration-300 group"
                >
                  <social.icon className="w-5 h-5 text-primary-foreground group-hover:text-accent-foreground" />
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-display font-bold text-lg mb-6">Services</h4>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.label}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-primary-foreground/70 hover:text-yellow transition-colors text-sm font-medium"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-display font-bold text-lg mb-6">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-primary-foreground/70 hover:text-yellow transition-colors text-sm font-medium"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-primary-foreground/10">
        <div className="container mx-auto px-6 lg:px-12 py-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-primary-foreground/50 text-sm">
            © {new Date().getFullYear()} Kashish Events. All rights reserved.
          </p>
          <p className="text-primary-foreground/70 text-sm font-semibold">
            Designing Experiences. Delivering Impact.
          </p>
          <motion.button
            onClick={scrollToTop}
            whileHover={{ y: -2 }}
            className="w-12 h-12 rounded-xl bg-gradient-accent flex items-center justify-center shadow-glow-pink hover:scale-110 transition-transform"
          >
            <ArrowUp className="w-5 h-5 text-accent-foreground" />
          </motion.button>
        </div>
      </div>
    </footer>
  );
};
