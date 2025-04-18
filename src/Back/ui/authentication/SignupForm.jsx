import { useForm } from "react-hook-form";
import { useSignup } from "./useSignup";

function SignupForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    getValues,
  } = useForm();

  const { isLoading, signup } = useSignup();

  function onSubmit({ fullName, email, password }) {
    signup(
      { fullName, email, password },
      {
        onSettled: () => reset(),
      }
    );
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col space-y-4 w-full"
    >
      {/* Full Name */}
      <label className="flex flex-col text-sm">
        <input
          {...register("fullName", { required: "This field is required" })}
          className="px-4 py-3 rounded-lg border-2 border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 placeholder-gray-400 dark:placeholder-gray-500 text-gray-800 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-400"
          type="text"
          placeholder="Full Name"
          disabled={isLoading}
        />
        {errors?.fullName && (
          <p className="text-red-500 mt-1">{errors?.fullName.message}</p>
        )}
      </label>

      {/* Email */}
      <label className="flex flex-col text-sm">
        <input
          {...register("email", {
            required: "This field is required",
            pattern: {
              value: /\S+@\S+\.\S+/,
              message: "Please provide a valid email address",
            },
          })}
          className="px-4 py-3 rounded-lg border-2 border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 placeholder-gray-400 dark:placeholder-gray-500 text-gray-800 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-400"
          type="email"
          placeholder="Email"
          disabled={isLoading}
        />
        {errors?.email && (
          <p className="text-red-500 mt-1">{errors?.email.message}</p>
        )}
      </label>

      {/* Password */}
      <label className="flex flex-col text-sm">
        <input
          {...register("password", {
            required: "This field is required",
            minLength: {
              value: 8,
              message: "Password needs a minimum of 8 characters",
            },
          })}
          className="px-4 py-3 rounded-lg border-2 border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 placeholder-gray-400 dark:placeholder-gray-500 text-gray-800 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-400"
          type="password"
          placeholder="Enter your password"
          disabled={isLoading}
        />
        {errors?.password && (
          <p className="text-red-500 mt-1">{errors?.password.message}</p>
        )}
      </label>

      {/* Confirm Password */}
      <label className="flex flex-col text-sm">
        <input
          {...register("passwordConfirm", {
            required: "This field is required",
            validate: (value) =>
              getValues().password === value || "Password needs to match",
          })}
          id="passwordConfirm"
          placeholder="Confirm password"
          className="px-4 py-3 rounded-lg border-2 border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 placeholder-gray-400 dark:placeholder-gray-500 text-gray-800 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-400"
          type="password"
          disabled={isLoading}
        />
        {errors?.passwordConfirm && (
          <p className="text-red-500 mt-1">{errors?.passwordConfirm.message}</p>
        )}
      </label>

      {/* Terms */}
      <div className="flex flex-col text-sm">
        <label className="flex items-center space-x-3">
          <input
            {...register("terms", { required: "This field is required" })}
            className="w-5 h-5 text-blue-500 accent-blue-600"
            type="checkbox"
            disabled={isLoading}
          />
          <span className="text-gray-700 dark:text-gray-200">
            I agree to the terms and conditions
          </span>
        </label>
        {errors?.terms && (
          <p className="text-red-500 mt-1">{errors?.terms.message}</p>
        )}
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        disabled={isLoading}
        className="w-full bg-blue-600 hover:bg-blue-700 transition-colors text-white font-semibold py-3 rounded-lg disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {isLoading ? "Creating Account..." : "Create Account"}
      </button>
    </form>
  );
}

export default SignupForm;
