import { FC } from 'react'
import mockData from './assets/mockData'
import CardItem from './components/CardItem/CardItem'

const CardView: FC = () => (
  <div className="grid grid-cols-3 gap-6">
    {mockData.map((item) => (
      <CardItem key={item.id} {...item} />
    ))}
  </div>
)

export default CardView
