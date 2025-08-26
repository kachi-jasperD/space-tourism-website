import * as React from "react";
import {
  Outlet,
  createRootRoute,
  useRouterState,
} from "@tanstack/react-router";
import NavBar from "@/pages/NavBar";
import menu from "/assets/shared/icon-hamburger.svg";
import Home from "@/pages/Home";

export const Route = createRootRoute({
  component: RootComponent,
});

function RootComponent() {
  // Access the current location using TanStack Router
  const location = useRouterState({
    select: (state) => state.location,
  });

  return (
    <React.Fragment>
      {/* Only show Home when at "/" */}
      {location.pathname === "/" && <Home />}

      {/* This is the navigation menu links */}
      <NavBar />

      {/* This is the menu icons */}
      <img src={menu} alt="" className="absolute top-5 right-5 md:hidden" />

      <Outlet />
    </React.Fragment>
  );
}
