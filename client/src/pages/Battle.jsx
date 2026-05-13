import React, { useEffect, useState } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import { fetchBattleData } from '../services/githubApi';
import { evaluateBattle } from '../utils/scoringEngine';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, Loader2 } from 'lucide-react';
import BattleCard from '../components/BattleCard';
import WinnerReveal from '../components/WinnerReveal';
import VsAnimation from '../components/VsAnimation';

const Battle = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const p1 = searchParams.get('p1');
  const p2 = searchParams.get('p2');

  const [loading, setLoading] = useState(true);
  const [results, setResults] = useState(null);
  const [error, setError] = useState(null);
  const [showWinner, setShowWinner] = useState(false);

  useEffect(() => {
    if (!p1 || !p2) {
      navigate('/');
      return;
    }

    const runBattle = async () => {
      try {
        setLoading(true);
        const data = await fetchBattleData(p1, p2);
        const evaluation = evaluateBattle(data);
        setResults(evaluation);
        
        // Show winner after a dramatic delay
        setTimeout(() => {
          setShowWinner(true);
        }, 3000);
      } catch (err) {
        setError('Failed to fetch data for one or both users. Please check the usernames and try again.');
      } finally {
        setLoading(false);
      }
    };

    runBattle();
  }, [p1, p2, navigate]);

  if (error) {
    return (
      <div className="flex-1 flex flex-col items-center justify-center h-full">
        <div className="glass p-8 rounded-xl text-center max-w-md">
          <p className="text-primary mb-4">{error}</p>
          <button 
            onClick={() => navigate('/')}
            className="px-6 py-2 bg-white/10 hover:bg-white/20 rounded-lg transition-colors"
          >
            Go Back
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col h-full relative">
      <div className="flex justify-between items-center mb-8 relative z-20">
        <button 
          onClick={() => navigate('/')}
          className="flex items-center gap-2 text-muted hover:text-white transition-colors"
        >
          <ArrowLeft size={20} /> Back to Arena
        </button>
        <h2 className="text-2xl font-bold font-display uppercase tracking-widest text-white/50">
          Battle in Progress
        </h2>
      </div>

      {loading ? (
        <div className="flex-1 flex flex-col items-center justify-center">
          <Loader2 size={64} className="text-primary animate-spin mb-4" />
          <p className="text-xl font-mono text-muted animate-pulse">Analyzing Repositories...</p>
        </div>
      ) : results && (
        <div className="relative flex-1 flex flex-col">
          <AnimatePresence>
            {!showWinner && <VsAnimation />}
          </AnimatePresence>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 flex-1 items-center z-10">
            <BattleCard 
              player={results.player1} 
              isWinner={showWinner && results.winner === results.player1.login}
              isTie={showWinner && results.winner === 'Tie'}
              align="left"
            />
            
            <BattleCard 
              player={results.player2} 
              isWinner={showWinner && results.winner === results.player2.login}
              isTie={showWinner && results.winner === 'Tie'}
              align="right"
            />
          </div>

          <AnimatePresence>
            {showWinner && (
              <WinnerReveal winner={results.winner} p1={results.player1} p2={results.player2} />
            )}
          </AnimatePresence>
        </div>
      )}
    </div>
  );
};

export default Battle;
