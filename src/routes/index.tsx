import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <>
      <div className="lg:hidden text-white mt-15 flex flex-col justify-center items-center gap-10">
        <p className="text-[var(--primary-color)] font-barlow-condensed tracking-widest md:text-lg">
          SO, YOU WANT TO TRAVEL TO
        </p>
        <p className="font-bellefair text-7xl md:text-8xl ">SPACE</p>
        <p className="font-barlow-regular tracking-wide text-center sm:text-wrap sm:w-[579px] text-[var(--primary-color)] px-4">
          Let’s face it; if you want to go to space, you might as well genuinely
          go to outer space and not hover kind of on the edge of it. Well sit
          back, and relax because we’ll give you a truly out of this world
          experience!
        </p>
        <div
          className="rounded-full w-80 h-80 flex items-center justify-center
                border border-transparent bg-transparent
                [&:has(.explore:hover)]:bg-white/9 
                [&:has(.explore:hover)]:border-white/1  transition duration-300"
        >
          <p className="explore bg-white border rounded-full w-35 h-35 flex items-center justify-center font-bellefair text-[var(--primary-explore-color)] hover:text-gray-400">
            EXPLORE
          </p>
        </div>
      </div>

      <div className="hidden lg:flex justify-center items-end h-full text-white  mt-[250px] gap-55">
        <div className="flex flex-col gap-10">
          <p className="text-[var(--primary-color)] font-barlow-condensed tracking-widest text-2xl">
            SO, YOU WANT TO TRAVEL TO
          </p>
          <p className="font-bellefair text-9xl">SPACE</p>
          <p className="tracking-wide text-start lg:text-wrap lg:w-[550px] text-[var(--primary-color)] font-barlow-regular">
            Let’s face it; if you want to go to space, you might as well
            genuinely go to outer space and not hover kind of on the edge of it.
            Well sit back, and relax because we’ll give you a truly out of this
            world experience!
          </p>
        </div>

        <div
          className="rounded-full w-100 h-100 flex items-center justify-center
                border border-transparent bg-transparent
                [&:has(.explore:hover)]:bg-white/9 
                [&:has(.explore:hover)]:border-white/1  transition duration-300"
        >
          <p
            className="explore text-xl font-bellefair bg-white text-[var(--primary-explore-color)]
                rounded-full w-50 h-50 flex items-center justify-center hover:text-gray-400"
          >
            EXPLORE
          </p>
        </div>
      </div>
    </>
  );
}
