import React from 'react';

const HybridIntro: React.FC = () => {
  return (
    <section className="py-16 bg-slate-50 relative overflow-hidden font-montserrat">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div className="text-left space-y-4">
            <h2 className="text-4xl md:text-6xl font-black uppercase italic text-primary leading-[0.9]">
              One Game, <br/>
              <span className="text-accent">Two Modes.</span>
            </h2>
            <p className="text-2xl text-primary-dark font-black leading-tight">
              The ultimate card game of memory and strategy.
            </p>
            <p className="text-slate-500 font-bold italic text-lg border-l-4 border-accent pl-4">
              Play with anyone, anywhere.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="p-8 bg-white border border-slate-200 rounded-[32px] text-left hover:border-accent transition-all group shadow-sm hover:shadow-xl">
              <div className="w-14 h-14 bg-primary text-white rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-primary/20 transition-transform group-hover:scale-110">
                <i className="fa-solid fa-users text-2xl"></i>
              </div>
              <h3 className="text-2xl font-black mb-2 uppercase italic text-primary">Physical</h3>
              <p className="text-slate-500 text-sm font-bold leading-relaxed">Premium finish cards for tabletop nights. Experience the tactile joy of playing in person.</p>
            </div>
            <div className="p-8 bg-white border border-slate-200 rounded-[32px] text-left hover:border-accent transition-all group shadow-sm hover:shadow-xl">
              <div className="w-14 h-14 bg-accent text-white rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-accent/20 transition-transform group-hover:scale-110">
                <i className="fa-solid fa-mobile-screen text-2xl"></i>
              </div>
              <h3 className="text-2xl font-black mb-2 uppercase italic text-primary">Online</h3>
              <p className="text-slate-500 text-sm font-bold leading-relaxed">Global matchmaking and ranked leagues. Perfect for quick matches on the go.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HybridIntro;