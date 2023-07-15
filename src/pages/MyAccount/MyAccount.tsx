import { FC } from 'react'
import { Link } from 'react-router-dom'
import CompanyLayout from '@/layouts/UserLayout/UserLayout'

const MyAccount: FC = () => (
  <CompanyLayout>
    <div className="bg-userContent min-h-screen p-10 ">
      <h1 className="mb-4">Hi, Tao</h1>
      <div className="bg-white rounded-lg p-10">
        <div>
          <p className="inline-block">Name:</p>
          <p className="inline-block ml-20">Tao</p>
        </div>
        <div>
          <p className="inline-block">Email:</p>
          <p className="inline-block ml-20">hello@123.com</p>
        </div>
        <div>
          <p className="inline-block">DOB:</p>
          <p className="inline-block ml-20">08/09/1999</p>
        </div>
      </div>
      <div className="mt-10">
        <div className='flex space-around bg-gray p-8'>
          <h2 className="text-bold text-lg">CompanyList</h2>
          <button type='button' className='bg-black w-[200px] h-[30px] text-white text-center ml-[500px] rounded-lg shadow-mb'>Add New Company</button>
        </div>

        <div className="flex gap-10 bg-white shadow-md rounded-lg p-20">
          <Link to="/user/my-reports">
            <img src="./svg/CompanyOne.png" alt="Company Logo" className="h-[100px] rounded-[100px]" />
          </Link>
          <Link to="/user/my-reports">
            <img src="./svg/CompanyOne.png" alt="Company Logo" className="h-[100px] rounded-[100px]" />
          </Link>
          <Link to="/user/my-reports">
            <img src="./svg/CompanyOne.png" alt="Company Logo" className="h-[100px] rounded-[100px]" />
          </Link>
          <Link to="/user/my-reports">
            <img src="./svg/CompanyOne.png" alt="Company Logo" className="h-[100px] rounded-[100px]" />
          </Link>
        </div>
      </div>
    </div>
  </CompanyLayout>
)

export default MyAccount
