import classNames from 'classnames'
import { FC, ReactNode } from 'react'
import { BiFile } from 'react-icons/bi'

interface Props {
  children: ReactNode
  className?: string
}

const FileLogo: FC<Props> = ({ children, className = undefined }) => (
  <>
    <BiFile className={classNames('text-primary', 'inline-block', className)} />
    {children}
  </>
)

export default FileLogo
