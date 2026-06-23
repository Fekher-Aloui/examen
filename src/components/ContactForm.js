"use client"; // TRÈS IMPORTANT : Doit être à la ligne 1 !

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

// Schéma de validation Yup selon les consignes exactes
const contactSchema = yup.object().shape({
  name: yup
    .string()
    .required("Le nom est obligatoire")
    .min(4, "Le nom doit contenir au moins 4 caractères"),
  email: yup
    .string()
    .required("L'email est obligatoire")
    .email("Veuillez saisir un email valide"),
  telephone: yup
    .string()
    .required("Le numéro est obligatoire")
    .matches(/^\d{8}$/, "Le téléphone doit contenir exactement 8 chiffres"),
  message: yup
    .string()
    .required("Le message est obligatoire")
    .max(30, "Le message ne doit pas dépasser 30 caractères"),
});

export default function ContactForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(contactSchema),
  });

  const onSubmit = (data) => {
    alert("Message envoyé avec succès !");
    console.log(data);
    reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Nom complet
        </label>
        <input
          type="text"
          {...register("name")}
          className="w-full border rounded-xl p-2.5 focus:ring-2 focus:ring-cyan-500 outline-none"
        />
        {errors.name && (
          <p className="text-red-500 text-xs mt-1">{errors.name.message}</p>
        )}
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Email
        </label>
        <input
          type="email"
          {...register("email")}
          className="w-full border rounded-xl p-2.5 focus:ring-2 focus:ring-cyan-500 outline-none"
        />
        {errors.email && (
          <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>
        )}
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Téléphone
        </label>
        <input
          type="text"
          {...register("telephone")}
          className="w-full border rounded-xl p-2.5 focus:ring-2 focus:ring-cyan-500 outline-none"
        />
        {errors.telephone && (
          <p className="text-red-500 text-xs mt-1">
            {errors.telephone.message}
          </p>
        )}
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Message
        </label>
        <textarea
          {...register("message")}
          rows="3"
          className="w-full border rounded-xl p-2.5 focus:ring-2 focus:ring-cyan-500 outline-none"
        />
        {errors.message && (
          <p className="text-red-500 text-xs mt-1">{errors.message.message}</p>
        )}
      </div>

      <button
        type="submit"
        className="w-full bg-cyan-500 hover:bg-cyan-600 text-slate-950 font-bold py-2.5 rounded-xl transition-colors"
      >
        Envoyer
      </button>
    </form>
  );
}
