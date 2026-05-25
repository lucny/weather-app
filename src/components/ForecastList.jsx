import ForecastDayCard from "./ForecastDayCard";

import { getWeatherIcon } from "../utils/weatherCodes";

export default function ForecastList({
  weather,
}) {
  if (!weather) {
    return (
      <div className="rounded-2xl bg-white p-5 shadow">
        <h2 className="text-lg font-bold">
          Předpověď na 7 dní
        </h2>

        <p className="mt-3 text-sm text-slate-500">
          Forecast se zobrazí po načtení počasí.
        </p>
      </div>
    );
  }

  const daily = weather.daily;

  return (
    <div className="rounded-2xl bg-white p-5 shadow">
      <h2 className="mb-5 text-lg font-bold">
        Předpověď na 7 dní
      </h2>

      <div className="grid grid-cols-2 gap-3 md:grid-cols-4 xl:grid-cols-7">
        {daily.time.map((day, index) => (
          <ForecastDayCard
            key={day}
            day={formatDay(day)}
            icon={getWeatherIcon(
              daily.weather_code[index]
            )}
            maxTemp={
              daily.temperature_2m_max[index]
            }
            minTemp={
              daily.temperature_2m_min[index]
            }
            precipitation={
              daily.precipitation_sum[index]
            }
          />
        ))}
      </div>
    </div>
  );
}

function formatDay(dateString) {
  return new Date(dateString).toLocaleDateString(
    "cs-CZ",
    {
      weekday: "short",
    }
  );
}