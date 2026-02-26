"use client";

import { motion } from "framer-motion";
import { PenTool, Hammer, Truck } from "lucide-react";

export function Process() {
  const steps = [
    {
      icon: PenTool,
      title: "Purpose-Driven Design",
      description: "Every project begins with understanding how you live. Layouts are designed for flow, comfort, and long-term usability.",
    },
    {
      icon: Hammer,
      title: "Premium Materials & Craftsmanship",
      description: "We work with durable materials and skilled craftsmanship to ensure every surface, joint, and detail feels intentional.",
    },
    {
      icon: Truck,
      title: "End-to-End Execution",
      description: "From concept to completion, we manage the process seamlessly: timelines, coordination, and quality control included.",
    },
  ];

  return (
    <section id="process" className="py-32 px-6 bg-brand-charcoal text-white overflow-hidden">
      <div className="max-w-[1400px] mx-auto">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 border-b border-white/10 pb-12">
          <h2 className="text-5xl lg:text-7xl font-sans font-black uppercase tracking-tighter leading-none">
            How we <br />
            <span className="text-white/20 italic">Create.</span>
          </h2>
          <p className="max-w-md text-white/30 text-sm md:text-base leading-relaxed font-bold uppercase tracking-widest lg:text-right">
            Our methodology is built on transparency, technical rigor, and a relentless commitment to architectural integrity.
          </p>
        </div>

          <div className="grid grid-cols-1 gap-px bg-white/10">
            {steps.map((step, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: i * 0.2 }}
                className="bg-brand-charcoal py-16 flex flex-col lg:flex-row lg:items-center justify-between group hover:bg-white/[0.02] transition-colors"
                style={{ paddingLeft: 'min(5vw, 40px)', paddingRight: 'min(5vw, 40px)' }}
              >
                <div className="flex items-center space-x-8 mb-8 lg:mb-0">
                  <div className="p-5 border border-white/10 rounded-full group-hover:border-brand-gold group-hover:bg-brand-gold transition-all">
                    <step.icon size={28} className="group-hover:scale-110 transition-transform" />
                  </div>
                  <h3 className="text-2xl lg:text-4xl font-sans font-black uppercase tracking-tight max-w-[300px]">
                    {step.title}
                  </h3>
                </div>
                
                <p className="max-w-md text-white/40 text-sm md:text-base leading-relaxed font-bold uppercase tracking-wider">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
      </div>
    </section>
  );
}
