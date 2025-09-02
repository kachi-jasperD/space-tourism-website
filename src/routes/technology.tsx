import { useState } from "react";
import TechnologyBackground from "@/pages/TechnologyBackground";
import { createFileRoute } from "@tanstack/react-router";
import technologies from "@/pages/technology/data/data";
import { TechnologyCategories, TechnologyMenu } from "@/pages/technology/";

export const Route = createFileRoute("/technology")({
  component: Technology,
});

function Technology() {
  const [spaceShips] = useState(technologies); 
  const [selectedIndex, setSelectedIndex] = useState(0); 

  const filterItems = (id: number) => {
    setSelectedIndex(id);
  };

  return (
    <div>
      <TechnologyBackground />
      <p className="font-barlow-condensed text-white text-center mt-10 md:text-left md:ml-5 lg:ml-50 lg:text-3xl lg:tracking-widest ">
        <span className="mr-2 text-[#53555f]">03</span> SPACE LAUNCH 101
      </p>
      <TechnologyCategories items={spaceShips} filterItems={filterItems} />
      <TechnologyMenu item={spaceShips[selectedIndex]} />
    </div>
  );
}
