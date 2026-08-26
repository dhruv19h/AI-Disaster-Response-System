import { useState } from "react";

interface DisasterReport {
  type: string;
  location: string;
  severity: "Critical" | "High" | "Medium";
  affected: number;
  description: string;
}

interface ReportDisasterProps {
  onReport?: (report: DisasterReport) => void;
}

function ReportDisaster({
  onReport,
}: ReportDisasterProps) {
  const [type, setType] = useState("Flood");
  const [location, setLocation] = useState("");
  const [severity, setSeverity] =
    useState<DisasterReport["severity"]>("High");
  const [affected, setAffected] = useState("");
  const [description, setDescription] = useState("");

  function handleSubmit(
    event: React.FormEvent<HTMLFormElement>
  ) {
    event.preventDefault();

    if (!location || !affected) {
      return;
    }

    const report: DisasterReport = {
      type,
      location,
      severity,
      affected: Number(affected),
      description,
    };

    onReport?.(report);

    setLocation("");
    setAffected("");
    setDescription("");
    setSeverity("High");
  }

  return (
    <div className="rounded-xl border border-slate-800 bg-slate-950 p-6">

      <div className="mb-6">
        <h2 className="text-lg font-semibold text-white">
          Report Emergency
        </h2>

        <p className="mt-1 text-sm text-slate-400">
          Submit a new disaster or emergency incident.
        </p>
      </div>

      <form
        onSubmit={handleSubmit}
        className="space-y-5"
      >

        {/* Disaster Type */}

        <div>
          <label className="mb-2 block text-sm font-medium text-slate-300">
            Disaster Type
          </label>

          <select
            value={type}
            onChange={(event) =>
              setType(event.target.value)
            }
            className="w-full rounded-lg border border-slate-700 bg-slate-900 px-4 py-3 text-sm text-white outline-none"
          >
            <option>Flood</option>
            <option>Earthquake</option>
            <option>Fire</option>
            <option>Landslide</option>
            <option>Cyclone</option>
            <option>Building Collapse</option>
            <option>Other</option>
          </select>
        </div>

        {/* Location */}

        <div>
          <label className="mb-2 block text-sm font-medium text-slate-300">
            Location
          </label>

          <input
            type="text"
            value={location}
            onChange={(event) =>
              setLocation(event.target.value)
            }
            placeholder="Enter disaster location"
            className="w-full rounded-lg border border-slate-700 bg-slate-900 px-4 py-3 text-sm text-white outline-none placeholder:text-slate-600"
          />
        </div>

        {/* Severity */}

        <div>
          <label className="mb-2 block text-sm font-medium text-slate-300">
            Severity
          </label>

          <select
            value={severity}
            onChange={(event) =>
              setSeverity(
                event.target
                  .value as DisasterReport["severity"]
              )
            }
            className="w-full rounded-lg border border-slate-700 bg-slate-900 px-4 py-3 text-sm text-white outline-none"
          >
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
        </div>

        {/* People Affected */}

        <div>
          <label className="mb-2 block text-sm font-medium text-slate-300">
            People Affected
          </label>

          <input
            type="number"
            min="0"
            value={affected}
            onChange={(event) =>
              setAffected(event.target.value)
            }
            placeholder="Estimated number of people"
            className="w-full rounded-lg border border-slate-700 bg-slate-900 px-4 py-3 text-sm text-white outline-none placeholder:text-slate-600"
          />
        </div>

        {/* Description */}

        <div>
          <label className="mb-2 block text-sm font-medium text-slate-300">
            Description
          </label>

          <textarea
            value={description}
            onChange={(event) =>
              setDescription(event.target.value)
            }
            placeholder="Describe the emergency situation..."
            rows={4}
            className="w-full resize-none rounded-lg border border-slate-700 bg-slate-900 px-4 py-3 text-sm text-white outline-none placeholder:text-slate-600"
          />
        </div>

        {/* Submit */}

        <button
          type="submit"
          className="w-full rounded-lg bg-red-600 px-4 py-3 text-sm font-semibold text-white transition hover:bg-red-500"
        >
          🚨 Submit Emergency Report
        </button>

      </form>

    </div>
  );
}

export default ReportDisaster;