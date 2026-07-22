import React, { useState } from 'react';
import { HelpCircle } from 'lucide-react';
import { Drawer } from 'vaul';

interface State1BottomBarProps {
  onBook: () => void;
}

export function State1BottomBar({ onBook }: State1BottomBarProps) {
  const [agreed, setAgreed] = useState(false);

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white/95 backdrop-blur-sm border-t border-gray-100 px-4 lg:px-8 pt-3 lg:py-3 pb-safe z-30 max-w-[430px] lg:max-w-none mx-auto w-full">
      <div className="lg:max-w-7xl lg:mx-auto lg:flex lg:items-center lg:gap-8">

      {/* Consent checkbox */}
      <label className="flex items-start lg:items-center gap-2.5 cursor-pointer select-none mb-3 lg:mb-0 lg:flex-1">
        <input
          type="checkbox"
          checked={agreed}
          onChange={(e) => setAgreed(e.target.checked)}
          className="mt-0.5 lg:mt-0 w-4 h-4 flex-shrink-0 accent-primary cursor-pointer rounded"
          data-testid="checkbox-agree"
        />
        <span className="text-[11px] lg:text-[12px] text-gray-400 leading-snug lg:max-w-[560px]">
          Я согласен, что чертежи создаются по готовым техническим стандартам платформы для
          сохранения быстрых сроков. Индивидуальные пожелания вношу самостоятельно со строителями.
        </span>
      </label>

      {/* CTA row */}
      <div className="flex gap-2.5 items-center pb-1 lg:pb-0 lg:flex-shrink-0">
        <button
          onClick={onBook}
          disabled={!agreed}
          className={`flex-grow lg:flex-grow-0 lg:w-[340px] h-[58px] rounded-[17px] font-bold text-[14px] flex flex-col items-center justify-center transition-all duration-200 ${
            agreed
              ? 'bg-primary text-white active:scale-[0.98] lg:hover:bg-primary/90'
              : 'bg-gray-100 text-gray-400 cursor-not-allowed'
          }`}
          data-testid="button-book"
        >
          <span>ОФОРМИТЬ ЗАМЕР</span>
          <span className={`text-[11px] font-medium mt-0.5 ${agreed ? 'text-white/70' : 'text-gray-300'}`}>
            предоплата 4&nbsp;500&nbsp;₽
          </span>
        </button>

        <Drawer.Root>
          <Drawer.Trigger asChild>
            <button className="w-[58px] h-[58px] flex-shrink-0 flex items-center justify-center bg-gray-50 border border-gray-200 text-gray-400 rounded-[17px] active:bg-gray-100 transition-colors duration-150">
              <HelpCircle className="w-5 h-5" strokeWidth={2} />
            </button>
          </Drawer.Trigger>
          <Drawer.Portal>
            <Drawer.Overlay className="fixed inset-0 bg-black/40 z-50" />
            <Drawer.Content className="bg-white flex flex-col rounded-t-[24px] fixed bottom-0 left-0 right-0 z-50 focus:outline-none max-w-[430px] mx-auto w-full max-h-[85vh]">
              <div className="mx-auto w-10 h-1 flex-shrink-0 rounded-full bg-gray-200 mt-3 mb-2" />
              <div className="px-6 py-4 pb-10 overflow-y-auto">
                <Drawer.Title className="text-[20px] font-extrabold text-gray-900 mb-6">
                  Как устроена оплата?
                </Drawer.Title>

                <div className="space-y-6">
                  <div className="flex gap-4">
                    <div className="w-8 h-8 rounded-full bg-blue-50 text-primary flex items-center justify-center font-bold flex-shrink-0 text-[13px]">
                      1
                    </div>
                    <div>
                      <h3 className="font-bold text-[15px] text-gray-900 mb-1">Два этапа</h3>
                      <p className="text-[13px] text-gray-500 leading-relaxed">
                        Сейчас вносите только{' '}
                        <strong className="text-gray-700">4&nbsp;500&nbsp;₽</strong> для бронирования
                        замерщика. Остаток — после согласования всех деталей.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="w-8 h-8 rounded-full bg-gray-50 text-gray-600 flex items-center justify-center font-bold flex-shrink-0 text-[13px]">
                      2
                    </div>
                    <div>
                      <h3 className="font-bold text-[15px] text-gray-900 mb-1">Безопасная сделка</h3>
                      <p className="text-[13px] text-gray-500 leading-relaxed">
                        Деньги заморожены банком и выплачиваются исполнителю только после того, как
                        вы скачали все файлы.
                      </p>
                    </div>
                  </div>
                </div>

                <Drawer.Close asChild>
                  <button className="w-full h-[58px] bg-gray-100 text-gray-800 font-bold rounded-[17px] mt-8 active:bg-gray-200 transition-colors duration-150 text-[15px]">
                    Понятно
                  </button>
                </Drawer.Close>
              </div>
            </Drawer.Content>
          </Drawer.Portal>
        </Drawer.Root>
      </div>
      </div>
    </div>
  );
}

interface BottomBarProps {
  children: React.ReactNode;
}

export function BottomBar({ children }: BottomBarProps) {
  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white/95 backdrop-blur-sm border-t border-gray-100 px-4 py-3 pb-safe z-30 max-w-[430px] mx-auto w-full">
      {children}
    </div>
  );
}
