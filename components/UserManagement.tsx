import React from 'react';
import { Icons } from './Icons';
import { UserManagementItem } from '../types';

interface UserManagementProps {
  users: UserManagementItem[];
  onEditUser: (user: UserManagementItem) => void;
  onInviteUser: () => void;
}

const UserManagement: React.FC<UserManagementProps> = ({ users, onEditUser, onInviteUser }) => {
  return (
    <div className="flex flex-col h-full bg-[var(--color-bg-surface)] rounded-lg shadow-sm border border-[var(--color-border-default)]">
      <div className="p-[var(--space-lg)]">
        <h1 className="text-[length:var(--font-size-xl)] font-bold text-[var(--color-text-primary)] mb-[var(--space-lg)]">User Management</h1>
        
        <div className="flex flex-col sm:flex-row justify-between items-center gap-[var(--space-md)] mb-[var(--space-lg)]">
          <div className="relative w-full sm:w-80">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Icons.Search className="h-5 w-5 text-[var(--color-text-disabled)]" />
            </div>
            <input
              type="text"
              placeholder="Search"
              className="input input-bordered w-full pl-10 h-10 text-[length:var(--font-size-sm)]"
            />
          </div>
          <button 
            onClick={onInviteUser}
            className="btn btn-primary bg-[var(--color-brand-primary)] border-[var(--color-brand-primary)] text-white normal-case gap-2 h-10 min-h-0"
          >
            <Icons.Plus className="w-4 h-4" />
            Invite user
          </button>
        </div>

        <div className="overflow-x-auto">
          <table className="table w-full">
            <thead>
              <tr className="border-b border-[var(--color-border-subtle)]">
                <th className="text-[length:var(--font-size-xs)] font-semibold text-[var(--color-text-tertiary)] uppercase tracking-wider py-[var(--space-md)] pl-0">Display Name</th>
                <th className="text-[length:var(--font-size-xs)] font-semibold text-[var(--color-text-tertiary)] uppercase tracking-wider py-[var(--space-md)]">Email Address</th>
                <th className="text-[length:var(--font-size-xs)] font-semibold text-[var(--color-text-tertiary)] uppercase tracking-wider py-[var(--space-md)]">Role</th>
                <th className="text-[length:var(--font-size-xs)] font-semibold text-[var(--color-text-tertiary)] uppercase tracking-wider py-[var(--space-md)]">Status</th>
                <th className="text-[length:var(--font-size-xs)] font-semibold text-[var(--color-text-tertiary)] uppercase tracking-wider py-[var(--space-md)]">Created On</th>
                <th className="py-[var(--space-md)]"></th>
              </tr>
            </thead>
            <tbody>
              {users.map((user) => (
                <tr key={user.id} className="hover border-b border-[var(--color-border-subtle)] last:border-none">
                  <td className="pl-0 py-[var(--space-md)] font-medium text-[var(--color-text-primary)]">{user.name}</td>
                  <td className="py-[var(--space-md)] text-[var(--color-text-secondary)]">{user.email}</td>
                  <td className="py-[var(--space-md)] text-[var(--color-text-primary)]">{user.role}</td>
                  <td className="py-[var(--space-md)]">
                    <span className="badge bg-[var(--color-success-subtle)] text-[var(--color-success)] border-none rounded py-3 px-3 text-[length:var(--font-size-xs)] font-semibold">
                      {user.status}
                    </span>
                  </td>
                  <td className="py-[var(--space-md)] text-[var(--color-text-secondary)] tabular-nums">{user.createdOn}</td>
                  <td className="py-[var(--space-md)] text-right">
                    <button 
                      onClick={() => onEditUser(user)}
                      className="btn btn-ghost btn-sm gap-2 text-[var(--color-text-secondary)] hover:bg-[var(--color-bg-surface-hover)] font-medium normal-case"
                    >
                      <Icons.Edit className="w-3.5 h-3.5" />
                      Edit
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="flex flex-col sm:flex-row justify-between items-center mt-[var(--space-lg)] text-[length:var(--font-size-sm)] text-[var(--color-text-tertiary)]">
          <div className="mb-[var(--space-md)] sm:mb-0">
            Showing 1 to {users.length} of {users.length} entries
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

export default UserManagement;