import TechnologyBackground from "@/pages/TechnologyBackground";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/technology")({
  component: Technology,
});

function Technology() {
  return (
    <div>
      <TechnologyBackground />
      <p className="text-white">Hi technology Page</p>
    </div>
  );
}
