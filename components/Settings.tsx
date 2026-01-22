import React from 'react';

const Settings: React.FC = () => {
  return (
    <div className="flex flex-col w-full max-w-3xl">
       <h1 className="text-[length:var(--font-size-2xl)] font-bold text-[var(--color-text-tertiary)] mb-[var(--space-lg)]">Settings</h1>

       <div className="card bg-[var(--color-bg-surface)] shadow-sm border border-[var(--color-border-default)]">
         <div className="card-body p-[var(--space-lg)] gap-[var(--space-lg)]">
            <h2 className="text-[length:var(--font-size-lg)] font-bold text-[var(--color-text-primary)]">Language</h2>

            <div className="form-control w-full">
              <label className="label pl-0 pt-0">
                <span className="label-text font-bold text-[var(--color-text-primary)] text-[length:var(--font-size-sm)]">Language</span>
              </label>
              <select className="select select-bordered w-full text-[length:var(--font-size-base)] font-normal text-[var(--color-text-primary)]">
                <option>English</option>
                <option>Thai</option>
              </select>
            </div>
         </div>
       </div>

       <div className="flex justify-end mt-[var(--space-xl)]">
          <button className="btn bg-[var(--color-border-default)] text-[var(--color-text-disabled)] border-none hover:bg-[var(--color-text-tertiary)] hover:text-white normal-case px-6 text-[length:var(--font-size-base)] font-bold min-w-[120px]">
              Save changes
          </button>
      </div>
    </div>
  );
};

export default Settings;