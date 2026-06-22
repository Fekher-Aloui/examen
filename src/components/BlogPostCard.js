import Link from "next/link";

export default function BlogPostCard({ post }) {
  return (
    <div className="bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow">
      <div>
        <img
          src={post.image}
          alt={post.titre}
          className="w-full h-48 object-cover"
        />
        <div className="p-5">
          <p className="text-xs text-gray-400 mb-2">{post.date}</p>
          <h3 className="font-bold text-lg mb-2 text-gray-900 line-clamp-2">
            {post.titre}
          </h3>
          <p className="text-sm text-gray-600 line-clamp-3">{post.extrait}</p>
        </div>
      </div>
      <div className="p-5 pt-0">
        <Link
          href={`/blog/${post.id}`}
          className="inline-block bg-cyan-500 text-slate-950 font-medium px-4 py-2 rounded-xl text-sm hover:bg-cyan-600 transition-colors"
        >
          Lire plus
        </Link>
      </div>
    </div>
  );
}
