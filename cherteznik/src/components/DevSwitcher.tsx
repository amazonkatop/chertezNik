import React from 'react';
import { Home } from 'lucide-react';

export type AppState = 'pre-payment' | 'stage-a' | 'stage-b' | 'stage-c' | 'stage-d';

interface DevSwitcherProps {
  currentState: AppState;
  onStateChange: (state: AppState) => void;
}

export function DevSwitcher({ currentState, onStateChange }: DevSwitcherProps) {
  const states: { id: AppState, label: string }[] = [
    { id: 'pre-payment', label: 'Home' },
    { id: 'stage-a', label: 'Stage A' },
    { id: 'stage-b', label: 'Stage B' },
    { id: 'stage-c', label: 'Stage C' },
    { id: 'stage-d', label: 'Stage D' },
  ];

  return (
    <div className="fixed top-20 right-2 z-50 flex flex-col gap-1 bg-black/80 backdrop-blur-md p-1.5 rounded-lg shadow-lg border border-white/10 scale-90 origin-top-right">
      <div className="text-[9px] text-white/50 uppercase tracking-wider font-bold px-2 py-1 text-center border-b border-white/10 mb-1">
        Dev Switcher
      </div>
      {states.map(s => (
        <button
          key={s.id}
          onClick={() => onStateChange(s.id)}
          className={`px-3 py-1.5 text-xs font-mono rounded-md transition-colors text-left
            ${currentState === s.id 
              ? 'bg-primary text-white font-bold' 
              : 'text-white/70 hover:bg-white/10'
            }`}
        >
          {s.label}
        </button>
      ))}
    </div>
  );
}
