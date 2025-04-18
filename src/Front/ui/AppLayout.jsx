import { Outlet } from "react-router-dom";
import NavBar from "../ui/Navbar";
import Footer from "./Footer";

function AppLayout() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-gray-100 transition-colors duration-300">
      {/* Navbar */}
      <NavBar />

      {/* Main Content */}
      <main className="flex-1 overflow-y-auto mt-5 px-4 sm:px-6 lg:px-10 py-6 w-full max-w-7xl mx-auto">
        <Outlet />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default AppLayout;
