import React from 'react';
import { Icons } from './Icons';
import {
  ComposedChart,
  Bar,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend
} from 'recharts';

// Data derived from the screenshot
const trendData = [
  { year: '2019', emissions: 5000, trend: 0 }, // Near zero in screenshot
  { year: '2020', emissions: 1161323.57, trend: 0 }, // Trend logic seems separate or cumulative in screenshot, assuming trend is mapped to right axis
  { year: '2021', emissions: 971443.18, trend: 114132357.19 }, // Using screenshot labels as visual guide, actual math might vary
  { year: '2022', emissions: 913394.63, trend: 97144317.73 },
  { year: '2023', emissions: 1933273.68, trend: 193327367.72 },
  { year: '2024', emissions: 45.61, trend: 0 },
];

// Custom label for the line chart points to match the "red percentage" style in screenshot if possible, 
// or simple tooltips. The screenshot shows large red text labels on the line points.
// For simplicity in this implementation, we will rely on tooltips and axis scaling.

const Trend: React.FC = () => {
  return (
    <div className="flex flex-col w-full gap-[var(--space-lg)]">
      
      {/* Page Title */}
      <h1 className="text-[length:var(--font-size-xl)] font-bold text-[var(--color-text-primary)]">Trend</h1>

      {/* Summary Cards Row */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-[var(--space-lg)]">
        
        {/* Base Year Card */}
        <div className="card bg-[var(--color-bg-surface)] shadow-sm border border-[var(--color-border-default)]">
          <div className="card-body p-[var(--space-lg)]">
             <div className="flex justify-between items-start">
                <div className="text-[length:var(--font-size-sm)] text-[var(--color-text-tertiary)] font-medium">Base year</div>
                <Icons.Settings className="w-4 h-4 text-[var(--color-success)]" /> {/* Using Settings as placeholder for the icon in screenshot */}
             </div>
             <div className="text-[length:var(--font-size-3xl)] font-bold text-[var(--color-text-primary)] mt-[var(--space-sm)]">2018</div>
             <div className="w-4 h-4 mt-2 bg-[var(--color-bg-canvas)] rotate-45 transform origin-center"></div> {/* Little triangle indicator styling attempt */}
          </div>
        </div>

        {/* Year of max emission (Left) - Seems to be 'None' in screenshot */}
        <div className="card bg-[var(--color-bg-canvas)] shadow-sm border-none">
           <div className="card-body p-[var(--space-lg)]">
             <div className="flex justify-between items-start">
                <div className="text-[length:var(--font-size-sm)] text-[var(--color-text-tertiary)] font-medium flex items-center gap-1">
                    Year of maximum emissi... 
                    <Icons.Help className="w-3 h-3" />
                </div>
             </div>
             <div className="text-[length:var(--font-size-lg)] font-bold text-[var(--color-text-disabled)] mt-[var(--space-sm)]">None</div>
           </div>
        </div>

        {/* Year of max emission (Right) - 2023 */}
        <div className="card bg-[var(--color-bg-surface)] shadow-sm border border-[var(--color-border-default)]">
           <div className="card-body p-[var(--space-lg)] flex-row justify-between items-center">
             <div>
                <div className="text-[length:var(--font-size-sm)] text-[var(--color-text-tertiary)] font-medium flex items-center gap-1">
                    Year of maximum emissi...
                    <Icons.Help className="w-3 h-3" />
                </div>
                <div className="text-[length:var(--font-size-3xl)] font-bold text-[var(--color-text-primary)] mt-[var(--space-sm)]">2023</div>
             </div>
             <div className="bg-[#fef2f2] p-[var(--space-sm)] rounded text-right">
                <div className="text-[var(--color-brand-primary)] font-bold text-[length:var(--font-size-sm)]">+193,327,367.72%</div>
                <div className="flex justify-end mt-1">
                    <Icons.ArrowUpDown className="w-4 h-4 text-[var(--color-brand-primary)] rotate-45" />
                </div>
             </div>
           </div>
        </div>

      </div>

      {/* Chart Section */}
      <div className="card bg-[var(--color-bg-surface)] shadow-sm border border-[var(--color-border-default)]">
        <div className="card-body p-[var(--space-lg)]">
            
            {/* Chart Header & Filters */}
            <div className="flex flex-col xl:flex-row justify-between items-start xl:items-center gap-[var(--space-md)] mb-[var(--space-lg)]">
                <h2 className="text-[length:var(--font-size-base)] font-bold text-[var(--color-text-primary)]">
                    Annual carbon emissions statistics <span className="text-[var(--color-text-tertiary)] font-normal text-[length:var(--font-size-xs)]">(tCO₂-e)</span>
                </h2>
                
                <div className="flex flex-wrap items-center gap-[var(--space-sm)] w-full xl:w-auto">
                    <select className="select select-bordered select-sm bg-[var(--color-bg-surface)] text-[var(--color-text-tertiary)] w-full sm:w-64 font-normal">
                        <option disabled selected>Please select the owning o...</option>
                        <option>Central Group</option>
                    </select>

                    <div className="flex items-center gap-[var(--space-xs)]">
                        <div className="relative">
                            <input type="text" defaultValue="2018" className="input input-bordered input-sm w-24 pr-8 text-[var(--color-text-primary)]" />
                            <Icons.Calendar className="w-4 h-4 text-[var(--color-text-disabled)] absolute right-2 top-1.5 pointer-events-none" />
                        </div>
                        <span className="text-[var(--color-text-tertiary)]">-</span>
                         <div className="relative">
                            <input type="text" defaultValue="2024" className="input input-bordered input-sm w-24 pr-8 text-[var(--color-text-primary)]" />
                            <Icons.Calendar className="w-4 h-4 text-[var(--color-text-disabled)] absolute right-2 top-1.5 pointer-events-none" />
                        </div>
                    </div>

                    <button className="btn btn-outline btn-sm border-[var(--color-success)] text-[var(--color-success)] hover:bg-[var(--color-success)] hover:text-white hover:border-[var(--color-success)] normal-case font-medium min-w-[80px]">
                        Query
                    </button>
                </div>
            </div>

            {/* Chart */}
            <div className="h-[400px] w-full">
                <ResponsiveContainer width="100%" height="100%">
                    <ComposedChart
                        data={trendData}
                        margin={{
                            top: 20,
                            right: 20,
                            bottom: 20,
                            left: 20,
                        }}
                    >
                        <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="var(--color-border-default)" />
                        <XAxis 
                            dataKey="year" 
                            axisLine={{ stroke: 'var(--color-border-default)' }} 
                            tickLine={false}
                            tick={{ fill: 'var(--color-text-tertiary)', fontSize: 12 }}
                            dy={10}
                        />
                        {/* Y Axis for Bar (Emissions) */}
                        <YAxis 
                            yAxisId="left"
                            axisLine={false} 
                            tickLine={false}
                            tick={{ fill: 'var(--color-text-disabled)', fontSize: 12 }}
                            tickFormatter={(val) => val.toLocaleString()}
                        />
                        {/* Y Axis for Line (Trend %) - hidden typically or right side */}
                        <YAxis 
                            yAxisId="right"
                            orientation="right"
                            axisLine={false} 
                            tickLine={false}
                            tick={{ fill: 'var(--color-text-disabled)', fontSize: 12 }}
                            hide // Hiding for visual cleanliness similar to screenshot, or can show percentage
                        />
                        <Tooltip 
                            contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}
                            formatter={(value: number) => value.toLocaleString()}
                        />
                        <Legend 
                            verticalAlign="bottom" 
                            height={36} 
                            iconType="circle"
                            formatter={(value, entry) => (
                                <span className="text-[var(--color-text-secondary)] font-medium text-sm ml-1">{value}</span>
                            )}
                        />
                        
                        {/* Bars for Emissions */}
                        <Bar 
                            yAxisId="left"
                            dataKey="emissions" 
                            name="Total annual carbon emissions" 
                            fill="var(--color-success)" 
                            barSize={30}
                            // radius={[4, 4, 0, 0]} 
                        />

                        {/* Line for Trend - Orange color from screenshot */}
                        <Line 
                            yAxisId="right"
                            type="monotone" 
                            dataKey="trend" 
                            name="Emission trend (compared to base year)%" 
                            stroke="#f97316" 
                            strokeWidth={2}
                            dot={{ fill: '#f97316', r: 4 }}
                        />
                        
                        {/* Base year dot (blue in screenshot legend, though usually base year is a reference line or different bar color. 
                            The screenshot has a legend item 'Base year' that is blue. 
                            We can add a dummy Line or scatter point to satisfy the legend if needed, 
                            or just assume it marks 2018 in data. 
                            For now, let's keep it simple with Bar/Line matching the main visuals.) 
                        */}
                    </ComposedChart>
                </ResponsiveContainer>
            </div>

        </div>
      </div>
    </div>
  );
};

export default Trend;