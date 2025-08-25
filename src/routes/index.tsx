import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <>
      <div className="lg:hidden text-white mt-15 flex flex-col justify-center items-center gap-10">
        <p>SO, YOU WANT TO TRAVEL TO</p>
        <p>SPACE</p>
        <p className="tracking-wide text-center sm:text-wrap sm:w-[579px]">
          Let’s face it; if you want to go to space, you might as well genuinely
          go to outer space and not hover kind of on the edge of it. Well sit
          back, and relax because we’ll give you a truly out of this world
          experience!
        </p>

        <p className="bg-white text-black border rounded-full w-35 h-35 flex items-center justify-center mt-15">
          EXPLORE
        </p>
      </div>

      <div className="hidden lg:flex justify-center items-end h-full text-white gap-50 mt-[300px]">
        <div className="flex flex-col gap-10">
          <p>SO, YOU WANT TO TRAVEL TO</p>
          <p>SPACE</p>
          <p className="tracking-wide text-start lg:text-wrap lg:w-[550px]">
            Let’s face it; if you want to go to space, you might as well
            genuinely go to outer space and not hover kind of on the edge of it.
            Well sit back, and relax because we’ll give you a truly out of this
            world experience!
          </p>
        </div>

        <div>
          <p className="bg-white text-black border rounded-full w-50 h-50 flex items-center justify-center mt-15">
            EXPLORE
          </p>
        </div>
      </div>
    </>
  );
}

// justify-center items-center gap-10
