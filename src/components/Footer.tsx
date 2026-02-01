import { motion } from "framer-motion";
import { ArrowUp } from "lucide-react";

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
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-6 lg:px-12 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-lg bg-accent flex items-center justify-center">
                <span className="text-accent-foreground font-display font-bold text-xl">
                  K
                </span>
              </div>
              <span className="font-display font-semibold text-xl">
                Kashish Events
              </span>
            </div>
            <p className="text-primary-foreground/70 leading-relaxed max-w-sm mb-6">
              India's trusted partner for high-impact corporate events, delivering
              seamless execution and unforgettable brand experiences since 2005.
            </p>
            <p className="text-primary-foreground/50 text-sm">
              © {new Date().getFullYear()} Kashish Events. All rights reserved.
            </p>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Services</h4>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.label}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-primary-foreground/70 hover:text-accent transition-colors text-sm"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-primary-foreground/70 hover:text-accent transition-colors text-sm"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Back to Top */}
      <div className="border-t border-primary-foreground/10">
        <div className="container mx-auto px-6 lg:px-12 py-6 flex justify-between items-center">
          <p className="text-primary-foreground/50 text-sm">
            Designing Experiences. Delivering Impact.
          </p>
          <motion.button
            onClick={scrollToTop}
            whileHover={{ y: -2 }}
            className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-accent transition-colors group"
          >
            <ArrowUp className="w-5 h-5 text-primary-foreground group-hover:text-accent-foreground" />
          </motion.button>
        </div>
      </div>
    </footer>
  );
};
