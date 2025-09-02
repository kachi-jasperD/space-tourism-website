type TechnologyCategoriesProps = {
  items: {
    id: string | number;
    title: string;
    info: string;
    landscapeImage: string;
    portraitImage: string;
  }[];

  filterItems: (id: number) => void;
  handleIsActive: (index: number) => void;
  activeIndex: number;
};

const TechnologyCategories = ({
  items,
  filterItems,
  handleIsActive,
  activeIndex,
}: TechnologyCategoriesProps) => {
  return (
    <div
      className="absolute top-95 left-1/2 transform -translate-x-1/2 flex gap-10 
                md:top-130 lg:top-80 lg:left-70 lg:flex lg:flex-col lg:gap-0"
    >
      {items.map((item, index) => {
        const isActive = index === activeIndex;
        return (
          <button
            key={index}
            className={`w-15 h-15 lg:w-20 lg:h-20 border border-white/25 rounded-full my-5 font-bellefair text-xl lg:text-3xl hover:border-white 
  ${isActive ? "text-[#0B0D17] bg-white" : "text-white"}`}
            onClick={() => {
              filterItems(index);
              handleIsActive(index);
            }}
          >
            {item.id}
          </button>
        );
      })}
    </div>
  );
};
export default TechnologyCategories;
