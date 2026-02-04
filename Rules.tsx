import React from 'react';

const Rules: React.FC = () => {
  return (
    <section id="rules" className="py-24 bg-white font-montserrat overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* 標題與參數 */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-20 gap-8">
          <div className="max-w-2xl">
            <h2 className="text-6xl md:text-8xl font-black uppercase italic text-primary leading-none mb-6">HOW TO <br/><span className="text-accent">WIN.</span></h2>
            <p className="text-slate-500 font-extrabold text-xl leading-relaxed italic border-l-8 border-accent pl-6">
              Memorize. Match. Dump. <br/> Shout DROP! to win.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-4 w-full md:w-auto">
             <div className="flex gap-4 p-8 bg-primary rounded-[32px] border-4 border-accent shadow-2xl rotate-3">
                <div className="text-center flex-1">
                  <div className="text-accent font-black text-3xl">3-6</div>
                  <div className="text-[10px] uppercase font-black text-white/60 tracking-[0.2em]">SQUAD</div>
                </div>
                <div className="w-[2px] bg-white/10"></div>
                <div className="text-center flex-1 px-4">
                  <div className="text-accent font-black text-3xl">20-30</div>
                  <div className="text-[10px] uppercase font-black text-white/60 tracking-[0.2em]">MINS</div>
                </div>
                <div className="w-[2px] bg-white/10"></div>
                <div className="text-center flex-1">
                  <div className="text-accent font-black text-3xl">10+</div>
                  <div className="text-[10px] uppercase font-black text-white/60 tracking-[0.2em]">AGES</div>
                </div>
             </div>
          </div>
        </div>

        {/* 遊戲步驟與能力鏈 */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div className="space-y-16">
            <div className="group relative">
              <div className="flex items-center gap-6 mb-6">
                <span className="w-16 h-16 bg-primary text-accent rounded-[20px] flex items-center justify-center font-black italic text-3xl shadow-xl transition-transform group-hover:rotate-12 group-hover:scale-110">1</span>
                <h3 className="text-3xl font-black uppercase italic text-primary tracking-tight">Setup the Grid</h3>
              </div>
              <div className="pl-20">
                <p className="text-slate-500 font-bold text-lg mb-4 leading-relaxed">
                  Deal 4 cards face-down in a 2x2 grid. You can only peek at <span className="text-primary underline decoration-accent-deep decoration-4 font-black italic">TWO of your cards</span> once. Memorize their positions—your memory is the only thing standing between you and defeat.
                </p>
              </div>
            </div>

            <div className="group relative">
              <div className="flex items-center gap-6 mb-6">
                <span className="w-16 h-16 bg-accent text-primary-dark rounded-[20px] flex items-center justify-center font-black italic text-3xl shadow-xl shadow-accent/20 transition-transform group-hover:-rotate-12 group-hover:scale-110">2</span>
                <h3 className="text-3xl font-black uppercase italic text-primary tracking-tight">Dump Matches</h3>
              </div>
              <div className="pl-20">
                <p className="text-slate-500 font-bold text-lg leading-relaxed">
                  When the top card of the discard pile matches one in your grid, <span className="text-accent-deep font-black italic text-xl px-2 bg-accent/20 rounded-lg whitespace-nowrap">DUMP IT FAST!</span> It doesn't have to be your turn. Be the quickest to shed cards and shrink your hand score to zero.
                </p>
              </div>
            </div>

            <div className="group relative">
              <div className="flex items-center gap-6 mb-6">
                <span className="w-16 h-16 bg-primary text-white rounded-[20px] flex items-center justify-center font-black italic text-3xl shadow-xl transition-transform group-hover:rotate-12 group-hover:scale-110">3</span>
                <h3 className="text-3xl font-black uppercase italic text-primary tracking-tight">Ability Chain</h3>
              </div>
              <div className="pl-20 space-y-6">
                <p className="text-slate-500 font-bold text-lg leading-relaxed">
                  Use special discards to wreck your friends: if you discard one of the actionable power cards, its ability triggers immediately. This allows you to gain vital information or directly disrupt your opponents' strategy.
                </p>
                <div className="flex flex-wrap gap-3">
                  <div className="px-5 py-3 bg-primary text-accent rounded-xl text-xs font-black tracking-widest hover:bg-accent-deep hover:text-white transition-all cursor-pointer shadow-md flex flex-col items-center">
                    <span>PEEK</span>
                    <span className="text-[8px] opacity-60 mt-1 uppercase">See any card</span>
                  </div>
                  <div className="px-5 py-3 bg-primary text-accent rounded-xl text-xs font-black tracking-widest hover:bg-accent-deep hover:text-white transition-all cursor-pointer shadow-md flex flex-col items-center">
                    <span>SWAP</span>
                    <span className="text-[8px] opacity-60 mt-1 uppercase">Trade cards</span>
                  </div>
                  <div className="px-5 py-3 bg-primary text-accent rounded-xl text-xs font-black tracking-widest hover:bg-accent-deep hover:text-white transition-all cursor-pointer shadow-md flex flex-col items-center">
                    <span>GIVE</span>
                    <span className="text-[8px] opacity-60 mt-1 uppercase">Pass a card</span>
                  </div>
                  <div className="px-5 py-3 bg-primary text-accent rounded-xl text-xs font-black tracking-widest hover:bg-accent-deep hover:text-white transition-all cursor-pointer shadow-md flex flex-col items-center">
                    <span>STEAL</span>
                    <span className="text-[8px] opacity-60 mt-1 uppercase">Take a card</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* 計分與終局宣告 */}
          <div className="bg-primary-dark rounded-[60px] p-10 md:p-16 text-white relative overflow-hidden border-4 border-accent shadow-[0_30px_60px_rgba(5,16,64,0.4)]">
            <div className="absolute -top-10 -right-10 w-80 h-80 bg-accent/20 blur-[100px] rounded-full"></div>
            
            <h3 className="text-5xl md:text-6xl font-black uppercase italic mb-8 leading-none text-white relative z-10">SHOUT <br/><span className="text-accent border-b-4 border-accent pb-2">"DROP!"</span></h3>
            <p className="text-slate-300 font-bold text-xl mb-10 leading-relaxed italic relative z-10">
              Think your hand is lower than everyone else? Skip your draw and declare it. This triggers the final round—everyone else gets exactly one more turn to lower their score.
            </p>

            <div className="relative z-10 space-y-8">
                <div className="flex gap-6 items-start">
                   <div className="w-10 h-10 bg-accent text-primary rounded-xl flex items-center justify-center shrink-0 font-black">!</div>
                   <div>
                      <h4 className="font-black text-xl uppercase italic mb-1">THE TRAP</h4>
                      <p className="text-slate-400 text-sm font-bold leading-relaxed">If you shout DROP and your hand isn't the absolute lowest, you gain +50 penalty points instantly. High risk, high glory.</p>
                   </div>
                </div>

                <div className="pt-10 border-t-4 border-accent/20 flex flex-col sm:flex-row items-center justify-between gap-8">
                    <div className="text-center sm:text-left">
                        <div className="text-[11px] uppercase font-black text-slate-500 tracking-[0.4em] mb-1">TARGET SCORE</div>
                        <div className="text-5xl font-black text-accent italic">100 PTS</div>
                    </div>
                    <button className="w-full sm:w-auto bg-accent text-primary-dark px-10 py-5 rounded-2xl font-black uppercase italic text-sm tracking-[0.2em] shadow-[0_8px_0_#D97706] active:translate-y-2 active:shadow-none transition-all">Watch Tutorial</button>
                </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Rules;