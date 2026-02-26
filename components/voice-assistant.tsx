"use client";

import { useEffect, useState } from "react";
import Vapi from "@vapi-ai/web";
import { Mic, MicOff, PhoneOff, Sparkles } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const vapi = new Vapi(process.env.NEXT_PUBLIC_VAPI_PUBLIC_KEY || "YOUR_VAPI_PUBLIC_KEY");

export function VoiceAssistant() {
  const [isCalling, setIsCalling] = useState(false);
  const [isConnecting, setIsConnecting] = useState(false);
  const [volume, setVolume] = useState(0);

  useEffect(() => {
    vapi.on("call-start", () => {
      setIsCalling(true);
      setIsConnecting(false);
    });

    vapi.on("call-end", () => {
      setIsCalling(false);
      setIsConnecting(false);
      setVolume(0);
    });

    vapi.on("volume-level", (level) => {
      setVolume(level);
    });

    vapi.on("error", (error) => {
      console.error("Vapi Error:", error);
      setIsConnecting(false);
      setIsCalling(false);
    });

    return () => {
      vapi.removeAllListeners();
    };
  }, []);

  const toggleCall = async () => {
    if (isCalling) {
      vapi.stop();
    } else {
      setIsConnecting(true);
      try {
        const assistant: any = {
          name: "Space Craft AI Guide",
          firstMessage: "Hello, I am the Space Craft AI Assistant. How can I help you transform your space today?",
          transcriber: {
            provider: "deepgram",
            model: "nova-2",
            language: "en-US",
          },
          model: {
            provider: "openai",
            model: "gpt-4o",
            messages: [
              {
                role: "system",
                content: `You are the AI Voice Assistant for SPACE CRAFT, a premium interior design studio. 
                
                WHO WE ARE:
                SPACE CRAFT is an architectural design studio that specializes in high-end residential transformations. We bridge the gap between technical rigor and curated luxury.
                
                OUR SERVICES:
                1. All Interiors: Comprehensive luxury design concepts for the entire home.
                2. Wooden Work: Bespoke cabinetry and precision joinery.
                3. False Ceiling: Architectural lighting systems for mood and volume.
                4. Paint & Texture: Hand-crafted wall finishes and Venetian plasters.
                5. Electric Work: Smart lighting and functional electrical integration.
                6. Premium Flooring: High-end marble and stone anchors.
                
                OUR PROCESS:
                - Concept Rigor: Deep architectural analysis before any drawing.
                - Material Synthesis: Sourcing only the most elite textures and materials.
                - Precision Execution: Technical build phase with extreme attention to detail.
                
                AI STUDIO:
                We offer a unique "Neural Design Engine" where clients can upload photos of their current spaces to see instant high-end transformations powered by Gemini AI.
                
                YOUR STYLE:
                Be sophisticated, professional, and slightly technical. You are helpful but elite. Keep your responses concise for better voice interaction.`
              }
            ]
          },
          voice: {
            provider: "11labs",
            voiceId: "sarah", // Or any premium-sounding voice
          }
        };

        await vapi.start(assistant);
        // Fallback: if the event is slow, we at least stop spinning once the promise resolves
        setIsConnecting(false);
      } catch (err) {
        console.error("Failed to start Vapi call:", err);
        setIsConnecting(false);
      }
    }
  };

  return (
    <div className="fixed bottom-8 right-8 z-[100] flex flex-col items-end">
      <button
        onClick={toggleCall}
        disabled={isConnecting}
        className={`relative h-14 w-14 flex items-center justify-center transition-all duration-500 shadow-2xl overflow-hidden group rounded-full ${
          isCalling 
          ? "bg-red-500 text-white" 
          : "bg-brand-gold text-brand-charcoal hover:scale-105"
        }`}
      >
        <AnimatePresence mode="wait">
          {isCalling ? (
            <motion.div 
              key="calling" 
              initial={{ opacity: 0, scale: 0.5 }} 
              animate={{ opacity: 1, scale: 1 }}
              className="flex flex-col items-center"
            >
              <PhoneOff size={20} />
            </motion.div>
          ) : isConnecting ? (
            <motion.div
              key="connecting"
              animate={{ rotate: 360 }}
              transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
            >
              <Sparkles size={20} />
            </motion.div>
          ) : (
            <motion.div key="idle" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
              <Mic size={22} />
            </motion.div>
          )}
        </AnimatePresence>
        
        {/* Pulse Effect when calling */}
        {isCalling && (
          <div className="absolute inset-0 bg-red-400 animate-pulse opacity-40 pointer-events-none" />
        )}
      </button>
    </div>
  );
}
