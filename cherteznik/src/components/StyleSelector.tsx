import React, { useState } from 'react';
import classicImg  from '@/assets/classic-interior.jpg';
import loftImg     from '@/assets/loft-interior.jpg';
import scandiImg   from '@/assets/scandi-interior.jpg';
import { FileText, AlertCircle } from 'lucide-react';

const STYLES = [
  {
    id: 'minimal',
    name: 'МИНИМАЛИЗМ',
    img: minimalismImg,
    desc: [
      'Чистые линии',
      'Светлые тона',
      'Низкий плинтус',
      'Натяжной потолок',
      'Пол кварцвинил',
    ],
  },
  {
    id: 'loft',
    name: 'ЛОФТ',
    img: loftImg,
    desc: [
      'Декоративная штукатурка',
      'Кварцвинил',
      'Низкий плинтус',
      'Натяжной потолок',
      'Скрытая проводка',
    ],
  },
  {
    id: 'scandi',
    name: 'СКАНДИ',
    img: scandiImg,
    desc: [
      'Фактурные обои',
      'Ламинат',
      'Высокий плинтус',
      'Натяжной потолок',
      'Скрытая проводка',
    ],
  },
];

export function StyleSelector() {
  const [activeId, setActiveId] = useState<string | null>(null);
  const activeStyle = STYLES.find((s) => s.id === activeId);

  return (
    <div className="w-full mt-0 mb-0">
      {/* Three equal-width cards: label on top, image below */}
      <div className="flex gap-[5px] lg:gap-4 px-4 lg:px-0 w-full">
        {STYLES.map((style) => {
          const isActive = activeId === style.id;
          return (
            <button
              key={style.id}
              onClick={() => setActiveId(isActive ? null : style.id)}
              data-testid={`card-style-${style.id}`}
              className={`flex-1 flex flex-col overflow-hidden rounded-[10px] lg:rounded-2xl border-2 transition-all duration-200 ${
                isActive ? 'border-primary' : 'border-transparent lg:hover:border-gray-200'
              }`}
            >
              {/* Label — fixed height so all cards stay uniform */}
              <div
                className={`h-[26px] lg:h-[38px] flex items-center justify-center px-1 bg-white text-[9px] lg:text-[13px] font-extrabold tracking-widest ${
                  isActive ? 'text-primary' : 'text-gray-600'
                }`}
              >
                {style.name}
              </div>
              {/* Photo — fixed height, fills the card */}
              <div className="w-full h-[88px] lg:h-[220px] xl:h-[260px] overflow-hidden">
                <img
                  src={style.img}
                  alt={style.name}
                  className={`w-full h-full object-cover transition-transform duration-300 ${isActive ? 'scale-[1.04]' : 'scale-100'}`}
                  draggable={false}
                />
              </div>
            </button>
          );
        })}
      </div>

      {/* Expanded accordion — zero height when closed, no layout impact */}
      <div
        className={`overflow-hidden transition-all duration-300 px-4 lg:px-0 mt-2 lg:mt-4 ${
          activeId ? 'max-h-[640px] mb-3' : 'max-h-0 mb-0'
        }`}
      >
        {activeStyle && (
          <div className="bg-white rounded-2xl p-4 lg:p-6 border border-gray-100 shadow-[0_1px_4px_rgba(0,0,0,0.05)]">
            <ul className="text-[13px] lg:text-[15px] text-gray-600 mb-4 space-y-1.5 list-disc pl-4 lg:columns-2">
              {activeStyle.desc.map((d, i) => (
                <li key={i} className="pl-1">{d}</li>
              ))}
            </ul>

            <button className="flex items-center gap-2 text-primary font-semibold text-[13px] py-2 px-3 bg-primary/5 rounded-xl active:bg-primary/10 transition-colors duration-150 mb-4">
              <FileText className="w-4 h-4" strokeWidth={2} />
              Посмотреть готовый проект (PDF)
            </button>

            {/* Disclosure */}
            <div className="flex gap-3 bg-gray-50 border border-gray-100 rounded-xl p-3.5">
              <AlertCircle className="w-4 h-4 text-gray-400 flex-shrink-0 mt-0.5" strokeWidth={2} />
              <div className="text-[11px] text-gray-500 leading-relaxed">
                <p className="font-semibold text-gray-700 mb-1">Как устроен наш технический стандарт:</p>
                <p>
                  В стоимость заложены проверенные решения: натяжной потолок, споты и скрытая
                  проводка. Чертежи собираются строго по шаблону для гарантированной скорости.
                  Любые точечные изменения вносятся на объекте со строителями.
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
