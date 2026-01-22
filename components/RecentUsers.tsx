import React from 'react';
import { User } from '../types';
import { Icons } from './Icons';

const users: User[] = [
  { id: '1', name: 'Jostein Aksnes', email: 'jostein.aksnes@7peakssoftware.com', timeAgo: '2 days ago' },
  { id: '2', name: 'Giorgio Desideri', email: 'giorgio@7peakssoftware.com', timeAgo: '3 days ago' },
  { id: '3', name: 'Harsha Gowda', email: 'harsha@7peakssoftware.com', timeAgo: '3 days ago' },
  { id: '4', name: 'Benjapol (Ben) Morya', email: 'Benjapol.Morya@7peakssoftware.com', timeAgo: '6 days ago' },
  { id: '5', name: 'Andy Watts', email: 'andy@7peakssoftware.com', timeAgo: '6 days ago' },
  { id: '6', name: 'Dinand Lybaert', email: 'dinand.lybaert@7peakssoftware.com', timeAgo: '6 days ago' },
];

const RecentUsers: React.FC = () => {
  return (
    <div className="card bg-[var(--color-bg-surface)] shadow-sm border border-[var(--color-border-default)] h-full">
      <div className="card-body p-0">
        <div className="p-[var(--space-lg)] pb-[var(--space-sm)] flex justify-between items-center">
            <h2 className="card-title text-[length:var(--font-size-sm)] text-[var(--color-text-tertiary)] uppercase tracking-wide font-bold">Recent Users</h2>
            <Icons.Users className="w-4 h-4 text-[var(--color-brand-secondary)]" />
        </div>
        
        <div className="overflow-y-auto max-h-[400px]">
          <table className="table w-full">
            <tbody>
              {users.map((user) => (
                <tr key={user.id} className="hover border-b border-[var(--color-border-subtle)] last:border-none">
                  <td className="py-[var(--space-sm)] px-[var(--space-lg)]">
                    <div className="flex flex-col">
                      <span className="font-bold text-[var(--color-text-primary)] text-[length:var(--font-size-sm)]">{user.name}</span>
                      <span className="text-[length:var(--font-size-xs)] text-[var(--color-text-tertiary)] mt-0.5">{user.email}</span>
                    </div>
                  </td>
                  <td className="py-[var(--space-sm)] px-[var(--space-lg)] text-right align-top">
                    <div className="flex items-center justify-end gap-1.5 text-[length:var(--font-size-xs)] text-[var(--color-text-disabled)] whitespace-nowrap mt-1">
                        <Icons.Clock className="w-3.5 h-3.5" />
                        {user.timeAgo}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default RecentUsers;