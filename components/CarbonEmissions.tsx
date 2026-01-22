import React from 'react';
import { Icons } from './Icons';
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';

// Use CSS variable instead of hardcoded hex to match the Red theme
const CHART_COLOR = 'var(--color-brand-primary)'; 

const chartData = [
  { name: '2023-06', value: 6.5 },
  { name: '2023-07', value: 6.8 },
  { name: '2023-08', value: 9.0 },
  { name: '2023-09', value: 5.2 },
  { name: '2023-10', value: 5.3 },
  { name: '2023-11', value: 5.5 },
  { name: '2023-12', value: 6.0 },
  { name: '2024-01', value: 0 },
  { name: '2024-02', value: 0 },
  { name: '2024-03', value: 0 },
  { name: '2024-04', value: 0 },
  { name: '2024-05', value: 0 },
  { name: '2024-06', value: 0 },
];

const tableData = [
  { id: 1, inputData: '3269.440253', start: '2023-12-01', end: '2023-12-31', source: 'Manual entry', operator: 'CRC MKV Admin', attachments: 0, rule: 1, activityData: '3269.440253470127' },
  { id: 2, inputData: '3025.139810', start: '2023-11-01', end: '2023-11-30', source: 'Manual entry', operator: 'CRC MKV Admin', attachments: 0, rule: 1, activityData: '3025.139809743442' },
  { id: 3, inputData: '2941.440466', start: '2023-10-01', end: '2023-10-31', source: 'Manual entry', operator: 'CRC MKV Admin', attachments: 0, rule: 1, activityData: '2941.440466278102' },
  { id: 4, inputData: '2893.175406', start: '2023-09-01', end: '2023-09-30', source: 'Manual entry', operator: 'CRC MKV Admin', attachments: 0, rule: 1, activityData: '2893.17540590897' },
];

const CarbonEmissions: React.FC = () => {
  return (
    <div className="flex flex-col w-full">
      {/* Header & Controls */}
      <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-[var(--space-md)] mb-[var(--space-lg)]">
        <div className="flex items-center gap-[var(--space-sm)]">
          <button className="btn btn-ghost btn-sm btn-circle text-[var(--color-brand-primary)] hover:bg-[var(--color-brand-subtle)]">
            <Icons.ArrowLeft className="w-5 h-5" />
          </button>
          <h1 className="text-[length:var(--font-size-xl)] font-bold text-[var(--color-text-primary)]">
            Carbon Emissions
          </h1>
        </div>
        <div className="flex gap-[var(--space-sm)]">
            <button className="btn btn-outline border-[var(--color-danger)] text-[var(--color-danger)] hover:bg-[var(--color-danger-subtle)] hover:text-[var(--color-danger)] hover:border-[var(--color-danger)] font-medium normal-case min-w-[100px]">
                Clear data
            </button>
             <button className="btn btn-outline border-[var(--color-brand-primary)] text-[var(--color-brand-primary)] hover:bg-[var(--color-brand-subtle)] hover:text-[var(--color-brand-primary)] hover:border-[var(--color-brand-primary)] font-medium normal-case min-w-[100px]">
                Input data
            </button>
        </div>
      </div>

      {/* Basic Information Section */}
      <div className="card bg-[var(--color-bg-surface)] shadow-sm border border-[var(--color-border-default)] mb-[var(--space-lg)] rounded-l-none border-l-4 border-l-[var(--color-brand-primary)]">
        <div className="card-body p-[var(--space-lg)]">
          <div className="flex items-center gap-[var(--space-sm)] mb-[var(--space-md)]">
            <div className="w-1 h-4 bg-[var(--color-brand-primary)] rounded-full"></div>
            <h2 className="text-[length:var(--font-size-base)] font-bold text-[var(--color-text-primary)]">Basic information</h2>
            <Icons.Edit className="w-3.5 h-3.5 text-[var(--color-brand-primary)] cursor-pointer" />
            <div className="ml-auto text-[length:var(--font-size-xs)] text-[var(--color-text-tertiary)]">
                Update time: 2024-06-17 10:53:45
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-[var(--space-xl)] gap-y-[var(--space-md)] text-[length:var(--font-size-sm)]">
             <div>
                <span className="text-[var(--color-text-tertiary)] font-medium">Code: </span>
                <span className="text-[var(--color-text-primary)]">CSA00003691</span>
             </div>
             <div>
                <span className="text-[var(--color-text-tertiary)] font-medium">Activity template: </span>
                <span className="text-[var(--color-text-primary)] truncate">23.น้ำมันแก๊สโซฮอล์ E20 สำหรับรถ...</span>
                <span className="text-[var(--color-brand-primary)] ml-2 cursor-pointer hover:underline">Details</span>
             </div>
              <div>
                <span className="text-[var(--color-text-tertiary)] font-medium">Organizational boundary: </span>
                <span className="text-[var(--color-text-primary)]">CFM</span>
             </div>
             <div>
                <span className="text-[var(--color-text-tertiary)] font-medium">Operational boundary: </span>
                <span className="text-[var(--color-text-primary)]">Scope1</span>
             </div>
             <div>
                <span className="text-[var(--color-text-tertiary)] font-medium">Device Name | Device ID: </span>
                <span className="text-[var(--color-text-disabled)]">None</span>
             </div>
             <div className="flex items-center gap-2">
                <span className="text-[var(--color-text-tertiary)] font-medium">Extended field: </span>
                <span className="text-[var(--color-text-disabled)]">None</span>
                <Icons.Edit className="w-3 h-3 text-[var(--color-brand-primary)] cursor-pointer" />
             </div>
          </div>
           <div className="mt-[var(--space-sm)]">
                <span className="text-[var(--color-brand-primary)] text-[length:var(--font-size-sm)] font-medium cursor-pointer flex items-center gap-1">
                    Expand
                    <Icons.ChevronDown className="w-4 h-4" />
                </span>
             </div>
        </div>
      </div>

       {/* Trends Section */}
      <div className="card bg-[var(--color-bg-surface)] shadow-sm border border-[var(--color-border-default)] rounded-l-none border-l-4 border-l-[var(--color-brand-primary)]">
        <div className="card-body p-[var(--space-lg)]">
           <div className="flex items-center gap-[var(--space-sm)] mb-[var(--space-lg)]">
            <div className="w-1 h-4 bg-[var(--color-brand-primary)] rounded-full"></div>
            <h2 className="text-[length:var(--font-size-base)] font-bold text-[var(--color-text-primary)]">Carbon emission trend and activity data</h2>
          </div>

          {/* Filters */}
          <div className="flex flex-col lg:flex-row justify-between items-end lg:items-center gap-[var(--space-md)] mb-[var(--space-lg)]">
            <div className="flex items-center gap-[var(--space-sm)]">
                <div className="flex items-center gap-2 border border-[var(--color-border-default)] rounded-md px-3 py-2 bg-[var(--color-bg-surface)]">
                    <span className="text-[length:var(--font-size-sm)] text-[var(--color-text-primary)]">2023-06</span>
                    <Icons.Calendar className="w-4 h-4 text-[var(--color-text-disabled)]" />
                </div>
                <span className="text-[var(--color-text-tertiary)]">-</span>
                <div className="flex items-center gap-2 border border-[var(--color-border-default)] rounded-md px-3 py-2 bg-[var(--color-bg-surface)]">
                    <span className="text-[length:var(--font-size-sm)] text-[var(--color-text-primary)]">2024-06</span>
                    <Icons.Calendar className="w-4 h-4 text-[var(--color-text-disabled)]" />
                </div>
                <button className="btn btn-outline border-[var(--color-brand-primary)] text-[var(--color-brand-primary)] hover:bg-[var(--color-brand-subtle)] hover:text-[var(--color-brand-primary)] hover:border-[var(--color-brand-primary)] btn-sm font-medium normal-case h-[38px]">
                    Query
                </button>
            </div>
             <div className="text-[length:var(--font-size-sm)] text-[var(--color-text-tertiary)]">
                Accounting rule: <span className="text-[var(--color-brand-primary)] font-medium">Emission = AD*EF</span>
            </div>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-[var(--space-lg)] mb-[var(--space-lg)]">
            <div className="border border-[var(--color-border-default)] rounded-lg p-[var(--space-md)]">
                <div className="text-[length:var(--font-size-sm)] text-[var(--color-text-tertiary)] mb-2">Total carbon emission / tCO₂-e</div>
                <div className="text-[length:var(--font-size-2xl)] font-bold text-[var(--color-text-primary)]">44.86</div>
            </div>
             <div className="border border-[var(--color-border-default)] rounded-lg p-[var(--space-md)]">
                <div className="text-[length:var(--font-size-sm)] text-[var(--color-text-tertiary)] mb-2">Total activity data(AD) / Litre</div>
                <div className="text-[length:var(--font-size-2xl)] font-bold text-[var(--color-brand-primary)]">24,683.789482</div>
            </div>
             <div className="border border-[var(--color-border-default)] rounded-lg p-[var(--space-md)]">
                <div className="text-[length:var(--font-size-sm)] text-[var(--color-text-tertiary)] mb-2">Total emission factor(EF) / tCO₂-e/unit</div>
                <div className="text-[length:var(--font-size-2xl)] font-bold text-[var(--color-brand-primary)]">0.001818</div>
            </div>
          </div>

          {/* Chart */}
           <div className="h-[300px] w-full mb-[var(--space-xl)]">
            <ResponsiveContainer width="100%" height="100%">
                <AreaChart
                data={chartData}
                margin={{
                    top: 10,
                    right: 0,
                    left: 0,
                    bottom: 0,
                }}
                >
                <defs>
                    <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor={CHART_COLOR} stopOpacity={0.2}/>
                    <stop offset="95%" stopColor={CHART_COLOR} stopOpacity={0}/>
                    </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="var(--color-border-default)" />
                <XAxis 
                    dataKey="name" 
                    axisLine={false} 
                    tickLine={false} 
                    tick={{ fill: 'var(--color-text-disabled)', fontSize: 11 }} 
                    dy={10}
                />
                <YAxis 
                    axisLine={false} 
                    tickLine={false} 
                    tick={{ fill: 'var(--color-text-disabled)', fontSize: 11 }} 
                />
                <Tooltip 
                    contentStyle={{ borderRadius: 'var(--radius-lg)', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)', backgroundColor: 'var(--color-bg-surface)' }}
                    itemStyle={{ color: 'var(--color-text-primary)' }}
                />
                <Area
                    type="monotone"
                    dataKey="value"
                    stroke={CHART_COLOR}
                    strokeWidth={2}
                    fillOpacity={1}
                    fill="url(#colorValue)"
                />
                </AreaChart>
            </ResponsiveContainer>
            </div>

            {/* Table */}
            <div className="overflow-x-auto">
              <table className="table w-full text-[length:var(--font-size-sm)]">
                <thead>
                  <tr className="border-b border-[var(--color-border-default)] text-[var(--color-text-tertiary)]">
                    <th className="font-normal">No.</th>
                    <th className="font-normal">Input data (Litre)</th>
                    <th className="font-normal">Start time</th>
                    <th className="font-normal">End time</th>
                    <th className="font-normal">Data source</th>
                    <th className="font-normal">
                        <div className="flex items-center gap-1">
                            Operator
                            <Icons.Filter className="w-3 h-3" />
                        </div>
                    </th>
                    <th className="font-normal">Number of attachments</th>
                    <th className="font-normal">AD Accounting rule</th>
                    <th className="font-normal">AD factor</th>
                    <th className="font-normal">Description</th>
                    <th className="font-normal">Activity data</th>
                    <th className="font-normal">Operation</th>
                  </tr>
                </thead>
                <tbody>
                  {tableData.map((row) => (
                    <tr key={row.id} className="hover border-b border-[var(--color-border-subtle)] last:border-none text-[var(--color-text-secondary)]">
                      <td>{row.id}</td>
                      <td>{row.inputData}</td>
                      <td>{row.start}</td>
                      <td>{row.end}</td>
                      <td>{row.source}</td>
                      <td>{row.operator}</td>
                      <td className="text-[var(--color-brand-primary)]">{row.attachments}</td>
                      <td></td>
                      <td>{row.rule}</td>
                      <td></td>
                      <td>{row.activityData}</td>
                      <td>
                         <div className="flex items-center gap-2">
                             <span className="text-[var(--color-brand-primary)] cursor-pointer font-medium hover:underline">Modify</span>
                             <Icons.More className="w-4 h-4 text-[var(--color-text-disabled)] cursor-pointer" />
                         </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

        </div>
      </div>
    </div>
  );
};

export default CarbonEmissions;