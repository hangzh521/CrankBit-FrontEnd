import { v4 as uuidv4 } from 'uuid'

const navItems = [
  {
    id: uuidv4(),
    href: '/user/my-reports',
    label: 'My Reports',
  },
  {
    id: uuidv4(),
    href: '/user/analytics',
    label: 'Analytics',
  },
  {
    id: uuidv4(),
    href: '/user/knowledge-base',
    label: 'Knowledge Base',
  },
  {
    id: uuidv4(),
    href: '/user/help-support',
    label: 'Help & Support',
  },
]

export default navItems
