import SearchPanel from "./components/SearchPanel";
import WeatherCard from "./components/WeatherCard";
import ForecastList from "./components/ForecastList";
import MapPlaceholder from "./components/MapPlaceholder";
import ChartPlaceholder from "./components/ChartPlaceholder";
import { useState } from "react";


export default function App() {
  const [city, setCity] = useState("Praha");

  const weatherData = {
  Praha: {
    temperature: 22,
    description: "Polojasno",
  },

  Brno: {
    temperature: 19,
    description: "Déšť",
  },

  Ostrava: {
    temperature: 17,
    description: "Zataženo",
  },
};  

  const weather =
    weatherData[city] || {
      temperature: "--",
      description: "Neznámé město",
  };

  return (
    <main className="min-h-screen bg-slate-100 p-6">
      <div className="mx-auto grid max-w-7xl gap-6 lg:grid-cols-[420px_1fr]">
        <section className="space-y-4">
          <SearchPanel 
            city={city}
            setCity={setCity}
          />
          <WeatherCard
            city={city}
            temperature={weather.temperature}
            description={weather.description}
          />
          <ForecastList />
        </section>

        <section className="space-y-4">
          <MapPlaceholder />
          <ChartPlaceholder />
        </section>
      </div>
    </main>
  );
}