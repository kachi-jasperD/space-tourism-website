// const DestinationCategories = ({
//   categories,
//   filterItems,
//   handleIsActive,
//   activeIndex,
// }) => {
//   return (
//     <div className="absolute top-120 left-1/2 transform -translate-x-1/2 flex gap-10 text-white lg:top-65 lg:right-89 lg:left-auto lg:translate-x-0">
//       {/* <div className="text-white flex gap-10 absolute top-110 left-10 md:text-center"> */}
//       {categories.map((category, index) => {
//         const isActive = index === activeIndex;

//         return (
//           <button
//             type="button"
//             key={category}
//             onClick={() => {
//               filterItems(category);
//               handleIsActive(index);
//             }}
//             className={`font-barlow-condensed uppercase tracking-widest pb-2 transition-colors duration-300  ${
//               isActive
//                 ? "text-white border-b-2 border-white"
//                 : "text-[var(--primary-color)]  border-b-2 border-transparent hover:border-[var(--primary-color)] hover:text-white"
//             }`}
//           >
//             {category.toUpperCase()}
//           </button>
//         );
//       })}
//     </div>
//   );
// };
// export default DestinationCategories;

type DestinationCategoriesProps = {
  categories: string[];
  filterItems: (category: string) => void;
  handleIsActive: (index: number) => void;
  activeIndex: number;
};

const DestinationCategories = ({
  categories,
  filterItems,
  handleIsActive,
  activeIndex,
}: DestinationCategoriesProps) => {
  return (
    <div className="absolute top-120 left-1/2 transform -translate-x-1/2 flex gap-10 text-white lg:top-65 lg:right-89 lg:left-auto lg:translate-x-0">
      {categories.map((category, index) => {
        const isActive = index === activeIndex;
        return (
          <button
            type="button"
            key={category}
            onClick={() => {
              filterItems(category);
              handleIsActive(index);
            }}
            className={`font-barlow-condensed uppercase tracking-widest pb-2 transition-colors duration-300  ${
              isActive
                ? "text-white border-b-2 border-white"
                : "text-[var(--primary-color)]  border-b-2 border-transparent hover:border-[var(--primary-color)] hover:text-white"
            }`}
          >
            {category.toUpperCase()}
          </button>
        );
      })}
    </div>
  );
};

export default DestinationCategories;
