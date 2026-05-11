import { motion } from "framer-motion";
import contact from "../../data/contact.json";
import GlowButton from "../ui/GlowButton";

export default function Contact() {
  return (
    <section id="contact" className="max-w-6xl mx-auto px-6 py-24 text-center">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="font-mono text-crt-green text-2xl mb-4">{'> contact.exe'}</h2>
        <p className="text-crt-dimtext mb-8 max-w-md mx-auto">{contact.ctaSubtitle}</p>
        <div className="space-y-4">
          <a href={`mailto:${contact.email}`}>
            <GlowButton className="text-lg px-10 py-4">{contact.cta}</GlowButton>
          </a>
          <div className="flex justify-center gap-6 mt-8 font-mono text-sm">
            <a href={contact.github} target="_blank" rel="noopener noreferrer" className="text-crt-dimtext hover:text-crt-green transition-colors">
              {`> github`}
            </a>
            <a href={contact.linkedin} target="_blank" rel="noopener noreferrer" className="text-crt-dimtext hover:text-crt-green transition-colors">
              {`> linkedin`}
            </a>
            <span className="text-crt-muted">{`> ${contact.email}`}</span>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
