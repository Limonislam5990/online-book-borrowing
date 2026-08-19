"use client";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { authClient } from "../app/lib/auth-client";



const Navbar = () => {
  const router = useRouter();
  const { data: session, isPending } = authClient.useSession();

  const handleLogout = async () => {
    await authClient.signOut();
    router.push("/signin");
  };

  return (
    <div className="border-b px-4 bg-white w-full sticky top-0 z-50">
      <nav className="flex justify-between items-center py-3 max-w-7xl mx-auto w-full h-16">
        
        <Link href="/" className="flex gap-2 items-center flex-shrink-0">
          <div className="w-10 h-10 relative flex items-center justify-center">
            <Image
              src="/logo.png"
              alt="logo"
              width={40}
              height={40}
              priority
              className="object-contain max-h-10 max-w-10"
            />
          </div>
          <h3 className="font-black text-lg text-black">MangoBook</h3>
        </Link>

        <ul className="flex items-center gap-5 text-sm font-medium text-black">
          <li><Link href="/">Home</Link></li>
          <li><Link href="/all-books">All Books</Link></li>
          <li><Link href="/profile">My Profile</Link></li>
        </ul>

        <div className="flex items-center gap-4 text-sm font-medium">
          {isPending ? (
            <span className="loading loading-spinner loading-xs text-orange-600"></span>
          ) : session?.user ? (
            <div className="flex items-center gap-3">
              <span className="text-black font-semibold">Hello, {session.user.name}</span>
              <button onClick={handleLogout} className="bg-red-500 hover:bg-red-600 text-white px-3 py-1.5 rounded-md font-semibold text-xs transition">
                Logout
              </button>
            </div>
          ) : (
            <Link href="/signin" className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md font-semibold text-xs transition">
              Login
            </Link>
          )}
        </div>

      </nav>
    </div>
  );
};

export default Navbar;
