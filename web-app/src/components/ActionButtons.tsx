import ActionButton from './ActionButton'
import { PlusIcon, TrashIcon, CheckIcon, PrinterIcon } from '@heroicons/react/24/outline'

const actions = [
    { icon: PlusIcon, color: 'bg-blue-600', label: 'Add' },
    { icon: CheckIcon, color: 'bg-green-600', label: 'Save' },
    { icon: PrinterIcon, color: 'bg-yellow-500', label: 'Print' },
    { icon: TrashIcon, color: 'bg-red-600', label: 'Delete' },
]

const onAdd = () => {console.log('Created new invoice!');}
const onSave = () => {console.log('Saved invoice!');}
const onPrint = () => {console.log('Priting invoice!');}
const onDelete = () => {console.log('Deleting invoice!');}


const ActionButtons = () => {
  return (
    <ul className="flex flex-col gap-2 items-center z-50 fixed bottom-20 right-6">
      {actions.map((action, index) => (
        <li key={index}>
          <ActionButton Icon={action.icon} color={action.color} label={action.label}/>
        </li>
      ))}
    </ul>
  )
}

export default ActionButtons
