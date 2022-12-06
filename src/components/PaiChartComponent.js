import React from 'react';
import {
  PieChart,
  Pie,
  Cell,
  Legend,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';

const sahil = [
  { name: 'L1', value: 4 },
  { name: 'L2', value: 1 },
];
const COLORS = ['#df4c4c', '#782e2e', '#a54747', '#560808'];

const PaiChartComponent = () => {
  return (
    <ResponsiveContainer width='100%' className='main-pai'>
      <PieChart width={400} height={400} className='chart'>
        <Pie
          dataKey='value'
          isAnimationActive={false}
          data={sahil}
          cx='50%'
          cy='50%'
          outerRadius={80}
          fill='#d14051'
          stroke='#0000'
        >
          {sahil.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
      </PieChart>
    </ResponsiveContainer>
  );
};

export default PaiChartComponent;
