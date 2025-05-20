import { type ElementType } from 'react';

interface Props {
    name: string;
    Icon: ElementType;
    onClick: () => void;
}

const MenuItem = ({name, Icon, onClick}: Props) => {
  return (
    <button className='border p-4 rounded-md sm:p-5 lg:p-6 flex flex-col items-center shadow-md hover:shadow-lg transition-shadow' onClick={onClick}>
        <Icon className='mx-auto w-20 h-20 sm:w-10 sm:h-10 lg:w-20 lg:h-20 mb-2 text-bold'/>
        <span className='text-sm sm:text-base lg:text-lg font-medium capitalize'>{name}</span>
    </button>
  )
}

export default MenuItem