import SharedBackground from "@/pages/SharedBackground";
import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import data from "../pages/destination/data/data";
import {
  DestinationCategories,
  DestinationMenu,
} from "@/pages/destination/";

export const Route = createFileRoute("/destination")({
  component: Destination,
});

const allCategories = data.map((item) => item.category);

function Destination() {
  const [menuItems, setMenuItems] = useState(data);
  const [categories] = useState(allCategories);
  const [activeIndex, setActiveIndex] = useState(0);

  const filterItems = (category: string) => {
    const newItems = data.filter((item) => item.category === category);
    if (category === "moon") {
      setMenuItems(newItems);
      return;
    }
    setMenuItems(newItems);
  };

  const handleIsActive = (index: number) => {
    setActiveIndex(index);
  };

  useEffect(() => {
    filterItems("moon");
  }, []);

  return (
    <div>
      <SharedBackground />
      <p className="font-barlow-condensed text-white text-center mt-10 md:text-left md:ml-5 lg:ml-50 lg:text-3xl lg:tracking-widest ">
        <span className="mr-2 text-[#53555f]">01</span> PICK YOUR DESTINATION
      </p>
      <DestinationCategories
        categories={categories}
        filterItems={filterItems}
        handleIsActive={handleIsActive}
        activeIndex={activeIndex}
      />
      <DestinationMenu items={menuItems} />
    </div>
  );
}
