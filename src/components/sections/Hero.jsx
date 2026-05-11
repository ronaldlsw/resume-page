import { motion } from "framer-motion";
import personal from "../../data/personal.json";
import SectionDivider from "../ui/SectionDivider";

export default function Hero() {
  return (
    <section className="min-h-[calc(100vh-3.5rem)] flex items-center justify-center px-6 relative">
      <div className="scanline absolute inset-0" />
      <div className="relative z-10 text-center max-w-3xl">
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="font-mono text-crt-muted text-sm mb-4"
        >
          {`> system.online // ${personal.tagline}`}
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="font-mono text-crt-green text-5xl md:text-7xl font-bold tracking-tight mb-4"
        >
          {personal.name}
          <span className="animate-blink text-crt-green ml-1">█</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="text-lg text-crt-dimtext mb-2"
        >
          {personal.title}
        </motion.p>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="text-sm text-crt-muted font-mono mb-8"
        >
          {personal.experience} of experience
        </motion.p>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
        >
          <SectionDivider />
        </motion.div>
      </div>
    </section>
  );
}
