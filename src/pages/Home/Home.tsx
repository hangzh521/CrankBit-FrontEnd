import { FC } from 'react'
import HomeLayout from '@/layouts/HomeLayout'
import Hero from './components/Hero'
import Features from './components/Features'
import Pricing from './components/Pricing'
import Contact from './components/Contact'

const Home: FC = () => (
  <HomeLayout>
    <Hero />
    <Features />
    <Pricing />
    <Contact />
  </HomeLayout>
)

export default Home
