import React from 'react';
import { Icons } from './Icons';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  Legend
} from 'recharts';

// Branding Colors from tokens (mapped to JS for Recharts)
const COLORS = {
  primary: '#FA0001',   // Brand Primary (Red)
  secondary: '#000000', // Brand Secondary (Black)
  gray: '#6b7280',      // Tertiary
  success: '#059669',   // Success (Green)
  blue: '#3b82f6',      // Blue
  orange: '#f97316',    // Orange
  purple: '#a855f7',    // Purple
  subtle: '#e5e7eb',    // Border/Subtle
};

// Data for Scope Distribution
const scopeData = [
  { name: 'Scope 1', value: 42999.87, percentage: 1.04, color: COLORS.success },
  { name: 'Scope 2', value: 296985.43, percentage: 7.16, color: COLORS.primary },
  { name: 'Scope 3', value: 3806408.84, percentage: 91.8, color: COLORS.secondary },
];

// Data for Top 5 Org Boundaries (Sorted desc for visual stack if needed, but horizontal bars usually auto-sort or use provided order)
const orgBoundaryData = [
  { name: 'Food', value: 3528006.74 },
  { name: 'Non-Food DC', value: 209192.35 },
  { name: 'Property', value: 140852.44 },
  { name: 'Fashion', value: 128101.39 },
  { name: 'Hardline', value: 120638.91 },
];

// Data for Top 5 Main Categories
const categoryData = [
  { name: 'Electricity', value: 381864.27, percentage: 9.21 },
  { name: 'Gasoline', value: 153132.20, percentage: 3.69 },
  { name: 'Non-Hazardous Waste', value: 39060.97, percentage: 0.94 },
  { name: 'Diesel B7', value: 14418.51, percentage: 0.35 },
  { name: 'Gasohol 91', value: 6330.72, percentage: 0.15 },
];

// Colors for the Pie Chart matching screenshot: Green, Blue, Orange, Gray, Purple
const COLORS_PIE = [COLORS.success, COLORS.blue, COLORS.orange, COLORS.gray, COLORS.purple];

const Dashboard: React.FC = () => {
  return (
    <div className="flex flex-col w-full gap-[var(--space-lg)]">
      
      {/* --- Filter Header --- */}
      <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-[var(--space-md)]">
        <div className="flex flex-wrap items-center gap-[var(--space-md)]">
          <select className="select select-bordered select-sm w-full md:w-auto bg-[var(--color-bg-surface)] text-[var(--color-text-primary)] border-[var(--color-border-default)]">
            <option>Central Group / CRC TH</option>
          </select>
          
          <div className="flex items-center gap-[var(--space-sm)]">
            <span className="text-[var(--color-text-tertiary)] text-[length:var(--font-size-sm)]">Year</span>
            <select className="select select-bordered select-sm w-24 bg-[var(--color-bg-surface)] text-[var(--color-text-primary)] border-[var(--color-border-default)]">
              <option>2023</option>
              <option>2022</option>
            </select>
          </div>

          <button className="btn btn-outline btn-sm border-[var(--color-brand-primary)] text-[var(--color-brand-primary)] hover:bg-[var(--color-brand-primary)] hover:text-white normal-case">
            Query
          </button>
        </div>

        <button className="btn btn-sm bg-[var(--color-success)] hover:bg-[#047857] text-white border-none normal-case gap-2">
           View Dashboard
           <Icons.ArrowRight className="w-4 h-4" />
        </button>
      </div>

      {/* --- KPI Row --- */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-[var(--space-lg)]">
        {/* Emission Quota Card */}
        <div className="card bg-[var(--color-bg-surface)] shadow-sm border border-[var(--color-border-default)]">
            <div className="card-body p-[var(--space-lg)]">
                <div className="flex justify-between items-center mb-[var(--space-xs)]">
                    <span className="text-[length:var(--font-size-sm)] font-bold text-[var(--color-text-tertiary)] flex items-center gap-2">
                        Period emission quota (tCO₂-e)
                        <Icons.Edit className="w-3 h-3 text-[var(--color-success)] cursor-pointer" />
                    </span>
                    <span className="text-[length:var(--font-size-xl)] font-bold text-[var(--color-text-primary)]">0</span>
                </div>
                {/* Progress Bar */}
                <div className="w-full h-2 bg-[var(--color-border-default)] rounded-full mb-[var(--space-sm)] overflow-hidden">
                    <div className="h-full bg-[var(--color-success)] w-[100%]"></div>
                </div>
                
                <div className="flex justify-between items-end mt-[var(--space-md)]">
                     <span className="text-[length:var(--font-size-sm)] font-bold text-[var(--color-text-tertiary)]">
                        Period carbon emission (tCO₂-e)
                    </span>
                     <span className="text-[length:var(--font-size-2xl)] font-bold text-[var(--color-text-primary)]">
                        4,146,394.14
                    </span>
                </div>
            </div>
        </div>

        {/* Abatement & RECs Card */}
        <div className="grid grid-cols-2 gap-[var(--space-lg)]">
             <div className="card bg-[var(--color-bg-surface)] shadow-sm border border-[var(--color-border-default)]">
                <div className="card-body p-[var(--space-lg)]">
                    <div className="text-[length:var(--font-size-sm)] font-bold text-[var(--color-text-tertiary)] mb-[var(--space-md)]">
                        Carbon emission abatement (tCO₂-e)
                    </div>
                    <div className="text-[length:var(--font-size-2xl)] font-bold text-[var(--color-text-primary)]">
                        0
                    </div>
                </div>
             </div>
             <div className="card bg-[var(--color-bg-surface)] shadow-sm border border-[var(--color-border-default)]">
                <div className="card-body p-[var(--space-lg)]">
                    <div className="text-[length:var(--font-size-sm)] font-bold text-[var(--color-text-tertiary)] mb-[var(--space-md)]">
                        RECs Used
                    </div>
                    <div className="text-[length:var(--font-size-2xl)] font-bold text-[var(--color-text-primary)]">
                        0
                    </div>
                </div>
             </div>
        </div>
      </div>

      {/* --- Row 2: Distribution & Map --- */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-[var(--space-lg)]">
        
        {/* Scope Distribution */}
        <div className="card bg-[var(--color-bg-surface)] shadow-sm border border-[var(--color-border-default)]">
            <div className="card-body p-[var(--space-lg)]">
                <h3 className="text-[length:var(--font-size-base)] font-bold text-[var(--color-text-primary)] mb-[var(--space-lg)]">
                    Distribution of operational boundaries of carbon emissions
                </h3>

                {/* Stacked Bar Visual - Hardcoded based on data percentages */}
                <div className="flex h-4 w-full rounded-full overflow-hidden mb-[var(--space-md)]">
                    <div style={{ width: '1.04%', backgroundColor: COLORS.success }}></div>
                    <div style={{ width: '7.16%', backgroundColor: COLORS.primary }}></div>
                    <div style={{ width: '91.8%', backgroundColor: COLORS.secondary }}></div>
                </div>

                {/* Legend/List */}
                <div className="flex flex-col gap-[var(--space-md)] mt-[var(--space-md)]">
                    {scopeData.map((scope) => (
                        <div key={scope.name} className="flex items-center justify-between p-[var(--space-sm)] rounded-lg hover:bg-[var(--color-bg-surface-hover)]">
                            <div className="flex items-center gap-[var(--space-md)]">
                                <div className="flex items-center gap-2 w-24">
                                    <div className="w-2 h-2 rounded-full" style={{ backgroundColor: scope.color }}></div>
                                    <span className="text-[length:var(--font-size-sm)] font-medium text-[var(--color-text-tertiary)]">{scope.name}</span>
                                </div>
                                <div className="bg-[var(--color-bg-canvas)] px-2 py-1 rounded text-[length:var(--font-size-xs)] font-bold text-[var(--color-text-primary)]">
                                    {scope.percentage}%
                                </div>
                            </div>
                            <div className="text-[length:var(--font-size-lg)] font-bold text-[var(--color-text-primary)]">
                                {scope.value.toLocaleString()} <span className="text-[length:var(--font-size-xs)] font-normal text-[var(--color-text-tertiary)]">tCO₂-e</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>

        {/* Map */}
        <div className="card bg-[var(--color-bg-surface)] shadow-sm border border-[var(--color-border-default)] overflow-hidden">
             <div className="p-[var(--space-lg)] pb-0">
                <h3 className="text-[length:var(--font-size-base)] font-bold text-[var(--color-text-primary)]">
                    Organizational boundary map
                </h3>
             </div>
             <div className="relative w-full h-full min-h-[300px] mt-[var(--space-md)] bg-[var(--color-bg-canvas)]">
                 {/* Map Placeholder Image */}
                 <img 
                    src="https://globalvoices.org/wp-content/uploads/2017/01/bangkok_center.png" 
                    alt="Map of Bangkok" 
                    className="w-full h-full object-cover opacity-80"
                 />
                 <div className="absolute top-4 right-4 bg-white p-2 rounded shadow-md cursor-pointer">
                    <Icons.Plus className="w-5 h-5 text-gray-600" />
                 </div>
                 <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    <span className="text-[var(--color-brand-primary)] font-bold text-lg drop-shadow-md bg-white/80 px-2 rounded">Bangkok</span>
                 </div>
             </div>
        </div>
      </div>

      {/* --- Row 3: Charts --- */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-[var(--space-lg)]">
        
        {/* Top 5 Org Boundaries Chart */}
        <div className="card bg-[var(--color-bg-surface)] shadow-sm border border-[var(--color-border-default)]">
            <div className="card-body p-[var(--space-lg)]">
                 <h3 className="text-[length:var(--font-size-base)] font-bold text-[var(--color-text-primary)] mb-[var(--space-lg)]">
                    Top 5 organizational boundaries of carbon emissions <span className="text-[var(--color-text-tertiary)] text-[length:var(--font-size-xs)] font-normal">(tCO₂-e)</span>
                </h3>
                
                <div className="h-[300px] w-full">
                    <ResponsiveContainer width="100%" height="100%">
                        <BarChart
                            layout="vertical"
                            data={orgBoundaryData}
                            margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
                        >
                            <CartesianGrid strokeDasharray="3 3" horizontal={true} vertical={false} stroke="var(--color-border-subtle)" />
                            <XAxis type="number" hide />
                            <YAxis 
                                dataKey="name" 
                                type="category" 
                                width={100}
                                tick={{ fill: 'var(--color-text-secondary)', fontSize: 12, fontWeight: 500 }}
                                axisLine={false}
                                tickLine={false}
                            />
                            <Tooltip 
                                cursor={{ fill: 'var(--color-bg-surface-hover)' }}
                                contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}
                            />
                            <Bar dataKey="value" fill={COLORS.success} barSize={20} radius={[0, 4, 4, 0]} />
                        </BarChart>
                    </ResponsiveContainer>
                </div>
            </div>
        </div>

        {/* Top 5 Categories Donut Chart */}
        <div className="card bg-[var(--color-bg-surface)] shadow-sm border border-[var(--color-border-default)]">
            <div className="card-body p-[var(--space-lg)]">
                <h3 className="text-[length:var(--font-size-base)] font-bold text-[var(--color-text-primary)] mb-[var(--space-lg)]">
                    Top 5 main category of carbon emissions <span className="text-[var(--color-text-tertiary)] text-[length:var(--font-size-xs)] font-normal">(tCO₂-e)</span>
                </h3>

                <div className="flex flex-col md:flex-row items-center h-[300px]">
                    <div className="w-full md:w-1/2 h-full">
                         <ResponsiveContainer width="100%" height="100%">
                            <PieChart>
                                <Pie
                                    data={categoryData}
                                    cx="50%"
                                    cy="50%"
                                    innerRadius={60}
                                    outerRadius={80}
                                    paddingAngle={2}
                                    dataKey="value"
                                >
                                    {categoryData.map((entry, index) => (
                                        <Cell key={`cell-${index}`} fill={COLORS_PIE[index % COLORS_PIE.length]} />
                                    ))}
                                </Pie>
                                <Tooltip />
                            </PieChart>
                        </ResponsiveContainer>
                    </div>
                    
                    <div className="w-full md:w-1/2 flex flex-col justify-center gap-2 pl-4">
                        {categoryData.map((entry, index) => (
                            <div key={index} className="flex items-center justify-between text-[length:var(--font-size-xs)]">
                                <div className="flex items-center gap-2">
                                    <div className="w-2 h-2 rounded-full" style={{ backgroundColor: COLORS_PIE[index % COLORS_PIE.length] }}></div>
                                    <span className="text-[var(--color-text-secondary)]">{entry.name}</span>
                                </div>
                                <div className="text-right">
                                    <div className="font-bold text-[var(--color-text-primary)]">{entry.value.toLocaleString()}</div>
                                    <div className="text-[var(--color-text-tertiary)]">{entry.percentage}%</div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>

      </div>
    </div>
  );
};

export default Dashboard;