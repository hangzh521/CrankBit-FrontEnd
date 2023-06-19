import { FC } from 'react'
import CardItem from './components/CardItem'
import mockData from './assets/mockData'

const CardView: FC = () => (
  <div className="grid grid-cols-3 gap-3 gap-y-10">
    {mockData.map((item) => (
      <CardItem key={item.id} {...item} />
    ))}
  </div>
)
export default CardView
