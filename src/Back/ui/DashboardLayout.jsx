import { Outlet } from "react-router-dom";
import Header from "./Header";
import Sidebar from "./Sidebar/Sidebar";

function DashboardLayout() {
  return (
    <div className="h-screen flex bg-white dark:bg-gray-950 text-gray-900 dark:text-gray-100">
      {/* Sidebar stays full height on the left */}
      <aside className="border-r border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 overflow-y-auto">
        <Sidebar />
      </aside>

      {/* Main content area with header inside */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Header spans only the right side */}
        <div className="border-b border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900">
          <Header />
        </div>

        <main className="flex-1 overflow-y-auto bg-gray-50 dark:bg-gray-800 px-4 sm:px-8 md:px-10 py-4 flex flex-col gap-12">
          <Outlet />
        </main>
      </div>
    </div>
  );
}

export default DashboardLayout;
