import { FC } from 'react'
import { CiSearch } from 'react-icons/ci'
import List from './components/List'

const Content: FC = () => (
  <div className="bg-[#E9EFF4] w-full max-w-[975px] flex justify-center pt-14">
    <div>
      <div className="text-2xl font-bold mb-7">Knowledge Base</div>
      <div className="w-80 text-center text-xl mx-auto">Explore how our Form Report can work for you</div>
      <div className="border border-black my-8 px-2 bg-white rounded">
        <CiSearch className="inline-block mr-2" />
        <input placeholder="Search.." className="focus:outline-none" />
      </div>
      <List />
    </div>
  </div>
)

export default Content
