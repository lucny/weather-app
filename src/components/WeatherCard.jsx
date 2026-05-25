export default function WeatherCard({
  city,  
  temperature,
  description,
}) {
  return (
    <div className="rounded-2xl bg-white p-5 shadow">
      <div className="flex items-start justify-between">
        <div>
          <h2 className="text-lg font-bold">{city}</h2>
          <p className="text-sm text-slate-500">
            Pondělí 20. května 2024, 14:00
          </p>

          <div className="mt-5 flex items-end gap-4">
            <p className="text-6xl font-bold">{temperature} °C</p>
            <p className="pb-2 text-slate-700">{description}</p>
          </div>
        </div>

        <div className="text-7xl">🌤️</div>
      </div>

      <div className="mt-5 grid grid-cols-3 gap-3 border-t pt-4 text-sm">
        <div>
          <p className="text-slate-500">Vlhkost</p>
          <p className="font-bold">56 %</p>
        </div>

        <div>
          <p className="text-slate-500">Vítr</p>
          <p className="font-bold">12 km/h</p>
        </div>

        <div>
          <p className="text-slate-500">Srážky</p>
          <p className="font-bold">0 mm</p>
        </div>
      </div>
    </div>
  );
}