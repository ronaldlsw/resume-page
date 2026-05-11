import { motion } from "framer-motion";
import achievements from "../../data/achievements.json";
import SectionDivider from "../ui/SectionDivider";

export default function Achievements() {
  return (
    <section className="max-w-6xl mx-auto px-6 py-24">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="font-mono text-crt-green text-2xl mb-8">{'> achievements.dat'}</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {achievements.map((a, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="text-center"
            >
              <p className="font-mono text-crt-green text-4xl md:text-5xl font-bold">{a.metric}</p>
              <p className="font-mono text-xs text-crt-dimtext mt-2 uppercase tracking-wider">{a.label}</p>
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
