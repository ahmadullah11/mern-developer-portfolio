import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";

const experiences = [
  {
    title: "Senior MERN Stack Developer",
    company: "Tech Solutions Inc.",
    period: "2024 - Present",
    description: "Led development of multiple full-stack web applications using MERN stack.",
  },
  {
    title: "Full Stack Developer",
    company: "Digital Innovations",
    period: "2023 - 2024",
    description: "Developed and maintained client projects using React and Node.js.",
  },
  {
    title: "Frontend Developer",
    company: "WebTech Studio",
    period: "2022 - 2023",
    description: "Created responsive user interfaces using React and modern CSS frameworks.",
  },
];

export function Experience() {
  return (
    <section id="experience" className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold font-poppins mb-6 text-center">
            Experience<span className="text-primary">.</span>
          </h2>
          <div className="max-w-3xl mx-auto space-y-4">
            {experiences.map((exp, index) => (
              <Card key={index}>
                <CardContent className="pt-6">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                    <h3 className="text-xl font-semibold">{exp.title}</h3>
                    <span className="text-sm text-muted-foreground">{exp.period}</span>
                  </div>
                  <p className="text-primary font-medium mb-2">{exp.company}</p>
                  <p className="text-muted-foreground">{exp.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
