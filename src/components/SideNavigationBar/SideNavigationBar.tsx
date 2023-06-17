import { FC } from 'react'
import { BiFile } from 'react-icons/bi'
import { v4 as uuidv4 } from 'uuid'
import { Link } from 'react-router-dom'

const ListItems = [
  {
    id: uuidv4(),
    item: 'My Reports',
    url: '/my-reports',
  },
  {
    id: uuidv4(),
    item: 'Analytics',
    url: '',
  },
  {
    id: uuidv4(),
    item: 'Knowledge Base',
    url: '/knowledge-base',
  },
  {
    id: uuidv4(),
    item: 'Help & Support',
    url: '',
  },
]

const List: FC = () => (
  <ul>
    {ListItems.map(({ id, item, url }) => (
      <li
        className="cursor-pointer pl-[52px] border-l-8 border-background hover:bg-white  hover:bg-opacity-10  hover:border-white"
        key={id}
      >
        <Link to={url}>{item}</Link>
      </li>
    ))}
  </ul>
)

const SideNavigationBar: FC = () => (
  <nav className="bg-background w-[305px] text-white h-100vh">
    <div className="pt-14">
      <div className="cursor-pointer pb-8 text-3xl pl-14">
        <BiFile className="inline-block text-blue-600 mr-2" />
        <span className="text-2xl">Report Builder</span>
      </div>
      <div className="pb-8 leading-10 ">
        <List />
      </div>
      <div className="cursor-pointer leading-9 pl-[60px]">
        <div>My Profile</div>
        <div className="text-sm text-[#7C7C81]">Logout</div>
      </div>
    </div>
  </nav>
)

export default SideNavigationBar
