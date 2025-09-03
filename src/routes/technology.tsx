import { useState } from "react";
import TechnologyBackground from "@/pages/TechnologyBackground";
import { createFileRoute } from "@tanstack/react-router";
import technologies from "@/pages/technology/data/data";
import { TechnologyCategories, TechnologyMenu } from "@/pages/technology/";
import Title from "@/pages/Title";

export const Route = createFileRoute("/technology")({
  component: Technology,
});

function Technology() {
  const [spaceShips] = useState(technologies); 
  const [selectedIndex, setSelectedIndex] = useState(0); 
    const [activeIndex, setActiveIndex] = useState(0);

  const filterItems = (id: number) => {
    setSelectedIndex(id);
  };

   const handleIsActive = (index: number) => {
     setActiveIndex(index);
   };
  return (
    <div>
      <TechnologyBackground />
      <Title number="03" title="SPACE LAUNCH 101" />
      <TechnologyCategories
        items={spaceShips}
        filterItems={filterItems}
        handleIsActive={handleIsActive}
        activeIndex={activeIndex}
      />
      <TechnologyMenu item={spaceShips[selectedIndex]} />
    </div>
  );
}
