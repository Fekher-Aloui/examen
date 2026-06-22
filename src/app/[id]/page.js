"use client";
import { useParams } from "next/navigation";
import { produits } from "@/data/produits"; // Modifiez le chemin si vous n'utilisez pas l'alias (ex: ../../../data/produits)
import Link from "next/link";

export default function DetailsProduitPage() {
  const { id } = useParams();

  // On cherche le produit correspondant à l'ID de l'URL
  const produit = produits.find((p) => p.id === parseInt(id));

  // Si le produit n'existe pas dans le tableau
  if (!produit) {
    return (
      <div className="text-center py-12">
        <h2 className="text-2xl font-bold text-red-500">Produit introuvable</h2>
        <Link
          href="/produits"
          className="text-cyan-500 hover:underline mt-4 inline-block"
        >
          Retourner à la liste des produits
        </Link>
      </div>
    );
  }

  // Fonction de confirmation de commande
  const handleCommander = () => {
    alert(`🎉 Commande confirmée pour le produit : ${produit.nom} !`);
  };

  return (
    <div className="max-w-4xl mx-auto bg-white border border-gray-200 rounded-3xl overflow-hidden shadow-sm p-6 md:p-8 mt-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Section Image */}
        <div className="h-80 bg-gray-100 rounded-2xl overflow-hidden">
          <img
            src={produit.image}
            alt={produit.nom}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Section Infos */}
        <div className="flex flex-col justify-between">
          <div>
            <span className="text-xs font-bold text-cyan-600 bg-cyan-50 px-3 py-1 rounded-full uppercase tracking-wider">
              {produit.categorie}
            </span>
            <h2 className="text-3xl font-bold mt-3 mb-4 text-gray-900">
              {produit.nom}
            </h2>
            <p className="text-gray-600 mb-6 leading-relaxed">
              {produit.description}
            </p>
            <p className="text-3xl font-black text-slate-900 mb-6">
              {produit.prix} DT
            </p>
          </div>

          {/* Actions */}
          <div className="space-y-3">
            <button
              onClick={handleCommander}
              className="w-full bg-cyan-500 hover:bg-cyan-600 text-slate-950 font-bold py-3 rounded-xl transition-all shadow-md active:scale-98 cursor-pointer"
            >
              Commander
            </button>
            <Link
              href="/produits"
              className="block text-center text-sm text-gray-500 hover:text-slate-800 transition-colors py-1"
            >
              ← Retour aux produits
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
