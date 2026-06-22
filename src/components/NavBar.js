import Link from "next/link";

export default function NavBar() {
  return (
    <nav className="bg-slate-800 text-white sticky top-0 z-50 shadow-md">
      <div className="container mx-auto px-4 flex justify-between items-center h-16">
        {/* Logo */}
        <Link
          href="/"
          className="flex items-center space-x-2 text-xl font-bold text-cyan-400"
        >
          <span>⚡ TechStore</span>
        </Link>

        {/* Liens de navigation avec animations hover */}
        <div className="flex items-center space-x-6">
          <Link
            href="/"
            className="hover:text-cyan-400 transition-colors duration-200 py-2"
          >
            Accueil
          </Link>
          <Link
            href="/produits"
            className="hover:text-cyan-400 transition-colors duration-200 py-2"
          >
            Produits
          </Link>
          <Link
            href="/inscription"
            className="hover:text-cyan-400 transition-colors duration-200 py-2"
          >
            Inscription
          </Link>
          <Link
            href="/contact"
            className="hover:text-cyan-400 transition-colors duration-200 py-2"
          >
            Contact
          </Link>
          <Link
            href="/blog"
            className="hover:text-cyan-400 transition-colors duration-200 py-2"
          >
            Blog
          </Link>
        </div>

        {/* Bouton Inscription */}
        <div>
          <Link
            href="/inscription"
            className="bg-cyan-500 hover:bg-cyan-600 text-slate-950 px-4 py-2 rounded-lg font-medium transition-all transform hover:scale-105"
          >
            S'inscrire
          </Link>
        </div>
      </div>
    </nav>
  );
}
