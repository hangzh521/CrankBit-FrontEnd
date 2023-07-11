import { FC } from 'react'
import { Link } from 'react-router-dom'

interface Item {
  id: string | number
  text: string
  url: string
}

interface ListContentProps {
  title: string
  listItems: Item[]
}

const ListRender: FC<ListContentProps> = ({ title, listItems }) => (
  <div className="w-1/2">
    <div className="text-xl font-bold">{title}</div>
    <ul className="leading-10 my-5">
      {listItems.map(({ id, text, url }) => (
        <Link key={id} to={url}>
          <li>{text}</li>
        </Link>
      ))}
    </ul>
  </div>
)

export default ListRender
