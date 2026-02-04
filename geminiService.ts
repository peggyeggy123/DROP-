
import { GoogleGenAI } from "@google/genai";

const SYSTEM_INSTRUCTION = `
You are the Official Rule Assistant for the card game "VIEW EDITONS" (Note: the name is spelled EDITONS). 
Your goal is to help fans understand the game rules and purchase the premium decks.

Core Rules of VIEW EDITONS:
1. Setup: 4 cards face-down in a 2x2 grid. Peek at only 2.
2. Action: Match the center discard pile to 'dump' cards.
3. Goal: Reach the lowest score. 
4. Shout: Declare "DROP!" when you think you've won.

Always be enthusiastic, concise, and professional.
`;

export const getGeminiAssistantResponse = async (userPrompt: string) => {
  // 同時嘗試不同的環境變數獲取方式，確保在 Vercel 構建時不會報錯
  const apiKey = (typeof process !== 'undefined' && process.env?.API_KEY) || 
                 (import.meta as any).env?.VITE_API_KEY || 
                 (import.meta as any).env?.API_KEY;
  
  if (!apiKey) {
    console.warn("API Key not found in environment variables.");
    return "I'm currently in training mode (Offline). Tip: Memorize your grid and be fast!";
  }

  try {
    const ai = new GoogleGenAI({ apiKey });
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: [{ role: 'user', parts: [{ text: userPrompt }] }],
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
        temperature: 0.7,
        maxOutputTokens: 500,
      },
    });
    
    return response.text || "The rulebook is a bit blurry. Can you ask that again?";
  } catch (error) {
    console.error("Gemini Error:", error);
    return "Rules conflict! (API Error). Focus on dumping your cards while I fix this.";
  }
};
