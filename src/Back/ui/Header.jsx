import { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { useLogout } from "./authentication/useLogout";
import { useUser } from "./authentication/useUser";
import { toggleDarkMode } from "../services/darkMode";

import { MdDarkMode, MdOutlineAccountCircle } from "react-icons/md";
import { IoIosArrowDown, IoIosLogOut } from "react-icons/io";
import Modal from "./Board/Modal";
import ConfirmDialog from "./ConfirmDialog";

function Header() {
  const { user } = useUser();
  const navigate = useNavigate();
  const name = user.user_metadata.fullName;
  const email = user.user_metadata.email;

  const { logout, isLoading } = useLogout();
  const [isOpen, setIsOpen] = useState(false); //dropdown
  const [showModal, setShowModal] = useState(false); //modal
  const dropdownRef = useRef(null);
  const toggleRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target) &&
        toggleRef.current &&
        !toggleRef.current.contains(event.target)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  function handleDropdownToggle() {
    setIsOpen(!isOpen);
  }

  return (
    <>
      <header className="bg-white dark:bg-gray-900 px-10 py-[1.2rem] border-b border-gray-200 dark:border-gray-800 flex justify-end items-center">
        <div className="flex items-center space-x-3">
          {/* Dark Mode Toggle */}
          <MdDarkMode
            className="text-2xl px-1 py-0.5 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 cursor-pointer dark:text-gray-100"
            onClick={toggleDarkMode}
          />

          {/* User Dropdown Toggle */}
          <div
            ref={toggleRef}
            onClick={handleDropdownToggle}
            className="relative flex items-center space-x-1 px-1 py-0.5 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 cursor-pointer text-gray-900 dark:text-gray-100"
          >
            <MdOutlineAccountCircle size="20" />
            <p>{name}</p>
            <IoIosArrowDown size="20" />
          </div>

          {/* Dropdown */}
          {isOpen && (
            <div
              ref={dropdownRef}
              className="absolute top-16 z-50 right-10 px-8 space-y-1 py-3 border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 shadow-lg rounded-xl"
            >
              <p className="text-gray-600 dark:text-gray-300">Signed in as</p>
              <p className="font-semibold text-gray-800 dark:text-gray-200">
                {email}
              </p>

              {/* Account Button */}
              <button
                className="flex items-center space-x-2 text-gray-600 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400"
                onClick={() => {
                  navigate("/account");
                  setIsOpen(false);
                }}
                disabled={isLoading}
              >
                <MdOutlineAccountCircle />
                <span>Account</span>
              </button>

              {/* Logout Button */}
              <button
                className="flex items-center space-x-2 text-gray-600 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400"
                onClick={() => {
                  setIsOpen(false);
                  setShowModal(true);
                }}
                disabled={isLoading}
              >
                <IoIosLogOut />
                <span>Logout</span>
              </button>
            </div>
          )}
        </div>
      </header>
      {/* OPEN MODAL FOR LOGOUT PAGE */}
      <Modal open={showModal} onClose={() => setShowModal(false)}>
        <ConfirmDialog
          logout={true}
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

export default Header;
