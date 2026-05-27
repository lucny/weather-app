import {
  Bar,
  CartesianGrid,
  ComposedChart,
  Legend,
  Line,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

export default function WeatherChart({ weather }) {
  if (!weather) {
    return (
      <div className="rounded-2xl bg-white p-5 shadow">
        <h2 className="text-xl font-bold">Graf teplot a srážek</h2>

        <p className="mt-3 text-sm text-slate-500">
          Graf se zobrazí po načtení počasí.
        </p>
      </div>
    );
  }

  const chartData = createChartData(weather.daily);

  return (
    <div className="rounded-2xl bg-white p-5 shadow">
      <div className="mb-4">
        <h2 className="text-xl font-bold">Graf teplot a srážek</h2>

        <p className="text-sm text-slate-500">
          Denní maximum, minimum a úhrn srážek pro další dny.
        </p>
      </div>

      <div className="h-[380px] rounded-xl border bg-slate-50 p-4">
        <ResponsiveContainer width="100%" height="100%">
          <ComposedChart data={chartData}>
            <CartesianGrid strokeDasharray="3 3" />

            <XAxis dataKey="day" />

            <YAxis
              yAxisId="temperature"
              unit=" °C"
            />

            <YAxis
              yAxisId="precipitation"
              orientation="right"
              unit=" mm"
            />

            <Tooltip />

            <Legend />

            <Bar
              yAxisId="precipitation"
              dataKey="precipitation"
              name="Srážky"
              fill="#3b82f6"
            />

            <Line
              yAxisId="temperature"
              type="monotone"
              dataKey="maxTemp"
              name="Max. teplota"
              stroke="#f97316"
              strokeWidth={3}
            />

            <Line
              yAxisId="temperature"
              type="monotone"
              dataKey="minTemp"
              name="Min. teplota"
              stroke="#14b8a6"
              strokeWidth={3}
            />
          </ComposedChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

function createChartData(daily) {
  return daily.time.map((date, index) => ({
    day: formatDay(date),
    maxTemp: daily.temperature_2m_max[index],
    minTemp: daily.temperature_2m_min[index],
    precipitation: daily.precipitation_sum[index],
  }));
}

function formatDay(dateString) {
  return new Date(dateString).toLocaleDateString("cs-CZ", {
    weekday: "short",
    day: "numeric",
    month: "numeric",
  });
}