import { useForm } from "react-hook-form";
import { useLogin } from "./useLogin";

function LoginForm() {
  const { register, handleSubmit, reset } = useForm();
  const { login, isLoading } = useLogin();

  function onSubmit(user) {
    login(
      { email: user.email, password: user.password },
      {
        onSettled: () => {
          reset();
        },
      }
    );
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="grid grid-cols-1 gap-6 w-full"
    >
      <input
        {...register("email")}
        type="email"
        name="email"
        placeholder="Email"
        disabled={isLoading}
        required
        className="px-4 py-3 rounded-lg border-2 border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 placeholder-gray-400 dark:placeholder-gray-500 text-gray-800 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-400"
      />
      <input
        {...register("password")}
        type="password"
        name="password"
        placeholder="Enter your password"
        disabled={isLoading}
        required
        className="px-4 py-3 rounded-lg border-2 border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 placeholder-gray-400 dark:placeholder-gray-500 text-gray-800 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-400"
      />

      <button
        type="submit"
        disabled={isLoading}
        className="bg-blue-600 hover:bg-blue-700 transition-colors text-white font-semibold py-3 rounded-lg disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {isLoading ? "Signing In..." : "Sign In"}
      </button>
    </form>
  );
}

export default LoginForm;
