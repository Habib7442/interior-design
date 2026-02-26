"use client";

import { useState, useRef } from "react";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Upload, Sparkles, Wand2, Image as ImageIcon, ArrowUpRight, CheckCircle2 } from "lucide-react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { BeforeAfterSlider } from "@/components/before-after-slider";

export default function AIStudio() {
  const [selectedStyle, setSelectedStyle] = useState("Modern Luxury");
  const [customPrompt, setCustomPrompt] = useState("");
  const [isGenerating, setIsGenerating] = useState(false);
  const [uploadedImage, setUploadedImage] = useState<string | null>(null);
  const [generatedImage, setGeneratedImage] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const STYLES = ["Modern Luxury", "Classic Elegant", "Minimalist", "Scandinavian", "Industrial"];

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setUploadedImage(reader.result as string);
        setGeneratedImage(null); // Reset generated image when new one uploaded
        setError(null);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleGenerate = async () => {
    if (!uploadedImage) {
      setError("Please initialize a space by uploading an image first.");
      return;
    }

    setIsGenerating(true);
    setError(null);

    try {
      // Send only the base64 part
      const base64Image = uploadedImage.split(',')[1];
      
      const response = await fetch('/api/ai-design', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          image: base64Image,
          prompt: customPrompt,
          style: selectedStyle
        })
      });

      const data = await response.json();

      if (data.imageUrl) {
        setGeneratedImage(data.imageUrl);
      } else {
        throw new Error(data.error || "Neural synthesis failed. Please check your API configuration.");
      }
    } catch (err: any) {
      console.error(err);
      setError(err.message || "An unexpected error occurred during synthesis.");
    } finally {
      setIsGenerating(false);
    }
  };

  return (
    <main className="min-h-screen bg-brand-bone font-sans">
      <Navbar />
      
      <section className="pt-32 lg:pt-40 pb-32 px-6">
        <div className="max-w-[1400px] mx-auto flex flex-col space-y-16 lg:space-y-24">
          {/* Editorial Header */}
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 lg:gap-12 border-b border-brand-charcoal/10 pb-12 lg:pb-16">
            <div className="flex flex-col space-y-6">
              <div className="flex items-center space-x-3 text-brand-gold text-[10px] font-black uppercase tracking-[0.4em]">
                <Sparkles size={14} />
                <span>Neural Design Engine v3.1 Alpha</span>
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-8xl font-black text-brand-charcoal uppercase tracking-tighter leading-[0.85]">
                AI Design <br />
                <span className="text-brand-charcoal/20 italic font-thin">Studio.</span>
              </h1>
            </div>
            <div className="flex flex-col space-y-6 lg:text-right">
              <p className="max-w-md text-brand-charcoal/40 text-sm md:text-base leading-relaxed font-bold uppercase tracking-widest italic ml-auto text-right">
                Harnessing Gemini-3 Photorealistic synthesis to materializing architectural concepts for your luxury property.
              </p>
              <div className="h-px w-32 bg-brand-gold ml-auto" />
            </div>
          </div>

          {/* Editorial Interface Grid */}
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            {/* Controls Side */}
            <div className="lg:col-span-4 flex flex-col space-y-12">
              <div className="flex flex-col space-y-8">
                {/* 01. Image Upload */}
                <div className="flex flex-col space-y-4">
                  <label className="text-[10px] font-black uppercase tracking-[0.4em] text-brand-charcoal/30 flex items-center justify-between">
                    <span>01. Initialize Space</span>
                    {uploadedImage && <CheckCircle2 size={12} className="text-brand-gold" />}
                  </label>
                  <input 
                    type="file" 
                    ref={fileInputRef} 
                    onChange={handleImageUpload} 
                    accept="image/*" 
                    className="hidden" 
                  />
                  <div 
                    onClick={() => fileInputRef.current?.click()}
                    className="aspect-video w-full border border-brand-charcoal/10 bg-brand-charcoal/[0.02] flex flex-col items-center justify-center space-y-4 hover:border-brand-gold/40 transition-all cursor-pointer group relative overflow-hidden"
                  >
                    {uploadedImage ? (
                      <img src={uploadedImage} alt="Uploaded Room" className="w-full h-full object-cover opacity-60" />
                    ) : (
                      <>
                        <div className="p-4 border border-brand-charcoal/5 rounded-full text-brand-charcoal/40 group-hover:text-brand-gold group-hover:border-brand-gold transition-all duration-300">
                          <Upload size={20} />
                        </div>
                        <span className="text-[10px] font-black uppercase tracking-[0.2em] text-brand-charcoal/40 group-hover:text-brand-charcoal transition-colors">Capture or Upload Room</span>
                      </>
                    )}
                    <div className="absolute inset-0 bg-brand-gold/[0.03] opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                </div>

                {/* 02. Select Aesthetic */}
                <div className="flex flex-col space-y-4">
                  <label className="text-[10px] font-black uppercase tracking-[0.4em] text-brand-charcoal/30 flex items-center justify-between">
                    <span>02. Select Aesthetic</span>
                    <div className="h-px w-12 bg-brand-charcoal/10" />
                  </label>
                  <div className="flex flex-wrap gap-2">
                    {STYLES.map((style) => (
                      <button
                        key={style}
                        onClick={() => setSelectedStyle(style)}
                        className={`px-4 py-2 border text-[8px] font-black uppercase tracking-[0.2em] transition-all duration-300 ${
                          selectedStyle === style 
                          ? "bg-brand-charcoal border-brand-charcoal text-white" 
                          : "bg-transparent border-brand-charcoal/5 text-brand-charcoal/40 hover:border-brand-gold/30 hover:text-brand-charcoal"
                        }`}
                      >
                        {style}
                      </button>
                    ))}
                  </div>
                </div>

                {/* 03. Custom Prompt */}
                <div className="flex flex-col space-y-4">
                  <label className="text-[10px] font-black uppercase tracking-[0.4em] text-brand-charcoal/30 flex items-center justify-between">
                    <span>03. Refine Synthesis</span>
                    <div className="h-px w-12 bg-brand-charcoal/10" />
                  </label>
                  <textarea 
                    placeholder="E.g. Add more marble, warm lighting, wooden floor..."
                    value={customPrompt}
                    onChange={(e) => setCustomPrompt(e.target.value)}
                    className="w-full bg-transparent border border-brand-charcoal/10 p-6 text-[10px] font-bold uppercase tracking-[0.1em] placeholder:text-brand-charcoal/20 focus:border-brand-gold outline-none min-h-[120px] transition-colors"
                  />
                </div>
              </div>

              {error && (
                <p className="text-[10px] font-black uppercase tracking-[0.1em] text-red-500 italic">
                  Critical Error: {error}
                </p>
              )}

              <Button 
                onClick={handleGenerate}
                disabled={isGenerating || !uploadedImage}
                className="w-full h-16 bg-brand-charcoal text-white hover:bg-brand-gold hover:text-brand-charcoal transition-all rounded-none font-black uppercase tracking-[0.3em] text-xs flex items-center justify-center space-x-4 group disabled:opacity-30"
              >
                <span>{isGenerating ? "Synthesizing Architecture..." : "Genesis Design"}</span>
                {!isGenerating && <Wand2 size={16} className="group-hover:rotate-12 transition-transform" />}
              </Button>
            </div>

            {/* Preview Side */}
            <div className="lg:col-span-8 flex flex-col space-y-8 lg:space-y-12">
              <div className="relative aspect-[16/9] w-full bg-brand-charcoal text-white flex items-center justify-center overflow-hidden border border-brand-charcoal/10 shadow-2xl rounded-sm">
                
                {/* Visual Content: Slider or Initial Image or Empty */}
                <AnimatePresence mode="wait">
                  {generatedImage && uploadedImage ? (
                    <motion.div 
                      key="slider"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className="w-full h-full"
                    >
                      <BeforeAfterSlider 
                        beforeImage={uploadedImage} 
                        afterImage={generatedImage} 
                      />
                    </motion.div>
                  ) : uploadedImage && !isGenerating ? (
                    <motion.div 
                      key="initial"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className="w-full h-full opacity-60 flex flex-col items-center justify-center bg-black/40"
                    >
                      <img src={uploadedImage} alt="Uploaded Room" className="absolute inset-0 w-full h-full object-cover grayscale" />
                    </motion.div>
                  ) : !isGenerating && (
                    <motion.div 
                      key="empty"
                      className="flex flex-col items-center text-center space-y-6 px-6 relative z-10"
                    >
                      <div className="p-6 lg:p-8 border border-white/10 bg-white/[0.03] backdrop-blur-xl">
                        <ImageIcon size={40} className="text-brand-gold/40 lg:size-12" strokeWidth={1} />
                      </div>
                      <p className="text-[9px] lg:text-[10px] uppercase font-black tracking-[0.4em] text-white/30 leading-loose italic max-w-xs">
                        Neural Input Required. <br className="hidden sm:block" /> Initialize a perspective to begin.
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
                
                
                {/* Processing Overlay */}
                {isGenerating && (
                  <div className="absolute inset-0 bg-brand-charcoal flex flex-col items-center justify-center space-y-6 lg:space-y-8 z-20">
                    <div className="relative w-16 h-16 lg:w-24 lg:h-24">
                      <div className="absolute inset-0 border-t border-brand-gold/60 rounded-full animate-spin" />
                      <div className="absolute inset-3 lg:inset-4 border-b border-white/20 rounded-full animate-spin [animation-direction:reverse]" />
                      <Sparkles className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-brand-gold" size={16} />
                    </div>
                    <div className="flex flex-col items-center space-y-3 px-6">
                      <p className="text-lg lg:text-xl font-black uppercase tracking-tighter italic text-center">Reconstructing Reality...</p>
                      <div className="w-32 lg:w-48 h-[1px] bg-white/5">
                        <motion.div 
                          initial={{ width: 0 }}
                          animate={{ width: "100%" }}
                          transition={{ duration: 15 }}
                          className="h-full bg-brand-gold"
                        />
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Informative Stats Grid */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-12 border-t border-brand-charcoal/5 pt-12">
                 <div className="flex flex-col space-y-2">
                    <span className="text-brand-gold text-lg italic font-black">2K</span>
                    <span className="text-[8px] font-black uppercase tracking-widest text-brand-charcoal/30">Resolution</span>
                 </div>
                 <div className="flex flex-col space-y-2">
                    <span className="text-brand-gold text-lg italic font-black">Vision v3</span>
                    <span className="text-[8px] font-black uppercase tracking-widest text-brand-charcoal/30">Neural Core</span>
                 </div>
                 <div className="flex flex-col space-y-2">
                    <span className="text-brand-gold text-lg italic font-black">30s</span>
                    <span className="text-[8px] font-black uppercase tracking-widest text-brand-charcoal/30">Average Synthesis</span>
                 </div>
              </div>
            </div>
          </div>

          {/* Editorial CTA */}
          <div className="bg-brand-charcoal py-20 lg:py-32 px-6 lg:px-12 text-white flex flex-col items-center text-center space-y-12 relative overflow-hidden">
             <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-brand-gold/5 blur-[120px] rounded-full -mr-48 -mt-48" />
             
             <h2 className="text-5xl lg:text-7xl font-sans font-black leading-[0.9] tracking-tighter uppercase max-w-3xl">
               Bridging Vision and <br />
               <span className="text-brand-gold">Physical Reality.</span>
             </h2>
             <p className="text-white/30 max-w-md text-xs md:text-sm leading-relaxed font-bold uppercase tracking-[0.3em] italic">
               Our studio specializes in translating neural previews into high-precision architectural executions.
             </p>
             <div className="flex flex-col sm:flex-row items-center space-y-6 sm:space-y-0 sm:space-x-12">
               <Button className="h-16 px-16 bg-white text-brand-charcoal hover:bg-brand-gold hover:text-brand-charcoal transition-all rounded-none font-black uppercase tracking-[0.3em] text-[10px]">
                 Initiate Physical Build
               </Button>
               <div className="flex items-center space-x-3 text-brand-gold font-black uppercase tracking-[0.3em] text-[10px] cursor-pointer">
                 <span>Technical Consultation</span>
                 <ArrowUpRight size={16} />
               </div>
             </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
