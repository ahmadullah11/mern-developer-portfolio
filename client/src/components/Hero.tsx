import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { SiGithub, SiLinkedin, SiX } from "react-icons/si";
import { FileDown } from "lucide-react";

export function Hero() {
  return (
    <section className="min-h-screen flex items-center pt-16">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto text-center"
        >
          <h1 className="text-4xl md:text-6xl font-bold font-poppins mb-6">
            Hi, I'm Ahmad Ullah
            <span className="text-primary">.</span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8">
            A passionate MERN Stack Developer crafting beautiful and functional web experiences.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button size="lg" asChild>
              <a href="#contact">Get in Touch</a>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <a href="#projects">View My Work</a>
            </Button>
            <Button size="lg" variant="secondary" asChild>
              <a href="/resume.pdf" download="Ahmad_Ullah_Resume.pdf" className="flex items-center gap-2">
                <FileDown className="h-5 w-5" />
                Download Resume
              </a>
            </Button>
          </div>
          <div className="flex gap-6 justify-center">
            <Button variant="ghost" size="icon" asChild>
              <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                <SiGithub className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </a>
            </Button>
            <Button variant="ghost" size="icon" asChild>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                <SiLinkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </a>
            </Button>
            <Button variant="ghost" size="icon" asChild>
              <a href="https://x.com" target="_blank" rel="noopener noreferrer">
                <SiX className="h-5 w-5" />
                <span className="sr-only">X (formerly Twitter)</span>
              </a>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}