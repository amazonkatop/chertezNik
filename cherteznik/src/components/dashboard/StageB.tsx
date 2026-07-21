import React, { useState } from 'react';
import { Paperclip, UploadCloud, AlertCircle, Info } from 'lucide-react';
import { BottomBar } from '../BottomBar';
import { HeroBanner } from '../HeroBanner';
import { useAnimatedValue } from '@/hooks/useAnimatedValue';

interface StageBProps { area: number; }

function fmt(n: number) {
  return n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '\u202F');
}

export function StageB({ area }: StageBProps) {
  const balance = useAnimatedValue(area * 1200 - 4500, 260);
  const [showNote, setShowNote] = useState(false);

  return (
    <div className="animate-in fade-in duration-300 pb-32">
      <HeroBanner title="Замер готов" height={140} />

      <div className="px-4 pt-4 space-y-4">
        <div className="bg-white rounded-2xl border border-gray-100 shadow-[0_1px_4px_rgba(0,0,0,0.06)] overflow-hidden">
          <a href="#" className="flex items-center gap-3 p-4 active:bg-gray-50 transition-colors border-b border-gray-100">
            <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center text-primary flex-shrink-0">
              <Paperclip className="w-4 h-4" strokeWidth={2} />
            </div>
            <div>
              <p className="font-bold text-[14px] text-gray-900">Скачать обмерный план и фото</p>
              <p className="text-[11px] text-gray-400 mt-0.5">PDF, DWG · 12.4 МБ</p>
            </div>
          </a>
          <div className="p-4 bg-gray-50">
            <div className="flex items-start gap-3">
              <AlertCircle className="w-4 h-4 text-gray-500 flex-shrink-0 mt-0.5" strokeWidth={2} />
              <div>
                <p className="font-bold text-[14px] text-gray-900 mb-1">Загрузите план БТИ</p>
                <p className="text-[12px] text-gray-500 mb-3 leading-relaxed">Без него мы не сможем продолжить работу.</p>
                <button className="flex items-center justify-center gap-2 w-full h-[44px] bg-white border border-gray-200 rounded-2xl text-[13px] font-semibold text-gray-700 active:bg-gray-50 transition-colors duration-150">
                  <UploadCloud className="w-4 h-4" strokeWidth={2} />
                  Выбрать файл
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white border border-gray-100 rounded-2xl p-4 shadow-[0_1px_4px_rgba(0,0,0,0.05)]">
          <div className="flex items-center gap-2 mb-2.5">
            <Info className="w-4 h-4 text-primary flex-shrink-0" strokeWidth={2} />
            <h3 className="text-[13px] font-bold text-gray-900 leading-tight">Перед оплатой: как мы работаем над планировкой</h3>
          </div>
          <p className="text-[12px] text-gray-500 leading-relaxed">
            Аккредитованный инженер подготовит 3 варианта расстановки мебели и сантехники по стандартам ГОСТ.
          </p>
          <p className="text-[12px] text-gray-500 leading-relaxed mt-2">
            Рабочий альбом — по фиксированному шаблону для гарантии скорости. Финишные изменения легко внести вместе с бригадой.
          </p>
        </div>

        <div className="bg-gray-50 border border-gray-200 rounded-2xl p-4">
          <div className="flex items-center justify-between">
            <p className="text-[13px] font-semibold text-gray-500">К доплате</p>
            <div className="flex items-center gap-2">
              <p className="text-[28px] font-extrabold text-gray-900 tabular-nums leading-none">
                {fmt(balance)}<span className="text-[18px] font-bold text-gray-400 ml-1">₽</span>
              </p>
              <button onClick={() => setShowNote(!showNote)} className="w-5 h-5 rounded-full bg-gray-200 text-gray-500 text-[11px] font-bold flex items-center justify-center active:bg-gray-300 flex-shrink-0 transition-colors duration-150">?</button>
            </div>
          </div>
          {showNote && (
            <p className="text-[11px] text-gray-400 mt-2.5 leading-relaxed border-t border-gray-200 pt-2.5 animate-in fade-in duration-200">
              Стоимость может незначительно измениться по факту лазерного обмера.
            </p>
          )}
        </div>
      </div>

      <BottomBar>
        <button className="w-full h-[58px] bg-primary text-white font-bold rounded-[17px] text-[15px] active:scale-[0.98] transition-all duration-200 flex items-center justify-center" data-testid="button-pay-final">
          ОПЛАТИТЬ ЧЕРТЕЖИ
        </button>
      </BottomBar>
    </div>
  );
}
