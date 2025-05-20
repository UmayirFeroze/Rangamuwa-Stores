import { Button, Label } from '@headlessui/react'
import type { ElementType } from 'react'

interface ActionButtonProps {
  Icon: ElementType;
  color: string;
  label: string;
}

const onClick  = (name: string) => {
    console.log('Button Clicked: '+ name ); 
}

const ActionButton = ({ Icon, color, label }: ActionButtonProps) => {
  return (
    <Button aria-label={label} className={`shadow-lg rounded-full text-white p-4 hover:opacity-90 transition ${color}`} onClick={()=>onClick(label)}>
      <Icon className="w-6 h-6" />
    </Button>
  )
}

export default ActionButton
