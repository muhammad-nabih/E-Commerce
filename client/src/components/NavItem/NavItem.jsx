import { NavLink } from "react-router-dom";
import { useSidebar } from "../../contexts/sidebarContext/SidebarContext";

const NavItem = ({ to, label }) => {

  const { setIsShowSidebar } = useSidebar();

  return (
    <li>
      <NavLink
        className="font-bold mx-4 sm:mx-0 max-sm:py-2 px-4 py-2 rounded"
        to={to}
        onClick={(e) => {
          if (to === "/sections") {
            e.preventDefault();
            setIsShowSidebar((prev) => !prev);
          }
        }}
      >
        {label}
      </NavLink>
    </li>
  );
};
export default NavItem;
