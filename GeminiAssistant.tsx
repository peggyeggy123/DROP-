import React, { useState, useRef, useEffect } from 'react';
import { getGeminiAssistantResponse } from './geminiService';
import { ChatMessage } from './types';

const GeminiAssistant: React.FC = () => {
  const [messages, setMessages] = useState<ChatMessage[]>([
    { role: 'model', text: "Hey! I'm the VIEW EDITONS Rule Assistant. Need help with the 2x2 grid, dumping cards, or shouting DROP!? Ask me anything!" }
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isTyping]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isTyping) return;

    const userMessage = input.trim();
    setMessages(prev => [...prev, { role: 'user', text: userMessage }]);
    setInput('');
    setIsTyping(true);

    const response = await getGeminiAssistantResponse(userMessage);
    setMessages(prev => [...prev, { role: 'model', text: response || "I'm not sure. Try asking again!" }]);
    setIsTyping(false);
  };

  return (
    <section id="assistant" className="py-24 bg-white font-montserrat">
      <div className="max-w-4xl mx-auto px-4">
        <div className="bg-slate-50 rounded-[48px] overflow-hidden border border-slate-200 shadow-[0_50px_100px_-20px_rgba(18,29,87,0.1)]">
          <div className="p-8 border-b border-slate-200 flex items-center justify-between bg-white">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 bg-primary rounded-2xl flex items-center justify-center text-white shadow-lg shadow-primary/20">
                <i className="fa-solid fa-robot text-xl"></i>
              </div>
              <div>
                <h3 className="font-black text-xl text-primary uppercase italic">Rule Master AI</h3>
                <div className="flex items-center gap-1.5">
                   <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                   <span className="text-[10px] uppercase font-black text-slate-400 tracking-widest">Online & Ready</span>
                </div>
              </div>
            </div>
            <div className="hidden sm:block text-[10px] font-black text-slate-300 uppercase tracking-[0.3em]">Gemini 3.0 Core</div>
          </div>

          <div ref={scrollRef} className="h-[450px] overflow-y-auto p-8 space-y-6 bg-slate-50/50 scroll-smooth">
            {messages.map((msg, idx) => (
              <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[85%] p-6 rounded-[32px] text-sm font-bold leading-relaxed ${
                  msg.role === 'user' 
                  ? 'bg-primary text-white rounded-tr-none shadow-xl shadow-primary/10' 
                  : 'bg-white text-slate-700 rounded-tl-none border border-slate-100 shadow-sm'
                }`}>
                  {msg.text}
                </div>
              </div>
            ))}
            {isTyping && (
              <div className="flex justify-start">
                <div className="bg-white text-slate-400 p-5 rounded-[24px] rounded-tl-none flex gap-1 shadow-sm border border-slate-100">
                  <span className="w-1.5 h-1.5 bg-accent rounded-full animate-bounce"></span>
                  <span className="w-1.5 h-1.5 bg-accent rounded-full animate-bounce delay-100"></span>
                  <span className="w-1.5 h-1.5 bg-accent rounded-full animate-bounce delay-200"></span>
                </div>
              </div>
            )}
          </div>

          <form onSubmit={handleSubmit} className="p-8 bg-white border-t border-slate-100">
            <div className="flex gap-4">
              <input 
                type="text" 
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask about rules, setup, or scoring..."
                className="flex-1 bg-slate-50 border border-slate-200 rounded-3xl px-8 py-5 focus:outline-none focus:border-primary transition-colors font-bold"
              />
              <button type="submit" disabled={isTyping} className="w-16 h-16 bg-accent text-white rounded-2xl flex items-center justify-center shadow-lg shadow-accent/20 hover:scale-105 active:scale-95 transition-all">
                <i className="fa-solid fa-paper-plane text-xl"></i>
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default GeminiAssistant;