import FeaturesLeft from "../HomePage/FeaturesLeft";
import FeaturesRight from "../HomePage/FeaturesRight";
import WorkedWith from "../WorkedWith";

function FeaturesList() {
  return (
    <main className="flex flex-col gap-12 px-4 sm:px-8 py-10 bg-gray-50 dark:bg-gray-800">
      <FeaturesRight
        title="Job Status & Feedback Log"
        subtitle="Prioritize applying for jobs rather than organizing the process."
        description="How do you improve if you don’t know where you stand? With the Job
            Status & Feedback Log, you can record detailed feedback from
            interviews, track your application status, and document what you’ve
            learned along the way. Whether you’re waiting for an offer or
            refining your approach, having this log will help you focus on areas
            that need improvement and celebrate your successes."
        to="/login"
      />
      <FeaturesLeft
        title="Job Application Tracker"
        subtitle="Prioritize applying for jobs rather than organizing the process."
        description="Are you losing track of where you've applied and when? The Job
            Application Tracker keeps all your applications organized in one
            place. From job titles and companies to application deadlines and
            statuses, you’ll always know what’s next in your job hunt. Stay on
            top of your progress, avoid missed opportunities, and ensure timely
            follow-ups with ease"
        to="/login"
      />
      <FeaturesRight
        title="Job Status & Feedback Log"
        subtitle="Prioritize applying for jobs rather than organizing the process."
        description="How do you improve if you don’t know where you stand? With the Job
            Status & Feedback Log, you can record detailed feedback from
            interviews, track your application status, and document what you’ve
            learned along the way. Whether you’re waiting for an offer or
            refining your approach, having this log will help you focus on areas
            that need improvement and celebrate your successes."
        to="/login"
      />

      <WorkedWith />
    </main>
  );
}

export default FeaturesList;
