import { FC } from 'react'
import FormBuilder from './FormBuilder/FormBuilder'
import LoginPage from './LoginPage/LoginPage'

const LoginForCompany: FC = () => (
  <div className="flex justify-center p-4">
    <FormBuilder />
    <LoginPage />
  </div>
)

export default LoginForCompany
