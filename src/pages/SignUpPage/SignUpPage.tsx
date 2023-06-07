import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { registerUser } from '../../features/auth/authSlice'
import { useAppDispatch, useAppSelector } from '../../app/hooks'

const SignUpPage = () => {
  const { user } = useAppSelector((state) => state.auth)
  const dispatch = useAppDispatch()
  const navigate = useNavigate()

  // TODO: Use actual form value in the future, this is test only, and please remove in database
  const handleRegister = () => {
    const user = {
      name: 'John Doe',
      email: 'john@gmail.com',
      password: 'password123',
    }

    dispatch(registerUser(user))
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
      <button onClick={handleRegister}>Register</button>
    </div>
  )
}

export default SignUpPage
