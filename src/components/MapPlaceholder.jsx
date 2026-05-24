export default function MapPlaceholder() {
  return (
    <div className="rounded-2xl bg-white p-5 shadow">
      <h2 className="mb-4 text-xl font-bold">Mapa</h2>

      <div className="relative flex h-72 items-center justify-center overflow-hidden rounded-xl bg-slate-200">
        <div className="absolute inset-0 bg-[linear-gradient(45deg,#e2e8f0_25%,transparent_25%),linear-gradient(-45deg,#e2e8f0_25%,transparent_25%),linear-gradient(45deg,transparent_75%,#e2e8f0_75%),linear-gradient(-45deg,transparent_75%,#e2e8f0_75%)] bg-[length:40px_40px] bg-[position:0_0,0_20px,20px_-20px,-20px_0px]" />

        <div className="relative rounded-full bg-blue-600 px-4 py-2 text-white shadow-lg">
          📍 Praha
        </div>
      </div>
    </div>
  );
}