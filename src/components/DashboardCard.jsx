const DashboardCard = ({ title, value, helper, accent = "text-cyan-400" }) => {
  return (
    <article className="glass-card animate-rise p-5 transition-transform duration-300 hover:-translate-y-1">
      <p className="text-sm text-slate-400">{title}</p>
      <p className={`mt-2 text-3xl font-bold ${accent}`}>{value}</p>
      <p className="mt-1 text-sm text-slate-500">{helper}</p>
    </article>
  );
};

export default DashboardCard;
