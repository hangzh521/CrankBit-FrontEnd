import { FC } from 'react'
import HomeLayout from '@/layouts/HomeLayout'
import Hero from './components/Hero'
import Features from './components/Features'
import Pricing from './components/Pricing'
import Contact from './components/Contact'
import HomeNavigation from '@/components/HomeNavigation'
import Footer from './components/Footer/Footer'

const Home: FC = () => (
  <HomeLayout>
    <HomeNavigation />
    <Hero />
    <Features />
    <Pricing />
    <Contact />
    <Footer />
  </HomeLayout>
)

export default Home
