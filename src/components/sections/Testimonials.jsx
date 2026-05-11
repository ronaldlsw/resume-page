import { motion } from "framer-motion";
import testimonials from "../../data/testimonials.json";
import SectionDivider from "../ui/SectionDivider";

export default function Testimonials() {
  return (
    <section className="max-w-6xl mx-auto px-6 py-24">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="font-mono text-crt-green text-2xl mb-8">{'> testimonials.txt'}</h2>
        <div className="space-y-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="border-l-2 border-crt-green/40 pl-6 py-4"
            >
              <p className="text-crt-text italic mb-3 leading-relaxed">&ldquo;{t.quote}&rdquo;</p>
              <div className="font-mono text-sm">
                <span className="text-crt-green">{t.author}</span>
                <span className="text-crt-dimtext"> &mdash; {t.role}</span>
              </div>
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
