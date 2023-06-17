import { FC, ReactNode } from 'react'

interface Props {
  children: ReactNode
}

const PageContent: FC<Props> = ({ children }) => (
  <div className="w-full flex justify-center pt-[55px] px-[80px]">
    <div>
      <div>{children}</div>
    </div>
  </div>
)

export default PageContent
