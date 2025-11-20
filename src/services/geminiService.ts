import { GoogleGenAI } from "@google/genai";
import { RESUME_TEXT } from '../constants';

// Initialize the client conditionally to avoid runtime errors if env is missing during dev,
// but strictly per instructions, we assume process.env.API_KEY is valid and available.
const apiKey = process.env.NEXT_PUBLIC_API_KEY || 'DUMMY_KEY_FOR_BUILD';
const ai = new GoogleGenAI({ apiKey });

const SYSTEM_INSTRUCTION = `
You are an AI assistant representing Shuolin (Leo) Yin. 
You are embedded in his personal portfolio website.
Your goal is to answer questions about Leo's professional background, skills, and projects based STRICTLY on his resume.

Here is Leo's Resume Context:
${RESUME_TEXT}

Tone: Professional, enthusiastic, and humble. 
If a user asks something not in the resume, strictly say "I don't have that information in my current context, but you can contact Leo directly!"
Keep answers concise and helpful.
`;

export const sendMessageToGemini = async (userMessage: string): Promise<string> => {
    try {
        const response = await ai.models.generateContent({
            model: 'gemini-2.0-flash',
            contents: userMessage,
            config: {
                systemInstruction: SYSTEM_INSTRUCTION,
            }
        });

        return response.text || "I couldn't generate a response.";
    } catch (error) {
        console.error("Gemini API Error:", error);
        return "Sorry, I'm having trouble connecting to the AI service right now. Please try again later.";
    }
};
