import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";

const ActivityChart = ({ activities }) => {
  const chartData = activities.slice(-5).map((item) => ({
    name: item.exerciseType,
    calories: Math.round(item.calories),
  }));

  return (
    <section className="glass-card animate-rise p-5">
      <h3 className="mb-4 text-lg font-semibold text-slate-100">Last 5 Activities</h3>
      <div className="h-64 w-full">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={chartData}>
            <CartesianGrid strokeDasharray="3 3" stroke="#334155" />
            <XAxis dataKey="name" stroke="#94a3b8" />
            <YAxis stroke="#94a3b8" />
            <Tooltip
              contentStyle={{
                backgroundColor: "#0f172a",
                border: "1px solid #334155",
                borderRadius: "12px",
              }}
            />
            <Bar dataKey="calories" fill="#22d3ee" radius={[8, 8, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </section>
  );
};

export default ActivityChart;
