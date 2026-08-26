import {
  LayoutDashboard,
  Waves,
  Siren,
  Package,
  Target,
  Hospital,
  Tent,
  BrainCircuit,
  Settings,
} from "lucide-react";

import { NavLink } from "react-router-dom";

const menuItems = [
  {
    name: "Dashboard",
    icon: LayoutDashboard,
    path: "/dashboard",
  },
  {
    name: "Disasters",
    icon: Waves,
    path: "#",
  },
  {
    name: "Emergency Reports",
    icon: Siren,
    path: "/emergency",
  },
  {
    name: "Resources",
    icon: Package,
    path: "#",
  },
  {
    name: "Allocations",
    icon: Target,
    path: "#",
  },
  {
    name: "Hospitals",
    icon: Hospital,
    path: "#",
  },
  {
    name: "Shelters",
    icon: Tent,
    path: "#",
  },
  {
    name: "AI Analysis",
    icon: BrainCircuit,
    path: "#",
  },
  {
    name: "Settings",
    icon: Settings,
    path: "#",
  },
];

function Sidebar() {
  return (
    <aside className="fixed left-0 top-0 z-40 h-screen w-64 border-r border-slate-800 bg-slate-950 text-white">

      {/* Logo */}
      <div className="flex h-20 items-center border-b border-slate-800 px-6">

        <div className="mr-3 flex h-10 w-10 items-center justify-center rounded-xl bg-red-600">
          <Siren size={22} />
        </div>

        <div>
          <h1 className="text-sm font-bold">
            AI DISASTER
          </h1>

          <p className="text-xs text-slate-400">
            RESPONSE SYSTEM
          </p>
        </div>

      </div>

      {/* Navigation */}
      <nav className="p-4">

        <p className="mb-3 px-3 text-xs font-semibold uppercase tracking-wider text-slate-500">
          Command Center
        </p>

        <div className="space-y-1">

          {menuItems.map((item) => {

            const Icon = item.icon;

            // Items that don't have a page yet
            if (item.path === "#") {
              return (
                <button
                  key={item.name}
                  type="button"
                  className="flex w-full items-center gap-3 rounded-lg px-3 py-3 text-sm text-slate-300 transition hover:bg-slate-800 hover:text-white"
                >
                  <Icon size={19} />

                  <span>
                    {item.name}
                  </span>
                </button>
              );
            }

            // Items with an actual route
            return (
              <NavLink
                key={item.name}
                to={item.path}
                className={({ isActive }) =>
                  `flex w-full items-center gap-3 rounded-lg px-3 py-3 text-sm transition ${
                    isActive
                      ? "bg-red-600 text-white shadow-lg shadow-red-900/20"
                      : "text-slate-300 hover:bg-slate-800 hover:text-white"
                  }`
                }
              >
                <Icon size={19} />

                <span>
                  {item.name}
                </span>
              </NavLink>
            );

          })}

        </div>

      </nav>

      {/* System Status */}
      <div className="absolute bottom-0 w-full border-t border-slate-800 p-4">

        <div className="flex items-center gap-3 rounded-lg bg-slate-900 p-3">

          <div className="h-3 w-3 rounded-full bg-green-500" />

          <div>
            <p className="text-xs font-medium text-white">
              System Online
            </p>

            <p className="text-[10px] text-slate-500">
              All services operational
            </p>
          </div>

        </div>

      </div>

    </aside>
  );
}

export default Sidebar;