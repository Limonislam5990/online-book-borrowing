"use client";
import { useState, useEffect } from "react";
import { useRouter, useParams } from "next/navigation";
import Image from "next/image";

const BookDetails = () => {
  const router = useRouter();
  const params = useParams();
  const [book, setBook] = useState(null);
  const [showToast, setShowToast] = useState(false);
  
  const isLoggedIn = false; 

  useEffect(() => {
    fetch("/data.json")
      .then((res) => res.json())
      .then((data) => {
        const foundBook = data.find((b) => b.id === params.id);
        setBook(foundBook);
      })
      .catch((err) => console.error(err));
  }, [params.id]);

  const handleBorrow = () => {
    if (!isLoggedIn) {
      setShowToast(true);
      setTimeout(() => {
        setShowToast(false);
        router.push("/signin");
      }, 2000);
    } else {
      alert("Book borrowed successfully!");
    }
  };

  if (!book) {
    return (
      <div className="min-h-screen flex justify-center items-center bg-white">
        <div className="w-10 h-10 border-4 border-orange-600 border-t-transparent rounded-full animate-spin"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white py-12 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center bg-amber-50/30 p-8 rounded-2xl border border-amber-100 shadow-sm">
        
        <div className="relative w-full h-[450px] bg-slate-100 rounded-xl overflow-hidden shadow-md">
          <Image
            src={book.image_url}
            alt={book.title}
            fill
            priority
            className="object-cover"
          />
        </div>

        <div className="space-y-6">
          <span className="inline-block bg-orange-100 text-orange-800 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide">
            {book.category}
          </span>
          
          <h1 className="text-3xl sm:text-4xl font-black text-slate-800 leading-tight">
            {book.title}
          </h1>
          
          <p className="text-sm font-semibold text-orange-600">
            By {book.author}
          </p>
          
          <div className="border-t border-b border-amber-100 py-4">
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              {book.description}
            </p>
          </div>

          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
            <p className="text-sm font-bold text-slate-700">
              Available Quantity: <span className="text-orange-600">{book.available_quantity} copies left</span>
            </p>
          </div>

          <button
            onClick={handleBorrow}
            className="w-full bg-orange-600 hover:bg-orange-700 text-white font-bold uppercase tracking-wider py-4 rounded-xl shadow-md hover:shadow-lg transition-all duration-300"
          >
            Borrow This Book
          </button>
        </div>

      </div>

      {showToast && (
        <div className="fixed top-5 left-1/2 -translate-x-1/2 z-50">
          <div className="bg-red-500 text-white font-medium px-6 py-3 rounded-xl shadow-lg flex items-center gap-2">
            <span>Please login first to borrow this book! Redirecting...</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default BookDetails;
