import { FC, ReactNode } from 'react'
import FlexLayout, { PageVariant } from '@/layouts/FlexLayout'

interface Props {
  children: ReactNode
}

const UserLayout: FC<Props> = ({ children }) => <FlexLayout variant={PageVariant.UserPage}>{children}</FlexLayout>

export default UserLayout
