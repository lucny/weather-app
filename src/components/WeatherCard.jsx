import { getWeatherIcon } from "../utils/weatherCodes";

export default function WeatherCard({
  city,
  country,
  weather,
}) {
  if (!weather) {
    return (
      <div className="rounded-2xl bg-white p-5 shadow">
        <h2 className="text-lg font-bold">Aktuální počasí</h2>

        <p className="mt-3 text-sm text-slate-500">
          Zadej město a klikni na tlačítko „Vyhledat počasí“.
        </p>
      </div>
    );
  }

  const current = weather.current;

  return (
    <div className="rounded-2xl bg-white p-5 shadow">
      <div className="flex items-start justify-between">
        <div>
          <h2 className="text-lg font-bold">
            {city}
            {country ? `, ${country}` : ""}
          </h2>

          <p className="text-sm text-slate-500">
            Aktuální meteorologická data
          </p>

          <div className="mt-5 flex items-end gap-4">
            <p className="text-6xl font-bold">
              {Math.round(current.temperature_2m)}°C
            </p>

            <p className="pb-2 text-slate-700">
              Aktuálně
            </p>
          </div>
        </div>

        <div className="text-7xl">{getWeatherIcon(current.weather_code)}</div>
      </div>

      <div className="mt-5 grid grid-cols-3 gap-3 border-t pt-4 text-sm">
        <InfoItem
          label="Vlhkost"
          value={`${current.relative_humidity_2m} %`}
        />

        <InfoItem
          label="Vítr"
          value={`${current.wind_speed_10m} km/h`}
        />

        <InfoItem
          label="Srážky"
          value={`${current.precipitation} mm`}
        />
      </div>
    </div>
  );
}

function InfoItem({ label, value }) {
  return (
    <div>
      <p className="text-slate-500">{label}</p>
      <p className="font-bold">{value}</p>
    </div>
  );
}