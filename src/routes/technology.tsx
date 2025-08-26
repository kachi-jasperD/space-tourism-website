import SharedBackground from "@/pages/SharedBackground";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/technology")({
  component: Technology,
});

function Technology() {
  return (
    <div>
      <SharedBackground />
      <p className="text-white">Hi technology Page</p>
    </div>
  );
}
