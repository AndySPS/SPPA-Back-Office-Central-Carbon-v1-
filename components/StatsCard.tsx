import React from 'react';
import { Icons } from './Icons';
import { StatMetric } from '../types';

interface StatsCardProps {
  data: StatMetric;
}

const StatsCard: React.FC<StatsCardProps> = ({ data }) => {
  const renderIcon = () => {
    switch (data.iconType) {
      case 'users':
        return <Icons.Users className="w-8 h-8 text-[var(--color-brand-secondary)]" />;
      case 'subscriptions':
        return <Icons.Card className="w-8 h-8 text-[var(--color-brand-secondary)]" />;
      case 'revenue':
        return <Icons.Dollar className="w-8 h-8 text-[var(--color-brand-secondary)]" />;
      default:
        return null;
    }
  };

  return (
    <div className="card bg-[var(--color-bg-surface)] shadow-sm border border-[var(--color-border-default)]">
      <div className="card-body flex-row items-center justify-between p-[var(--space-lg)]">
        <div>
          <h3 className="text-[var(--color-text-tertiary)] text-[length:var(--font-size-sm)] font-medium mb-[var(--space-xs)]">{data.title}</h3>
          <div className="text-[length:var(--font-size-3xl)] font-bold text-[var(--color-text-primary)] mb-[var(--space-xs)]">{data.value}</div>
          <div className="text-[length:var(--font-size-xs)] flex items-center gap-[var(--space-xs)]">
            <span className="text-[var(--color-success)] font-semibold flex items-center">
              <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="mr-[var(--space-xs)]">
                <polyline points="23 6 13.5 15.5 8.5 10.5 1 18"></polyline>
                <polyline points="17 6 23 6 23 12"></polyline>
              </svg>
              {data.increase}%
            </span>
            <span className="text-[var(--color-text-disabled)]">
               {data.iconType === 'users' ? 'increase last month' : 'increase'}
            </span>
          </div>
        </div>
        <div className="p-[var(--space-xs)]">
            {renderIcon()}
        </div>
      </div>
    </div>
  );
};

export default StatsCard;