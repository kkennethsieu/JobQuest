import Button from "../Button";

function Title() {
  return (
    <div className="flex items-center px4 py-10 mx-auto justify-center flex-col space-y-7">
      <h1 className="font-extrabold text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-tight sm:leading-[1.4] dark:text-gray-100 text-gray-900 text-center">
        A Smarter Way to Track Your Job <br />
        Progress and Achievements
      </h1>
      <p className="font-medium text-lg sm:text-xl md:text-2xl text-gray-700 dark:text-gray-100">
        Track, grow, succeed with{" "}
        <span className="font-semibold text-blue-600 dark:text-blue-400">
          JobQuest
        </span>
      </p>
      <Button to="/login">Sign up - it's free!</Button>
    </div>
  );
}

export default Title;
