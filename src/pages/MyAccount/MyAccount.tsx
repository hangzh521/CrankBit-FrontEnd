import { FC } from 'react'
import { Link } from 'react-router-dom'

const MyAccount: FC = () => (
  <>
    <div>
      this is Dashboard and there should have a company section and click here you will be redirected to the company
      report page for now
    </div>
    <Link to="/user/my-reports">
      <div className="text-lime-600"> demo company one </div>
    </Link>
  </>
)

export default MyAccount
