import React from 'react';
import { Icons } from './Icons';
import { UserManagementItem } from '../types';

interface EditUserProps {
  user: UserManagementItem | null;
  onBack: () => void;
}

const EditUser: React.FC<EditUserProps> = ({ user, onBack }) => {
  // If no user is selected, we could show an error or empty state, 
  // but for this demo we'll just safeguard or use defaults.
  const displayVal = user?.name || '';
  // Extract first name for demo purposes if available
  const firstNameVal = user?.name ? user.name.split(' ')[0] : '';
  
  return (
    <div className="flex flex-col w-full">
      {/* Header Section - Outside of cards */}
      <div className="flex items-center gap-[var(--space-md)] mb-[var(--space-lg)]">
        <button onClick={onBack} className="btn btn-ghost btn-circle btn-sm">
          <Icons.ArrowLeft className="w-5 h-5 text-[var(--color-text-primary)]" />
        </button>
        <h1 className="text-[length:var(--font-size-xl)] font-bold text-[var(--color-text-primary)]">Edit User</h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-[var(--space-lg)]">
        {/* User Details Card */}
        <div className="card bg-[var(--color-bg-surface)] shadow-sm border border-[var(--color-border-default)] h-fit">
          <div className="card-body p-[var(--space-lg)] gap-[var(--space-lg)]">
            <h2 className="text-[length:var(--font-size-lg)] font-bold text-[var(--color-text-primary)]">User Details</h2>
            
            <div className="form-control w-full">
              <label className="label pl-0 pt-0">
                <span className="label-text font-semibold text-[var(--color-text-primary)] text-[length:var(--font-size-xs)]">Display name</span>
              </label>
              <div className="relative">
                <input 
                  type="text" 
                  defaultValue={displayVal} 
                  className="input input-bordered w-full text-[length:var(--font-size-sm)] text-[var(--color-text-primary)] pr-16" 
                />
                <div className="absolute inset-y-0 right-0 pr-3 flex items-center gap-1 pointer-events-none">
                  <div className="w-6 h-6 rounded-full bg-[var(--color-accent-subtle)] flex items-center justify-center">
                      <Icons.Users className="w-3.5 h-3.5 text-[var(--color-accent)]" />
                  </div>
                  <Icons.Lock className="w-3.5 h-3.5 text-[var(--color-text-disabled)]" />
                </div>
              </div>
            </div>

            <div className="form-control w-full">
              <label className="label pl-0 pt-0">
                <span className="label-text font-semibold text-[var(--color-text-primary)] text-[length:var(--font-size-xs)]">First name</span>
              </label>
              <div className="relative">
                <input 
                  type="text" 
                  defaultValue={firstNameVal} 
                  className="input input-bordered w-full text-[length:var(--font-size-sm)] text-[var(--color-text-primary)] pr-16" 
                />
                <div className="absolute inset-y-0 right-0 pr-3 flex items-center gap-1 pointer-events-none">
                  <div className="w-6 h-6 rounded-full bg-[var(--color-accent-subtle)] flex items-center justify-center">
                      <Icons.Users className="w-3.5 h-3.5 text-[var(--color-accent)]" />
                  </div>
                  <Icons.Lock className="w-3.5 h-3.5 text-[var(--color-text-disabled)]" />
                </div>
              </div>
            </div>

            <div className="form-control w-full">
              <label className="label pl-0 pt-0">
                <span className="label-text font-semibold text-[var(--color-text-primary)] text-[length:var(--font-size-xs)]">Last name</span>
              </label>
              <div className="relative">
                <input 
                  type="text" 
                  placeholder="Last name" 
                  className="input input-bordered w-full text-[length:var(--font-size-sm)] text-[var(--color-text-primary)] pr-16" 
                />
                <div className="absolute inset-y-0 right-0 pr-3 flex items-center gap-1 pointer-events-none">
                  <div className="w-6 h-6 rounded-full bg-[var(--color-accent-subtle)] flex items-center justify-center">
                      <Icons.Users className="w-3.5 h-3.5 text-[var(--color-accent)]" />
                  </div>
                  <Icons.Lock className="w-3.5 h-3.5 text-[var(--color-text-disabled)]" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* User Permissions Card */}
        <div className="card bg-[var(--color-bg-surface)] shadow-sm border border-[var(--color-border-default)] h-fit">
          <div className="card-body p-[var(--space-lg)] gap-[var(--space-lg)]">
            <h2 className="text-[length:var(--font-size-lg)] font-bold text-[var(--color-text-primary)]">User Permissions</h2>

            <div className="form-control w-full">
              <label className="label pl-0 pt-0">
                <span className="label-text font-semibold text-[var(--color-text-primary)] text-[length:var(--font-size-xs)]">Status</span>
              </label>
              <select className="select select-bordered w-full text-[length:var(--font-size-sm)] font-normal">
                <option>Active</option>
                <option>Inactive</option>
              </select>
            </div>

            <div className="form-control w-full">
              <label className="label pl-0 pt-0">
                <span className="label-text font-semibold text-[var(--color-text-primary)] text-[length:var(--font-size-xs)]">Role</span>
              </label>
              <div className="border border-[var(--color-border-default)] rounded-lg p-[var(--space-sm)] min-h-[3rem] flex items-center justify-between bg-[var(--color-bg-surface)]">
                <div className="flex gap-[var(--space-sm)]">
                  <span className="bg-[var(--color-brand-primary)] text-white px-3 py-1 rounded-full text-[length:var(--font-size-sm)] font-medium flex items-center gap-[var(--space-sm)]">
                    Manager
                    <button className="hover:text-[var(--color-brand-subtle)]">
                      <Icons.X className="w-3 h-3" />
                    </button>
                  </span>
                </div>
                <Icons.ChevronDown className="w-4 h-4 text-[var(--color-text-disabled)] mr-[var(--space-sm)]" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-[var(--space-xl)] flex justify-end">
        <button className="btn bg-[var(--color-border-default)] text-[var(--color-text-disabled)] border-none hover:bg-[var(--color-text-tertiary)] hover:text-white normal-case px-6">
            Save changes
        </button>
      </div>
    </div>
  );
};

export default EditUser;