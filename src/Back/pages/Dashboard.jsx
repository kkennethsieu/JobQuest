import AddForm from "../ui/Board/AddForm";
import DashAccordion from "../ui/dashboard/DashAccordion";
import DashGrid from "../ui/dashboard/DashGrid";
import DashTitle from "../ui/dashboard/DashTitle";

function Dashboard() {
  return (
    <div className="px-4 sm:px-6 md:px-10 py-4 mx-auto w-full space-y-8">
      <DashTitle />
      <DashAccordion />
      <DashGrid />
    </div>
  );
}

export default Dashboard;
