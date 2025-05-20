
import MenuItem from './MenuItem'


interface Item {
  name: string;
  Icon: React.ElementType;
  onClick: () => void;
}

interface Props {
  items: Item[];
}

const MenuItems = ({items}:Props) => {

  return (
    <div className="my-auto grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-4">
      {items.map((item, index) => (
        <MenuItem
          key={index}
          name={item.name}
          Icon={item.Icon}
          onClick={item.onClick}
        />
      ))}
    </div>
  )
}

export default MenuItems
