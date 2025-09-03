import { Link } from "@tanstack/react-router";
import logo from "/assets/shared/logo.svg";

const NavBar = () => {
  return (
    <div className="relative">
      <div className="p-2 flex justify-between gap-2 mr-20 font-barlow-condensed">
        {/* site Logo */}
        <img
          src={logo}
          alt="Logo"
          className="border border-white rounded-full mt-2 ml-2"
        />
        {/* nav links always on top */}
        <div className="hidden md:block space-x-20  pt-5 text-white place relative top-5 z-10">
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
      {/* background decoration */}
      <div className="flex justify-end items-center absolute top-5 right-0 z-0">
        <div className="lg:w-[560px] border-t border-white/25 relative left-10"></div>
        <div className="lg:w-[736px] h-[96px] bg-white/5"></div>
      </div>
    </div>
  );
};
export default NavBar;
