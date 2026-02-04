
import React from 'react';
import Header from './Header';
import Hero from './Hero';
import HybridIntro from './HybridIntro';
import GetTheDeck from './GetTheDeck';
import Rules from './Rules';
import AppSection from './AppSection';
import Shop from './Shop';
import GeminiAssistant from './GeminiAssistant';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-white font-montserrat">
      <Header />
      
      <main>
        <Hero />
        <HybridIntro />
        <GetTheDeck />
        
        <section className="py-12 bg-white">
            <div className="max-w-7xl mx-auto px-4 text-center">
                <div className="flex flex-wrap justify-center items-center gap-16 opacity-30 grayscale hover:grayscale-0 transition-all cursor-default duration-500">
                    <img src="https://picsum.photos/seed/ignfun/200/50?grayscale" alt="Partner 1" className="h-6" />
                    <img src="https://picsum.photos/seed/gamespotfun/200/50?grayscale" alt="Partner 2" className="h-6" />
                    <img src="https://picsum.photos/seed/pcgamerfun/200/50?grayscale" alt="Partner 3" className="h-6" />
                    <img src="https://picsum.photos/seed/kotakufun/200/50?grayscale" alt="Partner 4" className="h-6" />
                </div>
            </div>
        </section>

        <Rules />
        <Shop />
        <GeminiAssistant />
        <AppSection />

        <section className="py-24 bg-primary-dark relative overflow-hidden m-4 sm:m-8 lg:m-12 rounded-[60px] shadow-[0_40px_80px_rgba(5,16,64,0.4)] border-8 border-accent">
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-accent/20 rounded-full -translate-y-1/2 translate-x-1/2 blur-[120px]"></div>
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-accent/10 rounded-full translate-y-1/2 -translate-x-1/2 blur-[100px]"></div>
            
            <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 text-center relative z-10">
                <div className="inline-block px-6 py-2 bg-accent text-primary font-black uppercase tracking-[0.4em] text-xs rounded-full mb-10 border-2 border-white">COMMUNITY CHALLENGE</div>
                <h2 className="text-5xl md:text-8xl font-black uppercase italic text-white mb-8 leading-[0.85]">READY TO <br/><span className="text-primary bg-white px-6 inline-block transform -rotate-2 skew-x-3 shadow-xl">VIEW</span> THE DECK?</h2>
                <p className="text-slate-300 text-xl md:text-2xl mb-12 max-w-3xl mx-auto font-bold uppercase tracking-widest italic">Join 1,000,000+ players in the fastest card game ever made.</p>
                <div className="flex flex-col sm:flex-row justify-center gap-6">
                    <button className="px-12 py-6 bg-accent text-primary-dark font-black uppercase italic rounded-2xl shadow-[0_10px_0_#D97706] hover:translate-y-[-4px] active:translate-y-2 active:shadow-none transition-all tracking-[0.3em] text-sm">Join the Chaos</button>
                    <button className="px-12 py-6 bg-white text-primary font-black uppercase italic rounded-2xl shadow-[0_10px_0_#cbd5e1] hover:translate-y-[-4px] active:translate-y-2 active:shadow-none transition-all tracking-[0.3em] text-sm">Official Discord</button>
                </div>
            </div>
        </section>
      </main>

      <footer className="py-24 bg-slate-50 border-t-8 border-primary relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-16 mb-20">
                <div className="col-span-1 md:col-span-2">
                    <div className="flex items-center gap-4 mb-8">
                        <div className="w-14 h-14 bg-primary rounded-2xl flex items-center justify-center font-black italic text-white text-3xl shadow-xl shadow-primary/20 rotate-6 border-2 border-accent">V</div>
                        <span className="text-3xl font-black uppercase italic tracking-tighter text-primary">VIEW EDITONS</span>
                    </div>
                    <p className="text-slate-400 max-w-sm mb-10 leading-relaxed font-bold text-lg italic">The ultimate hybrid card game experience.</p>
                </div>
            </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
