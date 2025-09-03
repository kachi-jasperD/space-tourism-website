type CrewCategoriesProps = {
  members: {
    id: string | number;
    title: string;
    name: string;
    info: string;
    image: string;
  }[];
  // currentItem: number;
  setCurrentItem: (id: number) => void;
};

const CrewCategories = ({
  members,
  // currentItem,
  setCurrentItem,
}: CrewCategoriesProps) => {
  return (
    <div className="flex justify-center">
      {members.map((item, index) => (
        <button
          key={item.id}
          onClick={() => setCurrentItem(index)}
          className="h-3 w-3 bg-white rounded-full mx-2 relative top-85 md:top-75 lg:top-152 lg:-left-110 lg:mx-7"
        ></button>
      ))}
    </div>
  );
};
export default CrewCategories;
