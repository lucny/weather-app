export default function SearchPanel({
  city,
  setCity,
  onSearch,
  loading,
}) {
  function handleSubmit(event) {
    event.preventDefault();
    onSearch();
  }

  return (
    <form onSubmit={handleSubmit} className="rounded-2xl bg-white p-5 shadow">
      <div className="mb-4 flex items-center gap-2">
        <span className="text-2xl">🌤️</span>
        <h1 className="text-2xl font-bold">Počasí</h1>
      </div>

      <label className="mb-2 block text-sm font-medium text-slate-600">
        Vyber město
      </label>

      <input
        value={city}
        onChange={(event) => setCity(event.target.value)}
        className="w-full rounded-xl border border-slate-300 px-4 py-2 outline-none focus:border-blue-500"
        placeholder="Zadej město..."
      />

      <button
        type="submit"
        disabled={loading}
        className="mt-3 w-full rounded-xl bg-blue-600 px-4 py-2 font-semibold text-white disabled:bg-slate-400"
      >
        {loading ? "Načítám..." : "Vyhledat počasí"}
      </button>

      <button
        type="button"
        className="mt-2 w-full rounded-xl border border-slate-300 px-4 py-2 text-slate-700"
      >
        Použít moji polohu
      </button>
    </form>
  );
}