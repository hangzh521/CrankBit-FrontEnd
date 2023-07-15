import { FC, ReactElement } from 'react'
import { Navigate } from 'react-router-dom'
import { useAppSelector } from '@/app/hooks'

interface Props {
  children: ReactElement
}

const PrivateRoute: FC<Props> = ({ children }) => {
  const { user, isLoading } = useAppSelector((state) => state.auth)

  if (isLoading) {
    return <>Loading...</>
  }

  return user ? children : <Navigate to="/auth/login" />
}

export default PrivateRoute
