import { motion } from "framer-motion";
import personal from "../../data/personal.json";
import { useTypewriter } from "../../hooks/useTypewriter";
import SectionDivider from "../ui/SectionDivider";

function TypewriterParagraph({ text }) {
  const displayed = useTypewriter(text, 20);
  return <p className="text-crt-text leading-relaxed min-h-[1.5em]">{displayed}</p>;
}

export default function About() {
  return (
    <section id="about" className="max-w-6xl mx-auto px-6 py-24">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="font-mono text-crt-green text-2xl mb-8">{'> about.exe'}</h2>
        <div className="grid md:grid-cols-[300px_1fr] gap-8 items-start">
          <div className="relative scanline-intense">
            <img
              src={personal.avatar}
              alt={personal.name}
              className="aspect-[3/4] w-full object-cover border border-crt-green/30"
              onError={(e) => {
                e.target.style.display = "none";
                e.target.nextSibling.style.display = "flex";
              }}
            />
            <div className="hidden absolute inset-0 bg-crt-surface border border-crt-green/30 items-center justify-center text-crt-dimtext font-mono text-sm">
              [ AVATAR ]
            </div>
          </div>
          <div className="space-y-4">
            {personal.bio.map((paragraph, i) => (
              <TypewriterParagraph key={i} text={paragraph} />
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
