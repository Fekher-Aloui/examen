"use client";
import { use } from "react";
import Link from "next/link";
import { articles } from "@/data/blog";

export default function ArticleUniquePage({ params }) {
  // On déballe les paramètres de l'URL de manière sûre pour Next.js 15+
  const resolvedParams = use(params);
  const articleId = parseInt(resolvedParams.id);

  // On cherche l'article qui possède cet ID
  const article = articles.find((a) => a.id === articleId);

  // Si l'article n'existe pas dans nos données
  if (!article) {
    return (
      <div className="min-h-screen bg-[#0b0f19] text-white flex flex-col items-center justify-center">
        <h1 className="text-2xl font-bold mb-4">Article introuvable</h1>
        <Link href="/blog" className="text-[#00a8cc] hover:underline">
          Retour au blog
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#0b0f19] text-white p-8">
      <div className="max-w-3xl mx-auto">
        <Link
          href="/blog"
          className="text-sm text-gray-400 hover:text-[#00a8cc] flex items-center mb-6 transition"
        >
          ← Retour aux articles
        </Link>

        <img
          src={article.image}
          alt={article.title}
          className="w-full h-80 object-cover rounded-2xl mb-6 shadow-xl"
        />

        <p className="text-[#00a8cc] text-sm font-semibold mb-2">
          {article.date}
        </p>
        <h1 className="text-3xl md:text-4xl font-extrabold mb-6">
          {article.title}
        </h1>

        <div className="text-gray-300 leading-relaxed text-lg space-y-4 whitespace-pre-line">
          {article.content}
        </div>
      </div>
    </div>
  );
}
