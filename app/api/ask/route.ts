import { NextResponse } from 'next/server';
import { saveConversation } from '@/lib/db';

export async function POST(request: Request) {
  try {
    const { question } = await request.json();
    
    if (!question) {
      return NextResponse.json({ error: 'Question is required' }, { status: 400 });
    }

    const response = await fetch('https://api.groq.com/openai/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${process.env.GROQ_API_KEY}`,
      },
      body: JSON.stringify({
        model: 'llama-3.3-70b-versatile',
        messages: [
          {
            role: 'system',
            content: 'You are an Islamic scholar providing guidance based on the Quran and authentic Hadith. Always cite sources (Surah:Ayah or Hadith reference). Be respectful, accurate, and concise.'
          },
          {
            role: 'user',
            content: question
          }
        ],
        temperature: 0.7,
        max_tokens: 500,
      }),
    });

    const data = await response.json();
    
    if (!response.ok) {
      throw new Error(data.error?.message || 'API error');
    }

    const answer = data.choices[0].message.content;
    
    // Save to database
    saveConversation(question, answer);
    
    return NextResponse.json({ answer });
  } catch (error) {
    console.error('API Error:', error);
    return NextResponse.json(
      { error: 'Failed to get answer' },
      { status: 500 }
    );
  }
}
