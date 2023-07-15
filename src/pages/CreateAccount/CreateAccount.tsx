import { FC, useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { Formik, Form } from 'formik'
import { BsEyeSlashFill, BsEyeFill } from 'react-icons/bs'
import { useAppDispatch, useAppSelector } from '@/app/hooks'
import { registerUser } from '@/features/auth/authSlice'
import SignUpSchema from '@/schema/SignUp'
import AuthLayout from '@/layouts/AuthLayout'
import Button, { Variant, Size } from '@/components/Button'
import FieldSet from './components/FieldSet'
import Modal from './components/Modal'

const CreateAccount: FC = () => {
  const { user, error } = useAppSelector((state) => state.auth)
  const dispatch = useAppDispatch()

  const navigate = useNavigate()

  const [isPasswordVisible, setIsPasswordVisible] = useState<boolean>(false)
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false)

  useEffect(() => {
    if (user) {
      const timer = setTimeout(() => {
        navigate('/account')
      }, 2000)

      return () => clearTimeout(timer)
    }

    return undefined
  }, [user, navigate])

  return (
    <AuthLayout>
      <div className="flex justify-center items-center min-h-screen bg-userContent w-full">
        <Formik
          initialValues={{
            name: '',
            email: '',
            password: '',
          }}
          validationSchema={SignUpSchema}
          onSubmit={async (values) => {
            await dispatch(registerUser(values))
            setIsModalOpen(true)
          }}
        >
          {({ isSubmitting, errors, touched, isValid }) => (
            <Form>
              <div className="text-2xl font-medium mb-5">Create Account</div>

              <div className="mb-4">
                <FieldSet label="Full Name" name="name" type="text" placeholder="John Wick" />
                {errors.name && touched.name && <div className="text-darkGray mt-1">{errors.name}</div>}
              </div>

              <div className="mb-4">
                <FieldSet label="Email Address" type="email" name="email" placeholder="John@email.com" />
                {errors.email && touched.email && <div className="text-darkGray mt-1">{errors.email}</div>}
              </div>

              <div className="mb-8 relative">
                <FieldSet
                  label="Password"
                  type={isPasswordVisible ? 'text' : 'password'}
                  name="password"
                  placeholder="********"
                />
                <span className="absolute -translate-x-10 translate-y-3 cursor-pointer">
                  {isPasswordVisible ? (
                    <BsEyeFill size={20} onClick={() => setIsPasswordVisible(!isPasswordVisible)} />
                  ) : (
                    <BsEyeSlashFill size={20} onClick={() => setIsPasswordVisible(!isPasswordVisible)} />
                  )}
                </span>
                {errors.password && touched.password && <div className="text-darkGray mt-1">{errors.password}</div>}
              </div>

              <Button
                variant={Variant.Primary}
                size={Size.Large}
                className="font-bold"
                block
                type="submit"
                disabled={isSubmitting || !isValid}
              >
                Sign Up
              </Button>

              <div className="flex justify-between items-center my-3">
                <hr className="w-8" />
                Already have an Account?
                <hr className="w-8" />
              </div>

              <Button
                variant={Variant.PrimaryOutline}
                size={Size.Large}
                className="font-bold"
                block
                onClick={() => navigate('/auth/login')}
              >
                Login
              </Button>
            </Form>
          )}
        </Formik>
      </div>

      {isModalOpen && <Modal error={error} onClose={() => setIsModalOpen(false)} />}
    </AuthLayout>
  )
}

export default CreateAccount
