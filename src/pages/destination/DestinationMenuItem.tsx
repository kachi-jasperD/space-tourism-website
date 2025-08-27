const DestinationMenuItem = ({ id, title, info, distance, time, image }) => {
  return (
    <div
      className="lg:hidden text-white mt-15 flex flex-col justify-center items-center gap-10"
      key={id}
    >
      {/* <p className="font-barlow-condensed ">
        <span className="mr-2 text-[#53555f]">01</span> PICK YOUR DESTINATION
      </p> */}
      <img
        src={image}
        alt="Image of the Moon"
        className="w-[228.54px] h-[228.54px]"
      />
      <p className="font-bellefair text-7xl md:text-8xl mt-20">{title}</p>
      <p className="font-barlow-regular tracking-wide text-center sm:text-wrap sm:w-[579px] text-[var(--primary-color)] px-4">
        {info}
      </p>
      <div>
        <p>AVG. DISTANCE</p>
        <p>{distance}</p>
      </div>
      <div>
        <p>Est. travel time</p>
        <p>{time}</p>
      </div>
    </div>
  );
};
export default DestinationMenuItem;
