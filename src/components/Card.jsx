export default function Card({ label, percent, done, total, color }) {
  const showProgress = color !== "text-red-500";
  const progressColor = color.replace("text", "bg");

  return (
    <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
      <p className="text-gray-500 font-medium mb-1">{label}</p>
      <div className="flex items-end gap-2">
        <span className={`text-3xl font-bold ${color}`}>{percent}%</span>
        <span className="text-gray-400 text-sm mb-1">({done}/{total})</span>
      </div>
    </div>
  );
}