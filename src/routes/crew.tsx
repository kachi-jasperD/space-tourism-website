import CrewBackground from "@/pages/CrewBackground";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/crew")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div>
      <CrewBackground />
      <p className="text-white">Hi crew Page</p>
    </div>
  );
}
