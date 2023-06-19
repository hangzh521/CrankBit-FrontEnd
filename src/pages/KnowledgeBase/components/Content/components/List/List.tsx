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
        url: '/',
      },
      {
        id: uuidv4(),
        text: 'Steps to edit an existing report',
        url: '/',
      },
      {
        id: uuidv4(),
        text: 'Steps to edit a contact report',
        url: '/',
      },
      {
        id: uuidv4(),
        text: 'Steps to edit a template',
        url: '/',
      },
      {
        id: uuidv4(),
        text: 'Creating a complex report',
        url: '/',
      },
    ],
  },
  {
    title: 'Payments',
    items: [
      {
        id: uuidv4(),
        text: 'Payment shows failed',
        url: '/',
      },
      {
        id: uuidv4(),
        text: 'About refund policy',
        url: '/',
      },
      {
        id: uuidv4(),
        text: 'Privacy of card payments',
        url: '/',
      },
      {
        id: uuidv4(),
        text: 'Upgrading to a premium account',
        url: '/',
      },
    ],
  },
  {
    title: 'Account',
    items: [
      {
        id: uuidv4(),
        text: 'What to do when forgetting password',
        url: '/',
      },
      {
        id: uuidv4(),
        text: 'How to activate dark mode',
        url: '/',
      },
      {
        id: uuidv4(),
        text: 'Enable / Disable 2-step verification',
        url: '/',
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
