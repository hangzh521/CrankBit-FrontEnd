import { FC, ReactNode } from 'react'
import Container from '@/layouts/Container'

interface Props {
  children: ReactNode
}

const HomeLayout: FC<Props> = ({ children }) => <Container className="bg-background">{children}</Container>

export default HomeLayout
