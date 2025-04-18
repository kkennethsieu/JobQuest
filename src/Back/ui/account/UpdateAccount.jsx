import { useForm } from "react-hook-form";
import { useUser } from "../authentication/useUser";
import { useUpdateAccount } from "../authentication/useUpdateAccount";

function UpdateAccount() {
  const { user } = useUser();
  const currentEmail = user.user_metadata.email;
  const currentName = user.user_metadata.fullName;

  const { register, handleSubmit, reset } = useForm({
    defaultValues: {
      fullName: currentName,
      email: currentEmail,
    },
  });

  const { isLoading, updateAccount } = useUpdateAccount();

  function onSubmit(data) {
    updateAccount({ fullName: data.fullName });
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col space-y-8 bg-white dark:bg-gray-800 py-5 px-5 rounded-lg shadow-md"
    >
      <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-100">
        Update your account
      </h3>
      <div className="flex flex-col space-y-8">
        <div className="bg-white dark:bg-gray-700 rounded-lg flex flex-col space-y-3 py-4 px-4 divide-y divide-gray-200 dark:divide-gray-600">
          <label className="flex flex-col md:flex-row md:items-center ,md:space-x-10 px-3 py-3 space-y-2">
            <span className="font-medium w-full text-gray-800 dark:text-gray-100 md:w-[40%]">
              Email Address:
            </span>
            <input
              disabled
              {...register("email")}
              placeholder="default email"
              className="w-full px-3 py-3 border border-gray-200 rounded-lg md:w-[60%] dark:bg-gray-600 dark:text-gray-100 dark:border-gray-500"
            />
          </label>
          <label className="flex flex-col md:flex-row md:items-center ,md:space-x-10 px-3 py-3 space-y-2">
            <span className="font-medium w-full text-gray-800 dark:text-gray-100 md:w-[40%]">
              Full Name:
            </span>
            <input
              required
              {...register("fullName")}
              placeholder="Full Name"
              className="w-full px-3 py-3 border border-gray-200 rounded-lg md:w-[60%] dark:bg-gray-600 dark:text-gray-100 dark:border-gray-500"
              disabled={isLoading}
            />
          </label>
          <div className="flex justify-end space-x-3 py-3">
            <button
              className="py-3 px-3 rounded-lg border border-gray-200 hover:bg-gray-100 dark:border-gray-500 dark:hover:bg-gray-600"
              disabled={isLoading}
              onClick={() => reset()}
            >
              Cancel
            </button>
            <button
              className="py-3 px-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 dark:bg-blue-600 dark:hover:bg-blue-500"
              disabled={isLoading}
            >
              Update Account
            </button>
          </div>
        </div>
      </div>
    </form>
  );
}

export default UpdateAccount;
