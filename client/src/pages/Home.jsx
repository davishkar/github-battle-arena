import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Swords, GitBranch, ArrowRight } from 'lucide-react';

const Home = () => {
  const [player1, setPlayer1] = useState('');
  const [player2, setPlayer2] = useState('');
  const navigate = useNavigate();

  const handleStartBattle = (e) => {
    e.preventDefault();
    if (player1 && player2) {
      navigate(`/battle?p1=${player1}&p2=${player2}`);
    }
  };

  return (
    <div className="flex-1 flex flex-col items-center justify-center relative">
      <motion.div 
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="text-center mb-12"
      >
        <div className="inline-flex items-center justify-center p-4 mb-6 rounded-full bg-primary/10 border border-primary/30 text-primary">
          <Swords size={48} className="animate-pulse" />
        </div>
        <h1 className="text-5xl md:text-7xl font-bold mb-4 tracking-tighter">
          GitHub <span className="neon-text">Battle Arena</span>
        </h1>
        <p className="text-xl md:text-2xl text-muted font-mono">
          "Two developers enter. One survives the algorithm."
        </p>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="w-full max-w-2xl glass rounded-2xl p-8 relative overflow-hidden"
      >
        {/* Decorative corner accents */}
        <div className="absolute top-0 left-0 w-16 h-16 border-t-2 border-l-2 border-primary/50 rounded-tl-2xl"></div>
        <div className="absolute bottom-0 right-0 w-16 h-16 border-b-2 border-r-2 border-secondary/50 rounded-br-2xl"></div>

        <form onSubmit={handleStartBattle} className="space-y-8 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Player 1 Input */}
            <div className="space-y-2 relative group">
              <label className="text-primary font-bold tracking-widest text-sm uppercase flex items-center gap-2">
                <GitBranch size={16} /> Player 1
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-muted">
                  @
                </div>
                <input
                  type="text"
                  value={player1}
                  onChange={(e) => setPlayer1(e.target.value)}
                  placeholder="github_username"
                  className="w-full bg-black/40 border border-white/10 rounded-lg py-3 pl-8 pr-4 text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all font-mono placeholder:text-white/20"
                  required
                />
              </div>
            </div>

            {/* VS Badge */}
            <div className="hidden md:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20 items-center justify-center w-12 h-12 rounded-full bg-card border-2 border-white/10 text-white font-black italic">
              VS
            </div>

            {/* Player 2 Input */}
            <div className="space-y-2 relative group md:mt-0 mt-4">
              <label className="text-secondary font-bold tracking-widest text-sm uppercase flex items-center gap-2">
                <GitBranch size={16} /> Player 2
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-muted">
                  @
                </div>
                <input
                  type="text"
                  value={player2}
                  onChange={(e) => setPlayer2(e.target.value)}
                  placeholder="github_username"
                  className="w-full bg-black/40 border border-white/10 rounded-lg py-3 pl-8 pr-4 text-white focus:outline-none focus:border-secondary focus:ring-1 focus:ring-secondary transition-all font-mono placeholder:text-white/20"
                  required
                />
              </div>
            </div>
          </div>

          <div className="pt-4 flex justify-center">
            <button
              type="submit"
              disabled={!player1 || !player2}
              className="group relative inline-flex items-center justify-center px-8 py-4 font-bold text-white transition-all duration-200 bg-primary/80 border border-primary rounded-xl hover:bg-primary focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary disabled:opacity-50 disabled:cursor-not-allowed overflow-hidden"
            >
              <span className="absolute w-0 h-0 transition-all duration-500 ease-out bg-white rounded-full group-hover:w-56 group-hover:h-56 opacity-10"></span>
              <span className="relative flex items-center gap-2 text-lg tracking-wider">
                INITIATE BATTLE <ArrowRight className="group-hover:translate-x-1 transition-transform" />
              </span>
            </button>
          </div>
        </form>
      </motion.div>
    </div>
  );
};

export default Home;
