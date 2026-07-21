import React, { useState } from 'react';
import { Download, FileBox, CheckCircle, Star } from 'lucide-react';
import { BottomBar } from '../BottomBar';
import { HeroBanner } from '../HeroBanner';

export function StageD() {
  const [rating, setRating] = useState(0);

  return (
    <div className="animate-in fade-in duration-300 pb-32">
      <HeroBanner
        title="Ваши чертежи готовы"
        height={140}
        badge={
          <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center shadow-lg border-4 border-white">
            <CheckCircle className="w-6 h-6 text-white" strokeWidth={2} />
          </div>
        }
      />

      <div className="px-4 pt-10 space-y-4">
        <p className="text-[14px] text-gray-400 text-center">Проект завершён и готов к передаче строителям.</p>

        <div className="bg-white border border-gray-100 rounded-2xl p-5 shadow-[0_1px_4px_rgba(0,0,0,0.06)]">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-primary/8 text-primary rounded-2xl flex items-center justify-center flex-shrink-0">
              <FileBox className="w-6 h-6" strokeWidth={2} />
            </div>
            <div>
              <p className="font-bold text-[15px] text-gray-900">Рабочий альбом</p>
              <p className="text-[11px] text-gray-400 mt-0.5">PDF, DWG · 48 страниц · 24.5 МБ</p>
            </div>
          </div>
        </div>

        <div className="bg-gray-50 rounded-2xl p-4 border border-gray-100 flex items-center justify-between">
          <p className="text-[13px] font-semibold text-gray-600">Оцените инженера</p>
          <div className="flex gap-1">
            {[1, 2, 3, 4, 5].map((i) => (
              <button key={i} onClick={() => setRating(i)} className="transition-colors duration-150">
                <Star className={`w-6 h-6 ${i <= rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`} strokeWidth={2} />
              </button>
            ))}
          </div>
        </div>
      </div>

      <BottomBar>
        <button className="w-full h-[58px] bg-primary text-white font-bold rounded-[17px] text-[14px] active:scale-[0.98] transition-all duration-200 flex items-center justify-center gap-2" data-testid="button-download-final">
          <Download className="w-4 h-4" strokeWidth={2} />
          СКАЧАТЬ РАБОЧИЙ АЛЬБОМ ЧЕРТЕЖЕЙ
        </button>
      </BottomBar>
    </div>
  );
}
