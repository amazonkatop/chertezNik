import React, { useState } from 'react';
import { Timer } from 'lucide-react';
import { BottomBar } from '../BottomBar';
import { HeroBanner } from '../HeroBanner';

export function StageC() {
  const [activeVariant, setActiveVariant] = useState(1);

  return (
    <div className="animate-in fade-in duration-300 pb-44">
      <HeroBanner title="Планировочные решения" height={140} />

      <div className="px-4 py-4 space-y-4">
        <div className="flex bg-gray-100 p-1 rounded-2xl">
          {[1, 2, 3].map((v) => (
            <button key={v} onClick={() => setActiveVariant(v)} className={`flex-1 h-[42px] text-[14px] font-bold rounded-[13px] transition-all duration-200 ${activeVariant === v ? 'bg-white text-gray-900 shadow-sm scale-[1.02]' : 'text-gray-400'}`}>
              Вариант {v}
            </button>
          ))}
        </div>

        <div className="bg-white border border-gray-100 rounded-2xl overflow-hidden shadow-[0_1px_4px_rgba(0,0,0,0.06)]">
          <div className="aspect-[4/3] bg-gray-50 relative flex items-center justify-center p-4">
            <svg className="w-full h-full text-primary/10" viewBox="0 0 400 300" fill="currentColor">
              <rect x="20" y="20" width="360" height="260" stroke="currentColor" strokeWidth="3" fill="none" />
              <line x1="150" y1="20" x2="150" y2="150" stroke="currentColor" strokeWidth="3" />
              <line x1="20" y1="150" x2="250" y2="150" stroke="currentColor" strokeWidth="3" />
              <line x1="250" y1="20" x2="250" y2="280" stroke="currentColor" strokeWidth="3" />
              <rect x="50" y="50" width="60" height="40" opacity="0.4" fill="currentColor" />
              <circle cx="200" cy="80" r="20" opacity="0.4" fill="currentColor" />
              <rect x="280" y="200" width="80" height="60" opacity="0.4" fill="currentColor" />
            </svg>
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div className="bg-white/90 backdrop-blur-sm px-4 py-2 rounded-xl text-[14px] font-bold text-gray-900 shadow-sm border border-gray-100">
                План {activeVariant}
              </div>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-center gap-2 text-[13px] font-semibold text-gray-500 bg-gray-50 border border-gray-200 py-3 px-4 rounded-2xl">
          <Timer className="w-4 h-4" strokeWidth={2} />
          <span>14 дней · на паузе — ожидается ваш выбор</span>
        </div>
      </div>

      <BottomBar>
        <div className="flex flex-col gap-2.5">
          <button className="w-full h-[58px] bg-primary text-white font-bold rounded-[17px] text-[15px] active:scale-[0.98] transition-all duration-200 flex items-center justify-center" data-testid="button-confirm-layout">
            ПОДТВЕРДИТЬ ВЫБОР
          </button>
          <button className="w-full h-[50px] bg-white text-gray-700 font-semibold rounded-[17px] text-[14px] active:bg-gray-50 transition-colors duration-150 border border-gray-200">
            Другой вариант за 1&nbsp;000&nbsp;₽
          </button>
        </div>
      </BottomBar>
    </div>
  );
}
