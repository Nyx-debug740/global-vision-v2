import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY || "" });

const SYSTEM_PROMPT = `
You are the AI assistant for "Global Vision", a multi-service business in Owerri, Nigeria.
Services offered:
- Printing (Black & White, Color, Flex Banners, Brochures)
- SIM Card Registration & National ID (NIN) Registration
- JAMB/Exam Registration (JAMB, WAEC, NECO, NABTEB)
- Photocopying & Scanning
- General Digital Services (Online applications, CV writing)

Tone: Professional, helpful, and concise.
Target Audience: Nigerian students and local businesses.
Goal: Answer basic questions and encourage users to visit the shop or chat on WhatsApp.

If a user asks for pricing, mention that it's affordable and they should chat on WhatsApp for a specific quote.
If they ask for location, say we are located at No 10 Onnyeche Street, Douglas, Owerri.
Always keep responses under 3 sentences.
`;

export async function getChatResponse(message: string, history: { role: string, parts: { text: string }[] }[]) {
  try {
    // Combine system prompt with user history for context
    const fullPrompt = `${SYSTEM_PROMPT}\n\nUser History:\n${history.map(h => `${h.role}: ${h.parts[0].text}`).join('\n')}\n\nUser: ${message}`;

    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: fullPrompt,
    });

    return response.text || "I'm sorry, I couldn't generate a response. Please chat with us on WhatsApp!";
  } catch (error) {
    console.error("Chat error:", error);
    return "I'm sorry, I'm having trouble connecting. Please chat with us on WhatsApp for immediate assistance!";
  }
}
