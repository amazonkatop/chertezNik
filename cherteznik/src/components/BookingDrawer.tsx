import React, { useState } from 'react';
import { Drawer } from 'vaul';
import { Calendar as CalendarIcon, Clock } from 'lucide-react';

interface BookingDrawerProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onPay: () => void;
}

export function BookingDrawer({ open, onOpenChange, onPay }: BookingDrawerProps) {
  const [activeDate, setActiveDate] = useState('22/07');
  const [activeTime, setActiveTime] = useState('09:00–13:00');

  const DATES = [
    { day: 'Пн', date: '21/07' },
    { day: 'Вт', date: '22/07' },
    { day: 'Ср', date: '23/07' },
    { day: 'Чт', date: '24/07' },
    { day: 'Пт', date: '25/07' },
    { day: 'Сб', date: '26/07' },
    { day: 'Вс', date: '27/07' },
  ];

  const TIMES = ['09:00–13:00', '13:00–18:00'];

  return (
    <Drawer.Root open={open} onOpenChange={onOpenChange}>
      <Drawer.Portal>
        <Drawer.Overlay className="fixed inset-0 bg-black/40 z-50" />
        <Drawer.Content className="bg-white flex flex-col rounded-t-[24px] fixed bottom-0 left-0 right-0 z-50 focus:outline-none max-w-[430px] mx-auto w-full">
          <div className="mx-auto w-10 h-1 flex-shrink-0 rounded-full bg-gray-200 mt-3 mb-2" />
          <div className="px-5 py-4 pb-10 pb-safe">
            <Drawer.Title className="text-[20px] font-extrabold text-gray-900 mb-6 text-center">
              Дата и время замера
            </Drawer.Title>

            {/* Date ribbon */}
            <div className="mb-6">
              <div className="flex items-center gap-2 mb-3 px-1">
                <CalendarIcon className="w-4 h-4 text-gray-400" strokeWidth={2} />
                <span className="text-[12px] font-semibold text-gray-400 uppercase tracking-wide">
                  Ближайшие даты
                </span>
              </div>
              <div className="flex gap-2 overflow-x-auto no-scrollbar pb-1 px-1">
                {DATES.map((d) => {
                  const isActive = activeDate === d.date;
                  return (
                    <button
                      key={d.date}
                      onClick={() => setActiveDate(d.date)}
                      className={`flex flex-col items-center justify-center w-[58px] h-[68px] rounded-2xl flex-shrink-0 transition-all duration-200 border ${
                        isActive
                          ? 'bg-primary text-white border-primary scale-[1.04]'
                          : 'bg-white text-gray-700 border-gray-200 active:scale-[0.97]'
                      }`}
                    >
                      <span className={`text-[11px] font-medium mb-1 ${isActive ? 'text-white/70' : 'text-gray-400'}`}>
                        {d.day}
                      </span>
                      <span className="font-bold text-[16px] leading-none">{d.date.split('/')[0]}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Time slots */}
            <div className="mb-7">
              <div className="flex items-center gap-2 mb-3 px-1">
                <Clock className="w-4 h-4 text-gray-400" strokeWidth={2} />
                <span className="text-[12px] font-semibold text-gray-400 uppercase tracking-wide">
                  Временной интервал
                </span>
              </div>
              <div className="grid grid-cols-2 gap-3">
                {TIMES.map((t) => {
                  const isActive = activeTime === t;
                  return (
                    <button
                      key={t}
                      onClick={() => setActiveTime(t)}
                      className={`h-[52px] rounded-2xl font-semibold text-[14px] transition-all duration-200 border ${
                        isActive
                          ? 'bg-primary/8 text-primary border-primary scale-[1.02]'
                          : 'bg-white text-gray-700 border-gray-200 active:scale-[0.97]'
                      }`}
                    >
                      {t}
                    </button>
                  );
                })}
              </div>
            </div>

            <button
              onClick={() => { onOpenChange(false); onPay(); }}
              className="w-full h-[58px] bg-primary text-white font-bold rounded-[17px] text-[15px] active:scale-[0.98] transition-all duration-200 flex items-center justify-center"
              data-testid="button-confirm-booking"
            >
              Перейти к оплате
            </button>
            <p className="text-center mt-3 text-[11px] text-gray-400">
              Вы будете перенаправлены на защищённый платёжный шлюз
            </p>
          </div>
        </Drawer.Content>
      </Drawer.Portal>
    </Drawer.Root>
  );
}
