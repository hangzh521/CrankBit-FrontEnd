import { FC } from 'react'
import SideNavigationBar from '@/components/SideNavigationBar'
import Container from '@/layouts/Container'
import Content from './components/Content'

const ReportsHistory: FC = () => (
  <Container>
    <div className="flex text-xl min-h-[832px] h-screen">
      <SideNavigationBar />
      <Content />
    </div>
  </Container>
)

export default ReportsHistory
