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
