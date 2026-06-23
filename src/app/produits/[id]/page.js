import { produits } from "../../../data/produits";
import DetailsProduitCard from "./DetailsProduitCard";

// Génération dynamique du titre de la barre d'onglet (Metadata)
export async function generateMetadata({ params }) {
  const { id } = await params;
  const produit = produits.find((p) => p.id === parseInt(id));

  return {
    title: produit
      ? `${produit.nom} | Détails du produit`
      : "Produit introuvable",
    description: produit ? produit.description : "Description du produit",
  };
}

// Composant de page principal
export default async function ProduitPage({ params }) {
  const { id } = await params;

  // On transmet l'identifiant au composant d'affichage
  return <DetailsProduitCard productId={id} />;
}
