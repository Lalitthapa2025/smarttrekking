// TrekkingCompanion.jsx
import { useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";

export default function TrekkingCompanion() {
  const [journalEntries, setJournalEntries] = useState([]);
  const [entry, setEntry] = useState("");

  const handleJournalSubmit = () => {
    if (entry.trim() !== "") {
      setJournalEntries([...journalEntries, entry]);
      setEntry("");
    }
  };

  return (
    <div className="p-6 max-w-5xl mx-auto space-y-8">
      <h1 className="text-3xl font-bold text-center">Smart Trekking Companion (Trial)</h1>

      <section>
        <h2 className="text-xl font-semibold mb-2">Trekking Route Map (Sample)</h2>
        <MapContainer center={[28.5983, 83.9311]} zoom={9} className="h-96 rounded-xl shadow">
          <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
          <Marker position={[28.5983, 83.9311]}>
            <Popup>Annapurna Base Camp</Popup>
          </Marker>
        </MapContainer>
      </section>

      <section>
        <h2 className="text-xl font-semibold mb-2">Gear Checklist</h2>
        <ul className="list-disc list-inside space-y-1">
          <li>Backpack (30–50L)</li>
          <li>Sleeping Bag (-10°C rating)</li>
          <li>Headlamp with extra batteries</li>
          <li>Water purifier / tablets</li>
          <li>First Aid Kit</li>
        </ul>
      </section>

      <section>
        <h2 className="text-xl font-semibold mb-2">Sample Lodges</h2>
        <div className="space-y-2">
          <div className="p-4 bg-gray-100 rounded-lg">
            <strong>Hotel Snowland – Ghandruk</strong>
            <p>Basic amenities, hot shower available. Contact: 9800000000</p>
          </div>
          <div className="p-4 bg-gray-100 rounded-lg">
            <strong>Himalayan Lodge – Chhomrong</strong>
            <p>Great mountain views. Contact: 9811111111</p>
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-xl font-semibold mb-2">Cultural Tip</h2>
        <p>In most villages, it’s polite to say "Namaste" with palms together when greeting locals.</p>
      </section>

      <section className="bg-red-100 p-4 rounded-lg border border-red-400">
        <h2 className="text-xl font-bold text-red-600">🚨 Emergency Info</h2>
        <p>For mountain emergencies, contact <strong>Nepal Mountaineering Rescue: 1144</strong> or <strong>Tourist Police: 114</strong></p>
      </section>

      <section>
        <h2 className="text-xl font-semibold mb-2">Your Trek Journal</h2>
        <textarea
          className="w-full p-2 border rounded-lg mb-2"
          rows={3}
          value={entry}
          onChange={(e) => setEntry(e.target.value)}
          placeholder="Write about your trek experience..."
        />
        <button
          className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
          onClick={handleJournalSubmit}
        >
          Save Entry
        </button>
        <ul className="mt-4 space-y-2">
          {journalEntries.map((e, i) => (
            <li key={i} className="bg-white p-3 rounded-lg shadow">{e}</li>
          ))}
        </ul>
      </section>
    </div>
  );
}