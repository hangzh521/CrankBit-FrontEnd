import { FC } from 'react'
import UserLayout from '@/layouts/CompanyLayout'
import Snapshot from './Components/Snapshot'
// import ReportList from '@/components/ReportList/ReportList'

const Report: FC = () => (
  <UserLayout>
    <Snapshot />
  </UserLayout>
)

export default Report
