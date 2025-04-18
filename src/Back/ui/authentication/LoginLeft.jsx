import { Link, useNavigate } from "react-router-dom";

function LoginLeft() {
  const navigate = useNavigate();

  return (
    <div className="xl:w-3/4 w-1/2 hidden md:block relative">
      {/* Background image */}
      <div className="bg-login-image bg-cover bg-center rounded-lg absolute inset-0 z-0"></div>

      {/* Dark overlay */}
      <div className="bg-black bg-opacity-25 rounded-lg absolute inset-0 z-10"></div>

      {/* Text on top of the overlay */}
      <section className="p-10 absolute inset-0 flex justify-between flex-col z-20 text-white">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex space-x-2 items-center">
            <img className="w-40" src="logo/logo_white.png" />
          </Link>
          <button
            onClick={() => navigate("/")}
            className="drop-shadow-md bg-sky-500 py-1 px-3 text-sm rounded-lg"
          >
            Back to website →
          </button>
        </div>
        <p className="text-center lg:text-2xl text-xl font-bold leading-relaxed drop-shadow-lg">
          Success isn't about greatness, <br /> it's about consistency!
        </p>
      </section>
    </div>
  );
}

export default LoginLeft;
