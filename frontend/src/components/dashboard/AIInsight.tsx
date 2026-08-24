import {
  BrainCircuit,
  AlertTriangle,
  ArrowRight,
} from "lucide-react";

function AIInsight() {
  return (
    <div className="rounded-xl border border-red-900/50 bg-slate-950 p-6">

      <div className="flex items-center justify-between">

        <div className="flex items-center gap-3">

          <div className="rounded-xl bg-red-500/10 p-3 text-red-400">
            <BrainCircuit size={22} />
          </div>

          <div>
            <h2 className="font-semibold text-white">
              AI Analysis
            </h2>

            <p className="text-xs text-slate-500">
              Real-time intelligence
            </p>
          </div>

        </div>

        <span className="rounded-full bg-red-500/10 px-3 py-1 text-xs font-medium text-red-400">
          CRITICAL
        </span>

      </div>

      <div className="mt-6 rounded-lg border border-red-900/40 bg-red-950/20 p-4">

        <div className="flex gap-3">

          <AlertTriangle
            size={20}
            className="mt-0.5 shrink-0 text-red-400"
          />

          <div>

            <h3 className="text-sm font-semibold text-red-300">
              High Flood Risk Detected
            </h3>

            <p className="mt-2 text-xs leading-5 text-slate-400">
              AI models predict a high probability of flooding
              in low-lying areas based on rainfall, river levels,
              and historical disaster patterns.
            </p>

          </div>

        </div>

      </div>

      <div className="mt-5 space-y-3">

        <div className="flex items-center justify-between">

          <span className="text-sm text-slate-400">
            Flood probability
          </span>

          <span className="font-semibold text-red-400">
            94%
          </span>

        </div>

        <div className="h-2 overflow-hidden rounded-full bg-slate-800">

          <div className="h-full w-[94%] rounded-full bg-red-500" />

        </div>

      </div>

      <button className="mt-6 flex items-center gap-2 text-sm font-medium text-red-400 hover:text-red-300">

        View AI recommendations

        <ArrowRight size={16} />

      </button>

    </div>
  );
}

export default AIInsight;