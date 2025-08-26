import { Link } from "@tanstack/react-router";
import logo from "/assets/shared/logo.svg";

const NavBar = () => {
  return (
    <>
      <div className="p-2 flex justify-between gap-2 mr-7 font-barlow-condensed">
        <img
          src={logo}
          alt="Logo"
          className="border border-white rounded-full mt-2 ml-2"
        />
        <div className="hidden md:block space-x-10 pt-5 text-white">
          <Link to="/" className="[&.active]:font-bold">
            <span className="mr-2">00</span> Home
          </Link>
          <Link to="/destination" className="[&.active]:font-bold">
            <span className="mr-2">01</span> Destination
          </Link>
          <Link to="/crew" className="[&.active]:font-bold">
            <span className="mr-2">02</span> Crew
          </Link>
          <Link to="/technology" className="[&.active]:font-bold">
            <span className="mr-2">03</span> Technology
          </Link>
        </div>
      </div>
    </>
  );
};
export default NavBar;
