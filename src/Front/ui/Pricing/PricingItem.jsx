import { FaCheck } from "react-icons/fa";

function PricingItem({ plan }) {
  return (
    <div
      className={`relative rounded-xl p-8 shadow-xl overflow-hidden transform transition-all duration-300 ${
        plan.highlight
          ? "bg-blue-600 text-gray-200 md:scale-105 ring-4 ring-blue-400"
          : "bg-white border-2 border-gray-200 dark:border-gray-600 text-gray-900 dark:bg-gray-800 dark:text-gray-200"
      }`}
    >
      {plan.highlight && (
        <span className="absolute top-3 right-3 bg-yellow-400 text-xs font-bold px-3 py-1 rounded-full">
          Most Popular
        </span>
      )}
      <h3 className="text-xl md:text-2xl font-bold">{plan.title}</h3>
      <p className="text-2xl md:text-3xl font-extrabold mt-2">{plan.price}</p>
      <ul
        className={`space-y-4 my-6 md:text-lg text-sm md:text-lg" ${
          plan.highlight ? "text-gray-50" : "text-gray-900 dark:text-gray-100"
        }`}
      >
        {plan.features.map((feature, i) => (
          <li key={i} className="flex items-center gap-3">
            <FaCheck />
            {feature}
          </li>
        ))}
      </ul>
      <button
        className={`w-full py-3 text-base md:text-lg font-semibold rounded-lg transition-all duration-300 ${
          plan.highlight
            ? "bg-white text-blue-600 hover:bg-blue-100"
            : "bg-blue-600 text-white hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-400"
        }`}
      >
        {plan.price === "Free" ? "Get Started" : "Choose Plan"}
      </button>
    </div>
  );
}

export default PricingItem;
