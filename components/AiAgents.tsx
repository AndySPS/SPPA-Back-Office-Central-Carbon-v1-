import React from 'react';
import { Icons } from './Icons';

interface AiAgentsProps {
  onAgentSelect: (agentName: string) => void;
}

const AiAgents: React.FC<AiAgentsProps> = ({ onAgentSelect }) => {
  return (
    <div className="flex flex-col w-full">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4 mb-[var(--space-xl)]">
        <div>
           <h1 className="text-[length:var(--font-size-xl)] sm:text-[length:var(--font-size-2xl)] font-bold text-[var(--color-text-primary)] mb-[var(--space-xs)]">AI Agents</h1>
           <p className="text-[var(--color-text-secondary)]">Chat with AI assistants powered by Snowflake Cortex</p>
        </div>
        <div className="flex items-center gap-[var(--space-sm)] text-[var(--color-text-secondary)] font-medium text-[length:var(--font-size-sm)] cursor-pointer hover:text-[var(--color-text-primary)]">
            <Icons.ShieldCheck className="w-5 h-5" />
            <span>PUBLIC</span>
            <Icons.ChevronDown className="w-4 h-4" />
        </div>
      </div>

      {/* General Section */}
      <div className="mb-[var(--space-lg)]">
        <h2 className="text-[length:var(--font-size-lg)] font-bold text-[var(--color-text-primary)] mb-[var(--space-lg)]">General</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[var(--space-lg)]">
            {/* Card 1 */}
            <div 
              onClick={() => onAgentSelect('INTERNAL AGENT PD')}
              className="card bg-[var(--color-bg-surface)] shadow-sm border border-[var(--color-border-default)] cursor-pointer hover:border-[var(--color-brand-primary)] transition-colors"
            >
                <div className="card-body p-[var(--space-lg)] flex-row items-start gap-[var(--space-md)]">
                    <div className="w-12 h-12 rounded-lg bg-[var(--color-bg-canvas)] flex items-center justify-center flex-shrink-0 border border-[var(--color-border-subtle)]">
                        <Icons.Bot className="w-6 h-6 text-[var(--color-text-secondary)]" />
                    </div>
                    <div className="flex-1">
                        <div className="flex justify-between items-start">
                            <h3 className="font-bold text-[var(--color-text-primary)] text-[length:var(--font-size-base)]">INTERNAL AGENT PD</h3>
                            <span className="badge bg-[var(--color-success-subtle)] text-[var(--color-success)] border-none rounded px-2 py-3 text-[length:var(--font-size-xs)] font-medium">Active</span>
                        </div>
                        <p className="text-[var(--color-text-tertiary)] text-[length:var(--font-size-sm)] mt-[var(--space-xs)]">General</p>
                    </div>
                </div>
            </div>

            {/* Card 2 */}
            <div 
              onClick={() => onAgentSelect('THAI OIL AGENT')}
              className="card bg-[var(--color-bg-surface)] shadow-sm border border-[var(--color-border-default)] cursor-pointer hover:border-[var(--color-brand-primary)] transition-colors"
            >
                <div className="card-body p-[var(--space-lg)] flex-row items-start gap-[var(--space-md)]">
                    <div className="w-12 h-12 rounded-lg bg-[var(--color-bg-canvas)] flex items-center justify-center flex-shrink-0 border border-[var(--color-border-subtle)]">
                        <Icons.Bot className="w-6 h-6 text-[var(--color-text-secondary)]" />
                    </div>
                     <div className="flex-1">
                        <div className="flex justify-between items-start">
                            <h3 className="font-bold text-[var(--color-text-primary)] text-[length:var(--font-size-base)]">THAI OIL AGENT</h3>
                             <span className="badge bg-[var(--color-success-subtle)] text-[var(--color-success)] border-none rounded px-2 py-3 text-[length:var(--font-size-xs)] font-medium">Active</span>
                        </div>
                        <p className="text-[var(--color-text-tertiary)] text-[length:var(--font-size-sm)] mt-[var(--space-xs)]">General</p>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};
export default AiAgents;