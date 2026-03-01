export default function PrayerPage() {
  const prayers = [
    { name: "Fajr", time: "5:30 AM", icon: "🌅" },
    { name: "Dhuhr", time: "12:45 PM", icon: "☀️" },
    { name: "Asr", time: "3:30 PM", icon: "🌤️" },
    { name: "Maghrib", time: "6:15 PM", icon: "🌆" },
    { name: "Isha", time: "7:45 PM", icon: "🌙" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-emerald-50 to-white dark:from-emerald-950 dark:to-black p-4">
      <div className="mx-auto max-w-2xl pt-8">
        <a 
          href="/"
          className="text-emerald-600 hover:text-emerald-700 dark:text-emerald-400"
        >
          ← Back to Home
        </a>
        
        <div className="mt-8">
          <h1 className="text-4xl font-bold text-emerald-800 dark:text-emerald-200">
            Prayer Times
          </h1>
          <p className="mt-2 text-gray-600 dark:text-gray-400">
            Today's Salah schedule
          </p>
        </div>

        <div className="mt-8 space-y-3">
          {prayers.map((prayer) => (
            <div
              key={prayer.name}
              className="flex items-center justify-between rounded-lg bg-white p-5 shadow-md dark:bg-gray-900"
            >
              <div className="flex items-center gap-4">
                <span className="text-3xl">{prayer.icon}</span>
                <span className="text-xl font-semibold text-gray-800 dark:text-gray-200">
                  {prayer.name}
                </span>
              </div>
              <span className="text-2xl font-bold text-emerald-600 dark:text-emerald-400">
                {prayer.time}
              </span>
            </div>
          ))}
        </div>

        <div className="mt-6 rounded-lg bg-amber-50 p-4 dark:bg-amber-950">
          <p className="text-sm text-amber-800 dark:text-amber-200">
            📍 Times shown are sample data. Real times will be based on your location.
          </p>
        </div>
      </div>
    </div>
  );
}
