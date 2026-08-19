"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const Navbar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userName, setUserName] = useState("John Doe");

  return (
    <div className="border-b px-2 bg-base-100">
      <nav className="flex justify-between items-center py-3 max-w-7xl mx-auto w-full">
        
        <Link href="/" className="flex gap-2 items-center">
          <Image
            src="/logo.png"
            alt="logo"
            width={30}
            height={30}
            className="object-cover h-auto w-auto"
          />
          <h3 className="font-black text-lg">MangoBook</h3>
        </Link>

        <ul className="flex items-center gap-5 text-sm font-medium">
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/all-books">All Books</Link>
          </li>
          <li>
            <Link href="/profile">My Profile</Link>
          </li>
        </ul>

        <div className="flex items-center gap-4 text-sm font-medium">
          {isLoggedIn ? (
            <div className="flex items-center gap-3">
              <span className="text-gray-700">Hello, {userName}</span>
              <button 
                onClick={() => setIsLoggedIn(false)}
                className="btn btn-sm btn-error text-white"
              >
                Logout
              </button>
            </div>
          ) : (
            <Link href="/signin" className="btn btn-sm btn-primary text-white">
              Login
            </Link>
          )}
        </div>

      </nav>
    </div>
  );
};

export default Navbar;
