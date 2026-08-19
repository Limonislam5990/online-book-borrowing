"use client";
import { useState, useEffect } from "react";
import PhotoCard from "@/components/photocard";

const AllBooks = () => {
  const [books, setBooks] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  useEffect(() => {
    fetch("/data.json")
      .then((res) => res.json())
      .then((data) => setBooks(data))
      .catch((err) => console.error(err));
  }, []);

  const filteredBooks = books.filter((book) => {
    const matchesCategory = selectedCategory === "All" || book.category === selectedCategory;
    const matchesSearch = book.title.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-white py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        
        <div className="w-full max-w-2xl mx-auto mb-10">
          <input
            type="text"
            placeholder="Search books by title..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="input input-bordered w-full bg-amber-50/20 border-amber-200 text-slate-800 focus:border-orange-500 focus:outline-none h-14 rounded-xl px-5 text-base shadow-sm"
          />
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          
          <div className="w-full lg:w-64 bg-amber-50/30 border border-amber-100 p-6 rounded-2xl h-fit sticky top-24">
            <h3 className="font-black text-slate-800 text-lg mb-4 border-b border-amber-100 pb-2">
              Categories
            </h3>
            <div className="flex flex-row lg:flex-col gap-2 overflow-x-auto lg:overflow-x-visible pb-2 lg:pb-0">
              {["All", "Story", "Tech", "Science"].map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`btn btn-sm justify-start rounded-lg border-none capitalize font-bold text-xs px-4 h-9 min-h-fit ${
                    selectedCategory === cat
                      ? "bg-orange-600 text-white hover:bg-orange-700"
                      : "bg-white text-slate-700 hover:bg-amber-100 border border-amber-100"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          <div className="flex-grow">
            {filteredBooks.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
                {filteredBooks.map((book) => (
                  <PhotoCard key={book.id} book={book} />
                ))}
              </div>
            ) : (
              <div className="text-center py-20 bg-amber-50/10 rounded-2xl border border-dashed border-amber-200">
                <p className="text-slate-500 font-medium">No books found matching your criteria.</p>
              </div>
            )}
          </div>

        </div>

      </div>
    </div>
  );
};

export default AllBooks;
