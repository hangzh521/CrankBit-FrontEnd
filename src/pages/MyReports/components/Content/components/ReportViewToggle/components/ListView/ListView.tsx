import { FC } from 'react'
import ListItem from './components/ListItem'
import mockData from './assets/mockData'

const ListView: FC = () => (
  <>
    {mockData.map((item) => (
      <ListItem key={item.id} {...item} />
    ))}
  </>
)

export default ListView
