"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export function Stats() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const stats = [
    { label: "Bespoke architectural projects delivered globally", value: "250+", sub: "Delivering curated living environments with technical precision" },
    { label: "Combined property value elevated through curated design", value: "14B+", sub: "Architectural integrity combined with modern aesthetic expertise" },
  ];

  return (
    <section ref={ref} className="bg-brand-bone py-20 px-6 border-b border-brand-charcoal/5">
      <div className="max-w-[1400px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">
          {stats.map((stat, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: i * 0.2 }}
              className="flex flex-col space-y-4"
            >
              <div className="flex items-baseline justify-between border-b border-brand-charcoal/10 pb-6">
                <span className="text-5xl lg:text-7xl font-sans font-black tracking-tighter text-brand-charcoal">{stat.value}</span>
                <p className="text-[10px] uppercase tracking-[0.2em] font-bold text-brand-charcoal/40 max-w-[150px] text-right">
                  {stat.label}
                </p>
              </div>
              <p className="text-xs text-brand-charcoal/30 font-medium italic">
                {stat.sub}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
