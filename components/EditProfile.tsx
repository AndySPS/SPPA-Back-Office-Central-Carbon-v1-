import React from 'react';
import { Icons } from './Icons';

interface EditProfileProps {
  onBack: () => void;
}

const EditProfile: React.FC<EditProfileProps> = ({ onBack }) => {
  return (
    <div className="flex flex-col w-full max-w-3xl">
      {/* Header */}
      <div className="flex items-center gap-[var(--space-md)] mb-[var(--space-lg)]">
        <button onClick={onBack} className="btn btn-ghost btn-circle btn-sm">
          <Icons.ArrowLeft className="w-5 h-5 text-[var(--color-text-primary)]" />
        </button>
        <h1 className="text-[length:var(--font-size-xl)] font-bold text-[var(--color-text-primary)]">Edit Profile</h1>
      </div>

      <div className="card bg-[var(--color-bg-surface)] shadow-sm border border-[var(--color-border-default)]">
        <div className="card-body p-[var(--space-lg)] gap-[var(--space-lg)]">
            
            {/* Display Name */}
            <div className="form-control w-full">
              <label className="label pl-0 pt-0">
                <span className="label-text font-bold text-[var(--color-text-primary)] text-[length:var(--font-size-sm)]">Display name</span>
              </label>
              <div className="relative">
                <input 
                  type="text" 
                  defaultValue="Andy Watts"
                  className="input input-bordered w-full text-[length:var(--font-size-base)] text-[var(--color-text-primary)] pr-20" 
                />
                <div className="absolute inset-y-0 right-0 pr-3 flex items-center gap-1.5 pointer-events-none">
                  <div className="w-8 h-8 rounded-full bg-[var(--color-accent-subtle)] flex items-center justify-center">
                      <Icons.Mountain className="w-4 h-4 text-[var(--color-accent)]" />
                  </div>
                  <Icons.Lock className="w-4 h-4 text-[var(--color-text-primary)]" />
                </div>
              </div>
            </div>

             {/* First Name */}
            <div className="form-control w-full">
              <label className="label pl-0 pt-0">
                <span className="label-text font-bold text-[var(--color-text-primary)] text-[length:var(--font-size-sm)]">First name</span>
              </label>
              <div className="relative">
                <input 
                  type="text" 
                  defaultValue="Andy"
                  className="input input-bordered w-full text-[length:var(--font-size-base)] text-[var(--color-text-primary)] pr-20" 
                />
                 <div className="absolute inset-y-0 right-0 pr-3 flex items-center gap-1.5 pointer-events-none">
                  <div className="w-8 h-8 rounded-full bg-[var(--color-accent-subtle)] flex items-center justify-center">
                      <Icons.Mountain className="w-4 h-4 text-[var(--color-accent)]" />
                  </div>
                  <Icons.Lock className="w-4 h-4 text-[var(--color-text-primary)]" />
                </div>
              </div>
            </div>

            {/* Last Name */}
            <div className="form-control w-full">
              <label className="label pl-0 pt-0">
                <span className="label-text font-bold text-[var(--color-text-primary)] text-[length:var(--font-size-sm)]">Last name</span>
              </label>
              <div className="relative">
                <input 
                  type="text" 
                  defaultValue="Watts"
                  className="input input-bordered w-full text-[length:var(--font-size-base)] text-[var(--color-text-primary)] pr-20" 
                />
                 <div className="absolute inset-y-0 right-0 pr-3 flex items-center gap-1.5 pointer-events-none">
                  <div className="w-8 h-8 rounded-full bg-[var(--color-accent-subtle)] flex items-center justify-center">
                      <Icons.Mountain className="w-4 h-4 text-[var(--color-accent)]" />
                  </div>
                  <Icons.Lock className="w-4 h-4 text-[var(--color-text-primary)]" />
                </div>
              </div>
            </div>
            
        </div>
      </div>

      {/* Button Action */}
      <div className="flex justify-end mt-[var(--space-xl)]">
          <button className="btn bg-[var(--color-border-default)] text-[var(--color-text-disabled)] border-none hover:bg-[var(--color-text-tertiary)] hover:text-white normal-case px-6 text-[length:var(--font-size-base)] font-bold min-w-[120px]">
              Save changes
          </button>
      </div>
    </div>
  );
};

export default EditProfile;