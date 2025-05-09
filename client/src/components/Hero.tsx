
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { SiGithub, SiLinkedin, SiWhatsapp } from "react-icons/si";
import { FileDown, User } from "lucide-react";

export function Hero() {
  return (
    <section className="min-h-screen flex items-center pt-20 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center"
        >
          {/* Avatar */}
          <div className="mb-6 flex justify-center">
            <Avatar className="h-32 w-32 border-4 border-primary shadow-lg hover:scale-105 transition-transform duration-300">
              <AvatarImage src="../../public/black-picture.png"  alt="Ahmad Ullah" />
              <AvatarFallback className="bg-muted text-muted-foreground">
                <User className="h-16 w-16" />
              </AvatarFallback>
            </Avatar>
          </div>

          {/* Heading */}
          <h1 className="text-4xl md:text-6xl font-extrabold font-poppins mb-4 leading-tight">
            Hi, I'm <span className="text-primary">Ahmad Ullah</span>
          </h1>

          {/* Subheading */}
          <p className="text-lg md:text-2xl text-muted-foreground mb-8">
            A passionate MERN Stack Developer crafting modern & efficient web applications.
          </p>

          {/* Call-to-actions */}
          <div className="flex flex-wrap justify-center gap-4 mb-10">
            <Button size="lg" className="px-6 py-2" asChild>
              <a href="#contact">Get in Touch</a>
            </Button>
            <Button size="lg" variant="outline" className="px-6 py-2" asChild>
              <a href="#projects">View My Work</a>
            </Button>
            <Button size="lg" variant="secondary" className="px-6 py-2" asChild>
              <a href="/resume.pdf" download="Ahmad_Ullah_Resume.pdf" className="flex items-center gap-2">
                <FileDown className="h-5 w-5" />
                Resume
              </a>
            </Button>
          </div>

          {/* Social Buttons */}
          <div className="flex flex-wrap justify-center gap-4">
            {[
              {
                href: "https://github.com/ahmadullah11",
                label: "GitHub",
                icon: <SiGithub className="h-5 w-5" />,
              },
              {
                href: "https://www.linkedin.com/in/ahmad-ullah-36945b256?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
                label: "LinkedIn",
                icon: <SiLinkedin className="h-5 w-5" />,
              },
              {
                href: "https://wa.me/+923003331124",
                label: "WhatsApp",
                icon: <SiWhatsapp className="h-5 w-5" />,
              },
            ].map(({ href, label, icon }, index) => (
              <Button
                key={index}
                variant="outline"
                size="lg"
                className="rounded-full px-6 py-2 hover:bg-primary hover:text-white transition-colors"
                asChild
              >
                <a
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2"
                >
                  {icon}
                  {label}
                </a>
              </Button>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
