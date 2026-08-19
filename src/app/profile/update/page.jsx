"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

const UpdateProfile = () => {
  const router = useRouter();
  const [name, setName] = useState("John Doe");
  const [image, setImage] = useState("https://unsplash.com");
  const [error, setError] = useState("");

  const handleUpdate = (e) => {
    e.preventDefault();
    setError("");

    if (!name.trim() || !image.trim()) {
      setError("Both Name and Image URL fields are required.");
      return;
    }

    // BetterAuth Concepts: documentation rule placeholder
    alert("Information Updated Successfully via BetterAuth!");
    router.push("/profile");
  };

  return (
    <div className="min-h-screen bg-white flex items-center justify-center px-4 py-12">
      <div className="max-w-md w-full bg-amber-50/30 p-8 rounded-2xl border border-amber-100 shadow-sm space-y-6">
        
        <div className="text-center">
          <h2 className="text-3xl font-black text-slate-800">
            Update <span className="text-orange-600">Information</span>
          </h2>
          <p className="mt-2 text-xs sm:text-sm text-slate-500">
            Modify your library profile details below
          </p>
        </div>

        {error && (
          <div className="bg-red-50 border border-red-200 text-red-600 text-xs sm:text-sm p-3 rounded-lg text-center font-medium">
            {error}
          </div>
        )}

        <form onSubmit={handleUpdate} className="space-y-5">
          <div>
            <label className="block text-xs font-bold uppercase tracking-wide text-slate-700 mb-1">
              Full Name
            </label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter new name"
              className="input input-bordered w-full bg-white border-amber-200 text-slate-800 focus:border-orange-500 focus:outline-none"
            />
          </div>

          <div>
            <label className="block text-xs font-bold uppercase tracking-wide text-slate-700 mb-1">
              Profile Image URL
            </label>
            <input
              type="text"
              value={image}
              onChange={(e) => setImage(e.target.value)}
              placeholder="https://example.com"
              className="input input-bordered w-full bg-white border-amber-200 text-slate-800 focus:border-orange-500 focus:outline-none"
            />
          </div>

          <div className="pt-2 flex gap-4">
            <button
              type="button"
              onClick={() => router.push("/profile")}
              className="btn flex-1 bg-white hover:bg-slate-50 text-slate-700 border border-slate-200 font-bold uppercase tracking-wider rounded-xl"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="btn flex-1 bg-orange-600 hover:bg-orange-700 text-white font-bold uppercase tracking-wider border-none rounded-xl"
            >
              Update Info
            </button>
          </div>
        </form>

      </div>
    </div>
  );
};

export default UpdateProfile;
