import { useNavigate } from "react-router-dom";
import LoginForm from "../ui/authentication/LoginForm";
import { useUser } from "../ui/authentication/useUser";
import { useEffect } from "react";

function Login() {
  const navigate = useNavigate();
  const { isAuthenticated } = useUser();

  useEffect(() => {
    if (isAuthenticated) navigate("/dashboard");
  }, [isAuthenticated, navigate]);

  return (
    <div className="flex flex-col px-6 md:p-6 gap-6 text-gray-800 dark:text-gray-100">
      <h3 className="text-3xl md:text-5xl font-bold">Welcome back!</h3>
      <p className="text-sm md:text-base">
        Don't have an account?{" "}
        <button
          onClick={() => navigate("/signup")}
          className="underline text-blue-600 dark:text-blue-400"
        >
          Sign up
        </button>
      </p>

      <LoginForm />
    </div>
  );
}

export default Login;
