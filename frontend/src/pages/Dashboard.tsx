import {
  Siren,
  Users,
  Package,
  Hospital,
} from "lucide-react";

import StatCard from "../components/dashboard/StatCard";
import DisasterChart from "../components/dashboard/DisasterChart";
import AIInsight from "../components/dashboard/AIInsight";
import ActiveIncidents from "../components/dashboard/ActiveIncidents";
import ResourceStatus from "../components/dashboard/ResourceStatus";
import DisasterMap from "../components/map/DisasterMap";

function Dashboard() {
  return (
    <div className="space-y-6">

      {/* Page Heading */}
      <div>

        <div className="flex items-center gap-3">

          <div className="h-2 w-2 rounded-full bg-red-500" />

          <span className="text-xs font-semibold uppercase tracking-wider text-red-400">
            Live Operations
          </span>

        </div>

        <h1 className="mt-2 text-3xl font-bold text-white">
          Disaster Overview
        </h1>

        <p className="mt-1 text-sm text-slate-500">
          Monitor emergencies, resources and AI predictions in real time.
        </p>

      </div>

      {/* Statistics */}
      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">

        <StatCard
          title="Active Disasters"
          value="07"
          description="Across monitored regions"
          icon={Siren}
          iconColor="bg-red-500/10 text-red-400"
          trend="↑ 2 new incidents today"
        />

        <StatCard
          title="People Affected"
          value="45,820"
          description="Estimated affected population"
          icon={Users}
          iconColor="bg-orange-500/10 text-orange-400"
          trend="↑ 8.4% from yesterday"
        />

        <StatCard
          title="Resources Available"
          value="82%"
          description="Overall resource availability"
          icon={Package}
          iconColor="bg-emerald-500/10 text-emerald-400"
          trend="Healthy resource level"
        />

        <StatCard
          title="Hospitals Active"
          value="18"
          description="Emergency facilities responding"
          icon={Hospital}
          iconColor="bg-blue-500/10 text-blue-400"
          trend="3 hospitals on high alert"
        />

      </div>

      {/* Live Disaster Map */}
      <div>
        <DisasterMap />
      </div>
      <div className="grid gap-6 xl:grid-cols-3">

        <div className="xl:col-span-2">
          <DisasterChart />
        </div>

        <AIInsight />

      </div>

      {/* Incidents + Resources */}
      <div className="grid gap-6 xl:grid-cols-2">

        <ActiveIncidents />

        <ResourceStatus />

      </div>

    </div>
  );
}

export default Dashboard;