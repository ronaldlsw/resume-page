import { cn } from "../../lib/utils";

export default function SectionDivider({ className = "" }) {
  return (
    <div className={cn("flex items-center gap-2 text-crt-green font-mono text-sm", className)}>
      <span>[</span>
      <span className="flex-1 h-[1px] bg-crt-green/30" />
      <span className="tracking-[0.5em]">=====</span>
      <span className="flex-1 h-[1px] bg-crt-green/30" />
      <span>]</span>
    </div>
  );
}
