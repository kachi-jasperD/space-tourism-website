import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/technology")({
  component: Technology,
});

function Technology() {
  return <div className="text-white">Hello "/technology"!</div>;
}
