import Link from "next/link";

export default function HomePage() {
  return (
    <div className="space-y-12">
      {/* Hero Banner */}
      <div className="bg-gradient-to-r from-slate-900 via-indigo-950 to-slate-900 rounded-3xl p-8 md:p-16 text-center shadow-xl border border-slate-800">
        <h2 className="text-4xl md:text-6xl font-extrabold text-white mb-4">
          L'Univers <span className="text-cyan-400">High-Tech</span> de Demain
        </h2>
        <p className="text-slate-300 max-w-2xl mx-auto text-lg mb-8">
          Explorez notre sélection exclusive d'ordinateurs, smartphones et
          accessoires au meilleur prix du marché.
        </p>
        <div className="flex justify-center gap-4">
          <Link
            href="/produits"
            className="bg-cyan-500 hover:bg-cyan-600 text-slate-950 font-semibold px-6 py-3 rounded-xl transition-all shadow-lg shadow-cyan-500/20"
          >
            Découvrir les Produits →
          </Link>
          <Link
            href="/inscription"
            className="bg-slate-800 hover:bg-slate-700 text-white font-semibold px-6 py-3 rounded-xl transition-all border border-slate-700"
          >
            S'inscrire
          </Link>
        </div>
      </div>
    </div>
  );
}
