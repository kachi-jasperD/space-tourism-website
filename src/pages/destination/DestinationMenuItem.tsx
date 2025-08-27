const DestinationMenuItem = ({ id, title, info, distance, time, image }) => {
  return (
    <div
      className="lg:hidden text-white mt-15 flex flex-col justify-center items-center gap-10"
      key={id}
    >
      <img
        src={image}
        alt="Image of the Moon"
        className="w-[228.54px] h-[228.54px]"
      />
      <p className="font-bellefair text-7xl md:text-8xl mt-20">{title}</p>
      <p className="font-barlow-regular tracking-wide text-center sm:text-wrap sm:w-[579px] text-[var(--primary-color)] px-4">
        {info}
      </p>
      <hr className="w-85 border-t-2 border-white/25 md:w-130" />
      <div className="md:flex gap-50">
        <div className="text-center">
          <p className="text-[var(--primary-color)] font-barlow-condensed tracking-widest">
            AVG. DISTANCE
          </p>
          <p className="text-4xl mt-3 font-bellefair">{distance}</p>
        </div>
        <div className="text-center mb-5">
          <p className="text-[var(--primary-color)] font-barlow-condensed tracking-widest">
            EST. TRAVEL TIME
          </p>
          <p className="inline-block text-4xl mt-3 font-bellefair">{time}</p>
        </div>
      </div>
    </div>
  );
};
export default DestinationMenuItem;
