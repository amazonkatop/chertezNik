import React from 'react';
import { BadgeCheck, Clock, ShieldCheck } from 'lucide-react';

const ITEMS = [
  { icon: BadgeCheck, label: 'Аккредитованные\nинженеры' },
  { icon: Clock,      label: 'Строго\n14 дней' },
  { icon: ShieldCheck, label: 'Безопасная\nсделка' },
];

export function TrustBar() {
  return (
    <div className="px-4 mb-5">
      <div className="flex items-center justify-between rounded-2xl py-4 px-3 border border-gray-100 bg-gray-50">
        {ITEMS.map(({ icon: Icon, label }, i) => (
          <React.Fragment key={label}>
            {i > 0 && <div className="w-px h-8 bg-gray-200 flex-shrink-0" />}
            <div className="flex flex-col items-center text-center gap-1.5 flex-1 px-1">
              <Icon className="w-5 h-5 text-primary" strokeWidth={2} />
              <span className="text-[10px] font-semibold text-gray-500 leading-tight whitespace-pre-line">
                {label}
              </span>
            </div>
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}
