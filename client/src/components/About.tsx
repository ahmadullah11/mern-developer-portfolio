import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";

export function About() {
  return (
    <section id="about" className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold font-poppins mb-6 text-center">
            About Me<span className="text-primary">.</span>
          </h2>
          <Card className="max-w-3xl mx-auto">
            <CardContent className="pt-6">
              <p className="text-muted-foreground leading-relaxed mb-4">
                I am a passionate MERN Stack Developer with expertise in building modern web applications.
                With a strong foundation in JavaScript and its ecosystem, I specialize in creating
                responsive, user-friendly interfaces and robust backend systems.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                I enjoy solving complex problems and continuously learning new technologies to stay
                up-to-date with the latest industry trends. My goal is to create impactful digital
                solutions that provide real value to users.
              </p>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
