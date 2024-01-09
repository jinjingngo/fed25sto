import { BsPlus, BsFillLightningFill, BsGearFill } from "react-icons/bs";
import { FaFire, FaPoo } from "react-icons/fa";

const SideBar = () => {
  return (
    <div
      className="fixed top-0 left-0 h-screen w-16 m-0
                    flex flex-col
                    bg-gray-100 text-gray-900
                    dark:bg-gray-900 dark:text-white"
    >
      <SideBarIcon icon={<FaFire size="28" />} text="Fire" />
      <SideBarIcon icon={<BsPlus size="32" />} text="Plus" />
      <SideBarIcon
        icon={<BsFillLightningFill size="20" />}
        text="Fill Lightning"
      />
      <SideBarIcon icon={<FaPoo size="20" />} text="Poo" />
      <SideBarIcon icon={<BsGearFill size="20" />} text="Gear" />
    </div>
  );
};

type SideBarIcon = {
  icon: JSX.Element;
  text: string;
};

const SideBarIcon = ({ icon, text = "tooltip" }: SideBarIcon) => {
  return (
    <div className="sidebar-icon group">
      {icon}
      <span className="sidebar-tooltip group-hover:scale-100">{text}</span>
    </div>
  );
};

export default SideBar;
