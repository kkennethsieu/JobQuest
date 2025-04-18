import { useEffect, useState } from "react";
import { useLogout } from "../authentication/useLogout";
import SidebarLink from "./SideBarLink";

import { AiOutlineHome } from "react-icons/ai";
import { FaRegClipboard } from "react-icons/fa";
import { IoStatsChart, IoSettingsOutline } from "react-icons/io5";
import { MdOutlineAccountCircle } from "react-icons/md";
import { LuListCollapse } from "react-icons/lu";
import { IoIosLogOut } from "react-icons/io";
import Modal from "../Board/Modal";
import ConfirmDialog from "../ConfirmDialog";

function Sidebar() {
  const [collapsed, setCollapsed] = useState(false);
  const [showModal, setShowModal] = useState(false); //modal
  const { isLoading, logout } = useLogout();

  // Collapse sidebar on screens < 1024px (lg)
  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 1023px)");

    const handleResize = () => {
      setCollapsed(mediaQuery.matches);
    };

    handleResize(); // run once on mount
    mediaQuery.addEventListener("change", handleResize);

    return () => {
      mediaQuery.removeEventListener("change", handleResize);
    };
  }, []);

  const toggleSidebar = () => setCollapsed((prev) => !prev);

  return (
    <>
      <aside
        className={`relative py-8 row-span-full flex flex-col h-full transition-all duration-300 ${
          collapsed ? "w-20 px-4" : "w-64 px-6"
        }`}
      >
        {/* Collapse Button */}
        <button
          onClick={toggleSidebar}
          className="absolute right-3 top-4 text-gray-600 dark:text-gray-100 hover:bg-gray-100 hover:text-blue-500 px-1 rounded-lg py-1 dark:hover:bg-gray-800"
        >
          <LuListCollapse size="20" />
        </button>

        {/* Logo */}
        <div className="flex justify-center items-center mb-8">
          {!collapsed && (
            <>
              {/* Light Mode Logo */}
              <img
                src="/logo/top_logo.png"
                alt="Logo"
                className="w-32 sm:w-[60%] dark:hidden"
              />
              {/* Dark Mode Logo */}
              <img
                src="/logo/top_logo_dark.png"
                alt="Logo"
                className="w-32 sm:w-[60%] hidden dark:block"
              />
            </>
          )}
        </div>

        {/* Navigation */}
        <nav className="flex flex-col gap-2 text-sm sm:text-base justify-center">
          <SidebarLink
            to="/dashboard"
            label="Home"
            icon={<AiOutlineHome size={22} />}
            collapsed={collapsed}
          />
          <SidebarLink
            to="/board"
            label="Board"
            icon={<FaRegClipboard size={22} />}
            collapsed={collapsed}
          />
          <SidebarLink
            to="/analytics"
            label="Analytics"
            icon={<IoStatsChart size={22} />}
            collapsed={collapsed}
          />
          <SidebarLink
            to="/account"
            label="Account"
            icon={<MdOutlineAccountCircle size={22} />}
            collapsed={collapsed}
          />
          <SidebarLink
            onClick={() => {
              setShowModal(true);
            }}
            disabled={isLoading}
            to="/logout"
            label="Logout"
            icon={<IoIosLogOut size={22} />}
            collapsed={collapsed}
          />
        </nav>
      </aside>
      <Modal open={showModal} onClose={() => setShowModal(false)}>
        <ConfirmDialog
          title="Confirm Logout"
          message="Are you sure you want to log out?"
          onCancel={() => setShowModal(false)}
          onConfirm={() => {
            logout();
            setShowModal(false);
          }}
        />
      </Modal>
    </>
  );
}

export default Sidebar;
