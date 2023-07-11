import { FC, ReactNode } from 'react'
import FlexLayout, { PageVariant } from '@/layouts/FlexLayout'

interface Props {
  children: ReactNode
}

const AuthLayout: FC<Props> = ({ children }) => <FlexLayout variant={PageVariant.AuthPage}>{children}</FlexLayout>

export default AuthLayout
