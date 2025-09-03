type CrewMenuProps = {
  members: {
    id: string | number;
    title: string;
    name: string;
    info: string;
    image: string;
  }[];
  currentItem: number;
};

import { CrewMenuItems } from "./";

const CrewMenu = ({ members, currentItem }: CrewMenuProps) => {
  const { id, title, name, info, image } = members[currentItem];

  return (
    <div className="text-white">
      <CrewMenuItems
        id={id}
        title={title}
        name={name}
        info={info}
        image={image}
      />
    </div>
  );
};
export default CrewMenu;
