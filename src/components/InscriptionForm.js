"use client";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

// Schéma de validation de la Question 4.2
const registerSchema = yup.object().shape({
  nom: yup
    .string()
    .required("Le nom est obligatoire")
    .min(5, "Le nom doit faire au moins 5 caractères"),
  cin: yup
    .string()
    .required("Le CIN est obligatoire")
    .matches(/^\d{8}$/, "Le CIN doit contenir exactement 8 chiffres"),
  email: yup
    .string()
    .required("L'email est obligatoire")
    .email("Email invalide"),
  password: yup
    .string()
    .required("Le mot de passe est obligatoire")
    .min(6, "Le mot de passe doit faire au moins 6 caractères"),
  confirmPassword: yup
    .string()
    .required("Veuillez confirmer votre mot de passe")
    .oneOf(
      [yup.ref("password"), null],
      "Les mots de passe ne correspondent pas",
    ),
  acceptConditions: yup
    .boolean()
    .oneOf([true], "Vous devez obligatoirement accepter les conditions"),
});

export default function InscriptionForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(registerSchema),
  });

  const onSubmit = (data) => {
    alert("Inscription réussie !");
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
          {...register("nom")}
          className="w-full border rounded-xl p-2.5 focus:ring-2 focus:ring-cyan-500 outline-none"
        />
        {errors.nom && (
          <p className="text-red-500 text-xs mt-1">{errors.nom.message}</p>
        )}
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          CIN (8 chiffres)
        </label>
        <input
          type="text"
          {...register("cin")}
          className="w-full border rounded-xl p-2.5 focus:ring-2 focus:ring-cyan-500 outline-none"
        />
        {errors.cin && (
          <p className="text-red-500 text-xs mt-1">{errors.cin.message}</p>
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
          Mot de passe
        </label>
        <input
          type="password"
          {...register("password")}
          className="w-full border rounded-xl p-2.5 focus:ring-2 focus:ring-cyan-500 outline-none"
        />
        {errors.password && (
          <p className="text-red-500 text-xs mt-1">{errors.password.message}</p>
        )}
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Confirmer le mot de passe
        </label>
        <input
          type="password"
          {...register("confirmPassword")}
          className="w-full border rounded-xl p-2.5 focus:ring-2 focus:ring-cyan-500 outline-none"
        />
        {errors.confirmPassword && (
          <p className="text-red-500 text-xs mt-1">
            {errors.confirmPassword.message}
          </p>
        )}
      </div>

      <div className="flex flex-col">
        <label className="inline-flex items-center space-x-2 text-sm text-gray-600">
          <input
            type="checkbox"
            {...register("acceptConditions")}
            className="rounded border-gray-300 text-cyan-500 focus:ring-cyan-500"
          />
          <span>J'accepte les conditions</span>
        </label>
        {errors.acceptConditions && (
          <p className="text-red-500 text-xs mt-1">
            {errors.acceptConditions.message}
          </p>
        )}
      </div>

      <button
        type="submit"
        className="w-full bg-slate-900 hover:bg-slate-800 text-white font-bold py-2.5 rounded-xl transition-colors"
      >
        S'inscrire
      </button>
    </form>
  );
}
