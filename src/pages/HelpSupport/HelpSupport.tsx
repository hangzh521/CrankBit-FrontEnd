import { FC } from 'react'
import UserLayout from '@/layouts/UserLayout'
import Accordion from './components/Accordion'
import Contact from './components/Contact'

const HelpSupport: FC = () => (
  <UserLayout>
    <div className="pt-[55px] px-20">
      <div className="text-3xl font-bold ml-20">Help & Support</div>
      <Accordion />
      <Contact />
    </div>
  </UserLayout>
)

export default HelpSupport
