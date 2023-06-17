import { FC, ReactElement, ReactNode } from 'react'
import { Navigate } from 'react-router-dom'
import Login from '@/pages/Login'

interface PrivateRouteProps {
  isLoggedIn: boolean
  children: ReactNode
}

const PrivateRoute: FC<PrivateRouteProps> = ({ isLoggedIn, children }) => {
  const auth = isLoggedIn

  return auth ? (
    (children as ReactElement)
  ) : (
    <>
      <Login />
      <Navigate to="/" />
    </>
  )
}

export default PrivateRoute
