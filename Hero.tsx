
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="relative pt-24 pb-12 lg:pt-32 lg:pb-16 overflow-hidden bg-white font-montserrat">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10 opacity-20 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-primary rounded-full blur-[140px]"></div>
        <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-accent rounded-full blur-[140px]"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-block px-4 py-1.5 mb-6 rounded-full bg-accent/10 border-2 border-accent text-[11px] font-black uppercase tracking-[0.2em] text-accent">
          True Hybrid Play of Card Games
        </div>
        
        {/* LOGO AREA */}
        <div className="mb-6 flex justify-center">
            <div className="relative inline-flex flex-col items-center">
                <div className="w-16 h-16 md:w-24 md:h-24 bg-white border-4 border-primary rounded-[24px] rotate-6 flex items-center justify-center shadow-[0_20px_0_rgba(18,29,87,1)] relative overflow-hidden group btn-pop cursor-pointer">
                     <span className="text-3xl md:text-6xl font-black italic text-primary -rotate-6">D!</span>
                </div>
                <div className="mt-8 text-7xl md:text-[120px] font-black text-primary uppercase italic tracking-tighter leading-none select-none drop-shadow-2xl">
                    DROP!
                </div>
            </div>
        </div>

        <p className="max-w-4xl mx-auto text-lg md:text-2xl text-primary mb-10 leading-relaxed font-bold italic">
          Memory. Fun. Strategic. Master the grid and shout it loud.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-24 lg:mb-32 relative z-10">
          <a href="#shop" className="w-full sm:w-auto px-12 py-6 bg-accent text-primary-dark font-black uppercase italic rounded-2xl btn-pop flex items-center justify-center gap-3 shadow-[0_10px_0_#D97706] tracking-widest text-sm active:translate-y-2 active:shadow-none transition-all">
            <i className="fa-solid fa-fire"></i> Get the Deck
          </a>
          <a href="#app" className="w-full sm:w-auto px-12 py-6 bg-primary text-white font-black uppercase italic rounded-2xl btn-pop flex items-center justify-center gap-3 shadow-[0_10px_0_rgba(5,16,64,1)] tracking-widest text-sm active:translate-y-2 active:shadow-none transition-all">
            <i className="fa-solid fa-bolt-lightning"></i> Play for Free
          </a>
        </div>

        {/* SYMMETRICAL HYBRID VISUALS */}
        <div className="relative max-w-6xl mx-auto">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-48 bg-accent/20 blur-[100px] -z-10 rounded-full"></div>
            
            <div className="flex flex-col md:flex-row justify-center items-center gap-12 md:gap-24">
                
                {/* DIGITAL SIDE */}
                <div className="relative group">
                    <div className="relative w-64 h-[480px] bg-primary-dark rounded-[44px] p-3 shadow-[0_20px_50px_rgba(5,16,64,0.4)] border-4 border-primary animate-float">
                        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-28 h-6 bg-primary-dark rounded-b-2xl z-20 flex items-center justify-center">
                            <div className="w-8 h-1 bg-slate-700 rounded-full"></div>
                        </div>
                        <div className="w-full h-full bg-primary rounded-[34px] overflow-hidden relative border-2 border-white/10">
                            <img src="https://images.unsplash.com/photo-1614850523296-d8c1af93d400?auto=format&fit=crop&q=80&w=400&h=800" className="w-full h-full object-cover mix-blend-overlay opacity-60" />
                            <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-white bg-gradient-to-b from-transparent via-primary-dark/40 to-primary-dark/80">
                                <div className="text-4xl font-black uppercase italic mb-1 tracking-tighter text-accent">LEVEL 99</div>
                                <div className="text-[10px] font-black tracking-[0.3em] opacity-80 uppercase mb-8">Legendary Ranked</div>
                                <div className="w-full space-y-4">
                                    <div className="h-12 bg-white/10 backdrop-blur-xl rounded-2xl border border-white/20 flex items-center justify-center text-[11px] font-black uppercase tracking-widest">Global Arena</div>
                                    <div className="h-12 bg-accent text-primary-dark rounded-2xl flex items-center justify-center text-[12px] font-black uppercase italic shadow-[0_4px_0_#D97706] active:translate-y-1 transition-all">MATCH START</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="absolute -top-4 -left-4 bg-accent text-primary-dark font-black px-6 py-2 rounded-2xl text-[12px] italic shadow-2xl z-30 tracking-widest border-2 border-white rotate-[-5deg]">ONLINE MOBILE</div>
                </div>

                {/* PHYSICAL SIDE */}
                <div className="relative group">
                    <div className="relative w-72 h-[480px] animate-float flex items-center justify-center" style={{ animationDelay: '0.5s' }}>
                        
                        <div className="absolute -top-12 left-0 w-52 h-72 bg-white rounded-2xl shadow-2xl border-2 border-slate-100 rotate-[-15deg] group-hover:rotate-[-25deg] transition-all duration-700 overflow-hidden">
                             <img src="https://images.unsplash.com/photo-1606167668584-78701c57f13d?auto=format&fit=crop&q=80&w=300&h=400" className="w-full h-full object-cover opacity-100" />
                        </div>

                        <div className="relative w-68 h-[420px] bg-white rounded-[32px] p-3 shadow-[30px_50px_100px_rgba(0,0,0,0.2)] border-4 border-slate-50 transition-all duration-500 group-hover:scale-[1.05] z-[10] overflow-hidden">
                            <div className="w-full h-full bg-primary-dark rounded-[24px] flex flex-col relative overflow-hidden">
                                <img src="https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?auto=format&fit=crop&q=80&w=400&h=800" className="w-full h-3/5 object-cover" />
                                <div className="flex-1 bg-white p-6 flex flex-col items-center justify-center border-t-8 border-accent">
                                    <div className="text-4xl font-black text-primary uppercase italic leading-none tracking-tighter mb-1">DROP!</div>
                                    <div className="text-[10px] font-black tracking-[0.4em] text-accent mb-6 uppercase">COLLECTOR DECK</div>
                                    <button className="w-full bg-primary py-3 rounded-xl text-white text-[10px] font-black uppercase tracking-widest">Shop Now</button>
                                </div>
                            </div>
                        </div>

                        <div className="absolute -bottom-8 -right-8 w-24 h-24 bg-accent rounded-full flex flex-col items-center justify-center rotate-12 shadow-2xl border-4 border-white z-30 scale-110">
                             <div className="text-[8px] font-black text-primary-dark leading-none uppercase">INCLUDING</div>
                             <div className="text-lg font-black text-primary-dark">BOX</div>
                        </div>
                    </div>

                    <div className="absolute -top-8 -right-4 bg-accent text-primary-dark font-black px-8 py-3 rounded-2xl text-[14px] italic shadow-2xl z-40 tracking-widest border-2 border-white rotate-[5deg]">DECK SET</div>
                </div>

            </div>
            
            <div className="mt-24 text-[12px] font-black uppercase tracking-[0.8em] text-accent animate-pulse opacity-80">
                SCROLL TO MASTER THE GAME
            </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
