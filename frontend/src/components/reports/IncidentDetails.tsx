import type { EmergencyReport } from "./EmergencyReports";

interface IncidentDetailsProps {
  report: EmergencyReport | null;
  onClose: () => void;
}

function IncidentDetails({
  report,
  onClose,
}: IncidentDetailsProps) {
  if (!report) {
    return null;
  }

  return (
    <div className="rounded-xl border border-slate-800 bg-slate-950 p-6">

      <div className="mb-6 flex items-start justify-between">

        <div>

          <p className="text-xs uppercase tracking-wider text-slate-500">
            Incident Details
          </p>

          <h2 className="mt-1 text-xl font-bold text-white">
            {report.type}
          </h2>

        </div>

        <button
          onClick={onClose}
          className="rounded-lg border border-slate-700 px-3 py-2 text-sm text-slate-400 hover:bg-slate-900"
        >
          ✕ Close
        </button>

      </div>

      <div className="grid gap-4 md:grid-cols-2">

        <Detail
          label="Location"
          value={`📍 ${report.location}`}
        />

        <Detail
          label="Severity"
          value={report.severity}
        />

        <Detail
          label="People Affected"
          value={report.affected.toLocaleString()}
        />

        <Detail
          label="Status"
          value={report.status}
        />

        <Detail
          label="Reported"
          value={report.time}
        />

      </div>

      <div className="mt-6">

        <p className="mb-2 text-sm font-medium text-slate-300">
          Description
        </p>

        <div className="rounded-lg border border-slate-800 bg-slate-900 p-4 text-sm leading-6 text-slate-400">
          {report.description}
        </div>

      </div>

      <div className="mt-6 grid gap-3 md:grid-cols-3">

        <button className="rounded-lg bg-blue-600 px-4 py-3 text-sm font-semibold text-white hover:bg-blue-500">
          🚑 Dispatch Response
        </button>

        <button className="rounded-lg bg-orange-600 px-4 py-3 text-sm font-semibold text-white hover:bg-orange-500">
          📦 Allocate Resources
        </button>

        <button className="rounded-lg bg-green-600 px-4 py-3 text-sm font-semibold text-white hover:bg-green-500">
          ✓ Mark Resolved
        </button>

      </div>

    </div>
  );
}

function Detail({
  label,
  value,
}: {
  label: string;
  value: string;
}) {
  return (
    <div className="rounded-lg border border-slate-800 bg-slate-900 p-4">

      <p className="text-xs text-slate-500">
        {label}
      </p>

      <p className="mt-1 font-medium text-white">
        {value}
      </p>

    </div>
  );
}

export default IncidentDetails;
