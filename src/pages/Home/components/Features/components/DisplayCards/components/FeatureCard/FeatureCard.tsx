import { FC, ReactNode } from 'react'

interface Props {
  content: string
  children: ReactNode
}
const FeatureCard: FC<Props> = ({ content, children }) => (
  <div className="w-60 h-40 shadow-2xl m-5 rounded-lg p-10">
    <div>{children}</div>
    <div>{content}</div>
  </div>
)
export default FeatureCard
