import React from 'react';
import { PenTool, Ruler, Menu } from 'lucide-react';
import { Drawer } from 'vaul';

export function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 h-16 bg-white/95 backdrop-blur-sm z-40 border-b border-gray-100 flex items-center justify-between px-4 max-w-[430px] mx-auto w-full">
      <div className="flex items-center gap-2.5">
        <div className="text-primary flex items-center">
          <Ruler className="w-5 h-5 -mr-1 rotate-45" strokeWidth={2} />
          <PenTool className="w-4 h-4" strokeWidth={2} />
        </div>
        <div className="flex flex-col">
          <span className="font-extrabold text-[15px] leading-none tracking-tight text-gray-900">
            Чертёжник.рф
          </span>
          <span className="text-[10px] text-gray-400 leading-none mt-0.5 font-medium">
            Рабочие чертежи за 14 дней
          </span>
        </div>
      </div>

      <Drawer.Root direction="right">
        <Drawer.Trigger asChild>
          <button
            className="w-9 h-9 flex items-center justify-center text-gray-500 active:bg-gray-100 rounded-xl transition-colors duration-150"
            data-testid="button-menu"
          >
            <Menu className="w-5 h-5" strokeWidth={2} />
          </button>
        </Drawer.Trigger>
        <Drawer.Portal>
          <Drawer.Overlay className="fixed inset-0 bg-black/40 z-50" />
          <Drawer.Content className="bg-white flex flex-col h-full w-[80%] mt-24 fixed bottom-0 right-0 z-50 p-6 shadow-2xl focus:outline-none rounded-l-[20px]">
            <Drawer.Title className="sr-only">Меню</Drawer.Title>
            <div className="flex flex-col gap-5 mt-6">
              {[
                'Служба поддержки',
                'Договор оферты (Агентская схема)',
                'Политика конфиденциальности',
                'Реквизиты',
              ].map((item) => (
                <a
                  key={item}
                  href="#"
                  className="text-[15px] font-semibold text-gray-700 border-b border-gray-100 pb-5 active:text-primary transition-colors duration-150"
                >
                  {item}
                </a>
              ))}
            </div>
          </Drawer.Content>
        </Drawer.Portal>
      </Drawer.Root>
    </header>
  );
}
