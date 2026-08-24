import type { LucideIcon } from "lucide-react";

interface StatCardProps {
  title: string;
  value: string;
  description: string;
  icon: LucideIcon;
  iconColor: string;
  trend?: string;
}

function StatCard({
  title,
  value,
  description,
  icon: Icon,
  iconColor,
  trend,
}: StatCardProps) {
  return (
    <div className="rounded-xl border border-slate-800 bg-slate-950 p-5 transition hover:border-slate-700">

      <div className="flex items-start justify-between">

        <div>
          <p className="text-sm text-slate-400">
            {title}
          </p>

          <h3 className="mt-2 text-3xl font-bold text-white">
            {value}
          </h3>

          <p className="mt-1 text-xs text-slate-500">
            {description}
          </p>
        </div>

        <div className={`rounded-xl p-3 ${iconColor}`}>
          <Icon size={22} />
        </div>

      </div>

      {trend && (
        <div className="mt-4 border-t border-slate-800 pt-3">
          <span className="text-xs text-slate-400">
            {trend}
          </span>
        </div>
      )}

    </div>
  );
}

export default StatCard;