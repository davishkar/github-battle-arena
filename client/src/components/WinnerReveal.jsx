import React from 'react';
import { motion } from 'framer-motion';
import { Trophy, Share2, Download, AlertTriangle } from 'lucide-react';

const WinnerReveal = ({ winner, p1, p2 }) => {
  const isTie = winner === 'Tie';
  const winnerData = isTie ? null : (winner === p1.login ? p1 : p2);
  const loserData = isTie ? null : (winner === p1.login ? p2 : p1);

  return (
    <motion.div 
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.5, type: "spring" }}
      className="mt-12 flex justify-center w-full z-20"
    >
      <div className="glass max-w-3xl w-full p-8 rounded-3xl relative overflow-hidden text-center border-t border-white/20 shadow-2xl">
        {/* Glow effect based on result */}
        <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full rounded-full blur-[100px] -z-10 ${isTie ? 'bg-white/10' : 'bg-yellow-500/20'}`} />

        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", stiffness: 200, delay: 1 }}
          className="inline-flex items-center justify-center p-4 rounded-full mb-6 border-2 shadow-xl bg-background"
          style={{ borderColor: isTie ? '#6b7280' : '#fbbf24' }}
        >
          {isTie ? (
            <AlertTriangle size={48} className="text-muted" />
          ) : (
            <Trophy size={48} className="text-yellow-400" />
          )}
        </motion.div>

        {isTie ? (
          <>
            <h2 className="text-5xl font-black mb-4 uppercase tracking-tighter">It's a Draw!</h2>
            <p className="text-xl text-muted font-mono mb-8">
              A rare occurrence! Both developers possess equal algorithms and power levels.
            </p>
          </>
        ) : (
          <>
            <h2 className="text-4xl md:text-6xl font-black mb-2 uppercase tracking-tighter">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-yellow-600">
                {winner}
              </span> Wins!
            </h2>
            <p className="text-lg md:text-xl text-white/70 font-mono mb-8 max-w-xl mx-auto">
              With a Power Level of <span className="font-bold text-yellow-400">{winnerData.total}</span>, 
              @{winnerData.login} defeated @{loserData.login} in the arena.
            </p>
            
            <div className="bg-black/40 rounded-xl p-4 md:p-6 mb-8 border border-white/5 inline-block text-left">
              <h4 className="text-sm uppercase tracking-widest text-muted mb-2 font-bold">AI Verdict</h4>
              <p className="text-sm md:text-base font-mono leading-relaxed">
                {winnerData.login} demonstrated superior dominance with stronger repository metrics 
                ({winnerData.stats.repoStrength} vs {loserData.stats.repoStrength}) and 
                commit consistency ({winnerData.activity.consistency}% vs {loserData.activity.consistency}%).
              </p>
            </div>
          </>
        )}

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button className="flex items-center gap-2 px-6 py-3 rounded-xl bg-white/10 hover:bg-white/20 transition-colors font-bold tracking-wide">
            <Share2 size={18} /> Share Battle
          </button>
          <button className="flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-primary to-secondary hover:opacity-90 transition-opacity font-bold tracking-wide">
            <Download size={18} /> Download Poster
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default WinnerReveal;
