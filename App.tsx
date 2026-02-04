import React from 'react';
import Header from './Header';
import Hero from './Hero';
import HybridIntro from './HybridIntro';
import GetTheDeck from './GetTheDeck';
import Rules from './Rules';
import AppSection from './AppSection';
import Shop from './Shop';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-white font-montserrat">
      <Header />
      
      <main>
        <Hero />
        <HybridIntro />
        <GetTheDeck />
        
        {/* Partners Section */}
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
        <AppSection />

        {/* CTA Section */}
        <section className="py-24 bg-primary-dark relative overflow-hidden m-4 sm:m-8 lg:m-12 rounded-[60px] shadow-[0_40px_80px_rgba(5,16,64,0.4)] border-8 border-accent">
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-accent/20 rounded-full -translate-y-1/2 translate-x-1/2 blur-[120px]"></div>
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-accent/10 rounded-full translate-y-1/2 -translate-x-1/2 blur-[100px]"></div>
            
            <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 text-center relative z-10">
                <div className="inline-block px-6 py-2 bg-accent text-primary font-black uppercase tracking-[0.4em] text-xs rounded-full mb-10 border-2 border-white">COMMUNITY CHALLENGE</div>
                <h2 className="text-4xl md:text-6xl font-black uppercase italic text-white mb-8 leading-[1.1]">READY TO <br/><span className="text-primary bg-white px-6 inline-block transform -rotate-2 skew-x-3 shadow-xl">DROP</span> THE BEAT?</h2>
                <p className="text-slate-300 text-lg md:text-2xl mb-12 max-w-3xl mx-auto font-bold uppercase tracking-widest italic leading-relaxed">Join 1,000,000+ players in the fastest card game ever made.</p>
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
                <div className="col-span-1 md:col-span-1">
                    <div className="flex items-center gap-4 mb-8">
                        <div className="w-14 h-14 bg-primary rounded-2xl flex items-center justify-center font-black italic text-white text-3xl shadow-xl shadow-primary/20 rotate-6 border-2 border-accent">D</div>
                        <span className="text-3xl font-black uppercase italic tracking-tighter text-primary">Drop!</span>
                    </div>
                    <p className="text-slate-400 max-w-sm mb-10 leading-relaxed font-bold text-lg italic">The ultimate hybrid card game experience. Physical táctics, digital speed.</p>
                </div>

                <div>
                    <h4 className="font-black uppercase italic text-primary text-sm tracking-[0.3em] mb-8">Explore</h4>
                    <ul className="space-y-4 text-slate-500 font-bold uppercase text-xs tracking-widest">
                        <li><a href="#rules" className="hover:text-accent transition-colors">How to Play</a></li>
                        <li><a href="#shop" className="hover:text-accent transition-colors">Buy the Deck</a></li>
                        <li><a href="#app" className="hover:text-accent transition-colors">Digital App</a></li>
                        <li><a href="#" className="hover:text-accent transition-colors">Tournaments</a></li>
                    </ul>
                </div>

                <div>
                    <h4 className="font-black uppercase italic text-primary text-sm tracking-[0.3em] mb-8">Community</h4>
                    <ul className="space-y-4 text-slate-500 font-bold uppercase text-xs tracking-widest">
                        <li><a href="#" className="hover:text-accent transition-colors">Discord</a></li>
                        <li><a href="#" className="hover:text-accent transition-colors">Wiki</a></li>
                        <li><a href="#" className="hover:text-accent transition-colors">Fan Art</a></li>
                        <li><a href="#" className="hover:text-accent transition-colors">Support</a></li>
                    </ul>
                </div>

                <div>
                    <h4 className="font-black uppercase italic text-primary text-sm tracking-[0.3em] mb-8">Social</h4>
                    <div className="flex gap-4">
                        <a href="#" className="w-12 h-12 bg-white border-4 border-slate-100 rounded-xl flex items-center justify-center text-primary hover:border-accent hover:text-accent transition-all shadow-sm">
                            <i className="fa-brands fa-twitter text-xl"></i>
                        </a>
                        <a href="#" className="w-12 h-12 bg-white border-4 border-slate-100 rounded-xl flex items-center justify-center text-primary hover:border-accent hover:text-accent transition-all shadow-sm">
                            <i className="fa-brands fa-instagram text-xl"></i>
                        </a>
                        <a href="#" className="w-12 h-12 bg-white border-4 border-slate-100 rounded-xl flex items-center justify-center text-primary hover:border-accent hover:text-accent transition-all shadow-sm">
                            <i className="fa-brands fa-discord text-xl"></i>
                        </a>
                    </div>
                </div>
            </div>

            <div className="pt-12 border-t-2 border-slate-200 flex flex-col md:flex-row justify-between items-center gap-6">
                <p className="text-slate-400 font-black uppercase text-[10px] tracking-[0.4em]">© 2024 DROP! GAMES. ALL RIGHTS RESERVED.</p>
                <div className="flex gap-8 text-slate-400 font-black uppercase text-[10px] tracking-[0.2em]">
                    <a href="#" className="hover:text-primary transition-colors">Privacy</a>
                    <a href="#" className="hover:text-primary transition-colors">Terms</a>
                    <a href="#" className="hover:text-primary transition-colors">Cookies</a>
                </div>
            </div>
        </div>
      </footer>
    </div>
  );
};

export default App;