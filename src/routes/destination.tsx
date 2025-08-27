import SharedBackground from "@/pages/SharedBackground";
import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import data from "../data/data";
import DestinationMenu from "@/pages/destination/DestinationMenu";
import DestinationCategories from "@/pages/destination/DestinationCategories";



export const Route = createFileRoute("/destination")({
  component: Destination,
});

const allCategories = data.map((item) => item.category);

function Destination() {
  const [menuItems, setMenuItems] = useState(data);
  const [categories, setCategories] = useState(allCategories);
  const [activeIndex, setActiveIndex] = useState(0);

  const filterItems = (category: string) => {
    const newItems = data.filter((item) => item.category === category);
    setMenuItems(newItems);
  };

  const handleIsActive = (index: number) => {
    setActiveIndex(index);
  };

  useEffect(() => {
    filterItems(null);
  }, []);

  return (
    <div>
      <SharedBackground />
      <p className="font-barlow-condensed text-white text-center  ">
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
