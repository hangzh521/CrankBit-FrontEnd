import { FC } from 'react'
import { BiFile } from 'react-icons/bi'
import { CiSearch } from 'react-icons/ci'
import { Link } from 'react-router-dom'
import Button from '@/components/Button'
import ReportViewToggle from './components/ReportViewToggle'

const Content: FC = () => (
  <div className="overflow-y-scroll bg-white pt-14 px-20">
    <div className="flex justify-between">
      <div className="font-bold">My Reports (12)</div>
      <div className="p-1 flex items-center border border-black bg-white rounded w-[250px]">
        <input placeholder="Search.." className="focus:outline-none" />
        <CiSearch />
      </div>
    </div>
    <div className="mt-12 flex gap-7">
      <Button className="w-[250px] h-[90px] hover:bg-hover">
        <div className="">
          {/* eslint-disable-next-line react/jsx-one-expression-per-line */}
          <BiFile className="text-4xl inline mr-4" />+ New Report
        </div>
      </Button>
      <Button className="w-[250px] h-[90px] hover:bg-hover">Browse Templates</Button>
      <Link to="/my-reports/history">
        <Button className="w-[250px] h-[90px] hover:bg-hover">Report History</Button>
      </Link>
    </div>
    <ReportViewToggle />
  </div>
)

export default Content
