import { MdDarkMode } from "react-icons/md";
import { Link } from "react-router-dom";
import { toggleDarkMode } from "../../Back/services/darkMode";

function Footer() {
  return (
    <footer className="mt-20 px-6 py-10 bg-blue-950 text-slate-200">
      {/* Top Section */}
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row flex-wrap justify-between gap-6 border-b border-slate-600 pb-10">
        {/* Logo */}
        <Link to="/" className="flex justify-center lg:justify-start">
          <img
            className="w-48 md:w-72 "
            src="logo/logo_white.png"
            alt="JobQuest Logo"
          />
        </Link>

        {/* Footer Links */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 w-full lg:w-auto">
          <Link to="features" className="hover:text-white transition">
            <p className="text-lg font-semibold">Features</p>
            <p className="text-sm">What are the benefits</p>
          </Link>

          <Link to="pricing" className="hover:text-white transition">
            <p className="text-lg font-semibold">Pricing</p>
            <p className="text-sm">Find the best plan</p>
          </Link>

          <Link to="support" className="hover:text-white transition">
            <p className="text-lg font-semibold">Support</p>
            <p className="text-sm">We’re here to help</p>
          </Link>

          <Link to="about" className="hover:text-white transition">
            <p className="text-lg font-semibold">About Us</p>
            <p className="text-sm">What’s behind the boards</p>
          </Link>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center mt-6 gap-4 text-sm">
        {/* Legal Links */}
        <div className="flex flex-wrap justify-center md:justify-start gap-4 text-slate-400">
          <a href="#" className="hover:text-white transition">
            Your California Privacy Choices
          </a>
          <a href="#" className="hover:text-white transition">
            Privacy Policy
          </a>
          <a href="#" className="hover:text-white transition">
            Terms
          </a>
          <span>© 2025 JobQuest</span>
        </div>

        {/* Social & Dark Mode */}
        <div className="flex items-center gap-3">
          <a href="#">
            <img
              src="icons/small_facebook.png"
              className="w-5"
              alt="Facebook"
            />
          </a>
          <a href="#">
            <img
              src="icons/small_instagram.png"
              className="w-5"
              alt="Instagram"
            />
          </a>
          <a href="#">
            <img
              src="icons/small_pinterest.png"
              className="w-5"
              alt="Pinterest"
            />
          </a>
          <a href="#">
            <img src="icons/small_tiktok.png" className="w-5" alt="TikTok" />
          </a>
          <a href="#">
            <img
              src="icons/small_whatsapp.png"
              className="w-5"
              alt="WhatsApp"
            />
          </a>
          <MdDarkMode
            title="Toggle dark mode"
            className="text-2xl cursor-pointer hover:text-white transition"
            onClick={toggleDarkMode}
          />
        </div>
      </div>
    </footer>
  );
}

export default Footer;
