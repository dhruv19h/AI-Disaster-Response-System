import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  Circle,
} from "react-leaflet";

import L from "leaflet";
import "leaflet/dist/leaflet.css";

interface Disaster {
  id: number;
  type: string;
  location: string;
  severity: "Critical" | "High" | "Medium";
  coordinates: [number, number];
  affected: number;
}

interface EmergencyFacility {
  id: number;
  name: string;
  type: "Hospital" | "Shelter";
  coordinates: [number, number];
  capacity: number;
}

/* =========================================================
   DISASTER DATA
   ========================================================= */

const disasters: Disaster[] = [
  {
    id: 1,
    type: "Flood",
    location: "Bengaluru",
    severity: "Critical",
    coordinates: [12.9716, 77.5946],
    affected: 18500,
  },
  {
    id: 2,
    type: "Earthquake",
    location: "Mysuru",
    severity: "High",
    coordinates: [12.2958, 76.6394],
    affected: 9200,
  },
  {
    id: 3,
    type: "Fire",
    location: "Hubballi",
    severity: "Medium",
    coordinates: [15.3647, 75.124],
    affected: 3400,
  },
];

/* =========================================================
   HOSPITAL & SHELTER DATA
   ========================================================= */

const facilities: EmergencyFacility[] = [
  {
    id: 1,
    name: "Victoria Hospital",
    type: "Hospital",
    coordinates: [12.9634, 77.5855],
    capacity: 450,
  },
  {
    id: 2,
    name: "Emergency Shelter Bengaluru",
    type: "Shelter",
    coordinates: [12.985, 77.59],
    capacity: 1200,
  },
  {
    id: 3,
    name: "Mysuru Emergency Hospital",
    type: "Hospital",
    coordinates: [12.3052, 76.6552],
    capacity: 300,
  },
  {
    id: 4,
    name: "Mysuru Relief Shelter",
    type: "Shelter",
    coordinates: [12.302, 76.645],
    capacity: 800,
  },
];

/* =========================================================
   DISASTER MARKER ICON
   ========================================================= */

function createDisasterIcon(
  severity: "Critical" | "High" | "Medium"
) {
  const colors = {
    Critical: "#ef4444",
    High: "#f97316",
    Medium: "#eab308",
  };

  return L.divIcon({
    className: "",
    html: `
      <div style="
        width: 18px;
        height: 18px;
        background: ${colors[severity]};
        border: 3px solid white;
        border-radius: 50%;
        box-shadow: 0 0 12px ${colors[severity]};
      "></div>
    `,
    iconSize: [18, 18],
    iconAnchor: [9, 9],
  });
}

/* =========================================================
   HOSPITAL & SHELTER MARKER ICON
   ========================================================= */

function createFacilityIcon(
  type: "Hospital" | "Shelter"
) {
  const backgroundColor =
    type === "Hospital"
      ? "#22c55e"
      : "#3b82f6";

  const symbol =
    type === "Hospital"
      ? "H"
      : "S";

  return L.divIcon({
    className: "",
    html: `
      <div style="
        width: 24px;
        height: 24px;
        background: ${backgroundColor};
        border: 3px solid white;
        border-radius: 6px;
        display: flex;
        align-items: center;
        justify-content: center;
        color: white;
        font-size: 12px;
        font-weight: bold;
        box-shadow: 0 0 10px ${backgroundColor};
      ">
        ${symbol}
      </div>
    `,
    iconSize: [24, 24],
    iconAnchor: [12, 12],
  });
}

/* =========================================================
   DISASTER MAP COMPONENT
   ========================================================= */

function DisasterMap() {
  return (
    <div className="relative overflow-hidden rounded-xl border border-slate-800 bg-slate-950">

      {/* =====================================================
          MAP
          ===================================================== */}

      <div className="h-[500px]">

        <MapContainer
          center={[13.15, 76.8]}
          zoom={7}
          scrollWheelZoom={true}
          className="h-full w-full"
        >

          {/* OpenStreetMap Layer */}

          <TileLayer
            attribution="&copy; OpenStreetMap contributors"
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />

          {/* =================================================
              DISASTER MARKERS
              ================================================= */}

          {disasters.map((disaster) => (
            <div key={disaster.id}>

              <Marker
                position={disaster.coordinates}
                icon={createDisasterIcon(
                  disaster.severity
                )}
              >

                <Popup>

                  <div className="min-w-[180px]">

                    <h3 className="mb-2 font-bold">
                      {disaster.type}
                    </h3>

                    <p>
                      📍 {disaster.location}
                    </p>

                    <p>
                      Severity:{" "}
                      <strong>
                        {disaster.severity}
                      </strong>
                    </p>

                    <p>
                      People affected:{" "}
                      {disaster.affected.toLocaleString()}
                    </p>

                  </div>

                </Popup>

              </Marker>

              {/* Risk Radius */}

              <Circle
                center={disaster.coordinates}
                radius={
                  disaster.severity === "Critical"
                    ? 12000
                    : disaster.severity === "High"
                      ? 8000
                      : 5000
                }
                pathOptions={{
                  color:
                    disaster.severity === "Critical"
                      ? "#ef4444"
                      : disaster.severity === "High"
                        ? "#f97316"
                        : "#eab308",
                  fillOpacity: 0.12,
                }}
              />

            </div>
          ))}

          {/* =================================================
              HOSPITAL & SHELTER MARKERS
              ================================================= */}

          {facilities.map((facility) => (
            <Marker
              key={facility.id}
              position={facility.coordinates}
              icon={createFacilityIcon(
                facility.type
              )}
            >

              <Popup>

                <div className="min-w-[200px]">

                  <h3 className="mb-2 font-bold">
                    {facility.name}
                  </h3>

                  <p>
                    {facility.type === "Hospital"
                      ? "🏥"
                      : "🏠"}{" "}
                    Type:{" "}
                    <strong>
                      {facility.type}
                    </strong>
                  </p>

                  <p>
                    Capacity:{" "}
                    <strong>
                      {facility.capacity.toLocaleString()}
                    </strong>
                  </p>

                  <p className="mt-2 text-xs text-gray-500">
                    Emergency resource location
                  </p>

                </div>

              </Popup>

            </Marker>
          ))}

        </MapContainer>

      </div>

      {/* =====================================================
          MAP HEADER
          ===================================================== */}

      <div className="absolute left-4 top-4 z-[1000] rounded-xl border border-slate-700 bg-slate-950/95 px-4 py-3 shadow-xl">

        <div className="flex items-center gap-3">

          <div className="h-2.5 w-2.5 animate-pulse rounded-full bg-red-500" />

          <div>

            <h3 className="text-sm font-semibold text-white">
              Live Disaster Map
            </h3>

            <p className="text-[10px] text-slate-500">
              Real-time incident monitoring
            </p>

          </div>

        </div>

      </div>

      {/* =====================================================
          MAP LEGEND
          ===================================================== */}

      <div className="absolute bottom-4 left-4 z-[1000] rounded-xl border border-slate-700 bg-slate-950/95 p-4 shadow-xl">

        <p className="mb-3 text-xs font-semibold text-white">
          Map Legend
        </p>

        <div className="space-y-2">

          {/* Critical */}

          <div className="flex items-center gap-2">

            <span className="h-3 w-3 rounded-full bg-red-500" />

            <span className="text-xs text-slate-400">
              Critical
            </span>

          </div>

          {/* High */}

          <div className="flex items-center gap-2">

            <span className="h-3 w-3 rounded-full bg-orange-500" />

            <span className="text-xs text-slate-400">
              High
            </span>

          </div>

          {/* Medium */}

          <div className="flex items-center gap-2">

            <span className="h-3 w-3 rounded-full bg-yellow-500" />

            <span className="text-xs text-slate-400">
              Medium
            </span>

          </div>

          {/* Hospital */}

          <div className="flex items-center gap-2">

            <span className="flex h-3 w-3 items-center justify-center rounded bg-green-500 text-[7px] font-bold text-white">
              H
            </span>

            <span className="text-xs text-slate-400">
              Hospital
            </span>

          </div>

          {/* Shelter */}

          <div className="flex items-center gap-2">

            <span className="flex h-3 w-3 items-center justify-center rounded bg-blue-500 text-[7px] font-bold text-white">
              S
            </span>

            <span className="text-xs text-slate-400">
              Shelter
            </span>

          </div>

        </div>

      </div>

    </div>
  );
}

export default DisasterMap;