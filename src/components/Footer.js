import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-400 py-8 border-t border-slate-800 mt-auto">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-4">
        <div>
          <span className="font-semibold text-white">TechStore</span> © 2025
        </div>
        <div className="flex space-x-6">
          <Link href="/contact" className="hover:text-white transition-colors">
            Contactez-nous
          </Link>
        </div>
        <div className="flex space-x-4">
          <a href="#" className="hover:text-cyan-400 transition-colors">
            Facebook
          </a>
          <a href="#" className="hover:text-cyan-400 transition-colors">
            X (Twitter)
          </a>
          <a href="#" className="hover:text-cyan-400 transition-colors">
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
}
