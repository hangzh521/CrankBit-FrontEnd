import { FC, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import navItems from '@/constants/navItems'
import NavItem from '@/components/NavItem'
import FileLogo from '@/components/FileLogo'

const SideNavigation: FC = () => {
  const location = useLocation()
  const [currentActive, setCurrentActive] = useState<string | null>(location.pathname)

  return (
    <div className="w-[305px]">
      <div className="text-2xl pl-14 my-12">
        <FileLogo className="mr-4">Report Builder</FileLogo>
      </div>
      <div className="flex flex-col mb-[67px]">
        {navItems.map(({ id, href, label }) => (
          <NavItem
            key={id}
            href={href}
            label={label}
            active={currentActive === href}
            onMouseEnter={() => setCurrentActive(href)}
            onMouseLeave={() => setCurrentActive(null)}
          />
        ))}
      </div>
      <div className="text-lg pl-14 mb-2">
        <Link to="/user/my-profile">My Profile</Link>
      </div>
      <div className="text-sm pl-14 text-[#7C7C81]">
        <Link to="/auth/logout">Logout</Link>
      </div>
    </div>
  )
}

export default SideNavigation
