import React from 'react';
import { motion } from 'framer-motion';
import { Star, GitFork, Users, BookOpen, Activity, Code2 } from 'lucide-react';
import RadarStats from './RadarStats';

const StatRow = ({ icon: Icon, label, value, color }) => (
  <div className="flex items-center justify-between p-3 rounded-lg bg-white/5 border border-white/5">
    <div className="flex items-center gap-3">
      <Icon size={18} className={color} />
      <span className="text-muted font-medium">{label}</span>
    </div>
    <span className="font-mono text-lg font-bold">{value}</span>
  </div>
);

const BattleCard = ({ player, isWinner, isTie, align }) => {
  const cardColor = align === 'left' ? 'primary' : 'secondary';
  const borderColorClass = align === 'left' ? 'border-primary' : 'border-secondary';
  const glowClass = align === 'left' ? 'shadow-[0_0_30px_rgba(255,0,85,0.2)]' : 'shadow-[0_0_30px_rgba(0,240,255,0.2)]';
  
  const statusGlow = isWinner ? `shadow-[0_0_50px_rgba(255,215,0,0.5)] border-yellow-400` : '';
  const tieGlow = isTie ? `shadow-[0_0_30px_rgba(255,255,255,0.3)] border-white/50` : '';

  return (
    <motion.div 
      initial={{ opacity: 0, x: align === 'left' ? -50 : 50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
      className={`glass rounded-2xl p-6 relative overflow-hidden transition-all duration-1000 ${isWinner ? statusGlow : (isTie ? tieGlow : glowClass)}`}
    >
      {/* Background decoration */}
      <div className={`absolute top-0 right-0 w-32 h-32 bg-${cardColor}/10 rounded-full blur-[50px]`} />

      {isWinner && (
        <div className="absolute top-4 right-4 bg-yellow-400 text-black px-3 py-1 rounded-full text-xs font-black tracking-widest uppercase animate-bounce shadow-lg">
          Winner
        </div>
      )}

      {/* Header */}
      <div className="flex items-center gap-6 mb-8 relative z-10">
        <div className={`relative p-1 rounded-full bg-gradient-to-br ${align === 'left' ? 'from-primary' : 'from-secondary'} to-transparent`}>
          <img 
            src={player.avatar} 
            alt={player.login} 
            className="w-24 h-24 rounded-full border-4 border-card object-cover"
          />
        </div>
        <div>
          <h3 className="text-3xl font-display font-bold tracking-tight">@{player.login}</h3>
          <div className="flex items-center gap-2 mt-1">
            <span className="text-sm text-muted uppercase tracking-widest font-bold">Power Level</span>
            <span className={`text-2xl font-black ${align === 'left' ? 'text-primary' : 'text-secondary'}`}>
              {player.total}
            </span>
          </div>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-2 gap-3 mb-8">
        <StatRow icon={Users} label="Followers" value={player.profile.followers} color="text-blue-400" />
        <StatRow icon={BookOpen} label="Repos" value={player.profile.public_repos} color="text-green-400" />
        <StatRow icon={Star} label="Stars" value={player.stats.stars} color="text-yellow-400" />
        <StatRow icon={GitFork} label="Forks" value={player.stats.forks} color="text-purple-400" />
      </div>

      {/* Advanced Metrics */}
      <div className="space-y-6">
        <div className="bg-black/30 rounded-xl p-4 border border-white/5">
          <h4 className="flex items-center gap-2 text-sm uppercase tracking-widest text-muted mb-4 font-bold">
            <Activity size={16} /> Commits Consistency
          </h4>
          <div className="relative h-4 bg-white/5 rounded-full overflow-hidden">
            <motion.div 
              initial={{ width: 0 }}
              animate={{ width: `${player.activity.consistency}%` }}
              transition={{ duration: 1.5, delay: 0.5 }}
              className={`absolute top-0 left-0 h-full bg-gradient-to-r ${align === 'left' ? 'from-primary/50 to-primary' : 'from-secondary/50 to-secondary'}`}
            />
          </div>
          <div className="flex justify-between mt-2 text-xs font-mono">
            <span>{player.activity.total} commits</span>
            <span className={align === 'left' ? 'text-primary' : 'text-secondary'}>{player.activity.consistency}% active</span>
          </div>
        </div>

        <div className="bg-black/30 rounded-xl p-4 border border-white/5">
           <h4 className="flex items-center gap-2 text-sm uppercase tracking-widest text-muted mb-4 font-bold">
            <Code2 size={16} /> Language Mastery
          </h4>
          <RadarStats data={player.stats.topLanguages} color={align === 'left' ? '#ff0055' : '#00f0ff'} />
        </div>
      </div>

    </motion.div>
  );
};

export default BattleCard;
