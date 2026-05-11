import { cn } from "../../lib/utils";

export default function Badge({ children, className = "" }) {
  return (
    <span className={cn("inline-block px-3 py-1 text-xs font-mono border border-crt-green/40 text-crt-muted", className)}>
      {children}
    </span>
  );
}
