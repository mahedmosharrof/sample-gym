import React, { useState } from 'react';
import Template1 from './Template1'; // Your first classic design
import Template2 from './Template2'; // Your second cinematic design
import Template3 from './Template3'; // Your third SquatNY agency design

export default function App() {
  const [activeTemplate, setActiveTemplate] = useState('template3');

  // Multi-template rendering map
  const renderActiveTemplate = () => {
    switch (activeTemplate) {
      case 'template1':
        return <Template1 />;
      case 'template2':
        return <Template2 />;
      case 'template3':
        return <Template3 />;
      default:
        return <Template3 />;
    }
  };

  return (
    <div className="relative">
      
      {/* 🎛️ DYNAMIC CONTROL HUB DECK */}
      <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-[99999] bg-black/90 backdrop-blur-md border border-neutral-800 px-5 py-2.5 rounded-full flex items-center gap-3 shadow-2xl w-max max-w-full overflow-x-auto">
        <span className="text-[9px] font-black text-neutral-500 tracking-widest uppercase mr-2 hidden md:inline">
          LIVE LAYOUTS:
        </span>
        
        {/* Template 1 Toggle */}
        <button 
          onClick={() => setActiveTemplate('template1')}
          className={`text-[10px] font-black uppercase tracking-wider px-4 py-2 rounded-full transition-all shrink-0 ${
            activeTemplate === 'template1' 
              ? 'bg-orange-500 text-black shadow-md' 
              : 'text-neutral-400 hover:text-white hover:bg-neutral-950'
          }`}
        >
          Classic (T1)
        </button>

        {/* Template 2 Toggle */}
        <button 
          onClick={() => setActiveTemplate('template2')}
          className={`text-[10px] font-black uppercase tracking-wider px-4 py-2 rounded-full transition-all shrink-0 ${
            activeTemplate === 'template2' 
              ? 'bg-orange-500 text-black shadow-md' 
              : 'text-neutral-400 hover:text-white hover:bg-neutral-950'
          }`}
        >
          Cinematic (T2)
        </button>

        {/* Template 3 Toggle */}
        <button 
          onClick={() => setActiveTemplate('template3')}
          className={`text-[10px] font-black uppercase tracking-wider px-4 py-2 rounded-full transition-all shrink-0 ${
            activeTemplate === 'template3' 
              ? 'bg-orange-500 text-black shadow-md' 
              : 'text-neutral-400 hover:text-white hover:bg-neutral-950'
          }`}
        >
          SquatNY × Gallery (T3)
        </button>
      </div>

      {/* 🚀 ACTIVE RENDER VIEWPORT */}
      <main>
        {renderActiveTemplate()}
      </main>

    </div>
  );
}