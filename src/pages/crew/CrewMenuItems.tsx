type CrewMenuItemsProps = {
  title: string;
  name: string;
  info: string;
  image: string;
};

const CrewMenuItems = ({ title, name, info, image }: CrewMenuItemsProps) => {
  return (
    <>
      <div className="lg:hidden text-white mt-10 flex flex-col justify-center items-center gap-3">
        <p className="text-[var(--primary-color)] font-bellefair text-xl tracking-widest md:text-lg">
          {title.toUpperCase()}
        </p>
        <p className="font-bellefair text-3xl ">{name.toUpperCase()}</p>
        <p className="font-barlow-regular tracking-wide text-center sm:text-wrap sm:w-[579px] text-[var(--primary-color)] px-4 mt-5">
          {info}
        </p>
        <img
          src={image}
          alt={name}
          className="w-[271px] h-[340px] mt-30 md:w-[447px] md:h-[560px]"
        />
      </div>

      <div className="hidden lg:flex justify-center items-center h-full text-white  gap-10">
        <div className="flex flex-col gap-10 w-[539px] ">
          <p className="text-white/55 font-bellefair tracking-widest text-4xl">
            {title.toUpperCase()}
          </p>
          <p className="font-bellefair text-6xl">{name.toUpperCase()}</p>
          <p className="tracking-wide text-start lg:text-wrap lg:w-[550px] text-[var(--primary-color)] font-barlow-regular">
            {info}
          </p>
        </div>

        <div>
          <img src={image} alt={name} />
        </div>
      </div>
    </>
  );
};
export default CrewMenuItems;
