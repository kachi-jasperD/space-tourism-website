// import DestinationMenuItem from "./DestinationMenuItem";

// const DestinationMenu = ({ items }) => {
//   return (
//     <div>
//       {items.map((menuItem) => {
//         return <DestinationMenuItem key={menuItem.id} {...menuItem} />;
//       })}
//     </div>
//   );
// };
// export default DestinationMenu;
import DestinationMenuItem from "./DestinationMenuItem";

type DestinationMenuProps = {
  items: {
    id: string | number;
    title: string;
    info: string;
    distance: string;
    time: string;
    image: string;
  }[];
};

const DestinationMenu = ({ items }: DestinationMenuProps) => {
  return (
    <div>
      {items.map((menuItem) => (
        <DestinationMenuItem key={menuItem.id} {...menuItem} />
      ))}
    </div>
  );
};

export default DestinationMenu;
