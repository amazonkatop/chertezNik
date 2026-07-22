import React from 'react';
import { PenTool, Ruler, Menu } from 'lucide-react';
import { Drawer } from 'vaul';

export function Header() {
  return (
    <header className="fixed top-0 inset-x-0 h-16 lg:h-[72px] bg-white/95 backdrop-blur-sm z-40 border-b border-gray-100">
      <div className="h-full max-w-7xl mx-auto flex items-center justify-between px-4 lg:px-8">
      <div className="flex items-center gap-2.5 lg:gap-3">
        <div className="text-primary flex items-center">
          <Ruler className="w-5 h-5 lg:w-6 lg:h-6 -mr-1 rotate-45" strokeWidth={2} />
          <PenTool className="w-4 h-4 lg:w-5 lg:h-5" strokeWidth={2} />
        </div>
        <div className="flex flex-col">
          <span className="font-extrabold text-[15px] lg:text-lg leading-none tracking-tight text-gray-900">
            Чертёжник.рф
          </span>
          <span className="text-[10px] lg:text-xs text-gray-400 leading-none mt-0.5 font-medium">
            Рабочие чертежи за 14 дней
          </span>
        </div>
      </div>

      <Drawer.Root direction="right">
        <Drawer.Trigger asChild>
          <button
            className="w-9 h-9 lg:w-10 lg:h-10 flex items-center justify-center text-gray-500 hover:bg-gray-100 active:bg-gray-100 rounded-xl transition-colors duration-150"
            data-testid="button-menu"
          >
            <Menu className="w-5 h-5" strokeWidth={2} />
          </button>
        </Drawer.Trigger>
        <Drawer.Portal>
          <Drawer.Overlay className="fixed inset-0 bg-black/40 z-50" />
          <Drawer.Content className="bg-white flex flex-col h-full w-[80%] lg:w-[360px] mt-24 lg:mt-0 fixed bottom-0 right-0 z-50 p-6 shadow-2xl focus:outline-none rounded-l-[20px]">
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
      </div>
    </header>
  );
}
