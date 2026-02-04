
import React, { useState, useRef, useEffect } from 'react';
import { getGeminiAssistantResponse } from '../services/geminiService.ts';
import { ChatMessage } from '../types.ts';

const GeminiAssistant: React.FC = () => {
  const [messages, setMessages] = useState<ChatMessage[]>([
    { role: 'model', text: "Hey! I'm the VIEW EDITONS Rule Assistant. Got a question about how to play, the physical deck, or the app? Ask me anything!" }
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
    setMessages(prev => [...prev, { role: 'model', text: response || "I'm not sure how to answer that. Maybe check the manual?" }]);
    setIsTyping(false);
  };

  return (
    <section id="assistant" className="py-24 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-slate-50 rounded-[48px] overflow-hidden border border-slate-100 shadow-2xl shadow-blue-500/5">
          <div className="p-8 border-b border-slate-200 flex items-center justify-between bg-white">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center text-xl shadow-lg shadow-blue-500/20">
                <i className="fa-solid fa-robot text-white"></i>
              </div>
              <div>
                <h3 className="font-black font-outfit text-xl text-slate-900 uppercase italic tracking-tight">Rule Master AI</h3>
                <div className="flex items-center gap-1.5">
                  <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                  <span className="text-[10px] uppercase text-slate-400 tracking-widest font-black">System Online</span>
                </div>
              </div>
            </div>
            <div className="hidden sm:block text-xs font-black text-slate-300 uppercase tracking-widest">Powered by Gemini 3.0</div>
          </div>

          <div 
            ref={scrollRef}
            className="h-[400px] overflow-y-auto p-8 space-y-6 scrollbar-hide bg-slate-50/50"
          >
            {messages.map((msg, idx) => (
              <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[80%] p-5 rounded-[30px] text-sm leading-relaxed font-medium ${
                  msg.role === 'user' 
                  ? 'bg-blue-600 text-white rounded-tr-none shadow-xl shadow-blue-500/20' 
                  : 'bg-white text-slate-700 border border-slate-100 rounded-tl-none shadow-sm'
                }`}>
                  {msg.text}
                </div>
              </div>
            ))}
            {isTyping && (
              <div className="flex justify-start">
                <div className="bg-white text-slate-400 p-5 rounded-[24px] rounded-tl-none flex gap-1 shadow-sm border border-slate-100">
                  <span className="w-1.5 h-1.5 bg-blue-400 rounded-full animate-bounce"></span>
                  <span className="w-1.5 h-1.5 bg-blue-400 rounded-full animate-bounce delay-100"></span>
                  <span className="w-1.5 h-1.5 bg-blue-400 rounded-full animate-bounce delay-200"></span>
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
                placeholder="Ask about rules, cards, or buying the deck..."
                className="flex-1 bg-slate-50 border border-slate-200 rounded-3xl px-8 py-4 focus:outline-none focus:border-blue-500 transition-colors text-slate-900 font-medium"
              />
              <button 
                type="submit"
                disabled={isTyping}
                className="w-14 h-14 bg-blue-600 text-white rounded-2xl flex items-center justify-center hover:bg-blue-700 transition-all disabled:opacity-50 shadow-lg shadow-blue-500/30"
              >
                <i className="fa-solid fa-paper-plane"></i>
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default GeminiAssistant;
