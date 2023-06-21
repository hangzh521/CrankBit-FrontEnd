import { FC, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { registerUser } from '@/features/auth/authSlice'
import { useAppDispatch, useAppSelector } from '@/app/hooks'
import AuthLayout from '@/layouts/AuthLayout'
import Button, { Variant, Size } from '@/components/Button'

const SignUp: FC = () => {
  const { user } = useAppSelector((state) => state.auth)
  const dispatch = useAppDispatch()

  const navigate = useNavigate()
  const handleSignUpWithEmail = (): void => {
    navigate('/auth/signup/create-account')
  }

  // NOTE: for temporary testing
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
      navigate('/account')
    }
  }, [user, navigate])

  return (
    <AuthLayout>
      <div className="px-44 py-80">
        <div className="text-xl font-medium mb-5">Get started</div>

        <Button variant={Variant.Primary} size={Size.Large} className="font-bold" onClick={handleRegister}>
          Continue with Google
        </Button>

        <div className="flex justify-between items-center my-3">
          <hr className="w-28" />
          or
          <hr className="w-28" />
        </div>

        <Button
          variant={Variant.PrimaryOutline}
          size={Size.Large}
          className="font-bold"
          onClick={handleSignUpWithEmail}
        >
          Sign up with email
        </Button>
      </div>
    </AuthLayout>
  )
}

export default SignUp
