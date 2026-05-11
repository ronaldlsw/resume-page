import { cn } from "../../lib/utils";

export default function Card({ children, className = "", ...props }) {
  return (
    <div
      className={cn("border border-crt-green/20 bg-crt-surface p-6 transition-all duration-300 hover:border-crt-green/60", className)}
      {...props}
    >
      {children}
    </div>
  );
}
