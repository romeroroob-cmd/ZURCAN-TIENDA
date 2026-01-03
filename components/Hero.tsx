import React from 'react';
import { motion } from 'framer-motion';

export const Hero: React.FC = () => {
  return (
    <section id="hero" className="relative h-[95vh] w-full overflow-hidden flex items-center justify-center bg-stone-300">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://lilyforado.com/wp-content/uploads/2024/11/Cobra-Zerzis-Tepeyac-y-Vega-III.-Campeona-SICAB-2008-1024x680.jpg" 
          alt="Zurcan Lifestyle" 
          className="w-full h-full object-cover object-center"
        />
        {/* Minimal overlay for text readability without darkening the image too much */}
        <div className="absolute inset-0 bg-black/20" /> 
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 h-full flex flex-col justify-end md:justify-center pb-20 md:pb-0">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="max-w-5xl mx-auto text-center"
        >
          
          <div className="flex items-center justify-center gap-4 mb-8">
             <span className="h-[1px] w-12 bg-white/90 shadow-sm"></span>
             <span className="text-white text-[10px] font-bold tracking-[0.4em] uppercase drop-shadow-md">
                Colección 2026
             </span>
             <span className="h-[1px] w-12 bg-white/90 shadow-sm"></span>
          </div>
          
          <h1 className="font-serif text-6xl md:text-9xl text-white mb-8 tracking-tighter leading-[0.9] drop-shadow-xl">
            ELEGANCIA <br/> <span className="italic font-light text-white">PURA RAZA</span>
          </h1>
          
          <div className="flex flex-col items-center gap-6">
             <p className="font-sans text-white max-w-lg font-medium leading-relaxed text-sm tracking-wide text-center drop-shadow-lg">
                Descubre la nueva línea de competición diseñada en Empuriabrava. 
                Donde la tradición ecuestre se encuentra con la alta costura.
             </p>
             
             <motion.button 
               whileHover={{ scale: 1.05 }}
               whileTap={{ scale: 0.95 }}
               className="mt-4 bg-white/20 backdrop-blur-md border border-white/50 text-white px-12 py-4 rounded-full text-[10px] font-bold uppercase tracking-[0.25em] hover:bg-white hover:text-stone-900 transition-all duration-300 shadow-xl"
             >
                Explorar Catálogo
             </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};