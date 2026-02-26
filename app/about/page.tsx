"use client";

import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { motion } from "framer-motion";

export default function About() {
  return (
    <main className="min-h-screen bg-brand-bone">
      <Navbar />
      
      <section className="pt-40 pb-32 px-6">
        <div className="max-w-[1400px] mx-auto flex flex-col space-y-32">
          {/* Header */}
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-12 border-b border-brand-charcoal/10 pb-16">
            <div className="flex flex-col space-y-6">
              <div className="text-brand-gold text-[10px] font-black uppercase tracking-[0.4em]">
                Since 2012
              </div>
              <h1 className="text-5xl lg:text-8xl font-sans font-black text-brand-charcoal uppercase tracking-tighter leading-[0.85]">
                Technical <br />
                <span className="text-brand-charcoal/20 italic font-thin">Heritage.</span>
              </h1>
            </div>
            <p className="max-w-md text-brand-charcoal/40 text-sm md:text-base leading-relaxed font-bold uppercase tracking-widest italic text-right">
              With a foundation in master woodworking, Space Craft has evolved from a specialized artisan shop into a premier architectural design studio.
            </p>
          </div>

          {/* Philosophy Section */}
          <div className="grid lg:grid-cols-2 gap-24 items-center">
            <div className="aspect-[4/5] bg-brand-charcoal relative overflow-hidden">
               <img 
                 src="https://images.unsplash.com/photo-1595844730298-b960ff98fee0?auto=format&fit=crop&q=80" 
                 alt="Founders Legacy" 
                 className="w-full h-full object-cover grayscale opacity-80"
               />
               <div className="absolute inset-0 bg-brand-gold/10 mix-blend-multiply" />
            </div>
            <div className="flex flex-col space-y-12">
              <div className="flex flex-col space-y-6">
                <h2 className="text-4xl lg:text-6xl font-sans font-black uppercase tracking-tighter leading-none">
                  Crafted locally. <br />
                  <span className="text-brand-charcoal/20">Design globally.</span>
                </h2>
                <div className="w-24 h-px bg-brand-gold" />
              </div>
              <div className="flex flex-col space-y-8 text-brand-charcoal/60 text-sm md:text-base leading-relaxed font-bold uppercase tracking-[0.1em]">
                <p>
                  At Space Craft, we believe that luxury is not just an aesthetic—it's a technical standard. Every project begins with a rigorous analysis of volume, light, and material integrity.
                </p>
                <p>
                  Our internal workshop remains the heart of our operations, where traditional joinery meets modern CNC precision. We don't just specify designs; we build them.
                </p>
                <p className="border-l-4 border-brand-gold pl-8 italic">
                  "Our goal is to create spaces that feel inevitably right. Not just decorated, but architecturally resolved."
                </p>
              </div>
            </div>
          </div>

          {/* Core Values - Technical Grid */}
          <div className="grid md:grid-cols-3 gap-12 lg:gap-24 pt-16 border-t border-brand-charcoal/5">
            {[
              { title: "Precision", desc: "Millimeter-perfect execution across every wardrobe, kitchen, and ceiling system we deliver." },
              { title: "Materiality", desc: "Sourcing the finest stones, oaks, and textures to ensure a tactile high-end experience." },
              { title: "Innovation", desc: "Integrating AI-powered previews and smart home tech into a timeless editorial aesthetic." }
            ].map((value, i) => (
              <div key={i} className="flex flex-col space-y-6">
                <span className="text-brand-gold font-sans font-black text-2xl italic">0{i + 1}</span>
                <h3 className="text-2xl font-sans font-black uppercase tracking-tight">{value.title}</h3>
                <p className="text-xs text-brand-charcoal/40 font-bold uppercase tracking-widest leading-relaxed">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
