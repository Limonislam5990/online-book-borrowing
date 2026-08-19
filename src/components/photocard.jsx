"use client";
import Image from "next/image";
import Link from "next/link";

const photoCard = ({ book }) => {
  return (
    <div className="bg-amber-50/50 rounded-xl overflow-hidden border border-amber-100 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col h-full">
      <div className="relative w-full h-64 bg-slate-100">
        <Image
          src={book.image_url}
          alt={book.title}
          fill
          sizes="(max-w-768px) 100vw, 25vw"
          className="object-cover"
        />
      </div>

      <div className="p-5 flex flex-col flex-grow justify-between">
        <div className="space-y-2">
          <span className="inline-block bg-orange-100 text-orange-800 text-xs font-semibold px-2.5 py-0.5 rounded">
            {book.category}
          </span>
          <h3 className="font-bold text-base text-slate-800 line-clamp-1">
            {book.title}
          </h3>
          <p className="text-xs text-slate-500">
            By {book.author}
          </p>
          <p className="text-xs text-slate-600 line-clamp-2 pt-1">
            {book.description}
          </p>
        </div>

        <div className="pt-4 mt-auto">
          <Link
            href={`/book/${book.id}`}
            className="block text-center w-full bg-slate-800 hover:bg-orange-600 text-white text-xs font-bold uppercase tracking-wider py-2.5 rounded-lg transition-colors duration-300"
          >
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default photoCard;
