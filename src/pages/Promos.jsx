import React, { useState } from "react";
import { CheckCircle, ShieldCheck, Zap, ArrowRight } from "lucide-react";

export default function Promos() {
  const [selectedDeal, setSelectedDeal] = useState("OUTLAW10");

  return (
    <div className="bg-[#080808] text-white min-h-screen py-16 px-4 font-sans flex items-center">
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
        {/* LEFT SIDE: Heading & Small Selection Boxes */}
        <div className="lg:col-span-6 space-y-8">
          <div className="space-y-4">
            <span className="bg-[#f59e0b]/10 text-[#f59e0b] text-xs font-black uppercase tracking-widest px-3 py-1 rounded inline-block">
              // EXCLUSIVE DEALS & DISCOUNTS
            </span>
            <h1 className="text-4xl sm:text-6xl font-black italic tracking-tighter uppercase leading-none text-white">
              SHRED MORE, <br />
              <span className="text-[#f59e0b]">SAVE BIGGER.</span>
            </h1>
            <p className="text-zinc-400 text-sm sm:text-base max-w-lg leading-relaxed">
              Choose your active promo package below or apply codes directly at
              checkout to gear up with elite mountain biking equipment.
            </p>
          </div>

          {/* Small Selection Boxes Row/Grid on Left */}
          <div className="space-y-3">
            <p className="text-xs font-black uppercase tracking-widest text-zinc-400">
              Select Your Preferred Deal:
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Box 1: OUTLAW10 */}
              <div
                onClick={() => setSelectedDeal("OUTLAW10")}
                className={`cursor-pointer p-5 rounded-2xl border-2 transition-all duration-300 flex flex-col justify-between shadow-xl ${
                  selectedDeal === "OUTLAW10"
                    ? "bg-zinc-900 border-[#f59e0b]"
                    : "bg-zinc-950 border-zinc-800 hover:border-zinc-700"
                }`}
              >
                <div className="flex justify-between items-center mb-3">
                  <span className="bg-[#f59e0b] text-black text-[10px] font-black px-2.5 py-0.5 uppercase rounded">
                    Active
                  </span>
                  <div
                    className={`w-4 h-4 rounded-full border flex items-center justify-center ${selectedDeal === "OUTLAW10" ? "border-[#f59e0b] bg-[#f59e0b]/20 text-[#f59e0b]" : "border-zinc-700 bg-zinc-900"}`}
                  >
                    {selectedDeal === "OUTLAW10" && (
                      <CheckCircle className="w-3 h-3 text-[#f59e0b]" />
                    )}
                  </div>
                </div>
                <h3 className="text-xl font-black uppercase text-white">
                  OUTLAW10
                </h3>
                <p className="text-xs text-zinc-400 mt-1">
                  10% off your entire first order on jerseys & protection.
                </p>
              </div>

              {/* Box 2: SHRED20 */}
              <div
                onClick={() => setSelectedDeal("SHRED20")}
                className={`cursor-pointer p-5 rounded-2xl border-2 transition-all duration-300 flex flex-col justify-between shadow-xl ${
                  selectedDeal === "SHRED20"
                    ? "bg-zinc-900 border-[#f59e0b]"
                    : "bg-zinc-950 border-zinc-800 hover:border-zinc-700"
                }`}
              >
                <div className="flex justify-between items-center mb-3">
                  <span
                    style={{ backgroundColor: "#f59e0b", color: "#000000" }}
                    className="text-[10px] font-black px-2.5 py-0.5 uppercase rounded inline-block"
                  >
                    Seasonal
                  </span>
                  <div
                    className={`w-4 h-4 rounded-full border flex items-center justify-center ${selectedDeal === "SHRED20" ? "border-[#f59e0b] bg-[#f59e0b]/20 text-[#f59e0b]" : "border-zinc-700 bg-zinc-900"}`}
                  >
                    {selectedDeal === "SHRED20" && (
                      <CheckCircle className="w-3 h-3 text-[#f59e0b]" />
                    )}
                  </div>
                </div>
                <h3 className="text-xl font-black uppercase text-white">
                  SHRED20
                </h3>
                <p className="text-xs text-zinc-400 mt-1">
                  20% off when purchasing 2 or more streetwear apparel items.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT SIDE: Image Background with Floating Text Boxes */}
        <div className="lg:col-span-6 relative">
          <div className="relative rounded-2xl overflow-hidden border border-zinc-800 shadow-2xl bg-zinc-950 p-6 sm:p-8">
            {/* Background Action Image */}
            <div
              className="absolute inset-0 bg-cover bg-center opacity-25"
              style={{
                backgroundImage:
                  "url('https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&q=80&w=1000')",
              }}
            ></div>
            <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/80 to-transparent"></div>

            {/* Floating Content Boxes inside the Right Banner */}
            <div className="relative z-10 space-y-5">
              {/* Top Main Floating Box */}
              <div className="bg-zinc-900 border border-zinc-800 p-5 rounded-xl shadow-xl space-y-2">
                <div className="flex items-center justify-between text-xs">
                  <span className="flex items-center space-x-1.5 text-emerald-400 font-bold">
                    <CheckCircle className="w-4 h-4" />
                    <span>DISCOUNT APPLIED</span>
                  </span>
                  <span className="text-[#f59e0b] font-black text-sm">
                    {selectedDeal === "OUTLAW10" ? "10% OFF" : "20% OFF"}
                  </span>
                </div>
                <h4 className="text-xl font-black uppercase text-white">
                  PROMO CODE: {selectedDeal}
                </h4>
              </div>

              {/* Two Smaller Floating Boxes inside Right Section */}
              <div className="grid grid-cols-2 gap-3">
                <div className="bg-zinc-900 border border-zinc-800 p-3.5 rounded-xl flex items-center space-x-3">
                  <ShieldCheck className="w-6 h-6 text-[#f59e0b] flex-shrink-0" />
                  <div>
                    <span className="text-[10px] text-zinc-400 block uppercase font-bold">
                      Guarantee
                    </span>
                    <span className="text-xs font-black text-white">
                      100% Secure
                    </span>
                  </div>
                </div>

                <div className="bg-zinc-900 border border-zinc-800 p-3.5 rounded-xl flex items-center space-x-3">
                  <Zap className="w-6 h-6 text-[#f59e0b] flex-shrink-0" />
                  <div>
                    <span className="text-[10px] text-zinc-400 block uppercase font-bold">
                      Instant
                    </span>
                    <span className="text-xs font-black text-white">
                      Auto Apply
                    </span>
                  </div>
                </div>
              </div>

              {/* Action Button */}
              <div className="pt-2">
                <button
                  onClick={() =>
                    alert(`Promo code ${selectedDeal} copied successfully!`)
                  }
                  className="w-full bg-[#f59e0b] hover:bg-[#d97706] text-black font-black uppercase tracking-wider py-3.5 px-6 rounded-xl transition transform hover:scale-[1.02] shadow-lg shadow-[#f59e0b]/20 flex items-center justify-center space-x-2 text-xs"
                >
                  <span>Copy & Use Code ({selectedDeal})</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
