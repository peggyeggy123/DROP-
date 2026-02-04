import React from 'react';

const GetTheDeck: React.FC = () => {
  return (
    <section id="get-the-deck" className="py-12 md:py-16 bg-primary relative overflow-hidden font-montserrat">
      {/* Background patterns */}
      <div className="absolute inset-0 opacity-10">
         <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(#F59E0B_1px,transparent_1px)] [background-size:20px_20px]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="bg-white rounded-[40px] overflow-hidden shadow-[0_20px_0_#F59E0B] flex flex-col lg:flex-row items-stretch border-4 border-accent">
          
          {/* Product Image Side */}
          <div className="lg:w-2/5 bg-slate-50 p-8 flex flex-col items-center justify-center relative border-b-4 lg:border-b-0 lg:border-r-4 border-accent">
             <div className="relative group mb-8">
                <div className="absolute inset-0 bg-accent/20 blur-3xl rounded-full scale-110"></div>
                <img 
                  src="https://images.unsplash.com/photo-1606167668584-78701c57f13d?auto=format&fit=crop&q=80&w=600&h=600" 
                  alt="DROP! Classic Edition Physical Deck" 
                  className="relative z-10 w-full max-w-[280px] drop-shadow-[0_30px_30px_rgba(0,0,0,0.15)] group-hover:-translate-y-3 transition-transform duration-700"
                />
                
                <div className="absolute -top-2 -right-2 bg-accent text-primary-dark font-black px-4 py-1.5 rounded-xl rotate-12 shadow-xl z-20 border-2 border-white text-[10px] uppercase italic animate-pulse">
                  CLASSIC EDITION
                </div>
                <div className="absolute -bottom-4 -left-4 bg-primary text-white font-black px-5 py-3 rounded-2xl -rotate-6 shadow-xl z-20 border-4 border-accent">
                  <div className="text-[9px] uppercase tracking-widest opacity-80">ONLY</div>
                  <div className="text-2xl font-black">$19.99</div>
                </div>
             </div>

             {/* Game Essentials Mini-Grid */}
             <div className="w-full grid grid-cols-2 gap-2 relative z-10">
                <div className="bg-white p-3 rounded-xl border-2 border-slate-100 flex flex-col items-center text-center">
                    <i className="fa-solid fa-users text-accent mb-1 text-xs"></i>
                    <span className="text-[9px] font-black uppercase text-slate-400">Players</span>
                    <span className="text-xs font-black text-primary italic">3 - 6</span>
                </div>
                <div className="bg-white p-3 rounded-xl border-2 border-slate-100 flex flex-col items-center text-center">
                    <i className="fa-solid fa-stopwatch text-accent mb-1 text-xs"></i>
                    <span className="text-[9px] font-black uppercase text-slate-400">Time</span>
                    <span className="text-xs font-black text-primary italic">15-20 Min</span>
                </div>
             </div>
          </div>

          {/* Text/CTA Side */}
          <div className="lg:w-3/5 p-8 lg:p-12 flex flex-col justify-center">
            <div className="inline-block px-3 py-1 mb-4 rounded-lg bg-accent text-primary font-black uppercase tracking-[0.2em] text-[9px] w-fit">
              #1 PARTY GAME 2024
            </div>
            
            <h2 className="text-3xl md:text-5xl font-black uppercase italic text-primary leading-none mb-6">
              CLASSIC EDITION. <br/><span className="text-accent">REAL ACTION.</span>
            </h2>
            
            <div className="space-y-6 mb-8">
              {/* Essentials & Action */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <h4 className="text-primary font-black uppercase italic text-sm tracking-widest border-b-2 border-slate-100 pb-2">Game Essentials</h4>
                  <ul className="space-y-3">
                    <li className="flex gap-3 items-center">
                        <div className="w-6 h-6 rounded bg-accent/20 flex items-center justify-center shrink-0">
                            <i className="fa-solid fa-bolt-lightning text-accent text-xs"></i>
                        </div>
                        <span className="text-sm font-black text-slate-500 uppercase italic">High-stakes & Loud</span>
                    </li>
                    <li className="flex gap-3 items-center">
                        <div className="w-6 h-6 rounded bg-accent/20 flex items-center justify-center shrink-0">
                            <i className="fa-solid fa-hand-fist text-accent text-xs"></i>
                        </div>
                        <span className="text-sm font-black text-slate-500 uppercase italic">No turn-taking</span>
                    </li>
                    <li className="flex gap-3 items-center">
                        <div className="w-6 h-6 rounded bg-accent/20 flex items-center justify-center shrink-0">
                            <i className="fa-solid fa-qrcode text-accent text-xs"></i>
                        </div>
                        <span className="text-sm font-black text-slate-500 uppercase italic">Exclusive Skins</span>
                    </li>
                  </ul>
                </div>

                <div className="space-y-4">
                  <h4 className="text-primary font-black uppercase italic text-sm tracking-widest border-b-2 border-slate-100 pb-2">What's in the box?</h4>
                  <ul className="space-y-3">
                    <li className="flex gap-3 items-center">
                        <div className="w-6 h-6 rounded bg-primary/10 flex items-center justify-center shrink-0">
                            <i className="fa-solid fa-layer-group text-primary text-xs"></i>
                        </div>
                        <span className="text-sm font-black text-slate-500 uppercase italic">54-Card Pro Deck</span>
                    </li>
                    <li className="flex gap-3 items-center">
                        <div className="w-6 h-6 rounded bg-primary/10 flex items-center justify-center shrink-0">
                            <i className="fa-solid fa-box-open text-primary text-xs"></i>
                        </div>
                        <span className="text-sm font-black text-slate-500 uppercase italic">Magnetic Box</span>
                    </li>
                    <li className="flex gap-3 items-center">
                        <div className="w-6 h-6 rounded bg-primary/10 flex items-center justify-center shrink-0">
                            <i className="fa-solid fa-map text-primary text-xs"></i>
                        </div>
                        <span className="text-sm font-black text-slate-500 uppercase italic">Tutorial Poster</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* 場景標籤 */}
              <div className="bg-slate-50 p-6 rounded-[28px] border-2 border-slate-100">
                <h4 className="text-primary font-black uppercase italic text-xs tracking-widest mb-4">When to DROP?</h4>
                <div className="flex flex-wrap gap-2">
                    {['House Party', 'Pre-Game', 'Competitive Circle'].map((vibe) => (
                        <div key={vibe} className="px-4 py-2 bg-white rounded-full border border-slate-200 text-xs font-black uppercase italic text-primary shadow-sm hover:border-accent transition-colors">
                            {vibe}
                        </div>
                    ))}
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              <a href="#shop" className="flex-1 py-4 bg-accent text-primary-dark font-black uppercase italic rounded-xl btn-pop shadow-[0_6px_0_#D97706] text-center tracking-[0.2em] text-[11px] active:translate-y-1.5 active:shadow-none transition-all">
                Purchase the deck
              </a>
              <a href="#rules" className="flex-1 py-4 bg-white text-primary font-black uppercase italic rounded-xl btn-pop text-center tracking-[0.2em] text-[11px] border-2 border-primary shadow-[0_6px_0_#121d57] active:translate-y-1.5 active:shadow-none transition-all">
                View Rules
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GetTheDeck;