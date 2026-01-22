import React from 'react';
import { Icons } from './Icons';

interface SidebarProps {
  isOpen: boolean;
  currentView: string;
  onNavigate: (view: string) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen, currentView, onNavigate }) => {
  return (
    <aside className={`w-64 bg-[var(--color-bg-surface)] border-r border-[var(--color-border-default)] flex-shrink-0 h-screen sticky top-0 overflow-y-auto ${isOpen ? 'block' : 'hidden'}`}>
      <div className="p-[var(--space-lg)] flex items-center justify-center">
        <img 
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/Central_Retail_Logo.svg/500px-Central_Retail_Logo.svg.png" 
          alt="Central Retail" 
          className="h-12 w-auto"
        />
      </div>

      <ul className="menu w-full px-[var(--space-sm)] text-[var(--color-text-secondary)] font-medium">
        <li>
          <a 
            onClick={() => onNavigate('dashboard')}
            className={`${currentView === 'dashboard' ? 'active:bg-[var(--color-brand-subtle)] active:text-[var(--color-brand-primary)] bg-[var(--color-brand-subtle)] text-[var(--color-brand-primary)]' : 'hover:bg-[var(--color-bg-surface-hover)]'} mb-[var(--space-xs)]`}
          >
            <Icons.Dashboard className="w-4 h-4" />
            Dashboard
          </a>
        </li>
        <li>
          <a 
            onClick={() => onNavigate('carbon-emissions')}
            className={`${currentView === 'carbon-emissions' ? 'active:bg-[var(--color-brand-subtle)] active:text-[var(--color-brand-primary)] bg-[var(--color-brand-subtle)] text-[var(--color-brand-primary)]' : 'hover:bg-[var(--color-bg-surface-hover)]'} mb-[var(--space-xs)]`}
          >
            <Icons.Leaf className="w-4 h-4" />
            Carbon Emissions
          </a>
        </li>
        <li>
          <a 
            onClick={() => onNavigate('trend')}
            className={`${currentView === 'trend' ? 'active:bg-[var(--color-brand-subtle)] active:text-[var(--color-brand-primary)] bg-[var(--color-brand-subtle)] text-[var(--color-brand-primary)]' : 'hover:bg-[var(--color-bg-surface-hover)]'} mb-[var(--space-xs)]`}
          >
            <Icons.ArrowUpDown className="w-4 h-4" />
            Trends
          </a>
        </li>
        <li>
          <a 
            onClick={() => onNavigate('reports')}
            className={`${currentView === 'reports' ? 'active:bg-[var(--color-brand-subtle)] active:text-[var(--color-brand-primary)] bg-[var(--color-brand-subtle)] text-[var(--color-brand-primary)]' : 'hover:bg-[var(--color-bg-surface-hover)]'} mb-[var(--space-xs)]`}
          >
            <Icons.File className="w-4 h-4" />
            Reports
          </a>
        </li>
      </ul>
    </aside>
  );
};

export default Sidebar;