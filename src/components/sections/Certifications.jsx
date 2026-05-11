import { motion } from "framer-motion";
import certs from "../../data/certifications.json";
import Card from "../ui/Card";
import SectionDivider from "../ui/SectionDivider";

export default function Certifications() {
  return (
    <section className="max-w-6xl mx-auto px-6 py-24">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="font-mono text-crt-green text-2xl mb-8">{'> certifications.log'}</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certs.map((cert, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
            >
              <Card>
                <h3 className="font-mono text-crt-green text-base mb-1">{cert.name}</h3>
                <p className="text-sm text-crt-dimtext">{cert.issuer}</p>
                <p className="text-xs text-crt-muted font-mono mt-2">{cert.date}</p>
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
