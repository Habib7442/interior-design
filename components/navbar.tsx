"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

const NAV_LINKS = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Portfolio", href: "/portfolio" },
  { name: "AI Studio", href: "/ai-studio" },
  { name: "Contact", href: "/#contact" },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === "/";

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isSolid = isScrolled || !isHome;

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500 py-6 px-6 lg:px-12",
        isSolid
           ? "bg-brand-bone/90 backdrop-blur-xl border-b border-brand-charcoal/5 py-4"
           : "bg-transparent"
      )}
    >
      <div className="max-w-[1400px] mx-auto flex items-center justify-between">
        <Link href="/" className="flex flex-col group">
          <span className={cn(
            "text-xl lg:text-2xl font-sans font-black tracking-tighter uppercase transition-colors duration-500",
            isSolid ? "text-brand-charcoal" : "text-white"
          )}>
            SPACE <span className="text-brand-gold italic">CRAFT.</span>
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center space-x-12">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={cn(
                "text-[10px] font-black uppercase tracking-[0.2em] transition-all duration-300 hover:text-brand-gold",
                isSolid ? "text-brand-charcoal/40" : "text-white/60"
              )}
            >
              {link.name}
            </Link>
          ))}
          <Link
            href="/#contact"
            className={cn(
              "px-8 py-3 rounded-none text-[10px] font-black uppercase tracking-[0.2em] flex items-center space-x-2 transition-all duration-500",
              isSolid 
                ? "bg-brand-charcoal text-white hover:bg-brand-gold" 
                : "bg-white text-brand-charcoal hover:bg-brand-stone"
            )}
          >
            <span>Get a Quote</span>
            <ArrowUpRight size={14} />
          </Link>
        </div>

        {/* Mobile Nav via Sheet */}
        <div className="lg:hidden">
          <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
            <SheetTrigger asChild>
              <button className="flex items-center justify-center -mr-2 p-2">
                <Menu className={cn(
                  "size-8 transition-colors",
                  isSolid ? "text-brand-charcoal" : "text-white"
                )} />
              </button>
            </SheetTrigger>
            <SheetContent side="right" className="w-full sm:w-[400px] bg-brand-bone border-l-brand-charcoal/5 p-8 lg:p-12 flex flex-col">
              <SheetHeader className="text-left mb-12">
                <SheetTitle className="text-2xl font-sans font-black tracking-tighter uppercase p-0">
                  SPACE <span className="text-brand-gold italic">CRAFT.</span>
                </SheetTitle>
              </SheetHeader>
              
              <div className="flex flex-col space-y-6 mt-6">
                {NAV_LINKS.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="text-4xl sm:text-5xl font-sans font-black uppercase tracking-tighter text-brand-charcoal hover:text-brand-gold transition-colors italic border-b border-brand-charcoal/5 pb-6"
                  >
                    {link.name}
                  </Link>
                ))}
              </div>

              <div className="mt-auto pt-12">
                <Link
                  href="/#contact"
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-full inline-flex items-center justify-center bg-brand-charcoal text-white px-8 py-6 text-xs font-black uppercase tracking-[0.3em] hover:bg-brand-gold hover:text-brand-charcoal transition-all"
                >
                  <span>Initiate Consultation</span>
                  <ArrowUpRight size={16} className="ml-3" />
                </Link>
                
                <div className="mt-8 flex flex-col space-y-2">
                  <span className="text-[10px] font-black uppercase tracking-widest text-brand-charcoal/30">Based in Silchar, Assam</span>
                  <span className="text-[10px] font-black uppercase tracking-widest text-brand-charcoal/30">Space Craft Design Studio © 2026</span>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
}
