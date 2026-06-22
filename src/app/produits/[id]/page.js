"use client";
import { useParams } from "next/navigation";
import { produits } from "../../../data/produits";
import Link from "next/link";

export default function DetailsProduitCard() {
  const params = useParams();
  const productId = params?.id;

  // On cherche le produit correspondant
  const produit = produits.find((p) => p.id === parseInt(productId));

  if (!produit) {
    return (
      <div className="text-center py-12 bg-white rounded-3xl border border-gray-200 shadow-sm max-w-xl mx-auto mt-6">
        <h2 className="text-2xl font-bold text-red-500 mb-2">
          Produit introuvable
        </h2>
        <p className="text-gray-500 mb-6">
          L'article demandé n'existe pas ou a été déplacé.
        </p>
        <Link
          href="/produits"
          className="bg-slate-900 text-white px-5 py-2 rounded-xl text-sm font-medium hover:bg-slate-800 transition-colors"
        >
          Retourner à la liste des produits
        </Link>
      </div>
    );
  }

  // Action du bouton Commander (Question 4.1)
  const handleCommander = () => {
    alert("Commande confirmée");
  };

  return (
    <div className="max-w-4xl mx-auto bg-white border border-gray-200 rounded-3xl overflow-hidden shadow-sm p-6 md:p-8 mt-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Colonne Image */}
        <div className="h-80 bg-gray-50 rounded-2xl overflow-hidden border border-gray-100">
          <img
            src={produit.image}
            alt={produit.nom}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Colonne Détails */}
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

          {/* Bouton de Commande */}
          <div className="space-y-4">
            <button
              onClick={handleCommander}
              className="w-full bg-cyan-500 hover:bg-cyan-600 text-slate-950 font-bold py-3 rounded-xl transition-all shadow-md active:scale-98 cursor-pointer text-center block"
            >
              Commander
            </button>
            <Link
              href="/produits"
              className="block text-center text-sm text-gray-500 hover:text-slate-800 transition-colors"
            >
              ← Retour aux produits
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
