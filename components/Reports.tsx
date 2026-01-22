import React from 'react';
import { Icons } from './Icons';
import {
  LineChart,
  Line,
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend
} from 'recharts';

// --- Data Mocks ---

const monthlyOrgData = [
  { month: '2022-01', PTC: 4000, SAT1: 2000, TG: 6000, MTB: 4000, DCA: 6000 },
  { month: '2022-02', PTC: 4000, SAT1: 2000, TG: 6000, MTB: 4000, DCA: 6000 },
  { month: '2022-03', PTC: 18000, SAT1: 22000, TG: 25000, MTB: 25000, DCA: 27000 },
  { month: '2022-04', PTC: 28000, SAT1: 30000, TG: 35000, MTB: 32000, DCA: 40000 },
  { month: '2022-05', PTC: 51000, SAT1: 60000, TG: 68000, MTB: 65000, DCA: 65000 },
  { month: '2022-06', PTC: 44000, SAT1: 73000, TG: 82000, MTB: 55000, DCA: 55000 },
  { month: '2022-07', PTC: 43000, SAT1: 49000, TG: 52000, MTB: 55000, DCA: 55000 },
  { month: '2022-08', PTC: 55000, SAT1: 60000, TG: 62000, MTB: 63000, DCA: 63000 },
  { month: '2022-09', PTC: 65000, SAT1: 65000, TG: 62000, MTB: 67000, DCA: 65000 },
  { month: '2022-10', PTC: 59000, SAT1: 60000, TG: 58000, MTB: 60000, DCA: 59000 },
  { month: '2022-11', PTC: 68000, SAT1: 72000, TG: 74000, MTB: 74000, DCA: 70000 },
  { month: '2022-12', PTC: 57000, SAT1: 68000, TG: 68000, MTB: 68000, DCA: 68000 },
];

const monthlyCatData = [
  { month: '2022-01', gas: 500, electricity: 6000, gasoline: 18000 },
  { month: '2022-02', gas: 500, electricity: 6500, gasoline: 7000 },
  { month: '2022-03', gas: 15000, electricity: 18000, gasoline: 27000 },
  { month: '2022-04', gas: 25000, electricity: 28000, gasoline: 33000 },
  { month: '2022-05', gas: 49000, electricity: 64000, gasoline: 63000 },
  { month: '2022-06', gas: 19000, electricity: 59000, gasoline: 81000 },
  { month: '2022-07', gas: 42000, electricity: 53000, gasoline: 53000 },
  { month: '2022-08', gas: 29000, electricity: 40000, gasoline: 62000 },
  { month: '2022-09', gas: 38000, electricity: 43000, gasoline: 67000 },
  { month: '2022-10', gas: 53000, electricity: 58000, gasoline: 60000 },
  { month: '2022-11', gas: 48000, electricity: 56000, gasoline: 73000 },
  { month: '2022-12', gas: 35000, electricity: 50000, gasoline: 69000 },
];

const trendData = [
  { month: '2022-01', value: 18000 },
  { month: '2022-02', value: 7000 },
  { month: '2022-03', value: 27000 },
  { month: '2022-04', value: 33000 },
  { month: '2022-05', value: 63000 },
  { month: '2022-06', value: 82112, event: 'Energy substitution' },
  { month: '2022-07', value: 53000 },
  { month: '2022-08', value: 62000 },
  { month: '2022-09', value: 60000 },
  { month: '2022-10', value: 74000 },
  { month: '2022-11', value: 70000 },
  { month: '2022-12', value: 68000 },
];

const intensityData = [
  { month: '2022-01', value: 0.9 },
  { month: '2022-02', value: 0.4 },
  { month: '2022-03', value: 1.5 },
  { month: '2022-04', value: 1.6 },
  { month: '2022-05', value: 3.2 },
  { month: '2022-06', value: 2.8 },
  { month: '2022-07', value: 3.9 },
  { month: '2022-08', value: 4.9 },
  { month: '2022-09', value: 3.5 },
  { month: '2022-10', value: 2.4 },
  { month: '2022-11', value: 4.6 },
  { month: '2022-12', value: 3.5 },
];

// Custom Colors
const COLORS = {
  blue: '#3b82f6',
  red: 'var(--color-brand-primary)',
  yellow: '#fbbf24',
  green: 'var(--color-success)',
  orange: '#f97316',
  lightGreen: '#86efac',
  greenGradientStart: 'rgba(5, 150, 105, 0.5)',
  greenGradientEnd: 'rgba(5, 150, 105, 0)',
};

// Custom Tooltip for Trend Chart
const CustomTrendTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    const data = payload[0].payload;
    return (
      <div className="bg-[#1f2937] text-white p-3 rounded shadow-lg border-none text-xs">
        <div className="flex items-center gap-2 mb-1">
          <div className="w-2 h-2 rounded-full bg-[var(--color-success)]"></div>
          <span className="font-medium">{label}</span>
        </div>
        <div className="mb-2 pl-4">
          {payload[0].value.toLocaleString()} tCO₂-e
        </div>
        {data.event && (
          <div className="flex items-start gap-2 border-t border-gray-600 pt-2">
            <div className="w-2 h-2 rounded-full bg-blue-500 mt-1"></div>
            <div>
                <div className="font-bold">Event</div>
                <div>{data.event}</div>
            </div>
          </div>
        )}
      </div>
    );
  }
  return null;
};

const Reports: React.FC = () => {
  return (
    <div className="flex flex-col w-full gap-[var(--space-lg)]">
      
      {/* --- Row 1 --- */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-[var(--space-lg)]">
        
        {/* Chart 1: Organization Boundaries */}
        <div className="card bg-[var(--color-bg-surface)] shadow-sm border border-[var(--color-border-default)]">
          <div className="card-body p-[var(--space-lg)]">
            <h3 className="text-[length:var(--font-size-sm)] font-bold text-[var(--color-text-primary)] mb-[var(--space-md)]">
              Monthly distribution of Top 5 organization boundaries of carbon... <span className="text-[var(--color-text-tertiary)] font-normal">(tCO₂-e)</span>
            </h3>
            
            <div className="h-[300px] w-full">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={monthlyOrgData} margin={{ top: 10, right: 10, left: -10, bottom: 0 }}>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="var(--color-border-subtle)" />
                  <XAxis 
                    dataKey="month" 
                    axisLine={false} 
                    tickLine={false} 
                    tick={{ fill: 'var(--color-text-tertiary)', fontSize: 11 }} 
                    tickFormatter={(val) => val.slice(0, 7)}
                    dy={10}
                  />
                  <YAxis 
                    axisLine={false} 
                    tickLine={false} 
                    tick={{ fill: 'var(--color-text-tertiary)', fontSize: 11 }}
                    tickFormatter={(val) => val.toLocaleString()}
                  />
                  <Tooltip contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }} />
                  <Legend 
                    verticalAlign="top" 
                    align="left"
                    iconType="square"
                    iconSize={8}
                    wrapperStyle={{ paddingBottom: '20px', fontSize: '11px', fontWeight: 500 }} 
                  />
                  <Line type="monotone" dataKey="PTC" name="PTC Chiller..." stroke={COLORS.blue} strokeWidth={1.5} dot={false} />
                  <Line type="monotone" dataKey="SAT1" name="SAT-1 Chiller..." stroke={COLORS.red} strokeWidth={1.5} dot={false} />
                  <Line type="monotone" dataKey="TG" name="TG Chiller..." stroke={COLORS.yellow} strokeWidth={1.5} dot={false} />
                  <Line type="monotone" dataKey="MTB" name="MTB Solar..." stroke={COLORS.green} strokeWidth={1.5} dot={false} />
                  <Line type="monotone" dataKey="DCA" name="DCA..." stroke={COLORS.orange} strokeWidth={1.5} dot={false} />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>

        {/* Chart 2: Main Categories */}
        <div className="card bg-[var(--color-bg-surface)] shadow-sm border border-[var(--color-border-default)]">
          <div className="card-body p-[var(--space-lg)]">
             <h3 className="text-[length:var(--font-size-sm)] font-bold text-[var(--color-text-primary)] mb-[var(--space-md)]">
              Monthly distribution of Top 5 main category of carbon emiss... <span className="text-[var(--color-text-tertiary)] font-normal">(tCO₂-e)</span>
            </h3>

            <div className="h-[300px] w-full">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={monthlyCatData} margin={{ top: 10, right: 10, left: -10, bottom: 0 }}>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="var(--color-border-subtle)" />
                  <XAxis 
                    dataKey="month" 
                    axisLine={false} 
                    tickLine={false} 
                    tick={{ fill: 'var(--color-text-tertiary)', fontSize: 11 }} 
                    tickFormatter={(val) => val.slice(0, 7)}
                    dy={10}
                  />
                  <YAxis 
                    axisLine={false} 
                    tickLine={false} 
                    tick={{ fill: 'var(--color-text-tertiary)', fontSize: 11 }}
                    tickFormatter={(val) => val.toLocaleString()}
                  />
                  <Tooltip contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }} />
                  <Legend 
                    verticalAlign="top" 
                    align="left"
                    iconType="square"
                    iconSize={8}
                    wrapperStyle={{ paddingBottom: '20px', fontSize: '11px', fontWeight: 500 }} 
                  />
                  <Line type="monotone" dataKey="gas" name="Natural gas" stroke={COLORS.green} strokeWidth={1.5} dot={false} />
                  <Line type="monotone" dataKey="electricity" name="Electricity" stroke={COLORS.blue} strokeWidth={1.5} dot={false} />
                  <Line type="monotone" dataKey="gasoline" name="Gasoline" stroke={COLORS.orange} strokeWidth={1.5} dot={false} />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>

      </div>

      {/* --- Row 2 --- */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-[var(--space-lg)]">
        
        {/* Chart 3: Carbon Emission Trend */}
        <div className="card bg-[var(--color-bg-surface)] shadow-sm border border-[var(--color-border-default)]">
          <div className="card-body p-[var(--space-lg)]">
            <div className="flex justify-between items-center mb-[var(--space-md)]">
                <h3 className="text-[length:var(--font-size-base)] font-bold text-[var(--color-text-primary)]">
                    Carbon emission trend
                </h3>
                <div className="flex items-center gap-1 text-[var(--color-text-tertiary)] text-[length:var(--font-size-xs)] cursor-pointer">
                    All energy/fuel
                    <Icons.ChevronDown className="w-3 h-3" />
                </div>
            </div>

            <div className="h-[300px] w-full">
               <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={trendData} margin={{ top: 10, right: 0, left: -10, bottom: 0 }}>
                  <defs>
                    <linearGradient id="colorTrend" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor={COLORS.green} stopOpacity={0.3}/>
                      <stop offset="95%" stopColor={COLORS.green} stopOpacity={0.05}/>
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="var(--color-border-subtle)" />
                  <XAxis 
                    dataKey="month" 
                    axisLine={false} 
                    tickLine={false} 
                    tick={{ fill: 'var(--color-text-tertiary)', fontSize: 11 }} 
                    tickFormatter={(val) => val.slice(0, 7)}
                    dy={10}
                  />
                  <YAxis 
                    axisLine={false} 
                    tickLine={false} 
                    tick={{ fill: 'var(--color-text-tertiary)', fontSize: 11 }}
                    tickFormatter={(val) => val.toLocaleString()}
                  />
                  <Tooltip content={<CustomTrendTooltip />} cursor={{ stroke: 'var(--color-text-disabled)', strokeDasharray: '3 3' }} />
                  <Area type="monotone" dataKey="value" stroke={COLORS.green} fillOpacity={1} fill="url(#colorTrend)" strokeWidth={2} />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>

        {/* Chart 4: Carbon Emission Intensity */}
        <div className="card bg-[var(--color-bg-surface)] shadow-sm border border-[var(--color-border-default)]">
          <div className="card-body p-[var(--space-lg)]">
            <div className="flex justify-between items-center mb-[var(--space-md)]">
                <h3 className="text-[length:var(--font-size-base)] font-bold text-[var(--color-text-primary)]">
                    Carbon emission intensity
                </h3>
                <div className="flex items-center gap-1 text-[var(--color-text-tertiary)] text-[length:var(--font-size-xs)] cursor-pointer">
                    Output
                    <Icons.ChevronDown className="w-3 h-3" />
                </div>
            </div>

            <div className="h-[300px] w-full">
               <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={intensityData} margin={{ top: 10, right: 0, left: -20, bottom: 0 }}>
                   <defs>
                    <linearGradient id="colorIntensity" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor={COLORS.green} stopOpacity={0.3}/>
                      <stop offset="95%" stopColor={COLORS.green} stopOpacity={0.05}/>
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="var(--color-border-subtle)" />
                  <XAxis 
                    dataKey="month" 
                    axisLine={false} 
                    tickLine={false} 
                    tick={{ fill: 'var(--color-text-tertiary)', fontSize: 11 }} 
                    tickFormatter={(val) => val.slice(0, 7)}
                    dy={10}
                  />
                  <YAxis 
                    axisLine={false} 
                    tickLine={false} 
                    tick={{ fill: 'var(--color-text-tertiary)', fontSize: 11 }}
                  />
                  <Tooltip contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }} />
                  <Area 
                    type="monotone" 
                    dataKey="value" 
                    stroke={COLORS.green} 
                    fillOpacity={1} 
                    fill="url(#colorIntensity)" 
                    strokeWidth={2} 
                    activeDot={{ r: 6, fill: COLORS.blue, stroke: '#fff', strokeWidth: 2 }} // Blue dot highlight from screenshot
                  />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Reports;