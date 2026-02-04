
import React from 'react';

const GetTheDeck: React.FC = () => {
  return (
    <section id="get-the-deck" className="py-16 md:py-24 bg-primary relative overflow-hidden font-montserrat">
      {/* Background patterns */}
      <div className="absolute inset-0 opacity-10">
         <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(#F59E0B_1px,transparent_1px)] [background-size:20px_20px]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="bg-white rounded-[48px] overflow-hidden shadow-[0_30px_0_#F59E0B] flex flex-col lg:flex-row items-stretch border-4 border-accent">
          
          {/* Product Image Side */}
          <div className="lg:w-2/5 bg-slate-50 p-12 flex flex-col items-center justify-center relative border-b-4 lg:border-b-0 lg:border-r-4 border-accent">
             <div className="relative group mb-12">
                <div className="absolute inset-0 bg-accent/20 blur-3xl rounded-full scale-125"></div>
                <img 
                  src="https://picsum.photos/seed/premiumdeck/600/600" 
                  alt="DROP! Classic Edition Physical Deck" 
                  className="relative z-10 w-full max-w-[340px] drop-shadow-[0_40px_40px_rgba(0,0,0,0.2)] group-hover:-translate-y-4 transition-transform duration-700"
                />
                
                <div className="absolute -top-4 -right-4 bg-accent text-primary-dark font-black px-6 py-2 rounded-2xl rotate-12 shadow-2xl z-20 border-2 border-white text-xs uppercase italic animate-pulse">
                  CLASSIC EDITION
                </div>
                <div className="absolute -bottom-6 -left-6 bg-primary text-white font-black px-6 py-4 rounded-3xl -rotate-6 shadow-2xl z-20 border-4 border-accent">
                  <div className="text-[10px] uppercase tracking-widest opacity-80">ONLY</div>
                  <div className="text-3xl font-black">$19.99</div>
                </div>
             </div>

             {/* Game Essentials Mini-Grid */}
             <div className="w-full grid grid-cols-2 gap-3 relative z-10">
                <div className="bg-white p-4 rounded-2xl border-2 border-slate-100 flex flex-col items-center text-center">
                    <i className="fa-solid fa-users text-accent mb-1"></i>
                    <span className="text-[10px] font-black uppercase text-slate-400">Players</span>
                    <span className="text-sm font-black text-primary italic">3 - 6</span>
                </div>
                <div className="bg-white p-4 rounded-2xl border-2 border-slate-100 flex flex-col items-center text-center">
                    <i className="fa-solid fa-stopwatch text-accent mb-1"></i>
                    <span className="text-[10px] font-black uppercase text-slate-400">Time</span>
                    <span className="text-sm font-black text-primary italic">15-20 Min</span>
                </div>
             </div>
          </div>

          {/* Text/CTA Side */}
          <div className="lg:w-3/5 p-8 lg:p-16 flex flex-col justify-center">
            <div className="inline-block px-4 py-1.5 mb-6 rounded-lg bg-accent text-primary font-black uppercase tracking-[0.2em] text-[10px] w-fit">
              #1 PARTY GAME 2024
            </div>
            
            <h2 className="text-4xl md:text-6xl font-black uppercase italic text-primary leading-none mb-8">
              CLASSIC EDITION. <br/><span className="text-accent">REAL ACTION.</span>
            </h2>
            
            <div className="space-y-10 mb-10">
              {/* Essentials & Action */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <h4 className="text-primary font-black uppercase italic text-xs tracking-widest border-b-2 border-slate-100 pb-2">Game Essentials</h4>
                  <ul className="space-y-3">
                    <li className="flex gap-3 items-center">
                        <div className="w-6 h-6 rounded bg-accent/20 flex items-center justify-center shrink-0">
                            <i className="fa-solid fa-bolt-lightning text-accent text-[10px]"></i>
                        </div>
                        <span className="text-xs font-black text-slate-500 uppercase italic">The Vibe: High-stakes & Loud</span>
                    </li>
                    <li className="flex gap-3 items-center">
                        <div className="w-6 h-6 rounded bg-accent/20 flex items-center justify-center shrink-0">
                            <i className="fa-solid fa-hand-fist text-accent text-[10px]"></i>
                        </div>
                        <span className="text-xs font-black text-slate-500 uppercase italic">Real Action: No turn-taking</span>
                    </li>
                    <li className="flex gap-3 items-center">
                        <div className="w-6 h-6 rounded bg-accent/20 flex items-center justify-center shrink-0">
                            <i className="fa-solid fa-qrcode text-accent text-[10px]"></i>
                        </div>
                        <span className="text-xs font-black text-slate-500 uppercase italic">Digital Perk: Exclusive Skins</span>
                    </li>
                  </ul>
                </div>

                <div className="space-y-4">
                  <h4 className="text-primary font-black uppercase italic text-xs tracking-widest border-b-2 border-slate-100 pb-2">What's in the box?</h4>
                  <ul className="space-y-3">
                    <li className="flex gap-3 items-center">
                        <div className="w-6 h-6 rounded bg-primary/10 flex items-center justify-center shrink-0">
                            <i className="fa-solid fa-layer-group text-primary text-[10px]"></i>
                        </div>
                        <span className="text-xs font-black text-slate-500 uppercase italic">54-Card Pro 350gsm Deck</span>
                    </li>
                    <li className="flex gap-3 items-center">
                        <div className="w-6 h-6 rounded bg-primary/10 flex items-center justify-center shrink-0">
                            <i className="fa-solid fa-box-open text-primary text-[10px]"></i>
                        </div>
                        <span className="text-xs font-black text-slate-500 uppercase italic">Magnetic Flip-Top Box</span>
                    </li>
                    <li className="flex gap-3 items-center">
                        <div className="w-6 h-6 rounded bg-primary/10 flex items-center justify-center shrink-0">
                            <i className="fa-solid fa-map text-primary text-[10px]"></i>
                        </div>
                        <span className="text-xs font-black text-slate-500 uppercase italic">Tutorial Poster (Skip Manual)</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* The Vibe: Use Cases */}
              <div className="bg-slate-50 p-6 rounded-[32px] border-2 border-slate-100">
                <h4 className="text-primary font-black uppercase italic text-xs tracking-widest mb-4">When to DROP?</h4>
                <div className="flex flex-wrap gap-2">
                    {['The House Party', 'The Pre-Game', 'Competitive Circle'].map((vibe) => (
                        <div key={vibe} className="px-4 py-2 bg-white rounded-full border border-slate-200 text-[10px] font-black uppercase italic text-primary shadow-sm hover:border-accent transition-colors cursor-default">
                            {vibe}
                        </div>
                    ))}
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#shop" className="flex-1 py-5 bg-accent text-primary-dark font-black uppercase italic rounded-2xl btn-pop shadow-[0_8px_0_#D97706] text-center tracking-[0.2em] text-sm active:translate-y-2 active:shadow-none transition-all">
                Purchase the deck
              </a>
              <a href="#rules" className="flex-1 py-5 bg-white text-primary font-black uppercase italic rounded-2xl btn-pop text-center tracking-[0.2em] text-sm border-4 border-primary shadow-[0_8px_0_#121d57] active:translate-y-2 active:shadow-none transition-all">
                View Classic Rules
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GetTheDeck;
