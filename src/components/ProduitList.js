import ProduitCard from "./ProduitCard";

export default function ProduitList({ produits }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {produits.map((item) => (
        <ProduitCard key={item.id} produit={item} />
      ))}
    </div>
  );
}
