import { FC, ReactNode } from 'react'
import Icon from './components/Icon/Icon'

interface Props {
  icon: string
  title: string
  children: ReactNode
}
const PlanCard: FC<Props> = ({ icon, title, children }) => (
  <div className="w-90 rounded-xl p-11">
    <Icon icon={icon} />
    <div className="text-left text-xl">{title}</div>
    <div>{children}</div>
  </div>
)
export default PlanCard
