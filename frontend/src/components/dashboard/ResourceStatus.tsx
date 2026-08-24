import {
  Droplets,
  Utensils,
  Pill,
  Truck,
} from "lucide-react";

const resources = [
  {
    name: "Drinking Water",
    available: 78,
    icon: Droplets,
  },
  {
    name: "Food Supplies",
    available: 64,
    icon: Utensils,
  },
  {
    name: "Medical Supplies",
    available: 82,
    icon: Pill,
  },
  {
    name: "Rescue Vehicles",
    available: 91,
    icon: Truck,
  },
];

function ResourceStatus() {
  return (
    <div className="rounded-xl border border-slate-800 bg-slate-950 p-6">

      <div className="mb-6">

        <h2 className="text-lg font-semibold text-white">
          Resource Status
        </h2>

        <p className="mt-1 text-xs text-slate-500">
          Current availability across response centers
        </p>

      </div>

      <div className="space-y-5">

        {resources.map((resource) => {

          const Icon = resource.icon;

          return (
            <div key={resource.name}>

              <div className="mb-2 flex items-center justify-between">

                <div className="flex items-center gap-2">

                  <Icon
                    size={17}
                    className="text-slate-400"
                  />

                  <span className="text-sm text-slate-300">
                    {resource.name}
                  </span>

                </div>

                <span className="text-sm font-semibold text-white">
                  {resource.available}%
                </span>

              </div>

              <div className="h-2 overflow-hidden rounded-full bg-slate-800">

                <div
                  className={`h-full rounded-full ${
                    resource.available < 70
                      ? "bg-orange-500"
                      : "bg-emerald-500"
                  }`}
                  style={{
                    width: `${resource.available}%`,
                  }}
                />

              </div>

            </div>
          );

        })}

      </div>

    </div>
  );
}

export default ResourceStatus;