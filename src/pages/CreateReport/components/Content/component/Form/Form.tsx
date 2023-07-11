import { FC } from 'react'
import Button from '@/components/Button'
import formFields from './assets/formFieldsData'
import Item from './components/Item'

const Form: FC = () => (
  <div className="bg-white border border-gray px-12 py-10 rounded-2xl shadow">
    {formFields.map(({ title, info }) => (
      <Item key={title} title={title} info={info} />
    ))}
    <div className="text-center mt-10">
      <Button className="w-[200px] bg-primary">Next</Button>
    </div>
  </div>
)

export default Form
