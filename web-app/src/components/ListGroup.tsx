import { useState, type MouseEvent } from 'react';

interface Props {
  items: string[];
  heading: string;
  onSelectItem: (item: string) => void;
}

function ListGroup({ items, heading, onSelectItem }: Props) {
  // items = [];

  const [selectedIndex, setSelectedIndex] = useState(-1);

  const message = items.length === 0 && <p>No items found</p>;

  return (
    <>
      <h1 className='text-4xl p-4 font-bold'>{heading}</h1>
      {message}
      <ul role='list'>
        {items.map((item, index) => (
          <li
            key={index}
            className={
              selectedIndex === index
                ? `flex p-4 bg-sky-700 text-white`
                : 'flex p-4 hover:bg-sky-100'
            }
            onClick={() => {
              setSelectedIndex(index);
              onSelectItem(item);
            }}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
