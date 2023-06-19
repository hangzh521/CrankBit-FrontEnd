import classNames from 'classnames'
import { FC, ReactNode } from 'react'

export enum Size {
  Default,
}

interface Props {
  children: ReactNode
  className?: string
}

const Container: FC<Props> = ({ children, className = undefined }) => (
  <div className={classNames('min-w-[390px]', 'max-w-container', 'mx-auto', className)}>{children}</div>
)

export default Container
