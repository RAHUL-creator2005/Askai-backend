import OpenAI from 'openai';
import dotenv from 'dotenv';

dotenv.config();

const openai = new OpenAI({
  baseURL: 'https://openrouter.ai/api/v1',
  apiKey: process.env.OPENROUTER_API_KEY,
  defaultHeaders: {
    'HTTP-Referer': process.env.SITE_URL || 'http://localhost:5000',
    'X-OpenRouter-Title': process.env.SITE_NAME || 'AI Q&A System',
  },
});

export const getAICompletion = async (userPrompt) => {
  const completion = await openai.chat.completions.create({
    model: 'openai/gpt-4o-mini',
    messages: [
      {
        role: 'user',
        content: userPrompt,
      },
    ],
  });

  return completion;
};
