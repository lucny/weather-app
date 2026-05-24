const bars = [40, 30, 70, 45, 20, 25, 45];
const linePoints = [
  [20, 90],
  [90, 65],
  [160, 70],
  [230, 110],
  [300, 135],
  [370, 115],
  [440, 85],
];

export default function ChartPlaceholder() {
  const polyline = linePoints.map((point) => point.join(",")).join(" ");

  return (
    <div className="rounded-2xl bg-white p-5 shadow">
      <h2 className="mb-4 text-xl font-bold">Graf teplot a srážek</h2>

      <div className="rounded-xl border bg-slate-50 p-4">
        <div className="mb-3 flex justify-end gap-4 text-sm">
          <span className="flex items-center gap-2">
            <span className="h-3 w-6 rounded bg-orange-500"></span>
            Teplota
          </span>

          <span className="flex items-center gap-2">
            <span className="h-3 w-6 rounded bg-blue-500"></span>
            Srážky
          </span>
        </div>

        <div className="flex h-52 items-end gap-6 border-l border-b border-slate-300 px-6">
          {bars.map((height, index) => (
            <div key={index} className="flex h-full flex-col justify-end">
              <div
                className="w-8 rounded-t bg-blue-500"
                style={{ height: `${height}%` }}
              ></div>
            </div>
          ))}
        </div>

        <svg
          viewBox="0 0 460 160"
          className="-mt-52 h-52 w-full overflow-visible"
        >
          <polyline
            points={polyline}
            fill="none"
            stroke="orange"
            strokeWidth="4"
          />

          {linePoints.map(([x, y], index) => (
            <circle key={index} cx={x} cy={y} r="5" fill="orange" />
          ))}
        </svg>
      </div>
    </div>
  );
}