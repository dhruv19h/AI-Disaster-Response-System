import {
  Bell,
  Search,
  UserCircle,
} from "lucide-react";

function Header() {
  return (
    <header className="fixed left-64 right-0 top-0 z-30 flex h-20 items-center justify-between border-b border-slate-800 bg-slate-950 px-8 text-white">

      {/* Left */}
      <div>
        <h2 className="text-lg font-semibold">
          Disaster Command Center
        </h2>

        <p className="text-xs text-slate-500">
          Real-time emergency monitoring and response
        </p>
      </div>

      {/* Right */}
      <div className="flex items-center gap-5">

        {/* Search */}
        <div className="hidden items-center gap-2 rounded-lg border border-slate-800 bg-slate-900 px-3 py-2 md:flex">

          <Search
            size={17}
            className="text-slate-500"
          />

          <input
            type="text"
            placeholder="Search..."
            className="w-40 bg-transparent text-sm text-white outline-none placeholder:text-slate-600"
          />

        </div>

        {/* Notification */}
        <button className="relative rounded-lg p-2 text-slate-400 hover:bg-slate-800 hover:text-white">

          <Bell size={20} />

          <span className="absolute right-1 top-1 h-2 w-2 rounded-full bg-red-500" />

        </button>

        {/* User */}
        <div className="flex items-center gap-2 border-l border-slate-800 pl-5">

          <UserCircle
            size={32}
            className="text-slate-400"
          />

          <div className="hidden md:block">

            <p className="text-sm font-medium">
              Emergency Admin
            </p>

            <p className="text-xs text-slate-500">
              Administrator
            </p>

          </div>

        </div>

      </div>

    </header>
  );
}

export default Header;