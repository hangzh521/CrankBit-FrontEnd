import { FC } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Button, { Variant } from '@/components/Button'

const HomeNavigation: FC = () => {
  const navigate = useNavigate()

  return (
    <nav>
      <div className="flex justify-between pt-7 mx-[120px] text-white">
        <Link to="/" className="flex items-center gap-2 ">
          <img width={32} src="./logo.svg" />
          Report Builder
        </Link>
        <div className="flex gap-10 items-center">
          <Link to="/products">Products</Link>
          <Link to="/features">Features</Link>
          <Link to="/support">Support</Link>
        </div>

        <div className="flex gap-9">
          <Button variant={Variant.Primary} onClick={() => navigate('/')}>
            Buy
          </Button>

          <Button variant={Variant.Primary} onClick={() => navigate('/account')}>
            My Account
          </Button>
        </div>
      </div>
    </nav>
  )
}

export default HomeNavigation
