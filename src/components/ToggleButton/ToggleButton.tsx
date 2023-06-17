import { FC } from 'react'
import { IconType } from 'react-icons'

interface ToggleButtonProps {
  icon: IconType
  isActive: boolean
  onClick: () => void
}

const ToggleButton: FC<ToggleButtonProps> = ({ icon: Icon, isActive, onClick }) => (
  <button
    type="button"
    className={`cursor-pointer text-3xl mr-2 ${isActive ? 'text-white bg-blue-500 rounded ' : 'bg-gray-300 rounded'}`}
    onClick={onClick}
  >
    <Icon className="rounded-lg p-[2px]" />
  </button>
)

export default ToggleButton
