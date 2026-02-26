"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export function Hero() {
  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-brand-charcoal">
      {/* Background Visual with Slow Zoom */}
      <div className="absolute inset-0 z-0 animate-slow-zoom opacity-60">
        <img 
          src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80" 
          alt="Modern Interior Editorial" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/80 lg:bg-black/60" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-transparent to-black/80" />
      </div>

      <div className="relative z-10 w-full max-w-[1400px] mx-auto px-6 flex flex-col items-center text-center">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col items-center space-y-6 lg:space-y-8"
        >
          <div className="flex items-center space-x-3 mb-2">
            <span className="text-[10px] font-black uppercase tracking-[0.4em] text-white/40">Design Studio</span>
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-sans font-black text-white leading-[1.1] tracking-tighter uppercase max-w-5xl">
            Modern <span className="text-brand-gold italic">Interiors.</span>
          </h1>

          <p className="max-w-xl text-white/50 text-xs md:text-sm lg:text-base leading-relaxed font-bold uppercase tracking-widest italic px-4">
            Curating high-end homes through precision architecture and luxury finishes.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6 pt-10 w-full">
            <Link 
              href="/#contact"
              className="w-full sm:w-auto h-14 px-10 bg-white text-brand-charcoal hover:bg-brand-gold transition-all duration-500 rounded-none font-black uppercase text-[10px] tracking-[0.3em] flex items-center justify-center space-x-3 group"
            >
              <span>Start Project</span>
              <ArrowUpRight size={14} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </Link>
            <Link 
              href="/portfolio"
              className="w-full sm:w-auto h-14 px-10 border border-white/20 text-white hover:bg-white/5 transition-all duration-500 font-black uppercase text-[10px] tracking-[0.3em] flex items-center justify-center space-x-3 group"
            >
              <span>Gallery</span>
              <ArrowUpRight size={14} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform opacity-40 group-hover:opacity-100" />
            </Link>
          </div>
        </motion.div>
      </div>

      {/* Aesthetic Scroll Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center space-y-2"
      >
        <div className="w-[1px] h-10 bg-gradient-to-b from-brand-gold/60 to-transparent" />
      </motion.div>
    </section>
  );
}
