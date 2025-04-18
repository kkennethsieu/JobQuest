import { NavLink } from "react-router-dom";
import { useUser } from "../../Back/ui/authentication/useUser";

function Navbar() {
  const { isAuthenticated } = useUser();

  return (
    <nav className="sticky top-0 z-50 bg-gray-50 dark:bg-gray-800 border border-stone-200 dark:border-gray-800 shadow drop-shadow-lg px-4 py-3 sm:px-6 lg:px-12 flex flex-wrap items-center justify-between rounded-full transition-colors">
      {/* Logo */}
      <NavLink to="/" className="flex items-center space-x-2">
        <img
          className="w-32 sm:w-40 dark:hidden"
          src="logo/logo.png "
          alt="Logo"
        />
        <img
          className="w-32 sm:w-40 hidden dark:block"
          src="logo/logo_white.png"
          alt="Logo"
        />
      </NavLink>

      {/* Navigation Links */}
      <div className="hidden md:flex items-center gap-6 text-gray-900 dark:text-gray-100">
        <NavLink
          className="text-lg hover:text-blue-500 dark:hover:text-blue-400"
          to="/"
        >
          Home
        </NavLink>
        <NavLink
          className="text-lg hover:text-blue-500 dark:hover:text-blue-400"
          to="features"
        >
          Features
        </NavLink>
        <NavLink
          className="text-lg hover:text-blue-500 dark:hover:text-blue-400"
          to="pricing"
        >
          Pricing
        </NavLink>
        <NavLink
          className="text-lg hover:text-blue-500 dark:hover:text-blue-400"
          to="support"
        >
          Support
        </NavLink>
      </div>

      {/* Auth Buttons */}
      <div className="flex items-center space-x-3 mt-3 md:mt-0">
        {isAuthenticated ? (
          <NavLink
            className="text-sm sm:text-base bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-full transition"
            to="dashboard"
          >
            Dashboard →
          </NavLink>
        ) : (
          <>
            <NavLink
              className="text-sm sm:text-base text-blue-500 font-bold hover:underline"
              to="login"
            >
              Login
            </NavLink>
            <NavLink
              className="text-sm sm:text-base bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-full transition"
              to="signup"
            >
              Get Started
            </NavLink>
          </>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
