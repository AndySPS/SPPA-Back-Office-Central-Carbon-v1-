import React from 'react';
import { Icons } from './Icons';

interface AiChatProps {
  agentName: string;
  onBack: () => void;
}

const AiChat: React.FC<AiChatProps> = ({ agentName, onBack }) => {
  return (
    <div className="flex h-[calc(100vh-8rem)] bg-[var(--color-bg-surface)] rounded-lg shadow-sm border border-[var(--color-border-default)] overflow-hidden">
      
      {/* Left Main Area */}
      <div className="flex-1 flex flex-col min-w-0 border-r border-[var(--color-border-default)]">
        
        {/* Chat Header */}
        <div className="flex items-start gap-[var(--space-md)] p-[var(--space-lg)] border-b border-[var(--color-border-subtle)]">
          <button onClick={onBack} className="btn btn-ghost btn-circle btn-sm mt-1">
            <Icons.ArrowLeft className="w-5 h-5 text-[var(--color-text-primary)]" />
          </button>
          <div className="flex flex-col">
             <h1 className="text-[length:var(--font-size-lg)] font-bold text-[var(--color-text-primary)] leading-tight">New Chat</h1>
             <p className="text-[length:var(--font-size-sm)] text-[var(--color-text-tertiary)] uppercase mt-0.5">{agentName}</p>
          </div>
        </div>

        {/* Main Chat Content (Empty State) */}
        <div className="flex-1 flex flex-col items-center justify-center p-[var(--space-xl)] overflow-y-auto">
            <div className="w-20 h-20 rounded-full bg-[var(--color-brand-subtle)] flex items-center justify-center mb-[var(--space-lg)]">
                <Icons.Bot className="w-10 h-10 text-[var(--color-brand-primary)]" />
            </div>
            <h2 className="text-[length:var(--font-size-3xl)] font-bold text-[var(--color-text-primary)] text-center tracking-tight">{agentName}</h2>
        </div>

        {/* Input Area */}
        <div className="p-[var(--space-lg)] bg-[var(--color-bg-surface)]">
            <div className="relative">
                <textarea 
                    placeholder="Type your question here..." 
                    className="textarea textarea-bordered w-full resize-none min-h-[80px] pr-12 text-[length:var(--font-size-base)] focus:outline-none focus:border-[var(--color-brand-primary)]"
                    rows={3}
                ></textarea>
                <button className="absolute bottom-3 right-3 btn btn-square btn-sm bg-[var(--color-border-default)] border-none text-[var(--color-text-secondary)] hover:bg-[var(--color-brand-primary)] hover:text-white transition-colors rounded-md">
                    <Icons.Send className="w-4 h-4" />
                </button>
            </div>
            <div className="text-[length:var(--font-size-xs)] text-[var(--color-text-tertiary)] mt-[var(--space-xs)]">
                Press Enter to send, Shift+Enter for new line
            </div>
        </div>
      </div>

      {/* Right Sidebar - Conversation History */}
      <div className="w-80 flex flex-col bg-[var(--color-bg-surface)] flex-shrink-0">
        <div className="p-[var(--space-lg)]">
            <h3 className="font-bold text-[var(--color-text-primary)] mb-[var(--space-sm)]">Conversation History</h3>
            <button className="btn btn-primary w-full bg-[var(--color-brand-primary)] border-[var(--color-brand-primary)] hover:bg-[var(--color-brand-secondary)] hover:border-[var(--color-brand-secondary)] text-white normal-case gap-2 font-medium">
                <Icons.MessageSquarePlus className="w-4 h-4" />
                New Conversation
            </button>
        </div>
        
        <div className="flex-1 overflow-y-auto px-[var(--space-lg)] pb-[var(--space-lg)]">
            {/* History Item */}
            <div className="card bg-[var(--color-bg-surface)] border border-[var(--color-border-default)] hover:border-[var(--color-brand-primary)] cursor-pointer transition-colors mb-[var(--space-sm)] rounded-lg">
                <div className="card-body p-[var(--space-md)]">
                    <h4 className="font-bold text-[var(--color-text-primary)] text-[length:var(--font-size-sm)] mb-1">how can you help me?</h4>
                    <p className="text-[length:var(--font-size-xs)] text-[var(--color-text-tertiary)]">6d ago</p>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default AiChat;