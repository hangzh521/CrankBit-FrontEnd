import { FC, ReactNode } from 'react'

interface Props {
  children: ReactNode
}
const MemberCard: FC<Props> = ({ children }) => (
  <div className="w-52 h-60 bg-white rounded-lg shadow-lg text-center m-8 py-12">{children}</div>
)
export default MemberCard
