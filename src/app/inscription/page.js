import InscriptionForm from "@/components/InscriptionForm";

export default function InscriptionPage() {
  return (
    <div className="max-w-md mx-auto bg-white border border-gray-100 p-8 rounded-3xl shadow-sm my-6">
      <h2 className="text-2xl font-bold mb-2 text-center">Créer un compte</h2>
      <p className="text-sm text-gray-500 text-center mb-6">
        Rejoignez TechStore pour suivre vos commandes
      </p>
      <InscriptionForm />
    </div>
  );
}
