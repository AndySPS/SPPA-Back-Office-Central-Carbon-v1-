import React from 'react';
import { Icons } from './Icons';
import { useTheme } from '../hooks/useTheme';

interface HeaderProps {
  onToggleSidebar: () => void;
  onNavigate: (view: string) => void;
}

const Header: React.FC<HeaderProps> = ({ onToggleSidebar, onNavigate }) => {
  const { theme, toggleTheme } = useTheme();

  return (
    <header className="navbar bg-[var(--color-bg-surface)] border-b border-[var(--color-border-default)] h-16 z-20 px-[var(--space-md)] sm:px-[var(--space-lg)]">
      <div className="flex-1 flex items-center gap-[var(--space-md)]">
        <button onClick={onToggleSidebar} className="btn btn-square btn-ghost btn-sm text-[var(--color-text-secondary)] lg:hidden">
          <Icons.Menu className="w-6 h-6" />
        </button>
        <button onClick={onToggleSidebar} className="btn btn-square btn-ghost btn-sm text-[var(--color-text-secondary)] hidden lg:inline-flex">
          <Icons.Menu className="w-6 h-6" />
        </button>
        <span className="text-[length:var(--font-size-lg)] font-bold text-[var(--color-text-primary)]">Carbon Accounting</span>
      </div>
      <div className="flex-none">
        <div className="dropdown dropdown-end">
          <div 
            tabIndex={0} 
            role="button" 
            className="btn btn-ghost normal-case gap-[var(--space-sm)] rounded-full pl-[var(--space-xs)] pr-[var(--space-md)] h-auto min-h-0 py-[var(--space-xs)] hover:bg-[var(--color-bg-surface-hover)] border-none flex items-center"
          >
            <div className="avatar placeholder">
              <div className="bg-black text-white rounded-full w-9 h-9 flex items-center justify-center">
                <span className="text-xs font-medium">AW</span>
              </div>
            </div>
            <div className="hidden md:block text-left">
                <div className="text-[length:var(--font-size-sm)] font-bold text-[var(--color-text-primary)]">Andy Watts</div>
            </div>
          </div>
          
          <div tabIndex={0} className="dropdown-content z-[50] menu p-0 shadow-lg bg-[var(--color-bg-surface)] rounded-lg w-72 mt-[var(--space-sm)] border border-[var(--color-border-subtle)]">
             <div className="px-[var(--space-lg)] py-[var(--space-md)]">
               <div className="font-bold text-[var(--color-text-primary)] text-[length:var(--font-size-sm)]">Andy Watts</div>
               <div className="text-[length:var(--font-size-xs)] text-[var(--color-text-tertiary)] truncate mt-[var(--space-xs)]">andy@7peakssoftware.com</div>
             </div>
             <div className="h-px bg-[var(--color-border-subtle)] w-full"></div>
             <ul className="menu w-full p-[var(--space-sm)] text-[var(--color-text-secondary)]">
               <li>
                  <a 
                    onClick={() => onNavigate('profile')}
                    className="py-[var(--space-sm)] rounded-md text-[length:var(--font-size-sm)] font-medium hover:bg-[var(--color-bg-surface-hover)]"
                  >
                      <Icons.Users className="w-4 h-4" />
                      Profile
                  </a>
               </li>
               <li>
                  <a 
                    onClick={() => onNavigate('settings')}
                    className="py-[var(--space-sm)] rounded-md text-[length:var(--font-size-sm)] font-medium hover:bg-[var(--color-bg-surface-hover)]"
                  >
                      <Icons.Settings className="w-4 h-4" />
                      Settings
                  </a>
               </li>
               <li>
                  <div className="flex items-center justify-between py-[var(--space-sm)] rounded-md text-[length:var(--font-size-sm)] font-medium hover:bg-[var(--color-bg-surface-hover)] active:bg-transparent">
                      <div className="flex items-center gap-[var(--space-sm)]">
                          {theme === 'dark' ? <Icons.Moon className="w-4 h-4" /> : <Icons.Sun className="w-4 h-4" />}
                          Dark Mode
                      </div>
                      <input 
                        type="checkbox" 
                        className="toggle toggle-sm bg-white border-[var(--color-border-default)] checked:bg-[var(--color-brand-primary)] checked:border-[var(--color-brand-primary)]" 
                        checked={theme === 'dark'} 
                        onChange={toggleTheme} 
                      />
                  </div>
               </li>
             </ul>
             <div className="h-px bg-[var(--color-border-subtle)] w-full"></div>
             <ul className="menu w-full p-[var(--space-sm)]">
               <li><a className="py-[var(--space-sm)] rounded-md text-[length:var(--font-size-sm)] font-medium text-[var(--color-danger)] hover:bg-[var(--color-danger-subtle)]">Sign out</a></li>
             </ul>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;