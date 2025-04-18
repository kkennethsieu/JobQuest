import { formatDate } from "../../../helper/helper";

function ViewTitle({ jobToView, setCurrentView }) {
  const { company, position, appliedOn, status } = jobToView;

  return (
    <section className="flex justify-between py-5 mr-4 cursor-default dark:text-white">
      <div className="flex space-x-3 items-center">
        <img src="/logo/logo_only.png" className="w-16 h-16" />
        <div className="flex flex-col space-y-2">
          <h3 className="font-semibold text-base md:text-lg lg:text-xl">
            {position}
          </h3>
          <div className="flex space-x-3 items-center">
            <h3 className="text-sm lg:text-base dark:text-gray-300">
              🧳 {company}
            </h3>
            <p className="text-sm lg:text-base dark:text-gray-400">
              🕕 {formatDate(appliedOn)}
            </p>
          </div>
        </div>
      </div>

      <div className="flex items-center">
        <button
          className="px-4 py-2 bg-green-100 text-green-700 rounded-md hover:bg-green-200 transition-colors duration-200 font-semibold text-sm md:text-base dark:bg-green-800 dark:text-green-400 dark:hover:bg-green-700"
          onClick={() => setCurrentView("edit")}
        >
          {status}
        </button>
      </div>
    </section>
  );
}

export default ViewTitle;
