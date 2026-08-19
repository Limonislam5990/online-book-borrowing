"use client";
import { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

const MyProfile = () => {
  const router = useRouter();
  
  // ডেমো ডেটা (পরবর্তীতে BetterAuth সেশন বসালে ডাইনামিক হবে)
  const [user, setUser] = useState({
    name: "John Doe",
    email: "john.doe@example.com",
    image: "https://unsplash.com",
  });

  return (
    <div className="min-h-screen bg-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-2xl mx-auto bg-amber-50/30 border border-amber-100 p-8 rounded-2xl shadow-sm text-center space-y-6">
        
        <div>
          <h2 className="text-3xl font-black text-slate-800">
            My <span className="text-orange-600">Profile</span>
          </h2>
          <p className="mt-1 text-xs sm:text-sm text-slate-500">
            View and manage your digital library account details
          </p>
        </div>

        <div className="flex flex-col items-center space-y-4 pt-4">
          <div className="relative w-32 h-32 rounded-full overflow-hidden border-4 border-white shadow-md bg-slate-100">
            <Image
              src={user.image}
              alt={user.name}
              fill
              priority
              className="object-cover"
            />
          </div>
          
          <div className="space-y-1">
            <h3 className="text-xl font-bold text-slate-800">{user.name}</h3>
            <p className="text-sm font-medium text-slate-500">{user.email}</p>
          </div>
        </div>

        <div className="border-t border-amber-100 pt-6">
          <button
            onClick={() => router.push("/profile/update")}
            className="btn bg-orange-600 hover:bg-orange-700 text-white font-bold uppercase tracking-wider px-8 border-none rounded-xl shadow-sm transition-all"
          >
            Update Information
          </button>
        </div>

      </div>
    </div>
  );
};

export default MyProfile;
