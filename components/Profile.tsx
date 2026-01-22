import React from 'react';
import { Icons } from './Icons';

interface ProfileProps {
  onEdit: () => void;
}

const Profile: React.FC<ProfileProps> = ({ onEdit }) => {
  return (
    <div className="flex flex-col w-full max-w-3xl">
      <div className="flex items-center gap-[var(--space-xs)] mb-[var(--space-lg)]">
        <h1 className="text-[length:var(--font-size-2xl)] font-bold text-[var(--color-text-tertiary)]">My Profile</h1>
        <button 
          onClick={onEdit}
          className="btn btn-ghost btn-circle btn-sm text-[var(--color-brand-primary)]"
        >
            <Icons.Edit className="w-4 h-4" />
        </button>
      </div>

      <div className="card bg-[var(--color-bg-surface)] shadow-sm border border-[var(--color-border-default)]">
        <div className="card-body p-[var(--space-lg)] gap-[var(--space-lg)]">
           {/* Email */}
           <div>
             <div className="text-[length:var(--font-size-sm)] font-bold text-[var(--color-text-tertiary)] mb-1">Email Address</div>
             <div className="text-[length:var(--font-size-lg)] text-[var(--color-text-primary)]">andy@7peakssoftware.com</div>
           </div>

           {/* Display Name */}
           <div>
             <div className="text-[length:var(--font-size-sm)] font-bold text-[var(--color-text-tertiary)] mb-1">Display name</div>
             <div className="text-[length:var(--font-size-lg)] text-[var(--color-text-primary)]">Andy Watts</div>
           </div>

           {/* First Name */}
           <div>
             <div className="text-[length:var(--font-size-sm)] font-bold text-[var(--color-text-tertiary)] mb-1">First name</div>
             <div className="text-[length:var(--font-size-lg)] text-[var(--color-text-primary)]">Andy</div>
           </div>

           {/* Last Name */}
           <div>
             <div className="text-[length:var(--font-size-sm)] font-bold text-[var(--color-text-tertiary)] mb-1">Last name</div>
             <div className="text-[length:var(--font-size-lg)] text-[var(--color-text-primary)]">Watts</div>
           </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;