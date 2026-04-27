export default function Navbar({ email }) {
  const username = email ? email.split("@")[0] : "Student";

  return (
    <nav className="h-16 bg-white border-b border-gray-200 flex items-center justify-between px-8 sticky top-0 z-50">
      <div className="flex items-center gap-2">
        <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold">NS</div>
        <span className="font-bold text-lg tracking-tight">Newton Portal</span>
      </div>
      <div className="flex items-center gap-6">
        <div className="text-right hidden sm:block">
          <p className="text-sm font-bold text-gray-800 leading-none">{username}</p>
          <p className="text-[10px] text-blue-600 font-bold uppercase tracking-tighter"></p>
        </div>
        <div className="w-9 h-9 bg-gradient-to-tr from-blue-500 to-indigo-600 rounded-full border-2 border-white shadow-sm"></div>
      </div>
    </nav>
  );
}