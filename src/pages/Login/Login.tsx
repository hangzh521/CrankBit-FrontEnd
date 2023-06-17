import { FC, useEffect } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import { loginUser } from '@/features/auth/authSlice'
import { useAppDispatch, useAppSelector } from '@/app/hooks'

const Login: FC = () => {
  const { user } = useAppSelector((state) => state.auth)
  const dispatch = useAppDispatch()
  const navigate = useNavigate()

  // TODO: bind form input value later
  const handleLogin = (): void => {
    const testUser = {
      email: 'john@gmail.com',
      password: 'password123',
    }

    dispatch(loginUser(testUser))
  }

  useEffect(() => {
    if (user) {
      setTimeout(() => {
        navigate('/')
      }, 1500)
    }
  }, [user, navigate])

  return (
    <div>
      <Link to="/auth/login">
        <button type="button" onClick={handleLogin} className="text-white">
          Login
        </button>
      </Link>
    </div>
  )
}

export default Login
