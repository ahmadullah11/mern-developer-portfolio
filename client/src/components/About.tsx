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
                I am a <span className="font-bold">Software Engineer</span> specializing in the <span className="font-bold">MERN Stack</span>, with hands-on experience in building 
                <span className="font-bold"> scalable, high-performance</span> web applications. My core skills include <span className="font-bold">React.js</span>, <span className="font-bold">Node.js</span>, 
                and <span className="font-bold">MongoDB</span>, allowing me to create seamless user experiences and robust backend systems.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                As an engineer, I am driven by my passion for solving <span className="font-bold">complex problems</span> and <span className="font-bold">optimizing performance</span>. 
                I continuously update my skill set with the latest technologies to ensure the solutions I build are both 
                <span className="font-bold"> innovative</span> and <span className="font-bold">future-proof</span>.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                My goal is to contribute to creating impactful digital solutions that provide real value to users, while 
                fostering a culture of continuous learning and collaboration in the tech community.
              </p>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
