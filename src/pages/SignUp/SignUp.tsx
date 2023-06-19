import { FC, useEffect } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import { registerUser } from '@/features/auth/authSlice'
import { useAppDispatch, useAppSelector } from '@/app/hooks'

const SignUp: FC = () => {
  const { user } = useAppSelector((state) => state.auth)
  const dispatch = useAppDispatch()
  const navigate = useNavigate()

  // TODO: Use actual form value in the future, this is test only, and please remove in database
  const handleRegister = (): void => {
    const testUser = {
      name: 'John Doe',
      email: 'john@gmail.com',
      password: 'password123',
    }

    dispatch(registerUser(testUser))
  }

  useEffect(() => {
    if (user) {
      setTimeout(() => {
        navigate('/')
      }, 1500)
    }
  }, [user, navigate])

  return (
    <>
      <div>
        <button type="button" onClick={handleRegister} className="text-white">
          Continue woth Google
        </button>
      </div>
      <Link className="text-xl" to="/auth/signup/create-account">
        <div>
          <button type="button" onClick={handleRegister} className="text-white">
            Sign up with email
          </button>
        </div>
      </Link>
    </>
  )
}

export default SignUp
