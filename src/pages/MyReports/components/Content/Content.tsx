import { FC } from 'react'
import { CiSearch } from 'react-icons/ci'
import { useNavigate } from 'react-router-dom'
import Button from '@/components/Button'
import ReportViewToggle from './components/ReportViewToggle'

const Content: FC = () => {
  const navigate = useNavigate()

  return (
    <div className="bg-userContent pt-14 px-20 min-h-screen ">
      <div className="flex justify-between">
        <div className="font-bold text-2xl">My Reports (12)</div>
        <div className="p-1 flex justify-between items-center border border-black bg-white rounded w-[250px]">
          <input placeholder="Search.." className="focus:outline-none" />
          <CiSearch />
        </div>
      </div>
      <div className="mt-12 flex gap-7">
        <Button
          className="w-[250px] h-[90px] hover:bg-hover"
          onClick={() => navigate('/user/my-reports/create-report')}
        >
          <div className="mr-2">+ New Report</div>
        </Button>
        <Button className="w-[250px] h-[90px] hover:bg-hover">Browse Templates</Button>

        <Button className="w-[250px] h-[90px] hover:bg-hover" onClick={() => navigate('/user/my-reports/history')}>
          Report History
        </Button>
      </div>

      <ReportViewToggle />
    </div>
  )
}

export default Content
