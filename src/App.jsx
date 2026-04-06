import { useEffect, useMemo, useState } from "react";
import ActivityChart from "./components/ActivityChart";
import ActivityForm from "./components/ActivityForm";
import DashboardCard from "./components/DashboardCard";
import ProgressBar from "./components/ProgressBar";
import { DAILY_GOAL, MET_VALUES, STORAGE_KEY } from "./utils/constants";

const getAnalysis = (calories) => {
  if (calories > 300) return "Good job!";
  if (calories >= 150) return "Keep going!";
  return "Try to be more active!";
};

const App = () => {
  const [activities, setActivities] = useState([]);
  const [latestResult, setLatestResult] = useState(null);

  useEffect(() => {
    const storedActivities = localStorage.getItem(STORAGE_KEY);
    if (storedActivities) {
      setActivities(JSON.parse(storedActivities));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(activities));
  }, [activities]);

  const totalCalories = useMemo(
    () => activities.reduce((sum, item) => sum + item.calories, 0),
    [activities]
  );

  const lastActivity = activities[activities.length - 1];

  const handleAddActivity = ({ weight, exerciseType, duration }) => {
    const met = MET_VALUES[exerciseType];
    const durationHours = duration / 60;
    // MET formula: calories = MET * weight * time in hours
    const calories = met * weight * durationHours;

    const newActivity = {
      id: crypto.randomUUID(),
      weight,
      exerciseType,
      duration,
      calories,
      createdAt: new Date().toISOString(),
    };

    setActivities((prev) => [...prev, newActivity]);
    setLatestResult({
      calories,
      message: getAnalysis(calories),
    });
  };

  return (
    <main className="min-h-screen px-4 py-8 sm:px-6 lg:px-10">
      <div className="mx-auto max-w-7xl space-y-6">
        <header className="animate-rise">
          <h1 className="text-3xl font-bold text-slate-100 sm:text-4xl">
            Fitness Tracker Dashboard
          </h1>
          <p className="mt-2 text-slate-400">
            Track your activity, calories burned, and daily progress.
          </p>
        </header>

        <div className="grid gap-6 lg:grid-cols-3">
          <div className="space-y-6 lg:col-span-1">
            <ActivityForm onSubmit={handleAddActivity} />

            {latestResult && (
              <section className="glass-card animate-rise p-5">
                <h3 className="text-lg font-semibold text-slate-100">
                  Latest Result
                </h3>
                <p className="mt-2 text-2xl font-bold text-cyan-400">
                  {latestResult.calories.toFixed(2)} kcal burned
                </p>
                <p className="mt-1 text-slate-300">{latestResult.message}</p>
              </section>
            )}
          </div>

          <div className="space-y-6 lg:col-span-2">
            <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
              <DashboardCard
                title="Total Calories"
                value={`${totalCalories.toFixed(2)} kcal`}
                helper="Overall calories burned"
                accent="text-cyan-400"
              />
              <DashboardCard
                title="Last Activity"
                value={lastActivity ? lastActivity.exerciseType : "None"}
                helper={
                  lastActivity
                    ? `${lastActivity.duration} min • ${lastActivity.calories.toFixed(1)} kcal`
                    : "Add your first activity"
                }
                accent="text-violet-400"
              />
              <DashboardCard
                title="Entries"
                value={activities.length}
                helper="Saved in localStorage"
                accent="text-emerald-400"
              />
            </div>

            <ProgressBar totalCalories={totalCalories} goal={DAILY_GOAL} />

            <ActivityChart activities={activities} />
          </div>
        </div>
      </div>
    </main>
  );
};

export default App;
