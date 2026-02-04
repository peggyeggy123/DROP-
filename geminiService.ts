
import { GoogleGenAI } from "@google/genai";

const SYSTEM_INSTRUCTION = `
You are the Official Rule Assistant for the card game "VIEW EDITONS". 
Help fans understand the game rules.
`;

export const getGeminiAssistantResponse = async (userPrompt: string) => {
  const apiKey = (import.meta as any).env?.VITE_API_KEY || (import.meta as any).env?.API_KEY || (typeof process !== 'undefined' && process.env?.API_KEY);
  
  if (!apiKey) return "Offline Mode: Rules are loading...";

  try {
    const ai = new GoogleGenAI({ apiKey });
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: [{ role: 'user', parts: [{ text: userPrompt }] }],
      config: { systemInstruction: SYSTEM_INSTRUCTION },
    });
    return response.text;
  } catch (error) {
    return "Connection error. Keep playing!";
  }
};
