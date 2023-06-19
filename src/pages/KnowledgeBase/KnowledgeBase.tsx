import { FC } from 'react'
import SideNavigationBar from '@/components/SideNavigationBar'
import Content from './components/Content'
import Container from '@/layouts/Container'

const KnowledgeBase: FC = () => (
  <div>
    <Container>
      <div className="flex text-xl min-h-[832px] h-screen">
        <SideNavigationBar />
        <Content />
      </div>
    </Container>
  </div>
)

export default KnowledgeBase
