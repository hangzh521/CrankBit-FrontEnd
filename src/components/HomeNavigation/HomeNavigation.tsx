import { FC } from 'react'
import { Link } from 'react-router-dom'
import PrivateRoute from '@/routes/PrivateRoute'
import Button, { Variant } from '@/components/Button'

const isLoggedIn = true

const HomeNavigation: FC = () => (
  <nav>
    <div className="flex justify-between mt-7 mx-[120px] text-white">
      <div className="flex gap-10 items-center">
        <Link to="/" className="flex items-center gap-2">
          <img width={32} src="./logo1_1_noText_big.svg" />
          Report Builder
        </Link>
        <Link to="/products">Products</Link>
        <Link to="/features">Features</Link>
        <Link to="/support">Support</Link>
      </div>

      <div className="flex gap-9">
        <Link to="/buy">
          <Button variant={Variant.Primary}>Buy</Button>
        </Link>
        <PrivateRoute isLoggedIn={isLoggedIn}>
          <Link to="/account">
            <Button variant={Variant.Primary} className="border border-primary">
              My Account
            </Button>
          </Link>
        </PrivateRoute>
      </div>
    </div>
  </nav>
)

export default HomeNavigation
