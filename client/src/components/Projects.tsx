import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { SiGithub } from "react-icons/si";
import { ExternalLink } from "lucide-react";

const projects = [
  {
    title: "Barber Shop Website",
    description: "A modern and responsive Barber Shop website built using React and Tailwind CSS. It features an interactive booking system, service showcase, and customer testimonials.",
    tech: ["React", "Tailwind CSS", "Node.js", "Express", "MongoDB"],
    github: "https://github.com/your-repo",
    live: "https://your-live-site.com",
  },
  {
    title: "Airbnb Clone",
    description: "A fully responsive Airbnb clone with property listings, user authentication, and booking functionality.",
    tech: ["Bootstrap", "Node.js", "Express", "MongoDB", "React"],
    github: "https://github.com/your-repo",
    live: "https://your-live-site.com",
  },
  {
    title: "Full-Stack Developer Portfolio",
    description: "A responsive and dynamic full-stack portfolio showcasing my projects, skills, and experience. Features include contact forms, project highlights, and a blog section.",
    tech: ["React", "Tailwind CSS", "TypeScript", "Express.js", "MongoDB", "Node.js"],
    github: "https://github.com/your-repo",
    live: "https://your-live-site.com",
  },
  {
    title: "Frontend Developer Portfolio",
    description: "A sleek and modern frontend portfolio built with React (Vite) and Tailwind CSS. Showcases projects, skills, and contact details with smooth animations.",
    tech: ["React (Vite)", "Tailwind CSS"],
    github: "https://github.com/your-repo",
    live: "https://your-live-site.com",
  },
  {
    "title": "Frontend Music Website",
    "description": "A sleek and responsive frontend music website built with Next.js and Tailwind CSS. Features include a dynamic music player interface, smooth transitions, and user-friendly design.",
    "tech": ["Next.js", "React", "Tailwind CSS"],
    "github": "https://github.com/your-repo",
    "live": "https://your-live-site.com"
  },
  {
    "title": "Batting Website",
    "description": "A sleek and modern website built to track and display batting stats. Features include player profiles, real-time performance tracking, and interactive graphs.",
    "tech": ["HTML", "CSS", "JavaScript", "Tailwind CSS"],
    "github": "https://github.com/your-repo",
    "live": "https://your-live-site.com"
  }
   
    
];

export function Projects() {
  return (
    <section id="projects" className="py-20 bg-muted/50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold font-poppins mb-6 text-center">
            Projects<span className="text-primary">.</span>
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {projects.map((project, index) => (
              <Card key={index} className="group hover:border-primary transition-colors">
                <CardHeader>
                  <CardTitle>{project.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 bg-primary/10 text-primary text-sm rounded"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-2">
                    <Button size="sm" variant="outline" asChild>
                      <a href={project.github} target="_blank" rel="noopener noreferrer">
                        <SiGithub className="mr-2 h-4 w-4" />
                        Code
                      </a>
                    </Button>
                    <Button size="sm" asChild>
                      <a href={project.live} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="mr-2 h-4 w-4" />
                        Live
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
