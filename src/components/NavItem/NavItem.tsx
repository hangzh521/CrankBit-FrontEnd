import { FC } from 'react'
import { Link } from 'react-router-dom'
import classNames from 'classnames'

interface Props {
  href: string
  label: string
  active?: boolean
  onMouseEnter: () => void
  onMouseLeave: () => void
}

const NavItem: FC<Props> = ({ href, label, active = false, onMouseEnter, onMouseLeave }) => {
  const classname = classNames(
    'text-lg',
    'pl-14',
    'py-[9px]',
    'mb-[18px]',
    'relative',

    active && [
      'bg-white/10',
      'before:block',
      'before:absolute',
      'before:border-4',
      'before:left-0',
      'before:top-0',
      'before:bottom-0',
    ]
  )

  return (
    <Link to={href} className={classname} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
      {label}
    </Link>
  )
}

export default NavItem
