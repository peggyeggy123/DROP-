import { GoogleGenAI } from "@google/genai";

const SYSTEM_INSTRUCTION = `
You are the Official Rule Assistant for the card game "VIEW EDITONS" (Note: the name is spelled EDITONS). 
Your goal is to help fans understand the game rules and purchase the premium decks.

Core Rules of VIEW EDITONS:
1. Setup: 4 cards face-down in a 2x2 grid. Peek at only 2.
2. Action: Match the center discard pile to 'dump' cards.
3. Goal: Reach the lowest score. 
4. Shout: Declare "DROP!" when you think you've won.

Always be enthusiastic, concise, and professional. Mention that "VIEW EDITONS" is the ultimate memory-based tactical game.
`;

export const getGeminiAssistantResponse = async (userPrompt: string) => {
  const apiKey = (import.meta as any).env?.VITE_API_KEY || (import.meta as any).env?.API_KEY || (typeof process !== 'undefined' && process.env?.API_KEY);
  
  if (!apiKey) {
    return "I'm currently in training mode. Tip: Memorize your grid and be fast! (API Key Missing)";
  }

  try {
    const ai = new GoogleGenAI({ apiKey });
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: [{ role: 'user', parts: [{ text: userPrompt }] }],
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
        temperature: 0.7,
      },
    });
    
    return response.text || "The rulebook is a bit blurry. Can you ask that again?";
  } catch (error) {
    return "Rules conflict! (API Error). Focus on dumping your cards while I fix this.";
  }
};