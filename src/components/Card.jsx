function Card({ label, percent, done, total }) {
  function getColor(p) {
    if (p >= 75) return "text-green-600";
    if (p >= 50) return "text-orange-500";
    return "text-red-500";
  }

  return (
    <div className="bg-white border border-gray-200 rounded-xl p-4 flex items-center justify-between hover:shadow-sm transition cursor-pointer">
      <div>
        <p className="text-gray-500 text-sm mb-1">{label}</p>
        <p className={`text-2xl font-bold ${getColor(percent)}`}>{percent}%</p>
        <p className="text-gray-400 text-xs mt-0.5">({done} / {total})</p>
      </div>
      <span className="text-gray-300 text-xl">›</span>
    </div>
  );
}

export default Card;