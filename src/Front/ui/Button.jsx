import { Link } from "react-router-dom";

function Button({ to, children }) {
  return (
    <Link
      className="text-base sm:text-lg bg-blue-500 hover:bg-blue-600 text-white font-medium py-3 px-6 rounded-lg transition duration-200 shadow-md"
      to={to}
    >
      {children}
    </Link>
  );
}

export default Button;
