import { useState } from "react";
import { SlArrowUp, SlArrowDown } from "react-icons/sl";

function PricingFAQItem({ question }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <li className="flex flex-col py-4">
      <div
        className="flex justify-between items-center cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      >
        <p className="text-lg sm:text-xl font-semibold text-gray-800 dark:text-stone-100">
          {question.title}
        </p>
        <p className="text-xl text-gray-600 dark:text-stone-400 transition-transform transform duration-300">
          {isOpen ? <SlArrowUp /> : <SlArrowDown />}
        </p>
      </div>
      {isOpen && (
        <p className="mt-4 text-gray-700 dark:text-stone-100 text-base sm:text-lg">
          {question.description}
        </p>
      )}
    </li>
  );
}

export default PricingFAQItem;
