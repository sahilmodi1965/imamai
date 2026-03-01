'use client';

import { useState, useEffect } from 'react';

interface Conversation {
  id: number;
  question: string;
  answer: string;
  created_at: string;
}

export default function AskPage() {
  const [question, setQuestion] = useState('');
  const [answer, setAnswer] = useState('');
  const [loading, setLoading] = useState(false);
  const [history, setHistory] = useState<Conversation[]>([]);

  useEffect(() => {
    loadHistory();
  }, []);

  const loadHistory = async () => {
    try {
      const res = await fetch('/api/history');
      const data = await res.json();
      setHistory(data.conversations || []);
    } catch (error) {
      console.error('Failed to load history:', error);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!question.trim()) return;

    setLoading(true);
    setAnswer('');

    try {
      const response = await fetch('/api/ask', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ question }),
      });

      const data = await response.json();
      
      if (!response.ok) {
        throw new Error(data.error || 'Failed to get answer');
      }

      setAnswer(data.answer);
      loadHistory();
    } catch (error) {
      setAnswer('Error: ' + (error as Error).message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-emerald-50 to-white">
      <div className="max-w-4xl mx-auto p-8">
        <h1 className="text-4xl font-bold mb-8 text-emerald-900">Islamic Guidance</h1>
        
        <form onSubmit={handleSubmit} className="mb-8 bg-white p-6 rounded-lg shadow-md">
          <input
            type="text"
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
            placeholder="Ask your question about Islam..."
            className="w-full p-4 border-2 border-emerald-200 rounded-lg mb-4 text-gray-900 placeholder-gray-500 focus:border-emerald-500 focus:outline-none"
            disabled={loading}
          />
          <button
            type="submit"
            disabled={loading}
            className="w-full px-6 py-3 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 disabled:bg-gray-400 font-semibold transition-colors"
          >
            {loading ? 'Getting answer...' : 'Ask Question'}
          </button>
        </form>

        {answer && (
          <div className="mb-8 p-6 bg-white border-l-4 border-emerald-500 rounded-lg shadow-md">
            <h2 className="font-bold mb-3 text-emerald-900 text-xl">Answer:</h2>
            <p className="text-gray-800 leading-relaxed whitespace-pre-wrap">{answer}</p>
          </div>
        )}

        <div className="mt-12">
          <h2 className="text-3xl font-bold mb-6 text-emerald-900">Previous Questions</h2>
          {history.length === 0 ? (
            <p className="text-gray-600 text-center py-8">No history yet. Ask your first question above!</p>
          ) : (
            <div className="space-y-6">
              {history.map((conv) => (
                <div key={conv.id} className="bg-white p-6 rounded-lg shadow-md border-l-4 border-emerald-300">
                  <p className="font-semibold text-lg mb-3 text-emerald-900">Q: {conv.question}</p>
                  <p className="text-gray-800 mb-3 leading-relaxed">{conv.answer}</p>
                  <p className="text-xs text-gray-500">{new Date(conv.created_at).toLocaleString()}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
