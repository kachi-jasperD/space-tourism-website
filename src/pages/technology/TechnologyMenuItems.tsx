type TechnologyMenuItemsProps = {
  id: string | number;
  title: string;
  info: string;
  landscapeImage: string;
  portraitImage: string;
};

const TechnologyMenuItems = ({
  id,
  title,
  info,
  landscapeImage,
  portraitImage,
}: TechnologyMenuItemsProps) => {
  return (
    <>
      <div
        className="lg:hidden text-white mt-15 flex flex-col justify-center items-center gap-10"
        key={id}
      >
        <img src={landscapeImage} alt="Image of the Moon" className="w-full" />

        <p className="font-bellefair text-xl md:text-3xl mt-25 text-white/30">
          THE TERMINOLOGY…
        </p>
        <p className="font-bellefair text-3xl md:text-6xl ">{title}</p>
        <p className="font-barlow-regular tracking-wide text-center sm:text-wrap sm:w-[579px] text-[var(--primary-color)] px-4">
          {info}
        </p>
      </div>

      <div
        className="hidden lg:flex justify-end items-end h-full text-white gap-15 mt-[100px]"
        key={id}
      >
        <div>
          <p className="font-bellefair text-4xl mt-5 text-white/30">
            THE TERMINOLOGY…
          </p>
          <p className="font-bellefair text-7xl  mt-5 text-white/90">{title}</p>
          <p className="font-barlow-regular tracking-wide text-left pt-7  pb-9 text-wrap w-[405px] text-[var(--primary-color)]">
            {info}
          </p>
        </div>
        <img
          src={portraitImage}
          alt="Image of the Moon"
          className="w-[450px] h-[450px]"
        />
      </div>
    </>
  );
};
export default TechnologyMenuItems;
