import { useState } from "react";
import CrewBackground from "@/pages/CrewBackground";
import { createFileRoute } from "@tanstack/react-router";
import crewMembers from "@/pages/crew/data/data";
import { CrewCategories, CrewMenu } from "@/pages/crew";
import Title from "@/pages/Title";

export const Route = createFileRoute("/crew")({
  component: Crew,
});

function Crew() {
  const [members] = useState(crewMembers);
  const [currentItem, setCurrentItem] = useState(0);

  return (
    <div>
      <CrewBackground />
      <Title number="02" title="MEET YOUR CREW" />
      <CrewCategories
        members={members}
        currentItem={currentItem}
        setCurrentItem={setCurrentItem}
      />
      <CrewMenu members={members} currentItem={currentItem} />
    </div>
  );
}
