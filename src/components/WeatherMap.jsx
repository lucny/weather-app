import {
  MapContainer,
  Marker,
  Popup,
  TileLayer,
} from "react-leaflet";

export default function WeatherMap({
  location,
}) {
  if (!location) {
    return (
      <div className="rounded-2xl bg-white p-5 shadow">
        <h2 className="text-xl font-bold">
          Mapa
        </h2>

        <p className="mt-3 text-sm text-slate-500">
          Vyhledej město pro zobrazení mapy.
        </p>
      </div>
    );
  }

  const position = [
    location.latitude,
    location.longitude,
  ];

  return (
    <div className="rounded-2xl bg-white p-5 shadow">
      <h2 className="mb-4 text-xl font-bold">
        Poloha města
      </h2>

        <MapContainer
            key={`${location.latitude}-${location.longitude}`}
            center={position}
            zoom={10}
            className="h-[420px] rounded-xl"
        >
        <TileLayer
          attribution="&copy; OpenStreetMap contributors"
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        <Marker position={position}>
          <Popup>
            {location.name}
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
}
