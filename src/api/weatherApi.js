export async function searchLocation(city) {
  const url =
    `https://geocoding-api.open-meteo.com/v1/search` +
    `?name=${encodeURIComponent(city)}` +
    `&count=1` +
    `&language=cs` +
    `&format=json`;

  const response = await fetch(url);

  if (!response.ok) {
    throw new Error("Nepodařilo se načíst souřadnice města.");
  }

  const data = await response.json();

  return data.results?.[0] ?? null;
}

export async function getCurrentWeather(latitude, longitude) {
  const url =
    `https://api.open-meteo.com/v1/forecast` +
    `?latitude=${latitude}` +
    `&longitude=${longitude}` +
    `&current=weather_code,temperature_2m,relative_humidity_2m,wind_speed_10m,precipitation` +
    `&daily=weather_code,temperature_2m_max,temperature_2m_min,precipitation_sum` +
    `&timezone=auto`;

  const response = await fetch(url);

  if (!response.ok) {
    throw new Error("Nepodařilo se načíst počasí.");
  }

  return response.json();
}