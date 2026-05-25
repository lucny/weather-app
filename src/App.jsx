import SearchPanel from "./components/SearchPanel";
import WeatherCard from "./components/WeatherCard";
import ForecastList from "./components/ForecastList";
import MapPlaceholder from "./components/MapPlaceholder";
import ChartPlaceholder from "./components/ChartPlaceholder";
import { useState } from "react";

export default function App() {
  const [count, setCount] = useState(0);
  const [city, setCity] = useState("Praha");

  return (
    <main className="min-h-screen bg-slate-100 p-6">
      <div className="mx-auto grid max-w-7xl gap-6 lg:grid-cols-[420px_1fr]">
        <section className="space-y-4">
          <SearchPanel />
          <WeatherCard />
          <ForecastList />
        </section>

        <section className="space-y-4">
          <MapPlaceholder />
          <ChartPlaceholder />
        </section>
      </div>
      <button
        onClick={() => setCount(count + 1)}
        className="rounded bg-blue-600 px-4 py-2 text-white"
      >
        Kliknutí: {count}
      </button>
      <p>{city}</p>
    </main>
  );
}