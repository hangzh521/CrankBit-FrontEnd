import { FC } from 'react'

interface Item {
  id: string | number
  text: string
}

interface ListContentProps {
  title: string
  listItems: Item[]
}

const ListRender: FC<ListContentProps> = ({ title, listItems }) => (
  <div className="w-1/2">
    <div className="text-xl font-bold">{title}</div>
    <ul className="leading-10 my-5">
      {listItems.map(({ id, text }) => (
        <li key={id}>{text}</li>
      ))}
    </ul>
  </div>
)

export default ListRender
