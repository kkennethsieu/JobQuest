function NavIcons({ icon, name, onClick }) {
  return (
    <button
      onClick={onClick}
      className="flex items-center space-x-2 px-2 py-2 sm:px-3 sm:py-2 rounded-lg font-medium bg-blue-600 text-white hover:bg-blue-700 transition-all duration-200 shadow-sm w-full sm:w-auto"
    >
      <span className="text-white text-base ">{icon}</span>
      <span className="whitespace-nowrap text-xs hidden md:block">{name}</span>
    </button>
  );
}

export default NavIcons;
