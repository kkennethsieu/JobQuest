import Button from "../Button";

function FeaturesRight({ title, subtitle, description, to }) {
  return (
    <section className="px-4 sm:px-8 py-10">
      <div className="flex flex-col-reverse lg:flex-row gap-10 lg:gap-20 items-center max-w-7xl mx-auto">
        {/* Image Section */}
        <div className="lg:w-1/2 w-full">
          <img
            className="rounded-2xl w-full shadow-lg ring-1 ring-stone-200 dark:ring-stone-700"
            src="homepage/feature-kanban.png"
            alt="Feature preview"
          />
        </div>

        {/* Text Section */}
        <div className="lg:w-1/2 w-full space-y-6">
          <p className="uppercase font-semibold text-blue-500 tracking-wide">
            {title}
          </p>
          <h3 className="text-3xl sm:text-4xl font-bold text-stone-900 dark:text-stone-100">
            {subtitle}
          </h3>
          <p className="text-lg text-stone-700 dark:text-stone-300">
            {description}
          </p>
          <div>
            <Button to={to}>Sign up - it's free</Button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FeaturesRight;
