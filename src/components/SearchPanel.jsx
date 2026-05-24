export default function SearchPanel() {
  return (
    <div className="rounded-2xl bg-white p-5 shadow">
      <div className="mb-4 flex items-center gap-2">
        <span className="text-2xl">🌤️</span>
        <h1 className="text-2xl font-bold">Počasí</h1>
      </div>

      <input
        className="w-full rounded-xl border border-slate-300 px-4 py-2"
        placeholder="Zadej město..."
      />

      <button className="mt-3 rounded-xl bg-blue-600 px-4 py-2 text-white">
        Použít moji polohu
      </button>
    </div>
  );
}