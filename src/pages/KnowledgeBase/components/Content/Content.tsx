import { FC } from 'react'
import { CiSearch } from 'react-icons/ci'
import List from './components/List'

const Content: FC = () => (
  <div className="bg-userContentBackground min-h-screen">
    <div className="text-2xl font-bold pl-[84px] pt-14 mb-7">Knowledge Base</div>

    <div className="px-[188px]">
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
