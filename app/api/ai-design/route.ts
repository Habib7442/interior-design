import { GoogleGenAI } from "@google/genai";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { image, prompt, style } = await req.json();

    if (!image) {
      return NextResponse.json({ error: "No image provided" }, { status: 400 });
    }

    // Assuming user has set GOOGLE_API_KEY env var
    const apiKey = process.env.GOOGLE_API_KEY;
    if (!apiKey) {
      return NextResponse.json({ error: "Google API Key not configured" }, { status: 500 });
    }

    const ai = new GoogleGenAI({ apiKey });

    // The user's prompt plus style context
    const fullPrompt = `Transform this interior photo into a ${style} luxury design. ${prompt || ""}. Maintain the architectural structure but upgrade the materials, lighting, and textures to a premium high-end aesthetic.`;

    const contents = [
      { text: fullPrompt },
      {
        inlineData: {
          mimeType: "image/jpeg",
          data: image, // base64 string
        },
      },
    ];

    const model = 'gemini-3-pro-image-preview';
    
    const response = await ai.models.generateContent({
      model: model,
      contents: contents,
      config: {
        responseModalities: ['TEXT', 'IMAGE'],
        imageConfig: {
          aspectRatio: '16:9',
          imageSize: '2K',
        },
      },
    });

    let generatedImageUrl = null;

    for (const part of response.candidates[0].content.parts) {
      if (part.inlineData) {
        generatedImageUrl = `data:${part.inlineData.mimeType};base64,${part.inlineData.data}`;
      }
    }

    if (!generatedImageUrl) {
      return NextResponse.json({ error: "Awaiting output stream from neural network (Generation failed)" }, { status: 500 });
    }

    return NextResponse.json({ imageUrl: generatedImageUrl });

  } catch (error: any) {
    console.error("AI Generation Error:", error);
    return NextResponse.json({ error: error.message || "Internal Server Error" }, { status: 500 });
  }
}
