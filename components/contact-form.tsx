"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export function ContactForm() {
  return (
    <section id="contact" className="relative py-32 px-6 overflow-hidden">
      {/* Background with Blur */}
      <div className="absolute inset-0 z-0 scale-110">
        <img 
          src="https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&q=80" 
          alt="Contact Background" 
          className="w-full h-full object-cover blur-2xl opacity-40 grayscale"
        />
        <div className="absolute inset-0 bg-brand-bone/80" />
      </div>

      <div className="relative z-10 max-w-[1400px] mx-auto grid lg:grid-cols-2 gap-24 items-center">
        <div className="flex flex-col space-y-8">
          <h2 className="text-5xl lg:text-7xl font-sans font-black text-brand-charcoal uppercase tracking-tighter leading-none">
            Spaces Curated <br />
            <span className="text-brand-charcoal/20">With Intent.</span>
          </h2>
          <p className="max-w-md text-brand-charcoal/40 text-sm md:text-base leading-relaxed font-bold uppercase tracking-widest italic">
            Ready to transform your home? Fill out the form below to schedule a consultation with our expert design team.
          </p>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-brand-charcoal p-12 lg:p-16 text-white shadow-2xl"
        >
          <form className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="flex flex-col space-y-2">
              <label className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/40">Full Name*</label>
              <input type="text" placeholder="John Doe" className="bg-transparent border-b border-white/20 py-4 focus:border-brand-gold outline-none transition-colors font-sans text-sm" />
            </div>
            <div className="flex flex-col space-y-2">
              <label className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/40">Phone Number*</label>
              <input type="tel" placeholder="+91 00000 00000" className="bg-transparent border-b border-white/20 py-4 focus:border-brand-gold outline-none transition-colors font-sans text-sm" />
            </div>
            <div className="flex flex-col md:col-span-2 space-y-2">
              <label className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/40">Project Location*</label>
              <input type="text" placeholder="123 Design St, Modern City" className="bg-transparent border-b border-white/20 py-4 focus:border-brand-gold outline-none transition-colors font-sans text-sm" />
            </div>
            <div className="flex flex-col md:col-span-2 space-y-2">
              <label className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/40">Service Interested In</label>
              <select className="bg-transparent border-b border-white/20 py-4 focus:border-brand-gold outline-none transition-colors font-sans text-sm appearance-none">
                <option className="bg-brand-charcoal">Modular Kitchen</option>
                <option className="bg-brand-charcoal">Luxury Wardrobe</option>
                <option className="bg-brand-charcoal">Full Home Interior</option>
              </select>
            </div>
            <div className="flex flex-col md:col-span-2 space-y-2 pb-8">
              <label className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/40">Message (Optional)</label>
              <textarea placeholder="Tell us about your dream project..." rows={3} className="bg-transparent border-b border-white/20 py-4 focus:border-brand-gold outline-none transition-colors font-sans text-sm resize-none"></textarea>
            </div>
            
            <Button className="md:col-span-2 h-16 bg-white text-brand-charcoal hover:bg-brand-gold hover:text-white transition-all rounded-none font-bold uppercase tracking-[0.3em] text-xs">
              Get Free Estimate
            </Button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
