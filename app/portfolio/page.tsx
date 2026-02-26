"use client";

import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const GALLERY_ITEMS = [
  { title: "Minimalist Kitchen", category: "Silchar Residency", image: "/junaid/portfolio/1.webp" },
  { title: "Stone Master Suite", category: "Bespoke Home", image: "/junaid/portfolio/2.webp" },
  { title: "Dark Oak Wardrobe", category: "Luxury Apt", image: "/junaid/portfolio/3.webp" },
  { title: "Sculpted Ceiling", category: "Technical Build", image: "/junaid/portfolio/4.webp" },
  { title: "Marble Foyer", category: "Grand Entrance", image: "/junaid/portfolio/5.webp" },
  { title: "Venetian Walls", category: "Finish Detail", image: "/junaid/portfolio/6.webp" },
  { title: "Open Plan Loft", category: "Full Interior", image: "/junaid/portfolio/7.webp" },
  { title: "Technical Lighting", category: "Electrical Design", image: "/junaid/portfolio/8.webp" },
  { title: "Premium Finish", category: "Craftsmanship", image: "/junaid/portfolio/9.webp" },
];

export default function Portfolio() {
  return (
    <main className="min-h-screen bg-brand-bone">
      <Navbar />
      
      <section className="pt-40 pb-32 px-6">
        <div className="max-w-[1400px] mx-auto flex flex-col space-y-24">
          {/* Header */}
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-12 border-b border-brand-charcoal/10 pb-16">
            <div className="flex flex-col space-y-6">
              <div className="text-brand-gold text-[10px] font-black uppercase tracking-[0.4em]">
                Selected Works
              </div>
              <h1 className="text-5xl lg:text-8xl font-sans font-black text-brand-charcoal uppercase tracking-tighter leading-[0.85]">
                Curated <br />
                <span className="text-brand-charcoal/20 italic font-thin">Portfolio.</span>
              </h1>
            </div>
            <p className="max-w-md text-brand-charcoal/40 text-sm md:text-base leading-relaxed font-bold uppercase tracking-widest italic text-right">
              A comprehensive archive of architectural integrity and curated living environments delivered across Assam.
            </p>
          </div>

          {/* Large Editorial Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-32">
            {GALLERY_ITEMS.map((item, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: (i % 3) * 0.1 }}
                className="group cursor-pointer flex flex-col"
              >
                <div className="relative aspect-[4/5] overflow-hidden bg-brand-charcoal/5 mb-10">
                  <img 
                    src={item.image} 
                    alt={item.title} 
                    className="w-full h-full object-cover lg:grayscale lg:opacity-90 transition-all duration-1000 group-hover:grayscale-0 group-hover:scale-110 group-hover:opacity-100"
                  />
                  <div className="absolute top-8 left-8 text-[8px] font-black uppercase tracking-[0.4em] bg-brand-charcoal text-white px-4 py-2 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0">
                    {item.category}
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-charcoal/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                </div>

                <div className="flex flex-col space-y-4 px-2">
                  <div className="flex items-center justify-between">
                    <h3 className="text-2xl lg:text-3xl font-sans font-black uppercase tracking-tight group-hover:text-brand-gold transition-colors duration-500 leading-none">
                      {item.title}
                    </h3>
                    <div className="p-2 border border-brand-charcoal/10 rounded-full group-hover:bg-brand-gold group-hover:border-brand-gold group-hover:text-white transition-all duration-300">
                      <ArrowUpRight size={18} />
                    </div>
                  </div>
                  <div className="h-px w-0 bg-brand-gold group-hover:w-full transition-all duration-700" />
                </div>
              </motion.div>
            ))}
          </div>

          {/* CTA Section */}
          <div className="bg-brand-charcoal py-32 px-12 text-white flex flex-col items-center text-center space-y-12">
             <h2 className="text-4xl lg:text-6xl font-sans font-black leading-[0.9] tracking-tighter uppercase max-w-2xl">
               Ready to Define <br />
               <span className="text-brand-gold">Your Domain?</span>
             </h2>
             <p className="text-white/30 max-w-md text-[10px] font-black uppercase tracking-[0.4em] italic leading-loose">
               Translate these inspirations into your personal architectural context. Join our design stream today.
             </p>
             <a href="/#contact" className="h-16 px-16 bg-white text-brand-charcoal hover:bg-brand-gold transition-all rounded-none font-black uppercase tracking-[0.3em] text-[10px] flex items-center justify-center">
               Initiate Consultation
             </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
