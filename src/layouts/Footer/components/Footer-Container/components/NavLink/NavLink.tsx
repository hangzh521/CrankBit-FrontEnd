import { FC } from 'react'
import { Link } from 'react-router-dom'

// eslint-disable-next-line
const NavLink: FC<{ LinkName: string; Ref: string; ScrollToTop: any }> = ({
  LinkName,
  Ref,
  ScrollToTop,
}) => (
  <div className="inline-block">
    {' '}
    <Link
      to={Ref}
      className="hover:opacity-50 ease-in-out duration-300"
      onClick={() => ScrollToTop()}
    >
      {LinkName}
    </Link>
  </div>
)

export default NavLink
