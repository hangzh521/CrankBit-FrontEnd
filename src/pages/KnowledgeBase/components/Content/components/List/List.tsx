import { FC } from 'react'
import { v4 as uuidv4 } from 'uuid'
import ListRender from './components/ListRender'

const ListCreation = [
  {
    title: 'From Creation',
    items: [
      {
        id: uuidv4(),
        text: 'Steps to create a new report',
      },
      {
        id: uuidv4(),
        text: 'Steps to edit an existing report',
      },
      {
        id: uuidv4(),
        text: 'Steps to edit a contact report',
      },
      {
        id: uuidv4(),
        text: 'Steps to edit a template',
      },
      {
        id: uuidv4(),
        text: 'Creating a complex report',
      },
    ],
  },
  {
    title: 'Payments',
    items: [
      {
        id: uuidv4(),
        text: 'Payment shows failed',
      },
      {
        id: uuidv4(),
        text: 'About refund policy',
      },
      {
        id: uuidv4(),
        text: 'Privacy of card payments',
      },
      {
        id: uuidv4(),
        text: 'Upgrading to a premium account',
      },
    ],
  },
  {
    title: 'Account',
    items: [
      {
        id: uuidv4(),
        text: 'What to do when forgetting password',
      },
      {
        id: uuidv4(),
        text: 'How to activate dark mode',
      },
      {
        id: uuidv4(),
        text: 'Enable / Disable 2-step verification',
      },
    ],
  },
]

const List: FC = () => (
  <div className="flex flex-wrap text-sm">
    {ListCreation.map(({ title, items }) => (
      <ListRender key={title} title={title} listItems={items} />
    ))}
  </div>
)

export default List
