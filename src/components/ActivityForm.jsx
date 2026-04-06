import { useState } from "react";

const ActivityForm = ({ onSubmit }) => {
  const [weight, setWeight] = useState("");
  const [exerciseType, setExerciseType] = useState("Running");
  const [duration, setDuration] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit({
      weight: Number(weight),
      exerciseType,
      duration: Number(duration),
    });
    setDuration("");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="glass-card animate-rise space-y-4 p-6 transition-all duration-300"
    >
      <h2 className="text-lg font-semibold text-slate-100">Track New Activity</h2>

      <div>
        <label htmlFor="weight" className="mb-1 block text-sm text-slate-300">
          Weight (kg)
        </label>
        <input
          id="weight"
          type="number"
          min="20"
          step="0.1"
          required
          value={weight}
          onChange={(e) => setWeight(e.target.value)}
          className="w-full rounded-xl border border-slate-700 bg-slate-950 px-4 py-2 text-slate-100 outline-none transition focus:border-cyan-500"
          placeholder="e.g. 70"
        />
      </div>

      <div>
        <label htmlFor="exerciseType" className="mb-1 block text-sm text-slate-300">
          Exercise Type
        </label>
        <select
          id="exerciseType"
          value={exerciseType}
          onChange={(e) => setExerciseType(e.target.value)}
          className="w-full rounded-xl border border-slate-700 bg-slate-950 px-4 py-2 text-slate-100 outline-none transition focus:border-cyan-500"
        >
          <option value="Running">Running</option>
          <option value="Walking">Walking</option>
          <option value="Cycling">Cycling</option>
          <option value="Gym">Gym</option>
        </select>
      </div>

      <div>
        <label htmlFor="duration" className="mb-1 block text-sm text-slate-300">
          Duration (minutes)
        </label>
        <input
          id="duration"
          type="number"
          min="1"
          required
          value={duration}
          onChange={(e) => setDuration(e.target.value)}
          className="w-full rounded-xl border border-slate-700 bg-slate-950 px-4 py-2 text-slate-100 outline-none transition focus:border-cyan-500"
          placeholder="e.g. 45"
        />
      </div>

      <button
        type="submit"
        className="w-full rounded-xl bg-cyan-500 px-4 py-2 font-semibold text-slate-950 transition duration-300 hover:bg-cyan-400"
      >
        Calculate & Save
      </button>
    </form>
  );
};

export default ActivityForm;
