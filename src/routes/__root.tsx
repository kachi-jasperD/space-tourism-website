import * as React from "react";
import { useState } from "react";
import {
  Outlet,
  createRootRoute,
  useRouterState,
} from "@tanstack/react-router";
import NavBar from "@/pages/NavBar";
import menu from "/assets/shared/icon-hamburger.svg";
import Home from "@/pages/Home";
import close from "/assets/shared/icon-close.svg";

export const Route = createRootRoute({
  component: RootComponent,
});

function RootComponent() {
  // Access the current location using TanStack Router
  const location = useRouterState({
    select: (state) => state.location,
  });

  const [isOpen, setIsOpen] = useState(false);

  return (
    <React.Fragment>
      {/* Only show Home when at "/" */}
      {location.pathname === "/" && <Home />}

      {/* This is the navigation menu links */}
      <NavBar />

      {/* This is the menu icons */}
      <img
        src={menu}
        alt=""
        className="absolute top-5 right-5 md:hidden"
        onClick={() => setIsOpen(true)}
      />

      {/* Side Menu Drawer */}
      {isOpen && (
        <div className="fixed inset-0 bg-black/60 z-40 md:hidden">
          <div className="absolute top-0 right-0 h-full w-2/3 bg-[#2c2d2f]/5 p-6 flex flex-col text-white backdrop-blur-sm">
            {/* Close button */}
            <button className="self-end mb-10" onClick={() => setIsOpen(false)}>
              <img src={close} alt="Close menu" />
            </button>

            {/* Nav Links */}
            <a href="/" className="mb-6" onClick={() => setIsOpen(false)}>
              <span className="mr-2 font-barlow-condensed-bold">00</span> HOME
            </a>
            <a
              href="/destination"
              className="mb-6"
              onClick={() => setIsOpen(false)}
            >
              <span className="mr-2 font-barlow-condensed-bold">01</span>{" "}
              DESTINATION
            </a>
            <a href="/crew" className="mb-6" onClick={() => setIsOpen(false)}>
              <span className="mr-2 font-barlow-condensed-bold">02</span> CREW
            </a>
            <a
              href="/technology"
              className="mb-6"
              onClick={() => setIsOpen(false)}
            >
              <span className="mr-2 font-barlow-condensed-bold">03</span>{" "}
              TECHNOLOGY
            </a>
          </div>
        </div>
      )}

      <Outlet />
    </React.Fragment>
  );
}
