import * as React from "react";
import { Outlet, createRootRoute } from "@tanstack/react-router";
import NavBar from "@/pages/NavBar";
import menu from "/assets/shared/icon-hamburger.svg";
import backgroundDesktop from "/assets/home/background-home-desktop.jpg";

export const Route = createRootRoute({
  component: RootComponent,
});

function RootComponent() {
  return (
    <React.Fragment>
      <div
        className="fixed inset-0 bg-cover bg-center -z-10"
        style={{ backgroundImage: `url(${backgroundDesktop})` }}
      ></div>
      <NavBar />
      <img src={menu} alt="" className="absolute top-5 right-5 md:hidden" />
      <Outlet />
    </React.Fragment>
  );
}
