import React, { useState } from 'react';
import { USER_INFO } from '../constants';

const BusinessCard: React.FC = () => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  // Using qrserver API for a reliable, real QR code
  const qrCodeUrl = `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${encodeURIComponent(USER_INFO.website)}&bgcolor=ffffff&color=0f172a&margin=10`;

  return (
    <div className="perspective-1000 w-full max-w-[400px] h-[240px] cursor-pointer group" onClick={handleFlip}>
      <div
        className={`relative w-full h-full text-white transition-all duration-700 transform-style-3d shadow-card rounded-xl ${
          isFlipped ? 'rotate-y-180' : ''
        }`}
      >
        {/* FRONT SIDE */}
        <div className="absolute inset-0 w-full h-full backface-hidden rounded-xl overflow-hidden bg-gradient-to-br from-slate-900 to-slate-800 border border-slate-700 p-8 flex flex-col justify-between">
          {/* Noise Texture Overlay */}
          <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='1'/%3E%3C/svg%3E")` }}></div>
          
          <div className="relative z-10 flex justify-between items-start">
            <div className="w-12 h-12 rounded-full border border-amber-500/30 flex items-center justify-center bg-amber-500/10 backdrop-blur-sm">
                <span className="text-2xl font-serif text-amber-500 font-bold">A</span>
            </div>
            <div className="flex items-center gap-1.5 opacity-50">
               <div className="w-1 h-1 rounded-full bg-amber-500"></div>
               <div className="w-1 h-1 rounded-full bg-slate-500"></div>
               <div className="w-1 h-1 rounded-full bg-slate-500"></div>
            </div>
          </div>

          <div className="relative z-10 text-center mt-2">
            <h1 className="text-3xl font-serif tracking-wide text-white mb-1">{USER_INFO.name}</h1>
            <p className="text-[10px] text-amber-500/90 uppercase tracking-[0.2em] font-medium">{USER_INFO.title}</p>
          </div>

          <div className="relative z-10 flex justify-between items-end">
             <div className="h-[1px] w-12 bg-amber-500/50"></div>
             <p className="text-[10px] text-slate-500 tracking-wider">{USER_INFO.location}</p>
          </div>
        </div>

        {/* BACK SIDE */}
        <div className="absolute inset-0 w-full h-full backface-hidden rotate-y-180 rounded-xl overflow-hidden bg-slate-900 border border-slate-700 p-8 flex flex-col justify-center">
             {/* Abstract Lines */}
             <div className="absolute right-0 top-0 h-full w-1/3 bg-gradient-to-l from-slate-800 to-transparent skew-x-12 opacity-50 pointer-events-none"></div>
             
             <div className="relative z-10 flex justify-between items-center h-full gap-4">
                <div className="space-y-4 flex-1">
                    <ContactItem icon="phone" text={USER_INFO.phone} />
                    <ContactItem icon="mail" text={USER_INFO.email} />
                    <ContactItem icon="send" text={USER_INFO.telegram} />
                    <ContactItem icon="globe" text={USER_INFO.website} />
                </div>

                <div className="flex-shrink-0">
                    <div className="w-24 h-24 bg-white p-1 rounded-sm shadow-xl overflow-hidden transform transition-transform group-hover:scale-105">
                        {/* Real QR Code */}
                        <img 
                            src={qrCodeUrl} 
                            alt="Scan for contacts" 
                            className="w-full h-full object-contain mix-blend-multiply"
                        />
                    </div>
                </div>
             </div>
        </div>
      </div>
    </div>
  );
};

const ContactItem: React.FC<{ icon: string; text: string }> = ({ icon, text }) => {
    const icons: Record<string, React.ReactNode> = {
        phone: <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />,
        mail: <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />,
        send: <path strokeLinecap="round" strokeLinejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />,
        globe: <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S12 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S12 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m-15.354 0A8.962 8.962 0 013 12c0-.778.099-1.533.284-2.253m0 0A11.953 11.953 0 0112 10.5c2.998 0 5.74-1.1 7.843-2.918c.04.1.078.201.115.304m-16.03 0a12.004 12.004 0 01-.115-.304m0 0a11.953 11.953 0 01-.284-2.253" />
    };

    return (
        <div className="flex items-center gap-3 text-slate-300">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 text-amber-500 flex-shrink-0">
                {icons[icon]}
            </svg>
            <span className="text-[11px] sm:text-xs font-light tracking-wide truncate max-w-[150px]">{text}</span>
        </div>
    )
}

export default BusinessCard;