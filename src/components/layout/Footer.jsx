export default function Footer() {
  return (
    <footer className="border-t border-crt-green/20 py-6 text-center font-mono text-xs text-crt-dimtext">
      <p>POWERED BY REACT + TAILWINDCSS</p>
      <p className="mt-1">&copy; {new Date().getFullYear()} Ronald Lim. All rights reserved.</p>
    </footer>
  );
}
