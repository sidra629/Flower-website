import React from "react";

export default function Team({ team = [] }) {
  return (
    <div className="bg-[#0c0c0e] text-white min-h-screen py-16 px-4">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* LEFT SIDE: Big Amber Banner Section */}
        <div className="lg:col-span-4 bg-[#f59e0b] text-black p-8 sm:p-12 rounded-2xl flex flex-col justify-between shadow-2xl shadow-[#f59e0b]/20 relative overflow-hidden">
          <div className="space-y-6 relative z-10">
            <span className="bg-black/10 text-black text-xs font-black uppercase tracking-widest px-3 py-1 rounded inline-block">
              // ELITE RIDERS
            </span>
            <h1 className="text-4xl sm:text-5xl font-black italic tracking-tighter uppercase leading-none text-black">
              OUR TEAM
            </h1>
            <p className="text-black/80 text-sm sm:text-base leading-relaxed font-medium">
              Our elite factory team pushing modern mountain biking to its
              absolute limit across international downhill and freeride
              circuits.
            </p>
          </div>

          <div className="pt-10 relative z-10">
            <button className="bg-black hover:bg-zinc-900 text-white font-black uppercase tracking-wider px-6 py-3 text-xs rounded-full transition transform hover:scale-105 shadow-lg">
              Learn More
            </button>
          </div>
        </div>

        {/* RIGHT SIDE: Grid Cards for Team Members */}
        <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-6">
          {team.map((rider) => (
            <div
              key={rider.id}
              className="bg-zinc-950 border border-zinc-900 rounded-2xl p-5 flex flex-col justify-between shadow-xl hover:border-[#f59e0b]/50 transition duration-300 group"
            >
              <div>
                {/* Rider Image */}
                <div className="overflow-hidden rounded-xl aspect-[4/3] bg-zinc-900 mb-4">
                  <img
                    src={rider.image}
                    alt={rider.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                  />
                </div>

                {/* Role / Title */}
                <span className="text-[11px] text-[#f59e0b] font-black tracking-widest uppercase block mb-1">
                  {rider.role}
                </span>

                {/* Name */}
                <h3 className="text-xl font-black uppercase text-white mb-2">
                  {rider.name}
                </h3>

                {/* Bio / Description */}
                <p className="text-xs text-zinc-400 leading-relaxed mb-4">
                  {rider.bio || `${rider.hometown} | Bike: ${rider.bike}`}
                </p>

                {/* Achievements if available */}
                {rider.achievements && rider.achievements.length > 0 && (
                  <div className="mb-4 space-y-1 bg-zinc-900/50 p-2.5 rounded-lg border border-zinc-900">
                    <span className="text-[10px] font-bold text-zinc-400 uppercase block mb-1">
                      Key Achievements:
                    </span>
                    {rider.achievements.map((ach, i) => (
                      <div
                        key={i}
                        className="text-[11px] text-zinc-300 flex items-center space-x-1.5"
                      >
                        <span className="text-[#f59e0b] font-bold">⭐</span>
                        <span className="truncate">{ach}</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Instagram handle link */}
              <div className="pt-4 border-t border-zinc-900 flex items-center justify-between mt-4">
                <span className="text-xs text-[#f59e0b] font-bold">
                  {rider.instagram}
                </span>
                <span className="text-xs text-zinc-400 hover:text-[#f59e0b] transition cursor-pointer">
                  📸 IG
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
