import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import {
  SiReact,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiTypescript,
  SiTailwindcss,
  SiGit,
  SiDocker,
} from "react-icons/si";

const skills = [
  { name: "React", icon: SiReact },
  { name: "Node.js", icon: SiNodedotjs },
  { name: "Express", icon: SiExpress },
  { name: "MongoDB", icon: SiMongodb },
  { name: "TypeScript", icon: SiTypescript },
  { name: "Tailwind CSS", icon: SiTailwindcss },
  { name: "Git", icon: SiGit },
  { name: "Docker", icon: SiDocker },
];

export function Skills() {
  return (
    <section id="skills" className="py-20 bg-muted/50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold font-poppins mb-6 text-center">
            Skills & Technologies<span className="text-primary">.</span>
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto">
            {skills.map((skill) => (
              <Card key={skill.name} className="group hover:border-primary transition-colors">
                <CardContent className="p-6 flex flex-col items-center gap-2">
                  <skill.icon className="h-8 w-8 text-muted-foreground group-hover:text-primary transition-colors" />
                  <span className="font-medium">{skill.name}</span>
                </CardContent>
              </Card>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
