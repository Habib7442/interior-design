import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/hero";
import { Stats } from "@/components/stats";
import { Services } from "@/components/services";
import { Process } from "@/components/process";
import { ContactForm } from "@/components/contact-form";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <main className="relative min-h-screen bg-brand-bone">
      <Navbar />
      <Hero />
      <Stats />
      
      {/* AI Studio Teaser Section - Redesigned Editorial */}
      <section className="py-32 px-6 bg-brand-charcoal text-white relative overflow-hidden">
        <div className="max-w-[1400px] mx-auto grid lg:grid-cols-2 gap-24 items-center">
          <div className="flex flex-col space-y-12 relative z-10">
            <div className="text-brand-gold text-[10px] font-black uppercase tracking-[0.4em]">
              The Future of Planning
            </div>
            <h2 className="text-5xl lg:text-7xl font-sans font-black leading-[0.9] tracking-tighter uppercase">
              See Your Space <br />
              <span className="text-white/20 italic font-thin">Before It's Real.</span>
            </h2>
            <p className="max-w-md text-white/40 text-sm md:text-base leading-relaxed font-bold uppercase tracking-widest">
              Upload a photo of your messy room and watch our Gemini-powered AI transform it into a luxury modern sanctuary in seconds.
            </p>
            <div>
              <a href="/ai-studio" className="inline-flex h-14 items-center justify-center bg-white px-12 text-brand-charcoal font-black uppercase tracking-[0.2em] text-[10px] hover:bg-brand-gold transition-all">
                Try AI Studio 
              </a>
            </div>
          </div>
          
          <div className="relative aspect-square overflow-hidden border border-white/10 group grayscale hover:grayscale-0 transition-all duration-1000">
             <img 
               src="https://images.unsplash.com/photo-1618219908412-a29a1bb7b86e?auto=format&fit=crop&q=80" 
               alt="AI Design Preview" 
               className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000"
             />
             <div className="absolute inset-0 bg-brand-gold/20 mix-blend-overlay group-hover:opacity-0 transition-opacity" />
          </div>
        </div>
      </section>

      <Services />
      <Process />
      <ContactForm />
      <Footer />
    </main>
  );
}
