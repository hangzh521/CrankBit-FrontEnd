import { FC, ReactNode } from 'react'

interface Props {
  children: ReactNode
}
const FeatureCard: FC<Props> = ({ children }) => <div className="w-60 shadow-2xl m-6 rounded-lg p-10 ">{children}</div>
export default FeatureCard
