import { cn } from "../../lib/utils";

export default function GlowButton({ children, href, className = "", ...props }) {
  const cls = cn("inline-block px-6 py-3 border border-crt-green text-crt-green font-mono text-sm tracking-wider uppercase transition-all duration-300 hover:bg-crt-dim hover:shadow-[0_0_12px_#00ff41] cursor-pointer", className);

  if (href) {
    return <a href={href} target="_blank" rel="noopener noreferrer" className={cls} {...props}>{children}</a>;
  }
  return <button className={cls} {...props}>{children}</button>;
}
