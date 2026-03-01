export default function AskPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-emerald-50 to-white dark:from-emerald-950 dark:to-black p-4">
      <div className="mx-auto max-w-3xl pt-8">
        <a 
          href="/"
          className="text-emerald-600 hover:text-emerald-700 dark:text-emerald-400"
        >
          ← Back to Home
        </a>
        
        <div className="mt-8 flex flex-col gap-6">
          <div>
            <h1 className="text-4xl font-bold text-emerald-800 dark:text-emerald-200">
              Ask a Question
            </h1>
            <p className="mt-2 text-gray-600 dark:text-gray-400">
              Get guidance based on Quran and Hadith
            </p>
          </div>

          <div className="rounded-lg bg-white p-6 shadow-lg dark:bg-gray-900">
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
              Your Question
            </label>
            <textarea
              className="mt-2 w-full rounded-md border border-gray-300 p-3 text-gray-900 focus:border-emerald-500 focus:outline-none focus:ring-2 focus:ring-emerald-500 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-100"
              rows={6}
              placeholder="Example: What are the conditions for prayer to be valid?"
            />
            
            <button className="mt-4 w-full rounded-lg bg-emerald-600 px-6 py-3 font-semibold text-white transition-colors hover:bg-emerald-700">
              Get Answer
            </button>
          </div>

          <div className="rounded-lg bg-blue-50 p-4 dark:bg-blue-950">
            <p className="text-sm text-blue-800 dark:text-blue-200">
              💡 <strong>Tip:</strong> Be specific in your questions for more accurate guidance
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
