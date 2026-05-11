import { motion } from "framer-motion";
import projects from "../../data/projects.json";
import Card from "../ui/Card";
import Badge from "../ui/Badge";
import GlowButton from "../ui/GlowButton";
import SectionDivider from "../ui/SectionDivider";

export default function Projects() {
  return (
    <section id="projects" className="max-w-6xl mx-auto px-6 py-24">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="font-mono text-crt-green text-2xl mb-8">{'> projects.dat'}</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
            >
              <Card className="h-full flex flex-col">
                <h3 className="font-mono text-crt-green text-lg mb-1">{project.title}</h3>
                <p className="text-xs text-crt-muted font-mono mb-3">{project.role}</p>
                <p className="text-sm text-crt-dimtext flex-1 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((t) => (
                    <Badge key={t}>{t}</Badge>
                  ))}
                </div>
                <GlowButton href={project.url}>View</GlowButton>
              </Card>
            </motion.div>
          ))}
        </div>
        <div className="mt-12">
          <SectionDivider />
        </div>
      </motion.div>
    </section>
  );
}
