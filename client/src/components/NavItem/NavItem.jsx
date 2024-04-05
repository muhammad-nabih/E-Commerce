import { NavLink } from "react-router-dom";
import { useSidebar } from "../../contexts/sidebarContext/SidebarContext";

const NavItem = ({ to, label, icon }) => {
  const { setIsShowSidebar, isShowSidebar } = useSidebar();
  console.log(isShowSidebar);
  return (
    <li>
      <NavLink
        className={`font-bold mx-4 sm:mx-0 max-sm:py-2 px-4 py-2 flex items-center gap-2 rounded ${
          !isShowSidebar && to === "/sections" ? "bg-blue-800" : ""
        }`}
        to={to}
        onClick={(e) => {
          if (to === "/sections") {
            e.preventDefault();
            setIsShowSidebar((prev) => !prev);
          }
        }}
      >
        {icon}
        {label}
      </NavLink>
    </li>
  );
};
export default NavItem;
