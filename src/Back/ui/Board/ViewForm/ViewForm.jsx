import ViewNav from "./ViewNav";
import Tags from "./Tags/Tags";
import ViewTitle from "./ViewTitle";
import { useEffect, useState } from "react";

function ViewForm({ jobToView, onClose }) {
  const [currentView, setCurrentView] = useState("details");

  useEffect(() => {
    const handleEscapeKey = (event) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    window.addEventListener("keydown", handleEscapeKey);

    return () => {
      window.removeEventListener("keydown", handleEscapeKey);
    };
  }, [onClose]);

  return (
    <div className="px-3 h-[788px] ">
      <ViewTitle
        jobToView={jobToView}
        currentView={currentView}
        setCurrentView={setCurrentView}
      />
      <Tags jobToView={jobToView} />
      <ViewNav
        jobToView={jobToView}
        currentView={currentView}
        setCurrentView={setCurrentView}
      />
    </div>
  );
}

export default ViewForm;
