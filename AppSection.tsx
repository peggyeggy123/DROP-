import React from 'react';

const AppSection: React.FC = () => {
  return (
    <section id="app" className="py-24 bg-white overflow-hidden font-montserrat">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div className="relative order-2 lg:order-1">
            <div className="w-full h-[600px] bg-primary-dark rounded-[60px] border-8 border-primary overflow-hidden relative shadow-[0_40px_80px_rgba(5,16,64,0.3)] hover:scale-[1.02] transition-transform duration-700">
               <img src="https://images.unsplash.com/photo-1614850523296-d8c1af93d400?auto=format&fit=crop&q=80&w=800&l=1200" alt="Mobile App UI" className="w-full h-full object-cover opacity-60" />
               
               {/* 漂浮 UI 元素 */}
               <div className="absolute top-10 left-10 right-10 flex flex-col gap-6">
                  <div className="bg-white/95 backdrop-blur-xl p-5 rounded-3xl border-4 border-accent shadow-2xl flex items-center justify-between animate-float">
                    <div className="flex items-center gap-4">
                        <div className="w-12 h-12 bg-accent-deep rounded-xl flex items-center justify-center text-white">
                            <i className="fa-solid fa-bolt text-xl"></i>
                        </div>
                        <div>
                            <span className="block text-[10px] font-black uppercase text-slate-400 tracking-widest">Match Found!</span>
                            <span className="text-primary font-black text-lg">PRO_PLAYER_01</span>
                        </div>
                    </div>
                    <div className="text-accent-deep font-black italic">VS</div>
                  </div>

                  <div className="self-end bg-accent text-primary-dark px-6 py-3 rounded-2xl shadow-2xl flex items-center gap-3 font-black italic border-2 border-white text-sm">
                    <i className="fa-solid fa-trophy"></i>
                    RANK #12 GLOBAL
                  </div>
               </div>
               
               <div className="absolute bottom-10 left-0 right-0 px-10">
                    <div className="w-full h-16 bg-primary text-accent rounded-3xl flex items-center justify-center font-black uppercase italic tracking-widest border-4 border-accent shadow-2xl">
                        STARTING IN 3... 2... 1...
                    </div>
               </div>
            </div>
            
            {/* 裝飾背景 */}
            <div className="absolute -z-10 -bottom-10 -left-10 w-64 h-64 bg-accent/30 blur-[80px] rounded-full"></div>
          </div>

          <div className="order-1 lg:order-2">
            <div className="inline-block px-4 py-1.5 bg-primary text-accent rounded-xl text-[10px] font-black uppercase tracking-[0.3em] mb-10">THE DIGITAL ARENA</div>
            <h2 className="text-6xl md:text-8xl font-black uppercase italic mb-8 text-primary-dark leading-[0.85]">PLAY <br/><span className="text-accent-deep">ANYWHERE.</span></h2>
            <p className="text-xl text-slate-500 mb-10 leading-relaxed font-bold italic border-l-8 border-accent-deep pl-8">
              Fastest matchmaking in card gaming history. Enter ranked leagues, earn unique card backs, and dominate.
            </p>
            
            {/* 縮小後的功能網格 */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
              <div className="bg-slate-50 p-6 rounded-[28px] border-4 border-slate-100 group hover:border-accent transition-all hover:-translate-y-1.5 shadow-sm">
                <div className="w-12 h-12 bg-accent text-primary rounded-xl flex items-center justify-center mb-3 shadow-md shadow-accent/20 transition-transform group-hover:scale-110">
                    <i className="fa-solid fa-rocket text-xl"></i>
                </div>
                <h4 className="font-black text-xl mb-1 text-primary uppercase italic">Instant In</h4>
                <p className="text-slate-400 text-[11px] font-black uppercase tracking-wider leading-relaxed">No downloads required. <br/>Jump in via web.</p>
              </div>
              <div className="bg-slate-50 p-6 rounded-[28px] border-4 border-slate-100 group hover:border-accent-deep transition-all hover:-translate-y-1.5 shadow-sm">
                <div className="w-12 h-12 bg-accent-deep text-white rounded-xl flex items-center justify-center mb-3 shadow-md shadow-accent-deep/20 transition-transform group-hover:scale-110">
                    <i className="fa-solid fa-medal text-xl"></i>
                </div>
                <h4 className="font-black text-xl mb-1 text-primary uppercase italic">Real Loot</h4>
                <p className="text-slate-400 text-[11px] font-black uppercase tracking-wider leading-relaxed">Win physical deck <br/>discounts daily.</p>
              </div>
            </div>

            <button className="w-full py-5 bg-accent-deep text-white font-black uppercase italic rounded-2xl hover:scale-[1.02] active:scale-95 transition-all shadow-[0_8px_0_#991b1b] tracking-[0.3em] text-sm">
              Launch Digital Battle
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppSection;