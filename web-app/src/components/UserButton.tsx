import { type ElementType } from 'react'

interface Props {
    name: string;
    Icon: ElementType;
    // onClick: () => void;
}

function UserButton({ name, Icon}:Props) {
  return (
     <div className="text-center my-4">
        <div className="rounded-full bg-gray-300 shadow-lg w-24 h-24 flex items-center justify-center mx-auto">
            <Icon className="w-10 h-10 text-black" />
        </div>
        <span className="mt-4 block font-semibold capitalize">{name}</span>
    </div>
  )
}

export default UserButton