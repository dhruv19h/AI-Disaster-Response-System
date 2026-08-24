import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import Header from "./Header";

function MainLayout() {
  return (
    <div className="min-h-screen bg-slate-900">

      <Sidebar />

      <Header />

      <main className="ml-64 pt-20">

        <div className="min-h-[calc(100vh-80px)] p-8">

          <Outlet />

        </div>

      </main>

    </div>
  );
}

export default MainLayout;