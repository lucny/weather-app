import SearchPanel from "./components/SearchPanel";
import WeatherCard from "./components/WeatherCard";
import ForecastList from "./components/ForecastList";
import WeatherMap from "./components/WeatherMap";
import ChartPlaceholder from "./components/ChartPlaceholder";
import { useState } from "react";
import { searchLocation, getCurrentWeather } from "./api/weatherApi";

export default function App() {
  const [city, setCity] = useState("Praha");
  const [location, setLocation] = useState(null);
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function handleSearch() {
    try {
      setLoading(true);
      setError("");

      const foundLocation = await searchLocation(city);

      if (!foundLocation) {
        setWeather(null);
        setLocation(null);
        setError("Město nebylo nalezeno.");
        return;
      }

      const weatherData = await getCurrentWeather(
        foundLocation.latitude,
        foundLocation.longitude
      );

      setLocation(foundLocation);
      setWeather(weatherData);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }


  return (
    <main className="min-h-screen bg-slate-100 p-6">
      <div className="mx-auto grid max-w-7xl gap-6 lg:grid-cols-2">
        <section className="space-y-4">
          <SearchPanel
            city={city}
            setCity={setCity}
            onSearch={handleSearch}
            loading={loading}
          />

          {error && (
            <div className="rounded-xl bg-red-100 p-4 text-red-700 shadow">
              {error}
            </div>
          )}

          {loading && (
            <div className="rounded-xl bg-white p-4 text-slate-600 shadow">
              Načítám data...
            </div>
          )}

          <WeatherCard
            city={location?.name ?? city}
            country={location?.country}
            weather={weather}
          />

          <ForecastList weather={weather} />
        </section>

        <section className="space-y-4">
          <WeatherMap location={location} />
          <ChartPlaceholder />
        </section>
      </div>
    </main>
  );
}
