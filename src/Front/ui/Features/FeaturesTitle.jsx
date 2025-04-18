import Button from "../Button";

function FeaturesTitle() {
  return (
    <section className="flex flex-col items-center mt-8 mb-20 px-4 sm:px-8">
      <div className="flex flex-col sm:flex-row gap-12 sm:gap-20 justify-center items-center">
        <div className="w-full sm:w-[55%] flex flex-col justify-between space-y-6">
          <h3 className="text-4xl sm:text-6xl font-semibold text-center sm:text-left text-gray-900 dark:text-stone-100">
            Keep track of your job applications
          </h3>
          <p className="text-lg sm:text-xl text-center sm:text-left text-gray-700 dark:text-gray-100">
            Track and manage all your job applications in one clean, intuitive
            board.
            <br /> Save job details, contacts, documents, and notes, and much
            more for each application.
          </p>
          <div className="flex justify-center sm:justify-start">
            <Button>Sign up - it's free!</Button>
          </div>
        </div>
        <img
          className="w-full sm:w-[25%] rounded-2xl bg-black"
          src="features/spreadsheet.svg"
          alt="Job Application Tracking"
        />
      </div>
    </section>
  );
}

export default FeaturesTitle;
