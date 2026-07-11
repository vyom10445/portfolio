export default function Footer() {
  return (
    <footer className="bg-background py-8 px-8 md:px-24 border-t border-border flex flex-col md:flex-row items-center justify-between text-white/50 text-sm font-mono">
      <div>Designed & Developed by Vyom Chaturvedi &copy; 2026</div>
      <div className="mt-4 md:mt-0 flex gap-6">
        <a href="#work" className="hover:text-white transition-colors">Work</a>
        <a href="#experience" className="hover:text-white transition-colors">Experience</a>
        <a href="#about" className="hover:text-white transition-colors">About</a>
      </div>
    </footer>
  );
}
