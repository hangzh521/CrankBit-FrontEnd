import { FC } from 'react'
import ListItem from './components/ListItem'
import mockData from './assets/mockData'

const ListView: FC = () => (
  <div className="bg-white rounded-lg shadow-lg">
    <div className="flex gap-9 p-5 mb-5 border-b border-blue-900 border-opacity-20">
      <div className="min-w-[200px]">Form Name</div>
      <div className="min-w-[240px]">Last Updated</div>
      <div className="min-w-[100px]">Tasks</div>
      <div className="min-w-[140px]">Actions</div>
    </div>
    {mockData.map((item) => (
      <ListItem key={item.id} {...item} />
    ))}
  </div>
)
export default ListView
