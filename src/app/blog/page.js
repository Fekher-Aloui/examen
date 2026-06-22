"use client";
import Link from "next/link";
import { articles } from "@/data/blog";

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-[#0b0f19] text-white p-8">
      <h1 className="text-3xl font-bold mb-8 border-b border-gray-800 pb-4">
        Le Blog High-Tech de TechStore
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {articles.map((article) => (
          <div
            key={article.id}
            className="bg-white text-black rounded-2xl overflow-hidden shadow-lg flex flex-col justify-between"
          >
            <div>
              <div className="h-48 overflow-hidden bg-gray-200">
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.target.src =
                      "https://via.placeholder.com/600x400?text=Image+TechStore";
                  }}
                />
              </div>
              <div className="p-6">
                <p className="text-gray-400 text-xs mb-2">{article.date}</p>
                <h2 className="text-xl font-bold mb-3 text-gray-900">
                  {article.title}
                </h2>
                <p className="text-gray-600 text-sm">{article.description}</p>
              </div>
            </div>

            <div className="p-6 pt-0">
              {/* Le lien pointe dynamiquement vers /blog/1, /blog/2, etc. */}
              <Link href={`/blog/${article.id}`}>
                <button className="bg-[#00a8cc] hover:bg-[#008ca8] text-white text-sm font-medium px-4 py-2 rounded-lg transition">
                  Lire plus
                </button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
