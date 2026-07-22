import React, { useState } from 'react';
import { Header } from '@/components/Header';
import { HeroBanner } from '@/components/HeroBanner';
import { StyleSelector } from '@/components/StyleSelector';
import { Calculator } from '@/components/Calculator';
import { AuthBlock } from '@/components/AuthBlock';
import { TrustBar } from '@/components/TrustBar';
import { State1BottomBar } from '@/components/BottomBar';
import { BookingDrawer } from '@/components/BookingDrawer';
import { StageA } from '@/components/dashboard/StageA';
import { StageB } from '@/components/dashboard/StageB';
import { StageC } from '@/components/dashboard/StageC';
import { StageD } from '@/components/dashboard/StageD';
import { DevSwitcher, AppState } from '@/components/DevSwitcher';

export default function Home() {
  const [appState, setAppState] = useState<AppState>('pre-payment');
  const [area, setArea] = useState<number>(28);
  const [isBookingOpen, setIsBookingOpen] = useState(false);

  // Transitions
  const handleAuthenticated = () => {
    // In a real app, this would log them in and fetch their state.
    // For now, we transition to Stage A
    setAppState('stage-a');
  };

  const handlePayForBooking = () => {
    // Proceed to pay -> then to Stage A
    setAppState('stage-a');
  };

  return (
    <div className="min-h-screen md:bg-slate-100 md:flex md:items-center md:justify-center md:py-8 lg:bg-slate-50 lg:block lg:py-0">
      <div className="min-h-[100dvh] md:min-h-[800px] lg:min-h-screen w-full bg-white relative font-sans text-gray-900 mx-auto max-w-[430px] md:rounded-[2rem] md:shadow-2xl lg:max-w-none lg:rounded-none lg:shadow-none overflow-hidden lg:overflow-visible flex flex-col">
        <Header />
        
        <DevSwitcher currentState={appState} onStateChange={setAppState} />

        <main className="flex-grow pt-16 lg:pt-[72px] pb-[100px] lg:pb-28 overflow-y-auto no-scrollbar scroll-smooth">
          {appState === 'pre-payment' && (
            <div className="animate-in fade-in duration-500">
              <div className="lg:max-w-7xl lg:mx-auto lg:px-8 lg:pt-6">
                <StyleSelector />

                <div className="lg:grid lg:grid-cols-12 lg:gap-8 lg:mt-6 lg:items-start">
                  <div className="lg:col-span-7 lg:space-y-6">
                    <HeroBanner />
                    <div className="hidden lg:block">
                      <TrustBar />
                    </div>
                  </div>

                  <div className="lg:col-span-5 lg:sticky lg:top-24 space-y-0">
                    <Calculator area={area} setArea={setArea} />
                    <AuthBlock onAuthenticated={handleAuthenticated} />
                  </div>
                </div>

                <div className="lg:hidden">
                  <TrustBar />
                </div>
              </div>
              
              <div className="h-6 lg:h-0" />

              <State1BottomBar onBook={() => setIsBookingOpen(true)} />
              <BookingDrawer 
                open={isBookingOpen} 
                onOpenChange={setIsBookingOpen} 
                onPay={handlePayForBooking}
              />
            </div>
          )}

          <div className="lg:max-w-4xl lg:mx-auto lg:px-8 lg:w-full">
            {appState === 'stage-a' && <StageA />}
            {appState === 'stage-b' && <StageB area={area} />}
            {appState === 'stage-c' && <StageC />}
            {appState === 'stage-d' && <StageD />}
          </div>

          {/* SEO Block - Visually hidden / scrolled way down, only accessible to crawlers or heavy scrollers */}
          {appState === 'pre-payment' && (
            <div className="mt-20 px-4 lg:px-8 py-8 bg-gray-50 border-t border-gray-100 text-xs text-gray-400 pb-32 lg:max-w-7xl lg:mx-auto">
              <h1 className="font-bold text-gray-600 mb-2">Рабочие чертежи для самостоятельного ремонта квартир</h1>
              <p className="mb-4 leading-relaxed">
                Сервис Чертёжник.рф предоставляет технические чертежи для квартира эконом класса. Идеально подходит, если вы планируете самостоятельный ремонт без дизайнера. Точный план квартиры и рабочие чертежи помогут избежать ошибок строителей.
              </p>
              
              <h2 className="font-bold text-gray-600 mb-2 mt-6">Часто задаваемые вопросы</h2>
              <div className="space-y-3">
                <div>
                  <strong className="text-gray-500">Сколько это стоит?</strong>
                  <p>Фиксированная цена 1 200 ₽ за квадратный метр.</p>
                </div>
                <div>
                  <strong className="text-gray-500">Какие сроки?</strong>
                  <p>Выдаем готовый проект строго за 14 дней после замера.</p>
                </div>
                <div>
                  <strong className="text-gray-500">Что входит в чертежи?</strong>
                  <p>План демонтажа/монтажа, электрика, освещение, сантехника, полы, потолки, раскладка плитки.</p>
                </div>
              </div>
            </div>
          )}
        </main>
      </div>
    </div>
  );
}
