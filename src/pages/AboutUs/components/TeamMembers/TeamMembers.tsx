import { FC } from 'react'
import DisplayMemberCard from './components/DisplayMemberCard'

const TeamMembers: FC = () => (
  <div className="bg-[#ebf1f6] text-center pt-14">
    <h2 className="text-2xl text-bold ">Our Team Members</h2>
    <DisplayMemberCard />
  </div>
)

export default TeamMembers
