const FAQ = () => {
  const faqs = [
    { id: 1, q: "How many books can I borrow at once?", a: "Currently, you can borrow any available book instantly if you are logged into your account." },
    { id: 2, q: "Is the membership completely free?", a: "Yes, our digital library platform is completely free to explore and borrow titles digitally." },
    { id: 3, q: "How can I update my profile details?", a: "You can easily update your name and profile picture from the 'My Profile' route after logging in." }
  ];

  return (
    <div className="bg-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl font-black text-slate-800 text-center mb-12">Frequently Asked <span className="text-orange-600">Questions</span></h2>
        
        <div className="space-y-4">
          {faqs.map((faq) => (
            <div key={faq.id} className="collapse collapse-plus bg-amber-50/30 border border-amber-100 rounded-lg">
              <input type="radio" name="my-accordion-3" defaultChecked={faq.id === 1} />
              <div className="collapse-title text-base font-bold text-slate-800">{faq.q}</div>
              <div className="collapse-content text-xs sm:text-sm text-slate-600"><p>{faq.a}</p></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQ;
