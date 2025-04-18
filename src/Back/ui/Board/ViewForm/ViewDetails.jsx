import { formatDate, formatNumberWithCommas } from "../../../helper/helper";

function ViewDetails({ jobToView }) {
  const {
    description,
    appliedOn,
    salary,
    type,
    location,
    url,
    employmentType,
  } = jobToView;

  return (
    <div className="w-full flex flex-col lg:flex-row gap-6 px-6 py-4 h-auto lg:h-[65%] rounded-lg bg-white dark:bg-gray-800 dark:text-white">
      {/* Left Section: Job Description */}
      <div className="w-full lg:w-[65%] lg:border-r border-gray-300 dark:border-gray-600 pr-6 mb-6 lg:mb-0">
        <h2 className="font-semibold md:text-lg text-base mb-4 pb-3 border-b border-gray-300 dark:border-gray-600">
          Original Job Description
        </h2>
        <p className="text-sm md:text-base text-gray-700 dark:text-gray-300 break-words">
          {description}
        </p>
      </div>

      {/* Right Section: Job Info */}
      <div className="w-full lg:w-[35%] lg:pl-3">
        <h2 className="font-semibold md:text-lg text-base mb-4 pb-3 border-b border-gray-300 dark:border-gray-600">
          Job Information
        </h2>
        <ul className="space-y-3 text-sm md:text-base text-gray-700 dark:text-gray-300">
          <li className="flex lg:items-center flex-row gap-1">
            <strong className="font-semibold">Applied On: </strong>{" "}
            {formatDate(appliedOn)}
          </li>
          {salary && (
            <li className="flex lg:items-center flex-row gap-1">
              <strong className="font-semibold">Salary: </strong> $
              {formatNumberWithCommas(salary)}
            </li>
          )}
          <li className="flex lg:items-center flex-row gap-1">
            <strong className="font-semibold">Employment Type: </strong>{" "}
            {employmentType}
          </li>
          <li className="flex lg:items-center flex-row gap-1">
            <strong className="font-semibold">Type: </strong> {type}
          </li>
          <li className="flex lg:items-center flex-row gap-1">
            <strong className="font-semibold">Location: </strong> {location}
          </li>
          <li className="flex lg:items-center flex-row gap-1">
            <strong className="font-semibold">Link: </strong>
            <a
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-500 transition-colors"
            >
              {url?.length > 30 ? `${url.slice(8, 30)}...` : url}
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default ViewDetails;
