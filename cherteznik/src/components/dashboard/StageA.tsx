import React from 'react';
import { Loader2, CheckCircle2 } from 'lucide-react';
import { BottomBar } from '../BottomBar';
import { HeroBanner } from '../HeroBanner';

export function StageA() {
  return (
    <div className="animate-in fade-in duration-300 pb-32">
      <HeroBanner title="Статус заказа" height={140} />

      <div className="px-4 mt-4">
        <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-[0_1px_4px_rgba(0,0,0,0.06)]">
          <div className="relative pl-4 space-y-6 before:absolute before:inset-y-0 before:left-[11px] before:w-px before:bg-gray-100">
            <div className="relative flex gap-4">
              <div className="w-6 h-6 rounded-full bg-green-500 text-white flex items-center justify-center flex-shrink-0 shadow-[0_0_0_4px_white] z-10">
                <CheckCircle2 className="w-4 h-4" strokeWidth={2} />
              </div>
              <div className="pt-0.5">
                <p className="text-[14px] font-bold text-gray-900">Заказ оформлен</p>
                <p className="text-[12px] text-gray-400 mt-1">Предоплата внесена</p>
              </div>
            </div>

            <div className="relative flex gap-4">
              <div className="w-6 h-6 rounded-full bg-primary text-white flex items-center justify-center flex-shrink-0 shadow-[0_0_0_4px_white] z-10 animate-pulse">
                <div className="w-2 h-2 bg-white rounded-full" />
              </div>
              <div className="pt-0.5">
                <p className="text-[14px] font-bold text-primary">Замерщик назначен</p>
                <div className="mt-2 bg-blue-50 border border-blue-100 rounded-xl px-3 py-2.5 inline-block">
                  <p className="text-[13px] font-bold text-gray-900">Олег Петров</p>
                  <a href="tel:+79991234567" className="text-[13px] font-bold text-primary block mt-0.5">
                    +7 (999) 123-45-67
                  </a>
                  <p className="text-[11px] text-gray-400 mt-1">22/07 · 09:00–13:00</p>
                </div>
              </div>
            </div>

            <div className="relative flex gap-4 opacity-35">
              <div className="w-6 h-6 rounded-full bg-gray-200 flex items-center justify-center flex-shrink-0 shadow-[0_0_0_4px_white] z-10" />
              <div className="pt-0.5">
                <p className="text-[14px] font-bold text-gray-900">Замер выполнен</p>
                <p className="text-[12px] text-gray-400 mt-1">Ожидается лазерный обмер</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <BottomBar>
        <button disabled className="w-full h-[58px] bg-gray-100 text-gray-400 font-bold rounded-[17px] text-[15px] flex items-center justify-center gap-2">
          <Loader2 className="w-4 h-4 animate-spin" strokeWidth={2} />
          Ожидание замерщика
        </button>
      </BottomBar>
    </div>
  );
}
