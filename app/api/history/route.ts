import { NextResponse } from 'next/server';
import { getRecentConversations } from '@/lib/db';

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const limit = parseInt(searchParams.get('limit') || '10');
    
    const conversations = getRecentConversations(limit);
    
    return NextResponse.json({ conversations });
  } catch (error) {
    console.error('History Error:', error);
    return NextResponse.json(
      { error: 'Failed to get history' },
      { status: 500 }
    );
  }
}
