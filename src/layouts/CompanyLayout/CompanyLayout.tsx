import { FC, ReactNode } from 'react'
import FlexLayout, { PageVariant } from '@/layouts/FlexLayout'

interface Props {
  children: ReactNode
}

const CompanyLayout: FC<Props> = ({ children }) => <FlexLayout variant={PageVariant.CompanyPage}>{children}</FlexLayout>

export default CompanyLayout
