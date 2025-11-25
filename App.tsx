import React, { useState } from 'react';
import BusinessCard from './components/BusinessCard';
import PortfolioCard from './components/PortfolioCard';

const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'card' | 'portfolio'>('card');

  return (
    <div className="min-h-screen w-full bg-[#0f172a] flex items-center justify-center p-4 relative overflow-hidden">
      
      {/* Ambient Background Lights */}
      <div className="absolute top-[-20%] left-[-10%] w-[500px] h-[500px] bg-indigo-900/20 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-[-20%] right-[-10%] w-[500px] h-[500px] bg-amber-900/10 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="w-full max-w-md flex flex-col items-center gap-8 relative z-10">
        
        {/* Navigation Switcher */}
        <div className="flex bg-slate-900/50 p-1 rounded-full border border-white/5 backdrop-blur-sm">
            <button 
                onClick={() => setActiveTab('card')}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                    activeTab === 'card' 
                    ? 'bg-slate-700 text-white shadow-lg' 
                    : 'text-slate-500 hover:text-slate-300'
                }`}
            >
                Визитка
            </button>
            <button 
                onClick={() => setActiveTab('portfolio')}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                    activeTab === 'portfolio' 
                    ? 'bg-slate-700 text-white shadow-lg' 
                    : 'text-slate-500 hover:text-slate-300'
                }`}
            >
                Портфолио
            </button>
        </div>

        {/* Content Container with Animation - adjusted height to fit new portfolio */}
        <div className="w-full flex justify-center perspective-1000 min-h-[500px] items-center">
            {activeTab === 'card' ? (
                <div className="animate-fade-in-up w-full flex justify-center">
                    <BusinessCard />
                </div>
            ) : (
                <div className="animate-fade-in-up w-full flex justify-center">
                    <PortfolioCard />
                </div>
            )}
        </div>

        {/* Footer info */}
        <p className="text-[10px] text-slate-600 tracking-widest uppercase">
            {activeTab === 'card' ? 'Нажмите на карту, чтобы перевернуть' : 'Листайте вниз для просмотра'}
        </p>
      </div>

      <style>{`
        @keyframes fadeInUp {
            from { opacity: 0; transform: translateY(20px); }
            to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in-up {
            animation: fadeInUp 0.5s ease-out forwards;
        }
        @keyframes fadeIn {
            from { opacity: 0; }
            to { opacity: 1; }
        }
        .animate-fade-in {
            animation: fadeIn 0.8s ease-out forwards;
        }
      `}</style>
    </div>
  );
};

export default App;