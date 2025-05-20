
import MenuItem from './MenuItem'
import { BanknotesIcon, BookOpenIcon, Cog8ToothIcon, CurrencyDollarIcon, DocumentCurrencyDollarIcon, HomeIcon, PresentationChartLineIcon, ShoppingBagIcon, UserMinusIcon, UserPlusIcon } from '@heroicons/react/24/outline';

const MenuItems = () => {
  const items = [
    { name: 'purchase', Icon: HomeIcon, onClick: () => alert('Clicked Purchase') },
    {name: 'sales', Icon: BanknotesIcon, onClick: () => alert('Clicked Sales')},
    {name: 'cash book', Icon: BookOpenIcon, onClick: () => alert('Clicked cash book')},
    {name: 'accounts', Icon: DocumentCurrencyDollarIcon, onClick: () => alert('Clicked accounts')},
    {name: 'buyers', Icon: UserPlusIcon, onClick: () => alert('Clicked buyers')},
    {name: 'sellers', Icon: UserMinusIcon, onClick: () => alert('Clicked sellers')},
    {name: 'items', Icon: ShoppingBagIcon, onClick: () => alert('Clicked items')},
    {name: 'day price', Icon: CurrencyDollarIcon, onClick: () => alert('Clicked day price')},
    {name: 'sales report', Icon: PresentationChartLineIcon, onClick: () => alert('Clicked sales report')},
    {name: 'settings', Icon: Cog8ToothIcon, onClick: () => alert('Clicked settings')},
    {name: 'settings', Icon: Cog8ToothIcon, onClick: () => alert('Clicked settings')},
    {name: 'settings', Icon: Cog8ToothIcon, onClick: () => alert('Clicked settings')},
  ]

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
