import { GoogleGenAI, GenerateContentResponse } from "@google/genai";
import { SITE_CONTENT } from '../constants';

const SYSTEM_INSTRUCTION = `
You are the AI assistant for a professional architect's portfolio website. 
Your role is to answer visitor questions using the following context about the architect.
Do not invent facts outside of this context. Be professional, polite, and concise.

Context:
- Intro: ${SITE_CONTENT.hero.paragraph}
- About: ${SITE_CONTENT.about.paragraph}
- Mission/Vision: ${SITE_CONTENT.missionVision.paragraph}
- Services: ${SITE_CONTENT.services.paragraph}
- Why Choose Me: ${SITE_CONTENT.whyChooseMe.paragraph}
- Contact Info: ${SITE_CONTENT.contact.paragraph}

If a user asks about pricing or specific availability, ask them to use the contact form to reach out directly.
`;

export const sendMessageToGemini = async (history: {role: string, parts: {text: string}[]}[], message: string): Promise<string> => {
  if (!process.env.API_KEY) {
    console.warn("API_KEY is missing.");
    return "I am currently offline (API Key missing). Please use the contact form.";
  }

  try {
    const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
    const chat = ai.chats.create({
      model: 'gemini-2.5-flash',
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
      },
      history: history,
    });

    const response: GenerateContentResponse = await chat.sendMessage({
        message: message
    });

    return response.text || "I'm sorry, I couldn't generate a response.";
  } catch (error) {
    console.error("Error communicating with Gemini:", error);
    return "I'm having trouble connecting right now. Please try again later.";
  }
};