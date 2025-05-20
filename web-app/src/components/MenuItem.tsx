import { type ElementType } from 'react';

interface Props {
    name: string;
    Icon: ElementType;
    onClick: () => void;
}

const MenuItem = ({name, Icon, onClick}: Props) => {
  return (
    <button className='border p-4 rounded-md sm:p-5 lg:p-6 flex flex-col items-center transition' onClick={onClick}>
        <Icon className='mx-auto w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 mb-2 text-bold'/>
        <span className='text-sm sm:text-base lg:text-lg font-medium capitalize'>{name}</span>
    </button>
  )
}

export default MenuItem