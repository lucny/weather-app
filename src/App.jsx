import SearchPanel from "./components/SearchPanel";
import WeatherCard from "./components/WeatherCard";
import ForecastList from "./components/ForecastList";

export default function App() {
  return (
    <main className="min-h-screen bg-slate-100 p-6">
      <div className="mx-auto grid max-w-7xl gap-6 lg:grid-cols-[520px_1fr]">
        <section className="space-y-4">
           <SearchPanel />
           <WeatherCard />
           <ForecastList />
        </section>

        <section className="space-y-4">
          Pravý sloupec
        </section>
      </div>
    </main>
  );
}