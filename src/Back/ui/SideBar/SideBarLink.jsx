import { NavLink } from "react-router-dom";

function SidebarLink({ to, label, icon, collapsed, onClick }) {
  const baseClasses =
    "flex items-center gap-3 px-4 py-2 rounded-lg transition-colors";
  const collapsedLabel = !collapsed && (
    <span className="truncate">{label}</span>
  );

  if (onClick) {
    return (
      <NavLink
        onClick={onClick}
        className={`${baseClasses} text-gray-600 dark:text-gray-300 hover:text-blue-500 hover:bg-gray-100 dark:hover:bg-gray-800`}
      >
        <span>{icon}</span>
        {collapsedLabel}
      </NavLink>
    );
  }

  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        `${baseClasses} ${
          isActive
            ? "bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300 font-semibold"
            : "text-gray-600 dark:text-gray-300 hover:text-blue-500 hover:bg-gray-100 dark:hover:bg-gray-800"
        }`
      }
    >
      <span>{icon}</span>
      {collapsedLabel}
    </NavLink>
  );
}

export default SidebarLink;
