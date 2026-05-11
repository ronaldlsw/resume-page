# Fallout Vault-Tec Portfolio Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development or superpowers:executing-plans to implement.

**Goal:** Refactor the Bootstrap/AOS resume site into a premium single-page portfolio with green CRT Fallout aesthetic, TailwindCSS v4, Framer Motion, and JSON-driven content.

**Architecture:** Remove all old components and deps. Install TailwindCSS v4 + Framer Motion. Create a modular component tree: `Layout` → sections (Hero, About, Projects, TechStack, Certifications, Testimonials, Achievements, Timeline, Contact). All content sourced from `/data/*.json` files.

**Tech Stack:** React 19, Vite 5, TailwindCSS v4, Framer Motion 12, Lucide React

---

### Task 0: Project Setup — Install deps, configure Tailwind, remove old cruft

**Files:**
- Modify: `package.json`
- Modify: `vite.config.js`
- Create: `src/index.css`
- Delete: `src/index.jsx` → rename to `src/main.jsx`
- Delete: `src/App.jsx` (recreated in Task 2)
- Delete: `src/Navbar.jsx`, `src/About.jsx`, `src/Footer.jsx`, `src/Gallery.jsx`, `src/GoogleMaps.jsx`, `src/Skillset.jsx`
- Delete: `src/images/`
- Delete: `public/index.html`
- Delete: `src/index.css` (old one)

- [ ] **Step 1: Remove old deps and install new ones**

```bash
npm uninstall bootstrap aos react-router-dom gh-pages
npm install framer-motion lucide-react
npm install -D tailwindcss @tailwindcss/vite
```

- [ ] **Step 2: Configure vite.config.js**

```js
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [react(), tailwindcss()],
  build: { outDir: "build" },
});
```

- [ ] **Step 3: Create src/index.css with Tailwind + CRT theme**

```css
@import "tailwindcss";

@theme {
  --color-crt-green: #00ff41;
  --color-crt-dim: #1a3a1a;
  --color-crt-muted: #00cc33;
  --color-crt-amber: #ffb000;
  --color-crt-bg: #0a0a0a;
  --color-crt-surface: #141414;
  --color-crt-text: #e0e0e0;
  --color-crt-dimtext: #888;
  --font-mono: "Share Tech Mono", "JetBrains Mono", monospace;
  --font-sans: "Inter", system-ui, sans-serif;
}

body {
  background-color: var(--color-crt-bg);
  color: var(--color-crt-text);
  font-family: var(--font-sans);
}

@keyframes blink {
  0%, 100% { opacity: 1; }
  50% { opacity: 0; }
}

@keyframes glow {
  0%, 100% { box-shadow: 0 0 4px #00ff41; }
  50% { box-shadow: 0 0 12px #00ff41; }
}

.animate-blink {
  animation: blink 1s step-end infinite;
}

.animate-glow {
  animation: glow 2s ease-in-out infinite;
}

.scanline::after {
  content: "";
  position: absolute;
  inset: 0;
  background: repeating-linear-gradient(
    0deg,
    transparent,
    transparent 2px,
    rgba(0, 255, 65, 0.03) 2px,
    rgba(0, 255, 65, 0.03) 4px
  );
  pointer-events: none;
}
```

- [ ] **Step 4: Create src/main.jsx**

```jsx
import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
```

- [ ] **Step 5: Update index.html**

Edit `index.html` — add Google Fonts links and remove Bootstrap references:

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8" />
  <link rel="icon" href="/favicon.ico" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <meta name="description" content="Ronald Lim - Software Engineer Portfolio" />
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Share+Tech+Mono&display=swap" rel="stylesheet" />
  <title>Ronald Lim | Software Engineer</title>
</head>
<body>
  <noscript>You need to enable JavaScript to run this app.</noscript>
  <div id="root"></div>
  <script type="module" src="/src/main.jsx"></script>
</body>
</html>
```

- [ ] **Step 6: Delete old files**

```bash
rm -rf src/Navbar.jsx src/About.jsx src/Footer.jsx src/Gallery.jsx src/GoogleMaps.jsx src/Skillset.jsx src/index.jsx src/images
rm -f public/index.html
```

- [ ] **Step 7: Create src/lib/utils.js**

```js
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}
```

```bash
npm install clsx tailwind-merge
```

- [ ] **Step 8: Verify build**

```bash
npm run build
```

Expected: Build succeeds with no errors.

---

### Task 1: Create data JSON files

**Files:**
- Create: `src/data/personal.json`
- Create: `src/data/projects.json`
- Create: `src/data/techstack.json`
- Create: `src/data/certifications.json`
- Create: `src/data/testimonials.json`
- Create: `src/data/achievements.json`
- Create: `src/data/timeline.json`
- Create: `src/data/contact.json`

- [ ] **Step 1: Create src/data/personal.json**

```json
{
  "name": "Ronald Lim",
  "title": "Software Engineer",
  "experience": "3 Years",
  "tagline": "Building robust software solutions with modern technologies.",
  "bio": [
    "Computer science graduate with 3 years of hands-on experience in software engineering. Passionate about crafting clean, maintainable code and building applications that make a difference.",
    "Specializing in full-stack development with a focus on React ecosystems, RESTful APIs, and cloud-native deployments. Always exploring new technologies and best practices."
  ],
  "avatar": "/avatar.jpg",
  "resumeUrl": "/resume.pdf"
}
```

- [ ] **Step 2: Create src/data/projects.json**

```json
[
  {
    "id": 1,
    "title": "Project Alpha",
    "description": "A full-stack web application for managing team workflows with real-time collaboration features.",
    "tech": ["React", "Node.js", "PostgreSQL", "WebSocket"],
    "url": "https://github.com/rlsw35"
  },
  {
    "id": 2,
    "title": "Project Beta",
    "description": "Mobile-first dashboard for monitoring IoT device metrics and generating automated alerts.",
    "tech": ["React Native", "Python", "MongoDB", "MQQT"],
    "url": "https://github.com/rlsw35"
  },
  {
    "id": 3,
    "title": "Project Gamma",
    "description": "CLI tool for automating CI/CD pipeline configurations across multiple cloud providers.",
    "tech": ["Go", "Docker", "AWS", "Terraform"],
    "url": "https://github.com/rlsw35"
  }
]
```

- [ ] **Step 3: Create src/data/techstack.json**

```json
{
  "Languages": ["JavaScript", "TypeScript", "Python", "Go", "Java"],
  "Frontend": ["React", "Next.js", "TailwindCSS", "Framer Motion"],
  "Backend": ["Node.js", "Express", "PostgreSQL", "MongoDB", "Redis"],
  "Tools": ["Docker", "Kubernetes", "AWS", "Git", "Linux"]
}
```

- [ ] **Step 4: Create src/data/certifications.json**

```json
[
  { "name": "AWS Certified Developer - Associate", "issuer": "Amazon Web Services", "date": "2024" },
  { "name": "Google Cloud Professional Cloud Developer", "issuer": "Google Cloud", "date": "2023" },
  { "name": "Meta Front-End Developer", "issuer": "Meta / Coursera", "date": "2023" }
]
```

- [ ] **Step 5: Create src/data/testimonials.json**

```json
[
  {
    "quote": "Ronald consistently delivers high-quality code ahead of schedule. His attention to architecture and clean code practices made him an invaluable team member.",
    "author": "Jane Doe",
    "role": "Engineering Manager, TechCorp"
  },
  {
    "quote": "One of the best engineers I've worked with. Ronald's ability to break down complex problems into simple solutions is remarkable.",
    "author": "John Smith",
    "role": "Senior Developer, StartupXYZ"
  },
  {
    "quote": "A true problem-solver who brings both technical excellence and great communication to every project.",
    "author": "Dr. Aminah Bakar",
    "role": "Lecturer, Universiti Malaysia Pahang"
  }
]
```

- [ ] **Step 6: Create src/data/achievements.json**

```json
[
  { "metric": "10+", "label": "Projects Delivered" },
  { "metric": "3+", "label": "Years Experience" },
  { "metric": "15+", "label": "Technologies Used" },
  { "metric": "∞", "label": "Cups of Coffee" }
]
```

- [ ] **Step 7: Create src/data/timeline.json**

```json
[
  {
    "period": "2024 - Present",
    "title": "Software Engineer",
    "company": "Current Company",
    "description": "Building and maintaining production systems serving 10K+ users. Leading migration from monolith to microservices."
  },
  {
    "period": "2022 - 2024",
    "title": "Junior Software Engineer",
    "company": "Previous Company",
    "description": "Developed REST APIs and React frontends. Contributed to CI/CD pipeline automation and code review processes."
  },
  {
    "period": "2021 - 2022",
    "title": "Software Engineering Intern",
    "company": "Startup Inc.",
    "description": "Built internal tools and dashboards. Gained hands-on experience with Agile methodologies and production deployments."
  },
  {
    "period": "2019 - 2023",
    "title": "B.Sc. Computer Science",
    "company": "Universiti Malaysia Pahang",
    "description": "Specialized in Software Engineering. Dean's List recipient. Active in programming club."
  }
]
```

- [ ] **Step 8: Create src/data/contact.json**

```json
{
  "email": "rlsw35@gmail.com",
  "github": "https://github.com/rlsw35",
  "linkedin": "https://linkedin.com/in/rlsw35",
  "cta": "Get In Touch",
  "ctaSubtitle": "Available for freelance, full-time, or collaborative opportunities."
}
```

---

### Task 2: Create hooks and UI components

**Files:**
- Create: `src/hooks/useTypewriter.js`
- Create: `src/components/ui/TerminalText.jsx`
- Create: `src/components/ui/SectionDivider.jsx`
- Create: `src/components/ui/GlowButton.jsx`
- Create: `src/components/ui/Badge.jsx`
- Create: `src/components/ui/Card.jsx`

- [ ] **Step 1: Create useTypewriter hook**

```js
import { useState, useEffect } from "react";

export function useTypewriter(text, speed = 50) {
  const [displayed, setDisplayed] = useState("");

  useEffect(() => {
    let i = 0;
    setDisplayed("");
    const timer = setInterval(() => {
      if (i < text.length) {
        setDisplayed(text.slice(0, i + 1));
        i++;
      } else {
        clearInterval(timer);
      }
    }, speed);
    return () => clearInterval(timer);
  }, [text, speed]);

  return displayed;
}
```

- [ ] **Step 2: Create TerminalText component**

```jsx
import { motion } from "framer-motion";

export default function TerminalText({ text, className = "", as: Tag = "p", speed = 0.03 }) {
  const characters = Array.from(text);

  return (
    <Tag className={className}>
      {characters.map((char, i) => (
        <motion.span
          key={i}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: i * speed, duration: 0 }}
        >
          {char}
        </motion.span>
      ))}
    </Tag>
  );
}
```

- [ ] **Step 3: Create SectionDivider component**

```jsx
export default function SectionDivider({ className = "" }) {
  return (
    <div className={`flex items-center gap-2 text-crt-green font-mono text-sm ${className}`}>
      <span>[</span>
      <span className="flex-1 h-[1px] bg-crt-green/30" />
      <span className="tracking-[0.5em]">=====</span>
      <span className="flex-1 h-[1px] bg-crt-green/30" />
      <span>]</span>
    </div>
  );
}
```

- [ ] **Step 4: Create GlowButton component**

```jsx
export default function GlowButton({ children, href, className = "", ...props }) {
  const cls = `inline-block px-6 py-3 border border-crt-green text-crt-green font-mono text-sm tracking-wider uppercase transition-all duration-300 hover:bg-crt-dim hover:shadow-[0_0_12px_#00ff41] cursor-pointer ${className}`;

  if (href) {
    return <a href={href} target="_blank" rel="noopener noreferrer" className={cls} {...props}>{children}</a>;
  }
  return <button className={cls} {...props}>{children}</button>;
}
```

- [ ] **Step 5: Create Badge component**

```jsx
export default function Badge({ children, className = "" }) {
  return (
    <span className={`inline-block px-3 py-1 text-xs font-mono border border-crt-green/40 text-crt-muted ${className}`}>
      {children}
    </span>
  );
}
```

- [ ] **Step 6: Create Card component**

```jsx
export default function Card({ children, className = "", ...props }) {
  return (
    <div
      className={`border border-crt-green/20 bg-crt-surface p-6 transition-all duration-300 hover:border-crt-green/60 ${className}`}
      {...props}
    >
      {children}
    </div>
  );
}
```

---

### Task 3: Create layout components

**Files:**
- Create: `src/components/layout/Header.jsx`
- Create: `src/components/layout/Footer.jsx`
- Create: `src/components/layout/Layout.jsx`

- [ ] **Step 1: Create Header component**

```jsx
import personal from "../../data/personal.json";

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-crt-bg/90 backdrop-blur border-b border-crt-green/20">
      <div className="max-w-6xl mx-auto px-6 h-14 flex items-center justify-between">
        <a href="#" className="font-mono text-crt-green text-lg tracking-wider hover:animate-glow transition-all">
          {`> ${personal.name.toLowerCase()}_`}
        </a>
        <nav className="flex gap-6 font-mono text-sm text-crt-dimtext">
          <a href="#about" className="hover:text-crt-green transition-colors">about</a>
          <a href="#projects" className="hover:text-crt-green transition-colors">projects</a>
          <a href="#tech" className="hover:text-crt-green transition-colors">tech</a>
          <a href="#timeline" className="hover:text-crt-green transition-colors">timeline</a>
          <a href="#contact" className="hover:text-crt-green transition-colors">contact</a>
        </nav>
      </div>
    </header>
  );
}
```

- [ ] **Step 2: Create Footer component**

```jsx
export default function Footer() {
  return (
    <footer className="border-t border-crt-green/20 py-6 text-center font-mono text-xs text-crt-dimtext">
      <p>POWERED BY REACT + TAILWINDCSS</p>
      <p className="mt-1">&copy; {new Date().getFullYear()} Ronald Lim. All rights reserved.</p>
    </footer>
  );
}
```

- [ ] **Step 3: Create Layout component**

```jsx
import { motion } from "framer-motion";
import Header from "./Header";
import Footer from "./Footer";

export default function Layout({ children }) {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 pt-14">
        {children}
      </main>
      <Footer />
    </div>
  );
}
```

---

### Task 4: Create section components

**Files:**
- Create: `src/components/sections/Hero.jsx`
- Create: `src/components/sections/About.jsx`
- Create: `src/components/sections/Projects.jsx`
- Create: `src/components/sections/TechStack.jsx`
- Create: `src/components/sections/Certifications.jsx`
- Create: `src/components/sections/Testimonials.jsx`
- Create: `src/components/sections/Achievements.jsx`
- Create: `src/components/sections/Timeline.jsx`
- Create: `src/components/sections/Contact.jsx`

- [ ] **Step 1: Create Hero component**

```jsx
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
```

- [ ] **Step 2: Create About component**

```jsx
import { motion } from "framer-motion";
import personal from "../../data/personal.json";
import TerminalText from "../ui/TerminalText";
import SectionDivider from "../ui/SectionDivider";

export default function About() {
  return (
    <section id="about" className="max-w-6xl mx-auto px-6 py-24">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="font-mono text-crt-green text-2xl mb-8">> about.exe</h2>
        <div className="grid md:grid-cols-[300px_1fr] gap-8 items-start">
          <div className="relative scanline">
            <div className="aspect-[3/4] bg-crt-surface border border-crt-green/30 flex items-center justify-center text-crt-dimtext font-mono text-sm">
              [ AVATAR ]
            </div>
          </div>
          <div className="space-y-4">
            {personal.bio.map((paragraph, i) => (
              <TerminalText
                key={i}
                text={paragraph}
                className="text-crt-text leading-relaxed"
                speed={0.01}
              />
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
```

- [ ] **Step 3: Create Projects component**

```jsx
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
        <h2 className="font-mono text-crt-green text-2xl mb-8">> projects.dat</h2>
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
                <h3 className="font-mono text-crt-green text-lg mb-2">{project.title}</h3>
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
```

- [ ] **Step 4: Create TechStack component**

```jsx
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
        <h2 className="font-mono text-crt-green text-2xl mb-8">> tech_stack.sys</h2>
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
```

- [ ] **Step 5: Create Certifications component**

```jsx
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
        <h2 className="font-mono text-crt-green text-2xl mb-8">> certifications.log</h2>
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
```

- [ ] **Step 6: Create Testimonials component**

```jsx
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
        <h2 className="font-mono text-crt-green text-2xl mb-8">> testimonials.txt</h2>
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
                <span className="text-crt-dimtext"> — {t.role}</span>
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
```

- [ ] **Step 7: Create Achievements component**

```jsx
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
        <h2 className="font-mono text-crt-green text-2xl mb-8">> achievements.dat</h2>
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
```

- [ ] **Step 8: Create Timeline component**

```jsx
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
        <h2 className="font-mono text-crt-green text-2xl mb-8">> timeline.log</h2>
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
```

- [ ] **Step 9: Create Contact component**

```jsx
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
        <h2 className="font-mono text-crt-green text-2xl mb-4">> contact.exe</h2>
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
```

---

### Task 5: Create App.jsx and verify build

**Files:**
- Create: `src/App.jsx`

- [ ] **Step 1: Create App.jsx**

```jsx
import Layout from "./components/layout/Layout";
import Hero from "./components/sections/Hero";
import About from "./components/sections/About";
import Projects from "./components/sections/Projects";
import TechStack from "./components/sections/TechStack";
import Certifications from "./components/sections/Certifications";
import Testimonials from "./components/sections/Testimonials";
import Achievements from "./components/sections/Achievements";
import Timeline from "./components/sections/Timeline";
import Contact from "./components/sections/Contact";

export default function App() {
  return (
    <Layout>
      <Hero />
      <About />
      <Projects />
      <TechStack />
      <Certifications />
      <Testimonials />
      <Achievements />
      <Timeline />
      <Contact />
    </Layout>
  );
}
```

- [ ] **Step 2: Delete old App.jsx, create new one (via above), verify build**

```bash
rm -f src/App.jsx src/index.jsx
# then create App.jsx with content above
npm run build
```

Expected: Build succeeds with no errors.

- [ ] **Step 3: Final cleanup and verification**

```bash
npm run build 2>&1
```

Expected: Clean build. Site serves at `/build/index.html`.
