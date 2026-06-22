import Link from "next/link";

export default function ProduitCard({ produit }) {
  return (
    <div className="bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow flex flex-col">
      <div className="h-48 bg-gray-100 relative">
        <img
          src={produit.image}
          alt={produit.nom}
          className="w-full h-full object-cover"
        />
        <span className="absolute top-3 left-3 bg-slate-900 text-white text-xs px-2 py-1 rounded-md font-medium">
          {produit.categorie}
        </span>
      </div>
      <div className="p-5 flex flex-col flex-grow">
        <h3 className="font-bold text-lg mb-2 text-gray-900">{produit.nom}</h3>
        <p className="text-2xl font-black text-cyan-600 mb-4">
          {produit.prix} DT
        </p>
        <Link
          href={`/produits/${produit.id}`}
          className="mt-auto block text-center bg-slate-800 hover:bg-slate-900 text-white py-2 rounded-xl text-sm font-medium transition-colors"
        >
          Voir les détails
        </Link>
      </div>
    </div>
  );
}
