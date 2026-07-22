import React from 'react';
import { Minus, Plus } from 'lucide-react';
import { useAnimatedValue } from '@/hooks/useAnimatedValue';

interface CalculatorProps {
  area: number;
  setArea: (val: number) => void;
}

function formatPrice(n: number) {
  return n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '\u202F');
}

export function Calculator({ area, setArea }: CalculatorProps) {
  const handleDecrement = () => setArea(Math.max(18, area - 1));
  const handleIncrement = () => setArea(area + 1);
  const handleBlur = () => setArea(Math.max(18, area));

  const rawPrice = area * 1200;
  const animatedPrice = useAnimatedValue(rawPrice, 260);

  return (
    <div className="px-4 lg:px-0 mb-5">
      <div className="bg-white rounded-2xl p-5 lg:p-6 border border-gray-100 shadow-[0_1px_4px_rgba(0,0,0,0.06)]">
        <p className="text-[13px] font-medium text-gray-400 mb-4 tracking-wide uppercase">
          Площадь квартиры
        </p>

        <div className="flex items-center justify-between gap-4">
          {/* Stepper */}
          <div className="flex items-center bg-gray-50 rounded-2xl border border-gray-200 overflow-hidden">
            <button
              onClick={handleDecrement}
              className="w-11 h-11 flex items-center justify-center text-gray-500 hover:bg-gray-100 active:bg-gray-200 transition-colors duration-150"
              data-testid="button-dec-area"
            >
              <Minus className="w-4 h-4" strokeWidth={2} />
            </button>
            <div className="flex items-baseline px-3">
              <input
                type="number"
                value={area}
                onChange={(e) => setArea(parseInt(e.target.value) || 0)}
                onBlur={handleBlur}
                className="w-9 text-center bg-transparent font-bold text-[17px] text-gray-900 outline-none p-0 tabular-nums"
              />
              <span className="text-gray-400 text-[13px] font-medium ml-1">м²</span>
            </div>
            <button
              onClick={handleIncrement}
              className="w-11 h-11 flex items-center justify-center text-gray-500 hover:bg-gray-100 active:bg-gray-200 transition-colors duration-150"
              data-testid="button-inc-area"
            >
              <Plus className="w-4 h-4" strokeWidth={2} />
            </button>
          </div>

          {/* Animated price */}
          <div className="text-right">
            <p className="text-[11px] text-gray-400 mb-0.5 font-medium uppercase tracking-wide">
              Стоимость
            </p>
            <p className="font-extrabold text-[38px] leading-none text-gray-900 tabular-nums tracking-tight">
              {formatPrice(animatedPrice)}
              <span className="text-[22px] font-bold text-gray-400 ml-1">₽</span>
            </p>
          </div>
        </div>

        <p className="text-[11px] text-gray-400 mt-3">
          1&nbsp;200&nbsp;₽ / м² · итоговая цена после обмера
        </p>
      </div>
    </div>
  );
}
