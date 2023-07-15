import { FC } from 'react'
import HomeLayout from '@/layouts/HomeLayout'
import Header from './components/Header'
import TeamIntroduction from './components/TeamIntroduction'
import TeamMembers from './components/TeamMembers'

const AboutUs: FC = () => (
  <HomeLayout>
    <Header />
    <TeamIntroduction />
    <TeamMembers />
  </HomeLayout>
)

export default AboutUs
