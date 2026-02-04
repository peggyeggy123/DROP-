
import React, { useState, useRef, useEffect } from 'react';
import { getGeminiAssistantResponse } from './geminiService';
import { ChatMessage } from './types';

const GeminiAssistant: React.FC = () => {
  const [messages, setMessages] = useState<ChatMessage[]>([
    { role: 'model', text: "Hey! I'm the VIEW EDITONS Rule Assistant. Ask me anything about the rules!" }
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
    <section id="assistant" className="py-24 bg-white">
      <div className="max-w-4xl mx-auto px-4">
        <div className="bg-slate-50 rounded-[48px] overflow-hidden border border-slate-100 shadow-2xl">
          <div className="p-8 border-b border-slate-200 flex items-center justify-between bg-white">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-primary rounded-2xl flex items-center justify-center text-white">
                <i className="fa-solid fa-robot"></i>
              </div>
              <h3 className="font-black text-xl text-primary uppercase italic">Rule Master AI</h3>
            </div>
          </div>
          <div ref={scrollRef} className="h-[400px] overflow-y-auto p-8 space-y-6 bg-slate-50/50">
            {messages.map((msg, idx) => (
              <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[80%] p-5 rounded-[30px] text-sm ${
                  msg.role === 'user' ? 'bg-primary text-white rounded-tr-none' : 'bg-white text-slate-700 rounded-tl-none border border-slate-100'
                }`}>
                  {msg.text}
                </div>
              </div>
            ))}
          </div>
          <form onSubmit={handleSubmit} className="p-8 bg-white border-t border-slate-100">
            <div className="flex gap-4">
              <input 
                type="text" 
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask a rule question..."
                className="flex-1 bg-slate-50 border border-slate-200 rounded-3xl px-8 py-4 focus:outline-none"
              />
              <button type="submit" disabled={isTyping} className="w-14 h-14 bg-accent text-white rounded-2xl flex items-center justify-center">
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
