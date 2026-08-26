import { useMemo, useState } from "react";

export interface EmergencyReport {
  id: number;
  type: string;
  location: string;
  severity: "Critical" | "High" | "Medium";
  affected: number;
  status: "Active" | "Responding" | "Resolved";
  description: string;
  time: string;
}

interface EmergencyReportsProps {
  reports: EmergencyReport[];
  onSelect: (report: EmergencyReport) => void;
}

function EmergencyReports({
  reports,
  onSelect,
}: EmergencyReportsProps) {
  const [severityFilter, setSeverityFilter] =
    useState("All");

  const [locationFilter, setLocationFilter] =
    useState("All");

  const [statusFilter, setStatusFilter] =
    useState("All");

  const locations = [
    "All",
    ...new Set(reports.map((report) => report.location)),
  ];

  const filteredReports = useMemo(() => {
    return reports.filter((report) => {

      const severityMatch =
        severityFilter === "All" ||
        report.severity === severityFilter;

      const locationMatch =
        locationFilter === "All" ||
        report.location === locationFilter;

      const statusMatch =
        statusFilter === "All" ||
        report.status === statusFilter;

      return (
        severityMatch &&
        locationMatch &&
        statusMatch
      );
    });
  }, [
    reports,
    severityFilter,
    locationFilter,
    statusFilter,
  ]);

  return (
    <div className="rounded-xl border border-slate-800 bg-slate-950">

      {/* Header */}

      <div className="border-b border-slate-800 p-5">

        <h2 className="text-lg font-semibold text-white">
          Emergency Reports
        </h2>

        <p className="mt-1 text-sm text-slate-400">
          Incoming disaster and emergency incidents.
        </p>

      </div>

      {/* Filters */}

      <div className="grid gap-3 border-b border-slate-800 p-5 md:grid-cols-3">

        <select
          value={severityFilter}
          onChange={(event) =>
            setSeverityFilter(event.target.value)
          }
          className="rounded-lg border border-slate-700 bg-slate-900 px-3 py-2 text-sm text-white"
        >
          <option value="All">
            All Severities
          </option>

          <option value="Critical">
            Critical
          </option>

          <option value="High">
            High
          </option>

          <option value="Medium">
            Medium
          </option>
        </select>

        <select
          value={locationFilter}
          onChange={(event) =>
            setLocationFilter(event.target.value)
          }
          className="rounded-lg border border-slate-700 bg-slate-900 px-3 py-2 text-sm text-white"
        >
          {locations.map((location) => (
            <option
              key={location}
              value={location}
            >
              {location === "All"
                ? "All Locations"
                : location}
            </option>
          ))}
        </select>

        <select
          value={statusFilter}
          onChange={(event) =>
            setStatusFilter(event.target.value)
          }
          className="rounded-lg border border-slate-700 bg-slate-900 px-3 py-2 text-sm text-white"
        >
          <option value="All">
            All Status
          </option>

          <option value="Active">
            Active
          </option>

          <option value="Responding">
            Responding
          </option>

          <option value="Resolved">
            Resolved
          </option>
        </select>

      </div>

      {/* Reports */}

      <div className="divide-y divide-slate-800">

        {filteredReports.length === 0 ? (

          <div className="p-8 text-center text-sm text-slate-500">
            No emergency reports match the selected filters.
          </div>

        ) : (

          filteredReports.map((report) => (

            <button
              key={report.id}
              onClick={() => onSelect(report)}
              className="w-full p-5 text-left transition hover:bg-slate-900"
            >

              <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">

                <div>

                  <div className="flex items-center gap-3">

                    <span className="font-semibold text-white">
                      {report.type}
                    </span>

                    <SeverityBadge
                      severity={report.severity}
                    />

                  </div>

                  <p className="mt-1 text-sm text-slate-400">
                    📍 {report.location}
                  </p>

                </div>

                <div className="flex items-center gap-5 text-sm">

                  <span className="text-slate-400">
                    👥{" "}
                    {report.affected.toLocaleString()}
                  </span>

                  <StatusBadge
                    status={report.status}
                  />

                  <span className="text-xs text-slate-500">
                    {report.time}
                  </span>

                </div>

              </div>

            </button>

          ))

        )}

      </div>

    </div>
  );
}

function SeverityBadge({
  severity,
}: {
  severity: EmergencyReport["severity"];
}) {
  const styles = {
    Critical:
      "bg-red-500/10 text-red-400 border-red-500/20",
    High:
      "bg-orange-500/10 text-orange-400 border-orange-500/20",
    Medium:
      "bg-yellow-500/10 text-yellow-400 border-yellow-500/20",
  };

  return (
    <span
      className={`rounded-full border px-2 py-1 text-[10px] font-semibold ${styles[severity]}`}
    >
      {severity}
    </span>
  );
}

function StatusBadge({
  status,
}: {
  status: EmergencyReport["status"];
}) {
  const styles = {
    Active:
      "bg-red-500/10 text-red-400",
    Responding:
      "bg-blue-500/10 text-blue-400",
    Resolved:
      "bg-green-500/10 text-green-400",
  };

  return (
    <span
      className={`rounded-full px-2 py-1 text-[10px] font-semibold ${styles[status]}`}
    >
      {status}
    </span>
  );
}

export default EmergencyReports;