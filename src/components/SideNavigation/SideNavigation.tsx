import { FC, useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { MdLogout } from 'react-icons/md'
import { useAppDispatch } from '@/app/hooks'
import { logout } from '@/features/auth/authSlice'
import navItems from '@/constants/navItems'
import NavItem from '@/components/NavItem'
import FileLogo from '@/components/FileLogo'
import Button, { Variant, Size } from '@/components/Button'

interface Props {
  isCompanySide?: boolean
}

const SideNavigation: FC<Props> = ({ isCompanySide = false }) => {
  const dispatch = useAppDispatch()
  const navigate = useNavigate()
  const location = useLocation()
  const [currentActive, setCurrentActive] = useState<string | null>(location.pathname)

  const handleLogout = (): void => {
    dispatch(logout())
    navigate('/')
  }

  return (
    <div className="w-[305px]">
      {isCompanySide ? (
        <>
          <FileLogo className="my-10 h-8 ml-14" />
          <FileLogo className="my-10 h-[100px] mx-auto" />
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
          <div className="w-52 text-lg font-bold pl-14 mt-32">
            <Button variant={Variant.PrimaryOutline} size={Size.Large} block onClick={handleLogout}>
              <MdLogout className="inline mr-2" size={18} />
              Logout
            </Button>
          </div>
        </>
      ) : (
        <div className="flex justify-center items-center h-screen">
          <FileLogo className="h-[100px]" />
        </div>
      )}
    </div>
  )
}

export default SideNavigation
