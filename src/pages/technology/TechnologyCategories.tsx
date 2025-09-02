type TechnologyCategoriesProps = {
  items: {
    id: string | number;
    title: string;
    info: string;
    landscapeImage: string;
    portraitImage: string;
  }[];

  filterItems: (id: number) => void;
};

const TechnologyCategories = ({
  items,
  filterItems,
}: TechnologyCategoriesProps) => {
  return (
    <div
      className="absolute top-90 left-1/2 transform -translate-x-1/2 flex gap-10 
                md:top-130 lg:top-80 lg:left-70 lg:flex lg:flex-col lg:gap-0"
    >
      {items.map((item, index) => {
        return (
          <button
            key={index}
            className=" text-white w-20 h-20 border border-white/25 rounded-full my-5 hover:bg-white hover:text-[#0B0D17]"
            onClick={() => {
              filterItems(index);
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
