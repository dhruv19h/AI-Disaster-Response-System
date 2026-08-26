import { useState } from "react";

import ReportDisaster from "../components/reports/ReportDisaster";

import EmergencyReports, {
  type EmergencyReport,
} from "../components/reports/EmergencyReports";

import IncidentDetails from "../components/reports/IncidentDetails";

import { emergencyReports } from "../data/emergencyReports";

function EmergencyManagement() {
  const [reports, setReports] =
    useState<EmergencyReport[]>(
      emergencyReports
    );

  const [selectedReport, setSelectedReport] =
    useState<EmergencyReport | null>(null);

  function handleNewReport(
    report: Omit<
      EmergencyReport,
      "id" | "status" | "time"
    >
  ) {
    const newReport: EmergencyReport = {
      ...report,
      id: Date.now(),
      status: "Active",
      time: "Just now",
    };

    setReports((currentReports) => [
      newReport,
      ...currentReports,
    ]);
  }

  return (
    <div className="space-y-6">

      {/* Page Header */}

      <div>

        <p className="text-xs uppercase tracking-wider text-red-400">
          Emergency Operations
        </p>

        <h1 className="mt-1 text-2xl font-bold text-white">
          Disaster Management
        </h1>

        <p className="mt-2 text-sm text-slate-400">
          Report, monitor and manage incoming emergency incidents.
        </p>

      </div>

      {/* Report + Details */}

      <div className="grid gap-6 xl:grid-cols-2">

        <ReportDisaster
          onReport={handleNewReport}
        />

        {selectedReport ? (
          <IncidentDetails
            report={selectedReport}
            onClose={() =>
              setSelectedReport(null)
            }
          />
        ) : (
          <div className="flex min-h-[400px] items-center justify-center rounded-xl border border-dashed border-slate-800 bg-slate-950">

            <div className="text-center">

              <div className="text-4xl">
                🚨
              </div>

              <h3 className="mt-3 font-semibold text-white">
                Select an Incident
              </h3>

              <p className="mt-1 max-w-sm text-sm text-slate-500">
                Select an emergency report below to view its complete details.
              </p>

            </div>

          </div>
        )}

      </div>

      {/* Reports */}

      <EmergencyReports
        reports={reports}
        onSelect={setSelectedReport}
      />

    </div>
  );
}

export default EmergencyManagement;