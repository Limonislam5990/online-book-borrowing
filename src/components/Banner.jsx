"use client";
import Link from "next/link";

const Banner = () => {
  return (
    <div className="relative bg-gradient-to-r from-orange-50 to-amber-100 py-20 px-6 sm:px-12 lg:px-20 text-center lg:text-left min-h-[450px] flex items-center">
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
        
        <div className="space-y-6">
          <span className="bg-orange-200 text-orange-800 text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full">
            Welcome to MangoBook
          </span>
          
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-slate-800 leading-tight">
            Find Your <span className="text-orange-600">Next Read</span>
          </h1>
          
          <p className="text-base sm:text-lg text-slate-600 max-w-xl mx-auto lg:mx-0">
            Explore a vast collection of books, filter by your favorite categories, and borrow titles digitally with a seamless library experience.
          </p>
          
          <div className="pt-2">
            <Link 
              href="/all-books" 
              className="inline-block bg-orange-600 hover:bg-orange-700 text-white text-sm font-bold uppercase tracking-wide px-8 py-4 rounded-lg shadow-md hover:shadow-lg transition-all duration-300"
            >
              Browse Now
            </Link>
          </div>
        </div>

        <div className="hidden lg:flex justify-center items-center">
          <div className="w-80 h-80 bg-orange-200 rounded-full bg-cover bg-center border-4 border-white shadow-xl relative overflow-hidden flex flex-col justify-center items-center p-6 text-center">
            <div className="text-6xl mb-2">📚</div>
            <h4 className="font-bold text-lg text-orange-900">Digital Library</h4>
            <p className="text-xs text-orange-800 mt-1">Read, Borrow & Explore Instantly</p>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Banner;
