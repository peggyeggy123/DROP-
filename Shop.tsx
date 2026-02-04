
import React, { useRef, useState } from 'react';
import { Product } from './types';

const products: Product[] = [
  {
    id: 'deck-classic',
    name: "Classic Edition",
    price: 19.99,
    description: "The essential 54-card deck. Features linen finish, core special actions, and the iconic 2x2 setup manual.",
    image: "https://images.unsplash.com/photo-1606167668584-78701c57f13d?auto=format&fit=crop&q=80&w=600&h=600",
    tag: "MOST POPULAR"
  },
  {
    id: 'deck-brutal',
    name: "Brutal Edition",
    price: 24.99,
    description: "Matte black finish. Adds 'Assassinate' and 'Blindfold' cards for a more aggressive, high-stakes experience.",
    image: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?auto=format&fit=crop&q=80&w=600&h=600",
    tag: "HARDCORE ONLY"
  },
  {
    id: 'deck-double',
    name: "Double Edition",
    price: 34.99,
    description: "A larger collector's box containing two full decks. Perfect for chaotic 8-player local tournaments.",
    image: "https://images.unsplash.com/photo-1553481187-be93c21490a9?auto=format&fit=crop&q=80&w=600&h=600",
    tag: "PARTY SAVER"
  },
  {
    id: 'deck-science',
    name: "Science Edition",
    price: 24.99,
    description: "Periodic-table themed card backs and unique atomic-bond mechanics. A smarter way to reach zero.",
    image: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?auto=format&fit=crop&q=80&w=600&h=600",
    tag: "SMART PLAY"
  },
  {
    id: 'deck-christmas',
    name: "Christmas Edition",
    price: 24.99,
    description: "Holiday themed illustrations. Includes 'Gift' and 'Coal' cards to spread cheer or ruin friendships.",
    image: "https://images.unsplash.com/photo-1544027993-37dbfe43562a?auto=format&fit=crop&q=80&w=600&h=600",
    tag: "LIMITED"
  },
  {
    id: 'deck-spy',
    name: "Spy Edition",
    price: 24.99,
    description: "Classified design. Features 'Infiltrate' and 'Wiretap' mechanics for players who love high-stakes deception.",
    image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&q=80&w=600&h=600",
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
             <button onClick={() => scroll('left')} className="w-16 h-16 bg-white border-4 border-primary rounded-2xl flex items-center justify-center text-primary hover:bg-accent transition-all shadow-[0_8px_0_#121d57] active:translate-y-1 active:shadow-none">
                <i className="fa-solid fa-chevron-left text-2xl"></i>
             </button>
             <button onClick={() => scroll('right')} className="w-16 h-16 bg-white border-4 border-primary rounded-2xl flex items-center justify-center text-primary hover:bg-accent transition-all shadow-[0_8px_0_#121d57] active:translate-y-1 active:shadow-none">
                <i className="fa-solid fa-chevron-right text-2xl"></i>
             </button>
          </div>
        </div>
      </div>

      <div 
        ref={scrollRef}
        onScroll={handleScroll}
        className="flex overflow-x-auto pb-16 px-4 md:px-[calc((100vw-1280px)/2+2rem)] gap-8 snap-x snap-mandatory no-scrollbar"
      >
        {products.map((product, idx) => (
          <div key={product.id} className="min-w-[300px] md:min-w-[400px] bg-white rounded-[48px] overflow-hidden border-4 border-slate-100 shadow-xl snap-start flex flex-col group hover:border-accent transition-colors">
            <div className="aspect-[4/3] overflow-hidden relative">
              <img src={product.image} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" alt={product.name} />
              {product.tag && <span className="absolute top-6 left-6 px-4 py-1 bg-accent text-primary-dark font-black text-[10px] rounded-lg">{product.tag}</span>}
            </div>
            <div className="p-10 flex-1 flex flex-col justify-between">
              <div>
                <h3 className="font-black text-3xl text-primary uppercase italic mb-2">{product.name}</h3>
                <p className="text-slate-400 font-bold italic text-sm">{product.description}</p>
              </div>
              <div className="flex items-center justify-between mt-8 pt-8 border-t border-slate-50">
                <span className="text-3xl font-black text-primary">${product.price}</span>
                <button className="px-8 py-4 bg-primary text-white font-black uppercase italic rounded-xl hover:scale-105 transition-all text-xs tracking-widest shadow-lg">Purchase</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Shop;
