import UpdateAccount from "../ui/account/UpdateAccount";
import UpdatePassword from "../ui/account/UpdatePassword";

function Account() {
  return (
    <div className="px-4 sm:px-6 lg:px-10 py-5 space-y-5 bg-gray-50 dark:bg-gray-800">
      <h2 className="text-3xl font-bold text-gray-800 dark:text-gray-100">
        Account Details
      </h2>
      <div className="w-[85%] mx-auto space-y-4">
        <UpdateAccount />
        <UpdatePassword />
      </div>
    </div>
  );
}

export default Account;
