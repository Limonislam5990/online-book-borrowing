import PhotoCard from "./photocard";

const FeaturedBooks = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/data.json`, {
    cache: 'no-store'
  });
  const data = await res.json();
  const featuredBooks = data.slice(0, 4);
    
  return (
    <div className="bg-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        
        <div className="text-center mb-12">
          <h2 className="text-3xl font-black text-slate-800 sm:text-4xl">
            Featured <span className="text-orange-600">Books</span>
          </h2>
          <p className="mt-3 text-sm text-slate-500">
            Explore our top picks available for digital borrowing right now.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredBooks.map((book) => (
            <PhotoCard key={book.id} book={book} />
          ))}
        </div>

      </div>
    </div>
  );
};

export default FeaturedBooks;
