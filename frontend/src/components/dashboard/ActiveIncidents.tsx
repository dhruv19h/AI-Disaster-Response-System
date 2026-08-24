import {
  Waves,
  Flame,
  Activity,
} from "lucide-react";

const incidents = [
  {
    type: "Flood",
    location: "Bengaluru",
    severity: "Critical",
    time: "12 min ago",
    icon: Waves,
  },
  {
    type: "Earthquake",
    location: "Mysuru",
    severity: "High",
    time: "28 min ago",
    icon: Activity,
  },
  {
    type: "Fire",
    location: "Hubballi",
    severity: "Medium",
    time: "41 min ago",
    icon: Flame,
  },
];

function ActiveIncidents() {
  return (
    <div className="rounded-xl border border-slate-800 bg-slate-950 p-6">

      <div className="mb-5 flex items-center justify-between">

        <div>
          <h2 className="text-lg font-semibold text-white">
            Active Incidents
          </h2>

          <p className="mt-1 text-xs text-slate-500">
            Current emergency situations
          </p>
        </div>

        <span className="rounded-full bg-red-500/10 px-3 py-1 text-xs font-medium text-red-400">
          3 Active
        </span>

      </div>

      <div className="space-y-3">

        {incidents.map((incident) => {

          const Icon = incident.icon;

          return (
            <div
              key={incident.type}
              className="flex items-center gap-4 rounded-lg border border-slate-800 bg-slate-900/50 p-4"
            >

              <div className="rounded-lg bg-slate-800 p-3 text-slate-300">
                <Icon size={19} />
              </div>

              <div className="min-w-0 flex-1">

                <div className="flex items-center gap-2">

                  <h3 className="text-sm font-medium text-white">
                    {incident.type}
                  </h3>

                  <span
                    className={`rounded-full px-2 py-0.5 text-[10px] ${
                      incident.severity === "Critical"
                        ? "bg-red-500/10 text-red-400"
                        : incident.severity === "High"
                          ? "bg-orange-500/10 text-orange-400"
                          : "bg-yellow-500/10 text-yellow-400"
                    }`}
                  >
                    {incident.severity}
                  </span>

                </div>

                <p className="mt-1 text-xs text-slate-500">
                  {incident.location}
                </p>

              </div>

              <span className="text-[10px] text-slate-600">
                {incident.time}
              </span>

            </div>
          );

        })}

      </div>

    </div>
  );
}

export default ActiveIncidents;