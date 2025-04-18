import { FiPlus } from "react-icons/fi";
import { CiViewColumn } from "react-icons/ci";
import Modal from "../Modal";
import { useState } from "react";
import AddForm from "../AddForm";
import NavIcons from "./NavIcons";
import { useChangeView } from "../../../../context/ChangeViewContext";

function RightNav() {
  const [isOpen, setIsOpen] = useState(false);
  const { setView } = useChangeView();

  return (
    <>
      <div className="flex md:flex-row gap-2">
        <NavIcons
          icon={<CiViewColumn />}
          name="Change View"
          onClick={() => setView()}
        />
        <NavIcons
          icon={<FiPlus />}
          name="Add Job"
          onClick={() => setIsOpen(true)}
        />
      </div>

      <Modal
        open={isOpen}
        onClose={() => setIsOpen(false)}
        className="w-full lg:max-w-4xl md:max-w-2xl max-w-xl"
      >
        <AddForm onClose={() => setIsOpen(false)} />
      </Modal>
    </>
  );
}

export default RightNav;
