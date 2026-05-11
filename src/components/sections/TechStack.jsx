import { motion } from "framer-motion";
import techstack from "../../data/techstack.json";
import Badge from "../ui/Badge";
import SectionDivider from "../ui/SectionDivider";

export default function TechStack() {
  return (
    <section id="tech" className="max-w-6xl mx-auto px-6 py-24">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="font-mono text-crt-green text-2xl mb-8">{'> tech_stack.sys'}</h2>
        <div className="space-y-8">
          {Object.entries(techstack).map(([category, items]) => (
            <div key={category}>
              <h3 className="font-mono text-crt-muted text-sm mb-3 tracking-wider uppercase">{category}</h3>
              <div className="flex flex-wrap gap-2">
                {items.map((item) => (
                  <Badge key={item}>{item}</Badge>
                ))}
              </div>
            </div>
          ))}
        </div>
        <div className="mt-12">
          <SectionDivider />
        </div>
      </motion.div>
    </section>
  );
}
