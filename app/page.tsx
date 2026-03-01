export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-emerald-50 to-white dark:from-emerald-950 dark:to-black p-4">
      <main className="flex w-full max-w-2xl flex-col items-center gap-8 text-center">
        <div className="flex flex-col gap-4">
          <h1 className="text-5xl font-bold text-emerald-800 dark:text-emerald-200">
            ImamAI
          </h1>
          <p className="text-xl text-emerald-700 dark:text-emerald-300">
            Islamic Guidance from Authentic Sources
          </p>
        </div>

        <p className="max-w-md text-lg text-gray-700 dark:text-gray-300">
          Get answers to your questions based on the Quran and authentic Hadith.
        </p>

        <div className="mt-8 flex w-full max-w-md flex-col gap-4">
          <a
            href="/ask"
            className="rounded-lg bg-emerald-600 px-8 py-4 text-lg font-semibold text-white transition-colors hover:bg-emerald-700"
          >
            Ask a Question
          </a>
          <a
            href="/learn"
            className="rounded-lg border-2 border-emerald-600 px-8 py-4 text-lg font-semibold text-emerald-700 transition-colors hover:bg-emerald-50 dark:text-emerald-300 dark:hover:bg-emerald-950"
          >
            Learn Basics
          </a>
          <a
            href="/prayer-times"
            className="rounded-lg border-2 border-emerald-600 px-8 py-4 text-lg font-semibold text-emerald-700 transition-colors hover:bg-emerald-50 dark:text-emerald-300 dark:hover:bg-emerald-950"
          >
            Prayer Times
          </a>
        </div>

        <div className="mt-12 text-sm text-gray-500 dark:text-gray-400">
          Powered by authentic Islamic scholarship
        </div>
      </main>
    </div>
  );
}
