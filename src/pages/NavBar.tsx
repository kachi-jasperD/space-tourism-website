import { Link } from "@tanstack/react-router";
import logo from "/assets/shared/logo.svg";

const NavBar = () => {
  return (
    // <div className="relative z-10">
    <div className="p-2 flex justify-between gap-2 mr-7">
      <img src={logo} alt="Logo" className="border border-white rounded-full mt-2" />
      <div className="hidden md:block space-x-10 pt-5 text-white">
        <Link to="/" className="[&.active]:font-bold">
          00 Home
        </Link>
        <Link to="/destination" className="[&.active]:font-bold">
          01 Destination
        </Link>
        <Link to="/crew" className="[&.active]:font-bold">
          02 Crew
        </Link>
        <Link to="/technology" className="[&.active]:font-bold">
          03 Technology
        </Link>
      </div>
    </div>
    //  </div>
  );
};
export default NavBar;
