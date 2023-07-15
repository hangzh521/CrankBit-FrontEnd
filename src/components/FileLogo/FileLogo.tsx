import classNames from 'classnames'
import { FC, ReactNode } from 'react'
import { Link } from 'react-router-dom'

interface Props {
  children?: ReactNode
  className?: string
}

const FileLogo: FC<Props> = ({ children = null, className = undefined }) => (
  <Link to="/">
    <img src="./logo.svg" className={classNames('text-primary', 'mx-auto', 'w-auto', className)} />
    {children}
  </Link>
)

export default FileLogo
