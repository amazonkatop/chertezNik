import React, { useState, useEffect } from 'react';
import { MapPin, Phone } from 'lucide-react';

interface AuthBlockProps {
  onAuthenticated: () => void;
}

export function AuthBlock({ onAuthenticated }: AuthBlockProps) {
  const [address, setAddress] = useState('');
  const [phone, setPhone] = useState('');
  const [smsSent, setSmsSent] = useState(false);
  const [code, setCode] = useState('');

  // Basic phone mask: +7 (XXX) XXX-XX-XX
  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let val = e.target.value.replace(/\D/g, '');
    if (val.startsWith('7') || val.startsWith('8')) {
      val = val.substring(1);
    }
    
    let formatted = '+7';
    if (val.length > 0) {
      formatted += ` (${val.substring(0, 3)}`;
    }
    if (val.length > 3) {
      formatted += `) ${val.substring(3, 6)}`;
    }
    if (val.length > 6) {
      formatted += `-${val.substring(6, 8)}`;
    }
    if (val.length > 8) {
      formatted += `-${val.substring(8, 10)}`;
    }
    
    setPhone(formatted);
  };

  const handleSendSms = () => {
    if (phone.length > 10) {
      setSmsSent(true);
    }
  };

  useEffect(() => {
    if (code.length === 4) {
      onAuthenticated();
    }
  }, [code, onAuthenticated]);

  return (
    <div className="px-4 mb-8">
      <div className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100 flex flex-col gap-4">
        
        <div className="relative">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <MapPin className="h-5 w-5 text-gray-400" />
          </div>
          <input
            type="text"
            className="block w-full pl-10 pr-3 py-3 border border-gray-200 rounded-xl leading-5 bg-gray-50 placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary sm:text-sm transition-colors"
            placeholder="Адрес (город, улица, дом)"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />
        </div>

        <div className="flex gap-2">
          <div className="relative flex-grow">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Phone className="h-5 w-5 text-gray-400" />
            </div>
            <input
              type="tel"
              className="block w-full pl-10 pr-3 py-3 border border-gray-200 rounded-xl leading-5 bg-gray-50 placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary sm:text-sm transition-colors"
              placeholder="+7 (___) ___-__-__"
              value={phone}
              onChange={handlePhoneChange}
              disabled={smsSent}
            />
          </div>
          {!smsSent && (
            <button 
              onClick={handleSendSms}
              disabled={phone.length < 16} // very rough validation
              className="px-4 py-3 bg-primary text-white text-sm font-medium rounded-xl hover:bg-primary/90 active:bg-primary/80 disabled:opacity-50 disabled:active:bg-primary transition-all flex-shrink-0"
              data-testid="button-send-sms"
            >
              SMS
            </button>
          )}
        </div>

        {smsSent && (
          <div className="mt-2 animate-in fade-in slide-in-from-top-2">
            <label className="block text-sm font-medium text-gray-700 mb-2">Введите код из SMS:</label>
            <input
              type="text"
              inputMode="numeric"
              maxLength={4}
              className="block w-full text-center tracking-[0.5em] font-bold text-xl py-3 border border-primary/40 rounded-xl leading-5 bg-blue-50 focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition-colors"
              placeholder="••••"
              value={code}
              onChange={(e) => setCode(e.target.value.replace(/\D/g, ''))}
              autoFocus
            />
            <p className="text-xs text-gray-400 text-center mt-3">Любые 4 цифры для демо</p>
          </div>
        )}

      </div>
    </div>
  );
}
