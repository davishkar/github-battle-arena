import React from 'react';
import { motion } from 'framer-motion';
import { Swords } from 'lucide-react';

const VsAnimation = () => {
  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 1.5, filter: 'blur(10px)' }}
      transition={{ duration: 0.5 }}
      className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-30 pointer-events-none"
    >
      <div className="relative">
        <motion.div 
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute inset-[-50px] rounded-full border border-dashed border-white/20"
        />
        <motion.div 
          animate={{ rotate: -360 }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          className="absolute inset-[-30px] rounded-full border border-dashed border-primary/30"
        />
        
        <div className="w-32 h-32 rounded-full glass border-2 border-white/20 flex flex-col items-center justify-center relative overflow-hidden shadow-[0_0_50px_rgba(255,0,85,0.3)]">
          <motion.div
            animate={{ 
              scale: [1, 1.2, 1],
            }}
            transition={{ duration: 1, repeat: Infinity }}
            className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20"
          />
          <Swords size={40} className="text-white relative z-10 mb-1" />
          <span className="font-black italic text-2xl text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary relative z-10">
            VS
          </span>
        </div>
      </div>
    </motion.div>
  );
};

export default VsAnimation;
