import React, { useState } from 'react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';

const data = [
  { name: 'Mon', value: 22000 },
  { name: 'Tue', value: 24000 },
  { name: 'Wed', value: 22000 },
  { name: 'Thu', value: 43000 },
  { name: 'Fri', value: 22000 },
  { name: 'Sat', value: 40000 },
  { name: 'Sun', value: 22000 },
];

const SessionsChart: React.FC = () => {
  const [filter, setFilter] = useState('7d');

  return (
    <div className="card bg-[var(--color-bg-surface)] shadow-sm border border-[var(--color-border-default)] h-full">
      <div className="card-body p-[var(--space-lg)]">
        <div className="flex justify-between items-center mb-[var(--space-lg)]">
          <h2 className="card-title text-[length:var(--font-size-sm)] text-[var(--color-text-tertiary)] uppercase tracking-wide font-bold">Sessions Overview</h2>
          <div className="flex gap-[var(--space-md)] text-[length:var(--font-size-sm)] text-[var(--color-text-disabled)]">
            {['Today', '7d', '1m', '1y'].map((period) => (
              <button
                key={period}
                onClick={() => setFilter(period)}
                className={`hover:text-[var(--color-text-secondary)] transition-colors ${
                  filter === period ? 'text-[var(--color-text-primary)] font-semibold' : ''
                }`}
              >
                {period}
              </button>
            ))}
          </div>
        </div>

        <div className="h-[300px] w-full">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart
              data={data}
              margin={{
                top: 10,
                right: 30,
                left: 0,
                bottom: 0,
              }}
            >
              <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="var(--color-border-default)" />
              <XAxis 
                dataKey="name" 
                axisLine={false} 
                tickLine={false} 
                tick={{ fill: 'var(--color-text-disabled)', fontSize: 12 }} 
                dy={10}
              />
              <YAxis 
                axisLine={false} 
                tickLine={false} 
                tick={{ fill: 'var(--color-text-disabled)', fontSize: 12 }} 
                tickFormatter={(value) => `${value / 1000}k`}
              />
              <Tooltip 
                contentStyle={{ borderRadius: 'var(--radius-lg)', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}
              />
              <Line
                type="monotone"
                dataKey="value"
                stroke="var(--color-brand-secondary)"
                strokeWidth={2}
                dot={false}
                activeDot={{ r: 6, strokeWidth: 0 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default SessionsChart;