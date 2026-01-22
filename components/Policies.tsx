import React from 'react';
import { Icons } from './Icons';
import { PolicyItem } from '../types';

interface PoliciesProps {
    onViewPolicy?: (policy: PolicyItem) => void;
}

const policies: PolicyItem[] = [
  { version: 'Version 0.0.4', createdBy: 'Test', createdDate: '2/26/2025', updatedOn: '8/5/2025' },
  { version: 'Version 0.0.3', createdBy: 'Test person', createdDate: '2/26/2025', updatedOn: '5/30/2025' },
  { version: 'Version 0.0.1', createdBy: 'Pranat (Aon) Pannao', createdDate: '2/26/2025', updatedOn: '5/30/2025' },
  { version: 'Version 0.0.5', createdBy: 'Seven Peaks Software - Dev', createdDate: '5/30/2025', updatedOn: '5/30/2025' },
];

const Policies: React.FC<PoliciesProps> = ({ onViewPolicy }) => {
  return (
    <div className="flex flex-col w-full">
      <h1 className="text-[length:var(--font-size-xl)] font-bold text-[var(--color-text-primary)] mb-[var(--space-lg)]">Terms and Conditions</h1>

      {/* Description Card */}
      <div className="card bg-[var(--color-bg-surface)] shadow-sm border border-[var(--color-border-default)] mb-[var(--space-lg)]">
        <div className="card-body p-[var(--space-lg)]">
          <p className="text-[var(--color-text-primary)] text-[length:var(--font-size-base)]">
            Create and update policies for your end customer platform. Once published users will be asked to accept the new policy to continue using the platform.
          </p>
        </div>
      </div>

      {/* Table Card */}
      <div className="card bg-[var(--color-bg-surface)] shadow-sm border border-[var(--color-border-default)]">
        <div className="overflow-x-auto">
          <table className="table w-full">
            <thead>
              <tr className="border-b border-[var(--color-border-subtle)]">
                {['POLICY VERSION', 'CREATED BY', 'CREATED DATE', 'UPDATED ON'].map((header) => (
                  <th key={header} className="text-[length:var(--font-size-xs)] font-semibold text-[var(--color-text-tertiary)] uppercase tracking-wider py-[var(--space-md)] px-[var(--space-lg)] cursor-pointer hover:bg-[var(--color-bg-surface-hover)]">
                    <div className="flex items-center gap-[var(--space-xs)]">
                      {header}
                      <Icons.ArrowUpDown className="w-3 h-3 text-[var(--color-text-disabled)]" />
                    </div>
                  </th>
                ))}
                <th className="py-[var(--space-md)] px-[var(--space-lg)]"></th>
              </tr>
            </thead>
            <tbody>
              {policies.map((policy, index) => (
                <tr key={index} className="hover border-b border-[var(--color-border-subtle)] last:border-none">
                  <td className="px-[var(--space-lg)] py-[var(--space-md)] font-medium text-[var(--color-text-primary)]">{policy.version}</td>
                  <td className="px-[var(--space-lg)] py-[var(--space-md)] text-[var(--color-text-primary)]">{policy.createdBy}</td>
                  <td className="px-[var(--space-lg)] py-[var(--space-md)] text-[var(--color-text-primary)]">{policy.createdDate}</td>
                  <td className="px-[var(--space-lg)] py-[var(--space-md)] text-[var(--color-text-primary)]">{policy.updatedOn}</td>
                  <td className="px-[var(--space-lg)] py-[var(--space-md)] text-right">
                    <button 
                        onClick={() => onViewPolicy && onViewPolicy(policy)}
                        className="btn btn-ghost btn-sm btn-square text-[var(--color-text-primary)] hover:bg-[var(--color-bg-surface-hover)]"
                    >
                      <Icons.Eye className="w-4 h-4" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
         <div className="flex flex-col sm:flex-row justify-between items-center p-[var(--space-lg)] border-t border-[var(--color-border-default)] text-[length:var(--font-size-sm)] text-[var(--color-text-tertiary)]">
          <div className="mb-[var(--space-md)] sm:mb-0">
            Showing 1 to {policies.length} of {policies.length} entries
          </div>
          <div className="flex items-center gap-[var(--space-md)]">
            <div className="flex items-center gap-1">
               <button className="btn btn-xs btn-ghost text-[var(--color-text-disabled)] disabled:bg-transparent" disabled>
                  <Icons.ChevronsLeft className="w-4 h-4" />
               </button>
               <button className="btn btn-xs btn-ghost text-[var(--color-text-disabled)] disabled:bg-transparent" disabled>
                  <Icons.ChevronLeft className="w-4 h-4" />
               </button>
               <span className="font-medium text-[var(--color-text-primary)] px-2">Page 1 of 1</span>
               <button className="btn btn-xs btn-ghost text-[var(--color-text-disabled)] disabled:bg-transparent" disabled>
                  <Icons.ChevronRight className="w-4 h-4" />
               </button>
               <button className="btn btn-xs btn-ghost text-[var(--color-text-disabled)] disabled:bg-transparent" disabled>
                  <Icons.ChevronsRight className="w-4 h-4" />
               </button>
            </div>
            <select className="select select-bordered select-xs w-16 text-[var(--color-text-secondary)]">
              <option>10</option>
              <option>25</option>
              <option>50</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Policies;