import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: "AIzaSyAzkOoqtd-ujh547-QW9fnC1z22Lapy7k0" });

export async function generateSuggestions(partialText: string): Promise<string[]> {
  try {
    const response = await ai.models.generateContent({
      model: "gemini-2.0-flash",
      contents: `Genera 3 sugerencias para completar esta palabra o frase: "${partialText}". 
      Responde solo con las 3 sugerencias separadas por comas, sin explicaciones adicionales.
      Ademas, si es una palabra incompleta, sugiere la palabra completa u otras palabras que puedan completarla y una que sea la misma palabra por si no quiere sugerirla.
      Si es mas de 2 palabras sugiere la siguiente pero en contexto que sera una persona paraplejica ya que la app esta
      pensada para que escriba mediante los ojos y no puede escribir bien, por lo que las sugerencias deben ser cortas y concisas.`,
    });
    
    const text = response.text || '';
    
    return text.split(',').map(suggestion => suggestion.trim()).filter(Boolean);
  } catch (error) {
    console.error("Error generando sugerencias:", error);
    return [];
  }
}