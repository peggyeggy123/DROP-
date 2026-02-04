
import React, { useRef, useState } from 'react';
import { Product } from '../types';

const products: Product[] = [
  {
    id: 'deck-classic',
    name: "Classic Edition",
    price: 19.99,
    description: "The essential 54-card deck. Features linen finish, core special actions, and the iconic 2x2 setup manual.",
    image: "https://picsum.photos/seed/classicfun/600/600",
    tag: "MOST POPULAR"
  },
  {
    id: 'deck-brutal',
    name: "Brutal Edition",
    price: 24.99,
    description: "Matte black finish. Adds 'Assassinate' and 'Blindfold' cards for a more aggressive, high-stakes experience.",
    image: "https://picsum.photos/seed/brutalfun/600/600",
    tag: "HARDCORE ONLY"
  },
  {
    id: 'deck-double',
    name: "Double Edition",
    price: 34.99,
    description: "A larger collector's box containing two full decks. Perfect for chaotic 8-player local tournaments.",
    image: "https://picsum.photos/seed/doublepack/600/600",
    tag: "PARTY SAVER"
  },
  {
    id: 'deck-science',
    name: "Science Edition",
    price: 24.99,
    description: "Periodic-table themed card backs and unique atomic-bond mechanics. A smarter way to reach zero.",
    image: "https://picsum.photos/seed/sciencevibe/600/600",
    tag: "SMART PLAY"
  },
  {
    id: 'deck-christmas',
    name: "Christmas Edition",
    price: 24.99,
    description: "Holiday themed illustrations. Includes 'Gift' and 'Coal' cards to spread cheer or ruin friendships.",
    image: "https://picsum.photos/seed/xmasfun/600/600",
    tag: "HOLIDAY LIMITED"
  },
  {
    id: 'deck-spy',
    name: "Spy Edition",
    price: 24.99,
    description: "Classified design. Features 'Infiltrate' and 'Wiretap' mechanics for players who love high-stakes deception.",
    image: "https://picsum.photos/seed/spyvibe/600/600",
    tag: "TOP SECRET"
  }
];

const Shop: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [activeIdx, setActiveIdx] = useState(0);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const { scrollLeft } = scrollRef.current;
      const scrollAmount = window.innerWidth < 640 ? 300 : 400;
      const scrollTo = direction === 'left' ? scrollLeft - scrollAmount : scrollLeft + scrollAmount;
      scrollRef.current.scrollTo({ left: scrollTo, behavior: 'smooth' });
    }
  };

  const handleScroll = () => {
    if (scrollRef.current) {
      const { scrollLeft } = scrollRef.current;
      const cardWidth = window.innerWidth < 640 ? 300 : 340;
      const index = Math.round(scrollLeft / cardWidth);
      if (index !== activeIdx) setActiveIdx(index);
    }
  };

  return (
    <section id="shop" className="py-24 bg-slate-50 overflow-hidden relative font-montserrat">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div className="text-left">
            <h2 className="text-5xl md:text-7xl font-black uppercase italic text-primary leading-none">VIEW <span className="text-accent">EDITONS.</span></h2>
            <p className="text-slate-400 text-lg font-black mt-4 border-l-4 border-accent pl-6">Level up your game night with premium decks.</p>
          </div>
          <div className="flex items-center gap-6">
             <button 
              onClick={() => scroll('left')}
              className="w-16 h-16 bg-white border-4 border-primary rounded-2xl flex items-center justify-center text-primary hover:bg-accent hover:border-accent hover:text-primary transition-all shadow-[0_8px_0_#121d57] active:translate-y-1 active:shadow-none"
             >
                <i className="fa-solid fa-chevron-left text-2xl"></i>
             </button>
             <button 
              onClick={() => scroll('right')}
              className="w-16 h-16 bg-white border-4 border-primary rounded-2xl flex items-center justify-center text-primary hover:bg-accent hover:border-accent hover:text-primary transition-all shadow-[0_8px_0_#121d57] active:translate-y-1 active:shadow-none"
             >
                <i className="fa-solid fa-chevron-right text-2xl"></i>
             </button>
          </div>
        </div>
      </div>

      <div className="relative group mb-12">
        <div 
          ref={scrollRef}
          onScroll={handleScroll}
          className="flex overflow-x-auto pb-16 px-4 sm:px-[calc((100vw-1280px)/2+2rem)] gap-8 snap-x snap-mandatory no-scrollbar scroll-smooth"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {products.map((product, idx) => (
            <div 
              key={product.id} 
              className={`group flex-none ${idx === 0 ? 'w-[320px] sm:w-[460px]' : 'w-[280px] sm:w-[380px]'} bg-white rounded-[48px] overflow-hidden border-4 border-slate-100 transition-all shadow-xl hover:shadow-[0_30px_60px_rgba(245,158,11,0.2)] hover:border-accent snap-start relative flex flex-col`}
            >
              <div className="relative aspect-[4/3] overflow-hidden bg-primary-dark">
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 opacity-90 group-hover:opacity-100"
                />
                {product.tag && (
                  <div className="absolute top-6 left-6">
                    <span className={`px-5 py-2 ${idx === 0 ? 'bg-accent text-primary-dark' : 'bg-primary text-white'} font-black uppercase tracking-[0.3em] rounded-xl shadow-2xl border-2 border-white/20`}>
                      {product.tag}
                    </span>
                  </div>
                )}
              </div>
              
              <div className="p-10 flex flex-col flex-1 justify-between">
                <div>
                  <h3 className={`font-black text-primary uppercase italic leading-tight mb-4 ${idx === 0 ? 'text-4xl' : 'text-3xl'}`}>
                    {product.name}
                  </h3>
                  <p className="text-slate-400 text-sm md:text-base leading-relaxed font-bold italic">
                    {product.description}
                  </p>
                </div>
                
                <div className="flex items-center justify-between gap-6 mt-10 pt-8 border-t-2 border-slate-50">
                  <div className="flex flex-col">
                    <span className="text-[10px] font-black text-slate-300 uppercase tracking-widest mb-1">BEST PRICE</span>
                    <div className="font-black text-primary text-3xl">${product.price}</div>
                  </div>
                  <button className={`flex-1 py-5 rounded-2xl font-black uppercase italic transition-all tracking-[0.2em] text-sm shadow-xl ${
                    idx === 0 
                    ? 'bg-accent text-primary-dark hover:scale-105 shadow-accent/30' 
                    : 'bg-primary text-white hover:scale-105 shadow-primary/30'
                  }`}>
                    Grab It
                  </button>
                </div>
              </div>
            </div>
          ))}
          <div className="flex-none w-12 sm:w-32"></div>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 flex justify-center items-center gap-4">
         <div className="bg-primary/5 p-3 rounded-full flex gap-3 border-2 border-white backdrop-blur-sm">
            {products.map((_, i) => (
              <button 
                key={i} 
                className={`h-3 rounded-full transition-all duration-500 ${activeIdx === i ? 'w-16 bg-accent shadow-lg' : 'w-3 bg-slate-300'}`}
              ></button>
            ))}
         </div>
      </div>
    </section>
  );
};

export default Shop;
