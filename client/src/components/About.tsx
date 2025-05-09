import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";

export function About() {
  return (
    <section id="about" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <h2 className="text-4xl font-bold text-center mb-12 font-poppins tracking-tight">
            About Me<span className="text-primary">.</span>
          </h2>

          <Card className="max-w-4xl mx-auto shadow-xl border border-border/30 bg-muted/10 backdrop-blur-sm">
            <CardContent className="p-8 md:p-10 text-base text-muted-foreground leading-relaxed space-y-5">
              <p>
                I am a <span className="font-semibold text-foreground">Software Engineer</span> specializing in the{" "}
                <span className="font-semibold text-foreground">MERN Stack</span>, with hands-on experience in building{" "}
                <span className="font-semibold text-foreground">scalable, high-performance</span> web applications. My core skills include{" "}
                <span className="font-semibold text-foreground">React.js</span>,{" "}
                <span className="font-semibold text-foreground">Node.js</span>, and{" "}
                <span className="font-semibold text-foreground">MongoDB</span>, enabling me to create seamless user experiences and robust backend systems.
              </p>

              <p>
                I’m driven by a passion for solving{" "}
                <span className="font-semibold text-foreground">complex problems</span> and{" "}
                <span className="font-semibold text-foreground">optimizing performance</span>. I stay current with emerging technologies to deliver{" "}
                <span className="font-semibold text-foreground">innovative</span> and{" "}
                <span className="font-semibold text-foreground">future-proof</span> solutions.
              </p>

              <p>
                My goal is to build digital products that provide real value to users, while also fostering a{" "}
                <span className="font-semibold text-foreground">culture of learning and collaboration</span> within the tech community.
              </p>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
