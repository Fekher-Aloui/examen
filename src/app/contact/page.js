import ContactForm from "@/components/ContactForm";

export default function ContactPage() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto py-6">
      {/* Colonne 1 : Formulaire */}
      <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
        <h2 className="text-2xl font-bold mb-6 text-gray-900">
          Envoyez-nous un message
        </h2>
        <ContactForm />
      </div>

      {/* Colonne 2 : Infos Fictives */}
      <div className="bg-slate-900 text-white p-8 rounded-2xl shadow-md flex flex-col justify-between">
        <div>
          <h2 className="text-2xl font-bold mb-6 text-cyan-400">
            Informations de Contact
          </h2>
          <p className="text-slate-300 mb-8">
            Une question ? Un besoin d'assistance technique ? Notre équipe vous
            répond sous 24h ouvrées.
          </p>
          <div className="space-y-4">
            <p>
              📍 <strong className="text-white">Adresse:</strong> 45 Avenue
              Habib Bourguiba, Tunis
            </p>
            <p>
              📞 <strong className="text-white">Téléphone:</strong> +216 71 000
              000
            </p>
            <p>
              ✉️ <strong className="text-white">Email:</strong>{" "}
              support@techstore.tn
            </p>
          </div>
        </div>
        <div className="border-t border-slate-800 pt-6 mt-6 text-xs text-slate-400">
          Horaires d'ouverture : Lundi au Vendredi, 8h30 - 17h30.
        </div>
      </div>
    </div>
  );
}
