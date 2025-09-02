import {TechnologyMenuItems} from "./";


type TechnologyMenuProps = {
  item: {
    id: string | number;
    title: string;
    info: string;
    landscapeImage: string;
    portraitImage: string;
  };
};

const TechnologyMenu = ({ item }: TechnologyMenuProps) => {
  return (
    <div className="text-white">
      <TechnologyMenuItems key={item.id} {...item} />
    </div>
  );
};
export default TechnologyMenu;

