
import React, { useRef, useState } from 'react';
import { Product } from './types';

const products: Product[] = [
  {
    id: 'deck-classic',
    name: "Classic Edition",
    price: 19.99,
    description: "The essential 54-card deck.",
    image: "https://picsum.photos/seed/classicfun/600/600",
    tag: "MOST POPULAR"
  }
];

const Shop: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [activeIdx, setActiveIdx] = useState(0);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const { scrollLeft } = scrollRef.current;
      const scrollAmount = 400;
      const scrollTo = direction === 'left' ? scrollLeft - scrollAmount : scrollLeft + scrollAmount;
      scrollRef.current.scrollTo({ left: scrollTo, behavior: 'smooth' });
    }
  };

  return (
    <section id="shop" className="py-24 bg-slate-50 overflow-hidden relative font-montserrat">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-5xl md:text-7xl font-black uppercase italic text-primary leading-none">VIEW <span className="text-accent">EDITONS.</span></h2>
        <div className="flex overflow-x-auto gap-8 py-16 no-scrollbar" ref={scrollRef}>
          {products.map((product) => (
            <div key={product.id} className="min-w-[300px] bg-white rounded-[48px] p-8 border-4 border-slate-100">
              <img src={product.image} className="rounded-2xl mb-6" alt={product.name} />
              <h3 className="font-black text-2xl text-primary">{product.name}</h3>
              <p className="text-slate-400 mt-2">${product.price}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Shop;
