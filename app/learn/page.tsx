export default function LearnPage() {
  const topics = [
    { title: "Five Pillars of Islam", icon: "🕌" },
    { title: "How to Pray (Salah)", icon: "🤲" },
    { title: "Wudu (Ablution)", icon: "💧" },
    { title: "Fasting in Ramadan", icon: "🌙" },
    { title: "Zakat (Charity)", icon: "💝" },
    { title: "Hajj Pilgrimage", icon: "🕋" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-emerald-50 to-white dark:from-emerald-950 dark:to-black p-4">
      <div className="mx-auto max-w-4xl pt-8">
        <a 
          href="/"
          className="text-emerald-600 hover:text-emerald-700 dark:text-emerald-400"
        >
          ← Back to Home
        </a>
        
        <div className="mt-8">
          <h1 className="text-4xl font-bold text-emerald-800 dark:text-emerald-200">
            Learn Islamic Basics
          </h1>
          <p className="mt-2 text-gray-600 dark:text-gray-400">
            Essential knowledge for every Muslim
          </p>
        </div>

        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          {topics.map((topic) => (
            <div
              key={topic.title}
              className="rounded-lg bg-white p-6 shadow-md transition-shadow hover:shadow-lg dark:bg-gray-900"
            >
              <div className="text-4xl">{topic.icon}</div>
              <h2 className="mt-3 text-xl font-semibold text-gray-800 dark:text-gray-200">
                {topic.title}
              </h2>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
