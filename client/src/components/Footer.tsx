import { SiGithub, SiLinkedin, SiWhatsapp } from "react-icons/si";
import { motion } from "framer-motion";

// Social links configuration
const socialLinks = [
  {
    name: "GitHub",
    url: "https://github.com/ahmadullah11",
    icon: <SiGithub className="h-5 w-5" />,
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/ahmad-ullah-36945b256?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    icon: <SiLinkedin className="h-5 w-5" />,
  },
  {
    name: "WhatsApp",
    url: "https://wa.me/+923003331124",
    icon: <SiWhatsapp className="h-5 w-5" />,
  },
];

// Footer component
export const Footer = () => {
  const currentYear = new Date().getFullYear();

  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <motion.footer
      className="py-8 border-t"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      aria-label="Footer"
    >
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          {/* Copyright */}
          <p className="text-muted-foreground text-sm text-center md:text-left">
            © {currentYear} Ahmad Ullah. All rights reserved.
          </p>

          {/* Social Links */}
          <div className="flex gap-4">
            {socialLinks.map((link) => (
              <motion.a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded-full border-2 border-transparent hover:border-primary p-2"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                aria-label={link.name}
              >
                {link.icon}
                <span className="sr-only">{link.name}</span>
              </motion.a>
            ))}
          </div>
        </div>

        {/* Optional: Back to Top Button */}
        <div className="mt-6 flex justify-center">
          <motion.button
            onClick={scrollToTop}
            className="text-muted-foreground hover:text-foreground transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded-full p-2"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            aria-label="Back to Top"
          >
            ↑ Back to Top
          </motion.button>
        </div>
      </div>
    </motion.footer>
  );
};
