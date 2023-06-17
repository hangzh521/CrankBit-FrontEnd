import { FC, ReactNode } from 'react'
import Header from '@/layouts/Header'
import Footer from '@/layouts/Footer'

interface Props {
  children: ReactNode
}

const Layout: FC<Props> = ({ children }) => (
  <>
    <Header />
    {children}
    <Footer />
  </>
)

export default Layout
