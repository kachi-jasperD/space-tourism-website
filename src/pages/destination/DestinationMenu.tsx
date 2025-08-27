import DestinationMenuItem from "./DestinationMenuItem";

const DestinationMenu = ({ items }) => {
  return (
    <div>
      {items.map((menuItem) => {
        return <DestinationMenuItem key={menuItem.id} {...menuItem} />;
      })}
    </div>
  );
};
export default DestinationMenu;
