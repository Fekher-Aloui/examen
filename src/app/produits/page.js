"use client";
import { useState } from "react";
import { produits } from "@/data/produits";
import ProduitList from "@/components/ProduitList";

export default function ProduitsPage() {
  const [search, setSearch] = useState("");

  const filteredProduits = produits.filter(
    (p) =>
      p.nom.toLowerCase().includes(search.toLowerCase()) ||
      p.categorie.toLowerCase().includes(search.toLowerCase()),
  );

  return (
    <div className="space-y-8">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <h2 className="text-3xl font-bold">Nos Produits Technologiques</h2>

        {/* Barre de recherche (Question 4.3) */}
        <input
          type="text"
          placeholder="Rechercher un produit ou une catégorie..."
          className="px-4 py-2 border border-gray-300 rounded-xl max-w-md w-full focus:outline-none focus:ring-2 focus:ring-cyan-500"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      {filteredProduits.length > 0 ? (
        <ProduitList produits={filteredProduits} />
      ) : (
        <p className="text-gray-500 text-center py-12">
          Aucun produit ne correspond à votre recherche.
        </p>
      )}
    </div>
  );
}
