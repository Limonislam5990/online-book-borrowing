"use client";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-slate-300 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-3 gap-8">
        
        <div className="space-y-4">
          <h3 className="font-black text-xl text-white">MangoBook</h3>
          <p className="text-sm text-slate-400">
            A seamless and modern web application designed to digitize the traditional library experience. Explore, filter, and borrow your favorite books.
          </p>
        </div>

        <div className="space-y-4">
          <h4 className="font-bold text-base text-white">Contact Us</h4>
          <ul className="space-y-2 text-sm text-slate-400">
            <li>Email: support@mangobook.com</li>
            <li>Phone: +880 1234-567890</li>
            <li>Address: Kazi Nazrul Islam Avenue, Dhaka, Bangladesh</li>
          </ul>
        </div>

        <div className="space-y-4">
          <h4 className="font-bold text-base text-white">Follow Us</h4>
          <div className="flex gap-4 text-sm">
            <Link href="https://facebook.com" target="_blank" className="hover:text-orange-500 transition-colors">
              Facebook
            </Link>
            <Link href="https://twitter.com" target="_blank" className="hover:text-orange-500 transition-colors">
              Twitter
            </Link>
            <Link href="https://linkedin.com" target="_blank" className="hover:text-orange-500 transition-colors">
              LinkedIn
            </Link>
            <Link href="https://github.com" target="_blank" className="hover:text-orange-500 transition-colors">
              GitHub
            </Link>
          </div>
          <p className="text-xs text-slate-500 pt-2">
            &copy; {new Date().getFullYear()} MangoBook. All rights reserved.
          </p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
