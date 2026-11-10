import React from "react";

export default function Footer() {
  return (
    <footer className="bg-zinc-950 text-zinc-400 border-t border-zinc-900 pt-16 pb-8 mt-20 font-sans">
      <div className="max-w-7xl mx-auto px-4">
        {/* TOP SECTION: 4 Columns (Footer Content & Links) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 pb-12 border-b border-zinc-900">
          {/* Column 1: Footer Content / Brand Description (Takes 2 cols on lg) */}
          <div className="lg:col-span-2 space-y-4">
            <span className="font-black text-white italic text-lg tracking-wider">
              OUTLAW<span className="text-[#f59e0b]">STUDIO</span>
            </span>
            <p className="text-xs text-zinc-500 leading-relaxed max-w-sm">
              Here you can use rows and columns to organize your footer content.
              High-octane mountain biking gear, action galleries, and elite
              riders.
            </p>
          </div>

          {/* Column 2: Links 1 */}
          <div className="space-y-3">
            <h4 className="text-white text-xs font-black uppercase tracking-widest">
              Links
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#" className="hover:text-[#f59e0b] transition">
                  Link 1
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#f59e0b] transition">
                  Link 2
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#f59e0b] transition">
                  Link 3
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#f59e0b] transition">
                  Link 4
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Links 2 */}
          <div className="space-y-3">
            <h4 className="text-white text-xs font-black uppercase tracking-widest">
              Links
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#" className="hover:text-[#f59e0b] transition">
                  Link 1
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#f59e0b] transition">
                  Link 2
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#f59e0b] transition">
                  Link 3
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#f59e0b] transition">
                  Link 4
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4: Links 3 */}
          <div className="space-y-3">
            <h4 className="text-white text-xs font-black uppercase tracking-widest">
              Links
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#" className="hover:text-[#f59e0b] transition">
                  Link 1
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#f59e0b] transition">
                  Link 2
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#f59e0b] transition">
                  Link 3
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#f59e0b] transition">
                  Link 4
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* MIDDLE SECTION: Register for free / Sign Up Row */}
        <div className="py-8 flex flex-col sm:flex-row items-center justify-center gap-4 border-b border-zinc-900 text-center">
          <span className="text-xs font-bold text-zinc-300">
            Register for free
          </span>
          <button className="bg-[#f59e0b] hover:bg-[#d97706] text-black font-black uppercase text-xs px-6 py-2.5 rounded-full transition transform hover:scale-105 shadow-lg shadow-[#f59e0b]/20">
            SIGN UP!
          </button>
        </div>

        {/* SOCIAL ICONS ROW */}
        <div className="py-8 flex items-center justify-center space-x-4">
          <a
            href="#"
            className="w-9 h-9 rounded-full bg-blue-600 text-white flex items-center justify-center text-xs font-bold hover:opacity-80 transition shadow-md"
          >
            f
          </a>
          <a
            href="#"
            className="w-9 h-9 rounded-full bg-sky-400 text-white flex items-center justify-center text-xs font-bold hover:opacity-80 transition shadow-md"
          >
            t
          </a>
          <a
            href="#"
            className="w-9 h-9 rounded-full bg-red-600 text-white flex items-center justify-center text-xs font-bold hover:opacity-80 transition shadow-md"
          >
            g+
          </a>
          <a
            href="#"
            className="w-9 h-9 rounded-full bg-sky-700 text-white flex items-center justify-center text-xs font-bold hover:opacity-80 transition shadow-md"
          >
            in
          </a>
          <a
            href="#"
            className="w-9 h-9 rounded-full bg-amber-500 text-white flex items-center justify-center text-xs font-bold hover:opacity-80 transition shadow-md"
          >
            🌐
          </a>
        </div>

        {/* BOTTOM COPYRIGHT ROW */}
        <div className="text-center text-[11px] text-zinc-600 pt-4">
          © 2026 Copyright:{" "}
          <span className="text-zinc-400 font-semibold">OutlawStudio.com</span>
        </div>
      </div>
    </footer>
  );
}
