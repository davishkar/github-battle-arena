import React from 'react';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer, Tooltip } from 'recharts';

const CustomTooltip = ({ active, payload }) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-card border border-white/10 p-3 rounded-lg shadow-xl">
        <p className="font-mono text-sm text-white">{`${payload[0].payload.lang}: ${payload[0].value} repos`}</p>
      </div>
    );
  }
  return null;
};

const RadarStats = ({ data, color }) => {
  if (!data || data.length === 0) {
    return <div className="h-[200px] flex items-center justify-center text-muted font-mono text-sm">No language data available</div>;
  }

  // Normalize data for better radar display
  const maxCount = Math.max(...data.map(d => d.count));
  
  return (
    <div className="h-[200px] w-full">
      <ResponsiveContainer width="100%" height="100%">
        <RadarChart cx="50%" cy="50%" outerRadius="70%" data={data}>
          <PolarGrid stroke="rgba(255,255,255,0.1)" />
          <PolarAngleAxis 
            dataKey="lang" 
            tick={{ fill: 'rgba(255,255,255,0.5)', fontSize: 10, fontFamily: 'monospace' }} 
          />
          <PolarRadiusAxis angle={30} domain={[0, maxCount]} tick={false} axisLine={false} />
          <Tooltip content={<CustomTooltip />} />
          <Radar
            name="Languages"
            dataKey="count"
            stroke={color}
            fill={color}
            fillOpacity={0.3}
          />
        </RadarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default RadarStats;
