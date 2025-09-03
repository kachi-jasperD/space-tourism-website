import DestinationBackground from "@/pages/DestinationBackground";
import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import data from "../pages/destination/data/data";
import { DestinationCategories, DestinationMenu } from "@/pages/destination/";
import Title from "@/pages/Title";

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
      <DestinationBackground />
      <Title number="01" title="PICK YOUR DESTINATION" />
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
