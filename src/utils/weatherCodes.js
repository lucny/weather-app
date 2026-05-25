export function getWeatherIcon(code) {
  if (code === 0) return "☀️";

  if ([1, 2].includes(code)) return "🌤️";

  if (code === 3) return "☁️";

  if ([45, 48].includes(code)) return "🌫️";

  if ([51, 53, 55].includes(code)) return "🌦️";

  if ([61, 63, 65].includes(code)) return "🌧️";

  if ([71, 73, 75].includes(code)) return "❄️";

  if ([95, 96, 99].includes(code)) return "⛈️";

  return "❓";
}