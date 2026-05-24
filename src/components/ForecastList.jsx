const forecast = [
  { day: "Út", icon: "☀️", temp: "21° / 11°" },
  { day: "St", icon: "🌤️", temp: "23° / 12°" },
  { day: "Čt", icon: "🌦️", temp: "24° / 13°" },
  { day: "Pá", icon: "⛅", temp: "20° / 10°" },
  { day: "So", icon: "☀️", temp: "18° / 9°" },
  { day: "Ne", icon: "🌧️", temp: "19° / 10°" },
  { day: "Po", icon: "☀️", temp: "21° / 11°" },
];

export default function ForecastList() {
  return (
    <div className="rounded-2xl bg-white p-5 shadow">
      <h2 className="mb-4 text-lg font-bold">Předpověď na 7 dní</h2>

      <div className="grid grid-cols-7 gap-2">
        {forecast.map((item) => (
          <div
            key={item.day}
            className="rounded-xl border bg-slate-50 p-3 text-center"
          >
            <p className="font-bold">{item.day}</p>
            <p className="my-2 text-3xl">{item.icon}</p>
            <p className="text-xs">{item.temp}</p>
          </div>
        ))}
      </div>
    </div>
  );
}