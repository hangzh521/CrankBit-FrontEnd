import { FC } from 'react'
import { useNavigate } from 'react-router-dom'
import AuthLayout from '@/layouts/AuthLayout'
import Button, { Variant, Size } from '@/components/Button'

const SignUp: FC = () => {
  const navigate = useNavigate()

  return (
    <AuthLayout>
      <div className="w-[640px] flex items-center justify-center bg-userContent min-h-screen">
        <div>
          <div className="text-xl font-medium mb-5">Get started</div>

          <Button variant={Variant.Primary} size={Size.Large} className="font-bold" block>
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
            block
            onClick={() => navigate('/auth/signup/create-account')}
          >
            Sign up with email
          </Button>
        </div>
      </div>
    </AuthLayout>
  )
}

export default SignUp
