import { FC, ReactNode } from 'react'
import BasicLayout from '@/layouts/BasicLayout'
import Container from '@/layouts/Container'

interface Props {
  children: ReactNode
}

const HomeLayout: FC<Props> = ({ children }) => (
  <Container className="bg-background">
    <BasicLayout>{children}</BasicLayout>
  </Container>
)

export default HomeLayout
