import { useNavigate } from "react-router-dom";
import SignupForm from "../ui/authentication/SignupForm";
import { useUser } from "../ui/authentication/useUser";
import { useEffect } from "react";

function Signup() {
  const navigate = useNavigate();
  const { isAuthenticated } = useUser();

  useEffect(() => {
    if (isAuthenticated) navigate("/dashboard");
  }, [isAuthenticated, navigate]);

  return (
    <div className="flex flex-col px-6 md:p-6 gap-6 text-gray-800 dark:text-gray-100">
      <h3 className="text-3xl md:text-5xl font-bold">Create an account</h3>
      <p className="text-sm md:text-base">
        Already have an account?{" "}
        <button
          onClick={() => navigate("/login")}
          className="underline text-blue-600 dark:text-blue-400"
        >
          Log in
        </button>
      </p>

      <SignupForm />
    </div>
  );
}

export default Signup;
