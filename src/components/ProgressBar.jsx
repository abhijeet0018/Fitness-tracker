const ProgressBar = ({ totalCalories, goal }) => {
  const percent = Math.min((totalCalories / goal) * 100, 100);

  return (
    <section className="glass-card animate-rise p-5">
      <div className="mb-3 flex items-center justify-between">
        <h3 className="text-sm font-semibold text-slate-200">Daily Goal Progress</h3>
        <span className="text-sm text-slate-400">
          {Math.round(totalCalories)} / {goal} kcal
        </span>
      </div>

      <div className="h-3 w-full rounded-full bg-slate-800">
        <div
          className="h-3 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 transition-all duration-700 ease-out"
          style={{ width: `${percent}%` }}
        />
      </div>
    </section>
  );
};

export default ProgressBar;
