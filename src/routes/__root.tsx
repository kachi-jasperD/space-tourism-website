import * as React from "react";
import { Outlet, createRootRoute } from "@tanstack/react-router";
import NavBar from "@/pages/NavBar";
import menu from "/assets/shared/icon-hamburger.svg";
import backgroundDesktop from "/assets/home/background-home-desktop.jpg";
import backgroundMobile from "/assets/home/background-home-mobile.jpg";
import backgroundTablet from "/assets/home/background-home-tablet.jpg";

export const Route = createRootRoute({
  component: RootComponent,
});

function RootComponent() {
  return (
    <React.Fragment>
      {/* I made the background image fixed to allow text be displayed on it */}

      {/* Mobile background Page */}
      <div
        className="fixed inset-0 bg-cover bg-center -z-10"
        style={{ backgroundImage: `url(${backgroundMobile})` }}
      ></div>

      {/* Tablet background Page */}
      <div
        className="hidden md:block fixed inset-0 bg-cover bg-center -z-10"
        style={{ backgroundImage: `url(${backgroundTablet})` }}
      ></div>

      {/* Desktop background Page */}
      <div
        className="hidden lg:block fixed inset-0 bg-cover bg-center -z-10"
        style={{ backgroundImage: `url(${backgroundDesktop})` }}
      ></div>

      {/* This is the navigation menu links */}
      <NavBar />
      {/* This is the menu icons */}
      <img src={menu} alt="" className="absolute top-5 right-5 md:hidden" />
      <Outlet />
    </React.Fragment>
  );
}
