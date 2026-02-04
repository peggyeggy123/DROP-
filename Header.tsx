
import React from 'react';

const Header: React.FC = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center font-black text-2xl text-white italic tracking-tighter shadow-lg shadow-primary/20">D</div>
            <span className="text-2xl font-black tracking-widest uppercase italic text-primary">Drop!</span>
          </div>
          <div className="hidden md:flex items-center space-x-8 text-[11px] font-extrabold uppercase tracking-[0.2em] text-slate-500">
            <a href="#rules" className="hover:text-accent transition-colors">How to Play</a>
            <a href="#app" className="hover:text-accent transition-colors">Digital App</a>
            <a href="#shop" className="hover:text-accent transition-colors">Physical Deck</a>
          </div>
          <div className="md:hidden text-primary">
            <i className="fa-solid fa-bars text-2xl"></i>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
