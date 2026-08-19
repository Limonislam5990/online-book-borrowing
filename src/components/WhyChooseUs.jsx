const WhyChooseUs = () => {
  const features = [
    { id: 1, icon: "⚡", title: "Instant Borrowing", desc: "Borrow any digital book instantly with just a single click from anywhere." },
    { id: 2, icon: "🛡️", title: "Secure Platform", desc: "Your data and reading profile are completely secured with BetterAuth protection." },
    { id: 3, icon: "📚", title: "Vast Collection", desc: "Explore thousands of books across different genres like Story, Tech, and Science." }
  ];

  return (
    <div className="bg-amber-50/40 py-16 px-4 sm:px-6 lg:px-8 border-t border-b border-amber-100">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl font-black text-slate-800">Why <span className="text-orange-600">Choose Us</span></h2>
        <p className="mt-2 text-sm text-slate-500">We provide the ultimate modern digital library experience for avid readers.</p>
        
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((f) => (
            <div key={f.id} className="bg-white p-8 rounded-xl border border-amber-100 shadow-sm hover:shadow-md transition-all">
              <div className="text-4xl mb-4">{f.icon}</div>
              <h3 className="text-lg font-bold text-slate-800">{f.title}</h3>
              <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
