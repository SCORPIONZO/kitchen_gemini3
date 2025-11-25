import { GoogleGenAI } from "@google/genai";

// Initialize Gemini Client
const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const generateTagline = async (name: string, title: string): Promise<string> => {
  try {
    const prompt = `Generate a very short, witty, and professional tagline (maximum 6 words) for a business card.
    The person is ${name}, a ${title}. 
    The tone should be sophisticated and modern.
    Return ONLY the tagline text. No quotes.`;

    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: prompt,
    });

    return response.text?.trim() || "Building digital excellence.";
  } catch (error) {
    console.error("Error generating tagline:", error);
    return "Architecting the future web.";
  }
};
