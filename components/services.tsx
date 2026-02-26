"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const PROJECTS = [
  {
    title: "All Interiors",
    description: "Complete architectural transformations—curating every corner of your home with cohesive, luxury design concepts.",
    image: "/junaid/services/all-interiors.png",
    category: "Full Home",
  },
  {
    title: "Wooden Work",
    description: "Bespoke cabinetry and precision joinery. We craft durable, high-end woodwork that defines the character of your space.",
    image: "/junaid/services/wodden-work.png",
    category: "Craftsmanship",
  },
  {
    title: "False Ceiling",
    description: "Architectural ceiling systems with integrated lighting to sculpt the atmosphere and volume of your rooms.",
    image: "/junaid/services/false-ceiling.png",
    category: "Systems",
  },
  {
    title: "Paint & Texture",
    description: "Hand-crafted wall finishes and Venetian plasters that add tactile depth and sophisticated color to your interior.",
    image: "/junaid/services/plain-texture.png",
    category: "Finishes",
  },
  {
    title: "Electric Work",
    description: "Modern lighting design and smart electrical integration, focusing on both ambiance and functional precision.",
    image: "/junaid/services/electric-work.png",
    category: "Technical",
  },
  {
    title: "Premium Flooring",
    description: "From large-format marble to textured stone—we provide flooring solutions that anchor your home in luxury.",
    image: "/junaid/services/flooring.png",
    category: "Infrastructure",
  },
];

export function Services() {
  return (
    <section id="services" className="py-32 px-6 bg-brand-bone">
      <div className="max-w-[1400px] mx-auto flex flex-col space-y-20">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 border-b border-brand-charcoal/10 pb-12">
          <div className="flex flex-col space-y-4">
            <h2 className="text-5xl lg:text-7xl font-sans font-black text-brand-charcoal uppercase tracking-tighter leading-none">
              Featured <br />
              <span className="text-brand-charcoal/20">Services.</span>
            </h2>
          </div>
          <p className="max-w-md text-brand-charcoal/40 text-sm md:text-base leading-relaxed font-bold uppercase tracking-widest italic lg:text-right">
            Our comprehensive studio capabilities—where technical rigor meets curated architectural expression.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-20">
          {PROJECTS.map((project, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: i * 0.1 }}
              className="group cursor-pointer flex flex-col"
            >
              <div className="relative aspect-[4/5] overflow-hidden bg-brand-charcoal/5 mb-8">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover lg:grayscale lg:opacity-90 transition-all duration-700 group-hover:grayscale-0 group-hover:scale-110 group-hover:opacity-100"
                />
                <div className="absolute top-6 left-6 text-[10px] font-black uppercase tracking-[0.3em] bg-brand-charcoal text-white px-4 py-2 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-2 group-hover:translate-y-0">
                  {project.category}
                </div>
                
                {/* Overlay Gradient on Hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-brand-charcoal/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>

              <div className="flex flex-col space-y-4 px-2">
                <div className="flex items-center justify-between">
                  <h3 className="text-2xl font-sans font-black uppercase tracking-tight group-hover:text-brand-gold transition-colors duration-300">
                    {project.title}
                  </h3>
                  <div className="p-2 border border-brand-charcoal/10 rounded-full group-hover:bg-brand-gold group-hover:border-brand-gold group-hover:text-white transition-all duration-300">
                    <ArrowUpRight size={18} />
                  </div>
                </div>
                
                <p className="text-xs text-brand-charcoal/50 leading-relaxed font-bold uppercase tracking-wider line-clamp-2 italic">
                  {project.description}
                </p>
                
                <div className="h-px w-0 bg-brand-gold group-hover:w-full transition-all duration-700" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
