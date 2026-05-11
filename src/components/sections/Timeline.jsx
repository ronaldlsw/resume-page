import { motion } from "framer-motion";
import timeline from "../../data/timeline.json";
import SectionDivider from "../ui/SectionDivider";

export default function Timeline() {
  return (
    <section id="timeline" className="max-w-6xl mx-auto px-6 py-24">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="font-mono text-crt-green text-2xl mb-8">{'> timeline.log'}</h2>
        <div className="relative">
          <div className="absolute left-[7px] top-2 bottom-2 w-[1px] bg-crt-green/30" />
          <div className="space-y-12">
            {timeline.map((entry, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="relative pl-10"
              >
                <div className="absolute left-0 top-1.5 w-[15px] h-[15px] rounded-full border border-crt-green bg-crt-bg" />
                <p className="font-mono text-xs text-crt-muted mb-1">{entry.period}</p>
                <h3 className="font-mono text-crt-green text-base">{entry.title}</h3>
                <p className="text-sm text-crt-dimtext mb-1">{entry.company}</p>
                <p className="text-sm text-crt-text">{entry.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
        <div className="mt-12">
          <SectionDivider />
        </div>
      </motion.div>
    </section>
  );
}
