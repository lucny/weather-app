export default function ForecastDayCard({
  day,
  icon,
  maxTemp,
  minTemp,
  precipitation,
}) {
  return (
    <div className="rounded-2xl border bg-slate-50 p-4 text-center">
      <p className="text-sm font-bold text-slate-600">
        {day}
      </p>

      <div className="my-3 text-5xl">
        {icon}
      </div>

      <div className="space-y-1">
        <p className="text-lg font-bold">
          {Math.round(maxTemp)}°C
        </p>

        <p className="text-sm text-slate-500">
          {Math.round(minTemp)}°C
        </p>

        <p className="text-xs text-blue-600">
          {precipitation} mm
        </p>
      </div>
    </div>
  );
}