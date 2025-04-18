import { useForm } from "react-hook-form";
import { useSendMessage } from "./useSendMessage";

function SupportForm() {
  const { register, handleSubmit, reset } = useForm();

  const { isLoading, sendMessage } = useSendMessage();

  function onSubmit(data) {
    sendMessage(data);
    reset();
  }

  return (
    <div className="flex items-center flex-col space-y-6">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="grid grid-cols-1 sm:grid-cols-2 gap-5 w-full sm:w-[80%]"
      >
        <div className="flex flex-col space-y-3">
          <label className="text-lg text-gray-900 dark:text-gray-100">
            First Name
          </label>
          <input
            {...register("firstName")}
            className="px-3 py-3 placeholder-gray-300 border-2 border-gray-200 dark:border-gray-600 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 dark:bg-gray-800 dark:text-gray-200 dark:placeholder-gray-400 dark:ring-indigo-300"
            placeholder="John"
            type="text"
            required
          />
        </div>

        <div className="flex flex-col space-y-3">
          <label className="text-lg text-gray-900 dark:text-gray-100">
            Last Name
          </label>
          <input
            {...register("lastName")}
            className="px-3 py-3 placeholder-gray-300 border-2 border-gray-200 dark:border-gray-600 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 dark:bg-gray-800 dark:text-gray-200 dark:placeholder-gray-400 dark:ring-indigo-300"
            placeholder="Doe"
            type="text"
            required
          />
        </div>

        <div className="flex flex-col space-y-3">
          <label className="text-lg text-gray-900 dark:text-gray-100">
            Email Address
          </label>
          <input
            {...register("email")}
            className="px-3 py-3 placeholder-gray-300 border-2 border-gray-200 dark:border-gray-600 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 dark:bg-gray-800 dark:text-gray-200 dark:placeholder-gray-400 dark:ring-indigo-300"
            placeholder="you@company.com"
            type="email"
            required
          />
        </div>

        <div className="flex flex-col space-y-3">
          <label className="text-lg text-gray-900 dark:text-gray-100">
            Phone Number
          </label>
          <input
            {...register("phone")}
            className="px-3 py-3 placeholder-gray-300 border-2 border-gray-200 dark:border-gray-600 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 dark:bg-gray-800 dark:text-gray-200 dark:placeholder-gray-400 dark:ring-indigo-300"
            placeholder="+1(555) 1234 - 567"
            type="tel"
            required
          />
        </div>

        <div className="flex flex-col space-y-3 col-span-2">
          <label className="text-lg text-gray-900 dark:text-gray-100">
            Your Message
          </label>
          <textarea
            {...register("message")}
            className="h-48 w-full px-3 py-3 placeholder-gray-300 border-2 border-gray-200 dark:border-gray-600 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 dark:bg-gray-800 dark:text-gray-200 dark:placeholder-gray-400 dark:ring-indigo-300"
            placeholder="Your Message"
            required
          />
        </div>

        <button className="text-base sm:text-lg bg-blue-500 hover:bg-blue-600 text-white font-medium py-3 px-6 rounded-lg transition duration-200 shadow-md col-span-2 w-full">
          {isLoading ? "Sending..." : "Send Message"}
        </button>
      </form>
    </div>
  );
}

export default SupportForm;
