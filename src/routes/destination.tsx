import SharedBackground from "@/pages/SharedBackground";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/destination")({
  component: Destination,
});

function Destination() {
  return (
    <div>
      <SharedBackground />
      <p className="text-white">Hi destination Page</p>
    </div>
  );
}
