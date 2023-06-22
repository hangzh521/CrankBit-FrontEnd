import { FC } from 'react'
import AuthLayout from '@/layouts/AuthLayout/AuthLayout'
import Form from './Components'

const CreateAccount: FC = () => (
  <div>
    <AuthLayout>
      <Form />
    </AuthLayout>
  </div>
)

export default CreateAccount
