export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-emerald-50 to-white p-8 dark:from-emerald-950 dark:to-black">
      <main className="flex flex-col items-center gap-8 text-center">
        <div>
          <h1 className="text-6xl font-bold text-emerald-800 dark:text-emerald-200">
            ImamAI
          </h1>
          <p className="mt-4 text-xl text-gray-600 dark:text-gray-400">
            Your Muslim Guidance App
          </p>
          <p className="mt-2 text-gray-500 dark:text-gray-500">
            Powered by Quran and Hadith
          </p>
        </div>

        <div className="mt-8 flex flex-col gap-4 sm:flex-row">
          <a
            href="/ask"
            className="rounded-lg bg-emerald-600 px-8 py-4 font-semibold text-white transition-colors hover:bg-emerald-700"
          >
            Ask a Question
          </a>
          <a
            href="/learn"
            className="rounded-lg bg-blue-600 px-8 py-4 font-semibold text-white transition-colors hover:bg-blue-700"
          >
            Learn Basics
          </a>
          <a
            href="/prayer"
            className="rounded-lg bg-purple-600 px-8 py-4 font-semibold text-white transition-colors hover:bg-purple-700"
          >
            Prayer Times
          </a>
        </div>
      </main>
    </div>
  );
}
