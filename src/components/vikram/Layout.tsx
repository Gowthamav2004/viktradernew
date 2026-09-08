"use client";

import { useState } from "react";
import FloatingSocials from "./FloatingSocials";

export default function Layout({ children }: { children: React.ReactNode }) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="relative min-h-screen">
      <header className="fixed top-0 left-0 right-0 z-[60] flex items-center justify-between px-4 md:px-8 py-4 md:py-6 bg-gradient-to-b from-black/80 to-transparent">
        <div className="flex items-center gap-2">
          <img src="/images/logo.png" alt="Vikram Traders" className="h-10 md:h-16 object-contain" />
        </div>

        <nav className="hidden md:flex items-center gap-8 text-xs font-semibold tracking-widest text-white/50 uppercase">
          <a href="#home" className="hover:text-white transition-colors">Home</a>
          <a href="#about" className="hover:text-white transition-colors">Heritage</a>
          <a href="#gift-boxes" className="hover:text-white transition-colors">Collections</a>
          <a href="#categories" className="hover:text-white transition-colors">Categories</a>
          <a href="#payment" className="hover:text-white transition-colors">Payment</a>
          <a href="#safety" className="hover:text-white transition-colors">Safety Tips</a>
        </nav>

        <div className="flex items-center gap-4">
          <a href="https://mybillbook.in/store/vikramtrader" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center rounded-none border border-[#cca052] px-3 py-1.5 md:px-6 md:py-2 text-[10px] md:text-xs font-semibold tracking-widest text-[#cca052] hover:bg-[#cca052] hover:text-black transition-colors uppercase">
            Order Now
          </a>
          <button className="md:hidden text-white" onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? (
               <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
            ) : (
               <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>
            )}
          </button>
        </div>
      </header>

      {/* Mobile Menu */}
      <div 
        className={`fixed inset-0 z-[55] bg-black/95 backdrop-blur-md flex flex-col items-center justify-center gap-8 transition-opacity duration-300 ${menuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
      >
        <nav className="flex flex-col items-center gap-8 text-sm font-semibold tracking-widest text-white uppercase">
          <a href="#home" onClick={() => setMenuOpen(false)} className="hover:text-[#cca052] transition-colors">Home</a>
          <a href="#about" onClick={() => setMenuOpen(false)} className="hover:text-[#cca052] transition-colors">Heritage</a>
          <a href="#gift-boxes" onClick={() => setMenuOpen(false)} className="hover:text-[#cca052] transition-colors">Collections</a>
          <a href="#categories" onClick={() => setMenuOpen(false)} className="hover:text-[#cca052] transition-colors">Categories</a>
          <a href="#payment" onClick={() => setMenuOpen(false)} className="hover:text-[#cca052] transition-colors">Payment</a>
          <a href="#safety" onClick={() => setMenuOpen(false)} className="hover:text-[#cca052] transition-colors">Safety Tips</a>
        </nav>
      </div>

      {children}
      <FloatingSocials />
    </div>
  );
}
