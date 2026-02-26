import Link from "next/link";
import { Facebook, Instagram, Mail, MapPin, Phone, MessageSquare, ArrowUpRight } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-brand-charcoal text-white pt-32 pb-12 px-6 overflow-hidden">
      <div className="max-w-[1400px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-20 mb-32">
          {/* Brand Info */}
          <div className="flex flex-col space-y-8 lg:col-span-1">
            <Link href="/" className="flex flex-col">
              <span className="text-2xl font-sans font-black tracking-tighter uppercase">
                SPACE <span className="text-brand-gold italic">CRAFT.</span>
              </span>
            </Link>
            <p className="text-[10px] font-bold uppercase tracking-[0.2em] leading-relaxed max-w-xs text-white/40 italic">
              Crafting premium architectural environments through technical precision and curated materiality.
            </p>
            <div className="flex space-x-6 pt-4">
              <Link href="#" className="text-white/40 hover:text-brand-gold transition-colors">
                <Instagram size={20} />
              </Link>
              <Link href="#" className="text-white/40 hover:text-brand-gold transition-colors">
                <Facebook size={20} />
              </Link>
              <Link href="#" className="text-white/40 hover:text-brand-gold transition-colors">
                <Mail size={20} />
              </Link>
            </div>
          </div>

          {/* Services */}
          <div className="flex flex-col space-y-6">
            <h4 className="text-[10px] font-black uppercase tracking-[0.4em] text-white/20 underline decoration-brand-gold/30 underline-offset-8">Featured Spaces</h4>
            <div className="flex flex-col space-y-4 text-[10px] font-bold uppercase tracking-[0.2em]">
              <Link href="/portfolio" className="text-white/60 hover:text-white flex items-center space-x-2"><span>Kitchen Systems</span> <ArrowUpRight size={10} /></Link>
              <Link href="/portfolio" className="text-white/60 hover:text-white flex items-center space-x-2"><span>Luxury Wardrobes</span> <ArrowUpRight size={10} /></Link>
              <Link href="/portfolio" className="text-white/60 hover:text-white flex items-center space-x-2"><span>Floor & Ceiling</span> <ArrowUpRight size={10} /></Link>
              <Link href="/portfolio" className="text-white/60 hover:text-white flex items-center space-x-2"><span>Full Interiors</span> <ArrowUpRight size={10} /></Link>
            </div>
          </div>

          {/* Company */}
          <div className="flex flex-col space-y-6">
            <h4 className="text-[10px] font-black uppercase tracking-[0.4em] text-white/20 underline decoration-brand-gold/30 underline-offset-8">Studio</h4>
            <div className="flex flex-col space-y-4 text-[10px] font-bold uppercase tracking-[0.2em]">
              <Link href="/about" className="text-white/60 hover:text-white">Our Heritage</Link>
              <Link href="/portfolio" className="text-white/60 hover:text-white">Selected Works</Link>
              <Link href="/ai-studio" className="text-white/60 hover:text-brand-gold uppercase italic">AI Design Studio</Link>
              <Link href="/#contact" className="text-white/60 hover:text-white">Direct Consultation</Link>
            </div>
          </div>

          {/* Contact */}
          <div className="flex flex-col space-y-6">
            <h4 className="text-[10px] font-black uppercase tracking-[0.4em] text-white/20 underline decoration-brand-gold/30 underline-offset-8">Direct Contact</h4>
            <div className="flex flex-col space-y-6 text-[10px] font-bold uppercase tracking-[0.2em]">
              <div className="flex items-start space-x-3 text-white/40">
                <MapPin className="shrink-0" size={16} />
                <span className="leading-widest">
                  Design District, Avenue 01{"\n"}Modern City, DC 123456
                </span>
              </div>
              <div className="flex items-center space-x-3 text-white/60">
                <Phone size={16} />
                <span>+91 00000 00000</span>
              </div>
              <div className="flex items-center space-x-3 text-brand-gold font-black">
                <MessageSquare size={16} />
                <span>+91 00000 00000</span>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row items-center justify-between text-[8px] font-bold uppercase tracking-[0.4em] text-white/20 space-y-6 md:space-y-0">
          <p>© 2026 SPACE CRAFT. All Rights Reserved.</p>
          <p className="flex items-center space-x-2 italic">
            <span>Powered by</span>
            <span className="text-white/60">Gemini-3 AI</span>
            <span>Technology</span>
          </p>
          <div className="flex space-x-8">
            <Link href="/legal" className="hover:text-white">Privacy</Link>
            <Link href="/legal" className="hover:text-white">Terms</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
