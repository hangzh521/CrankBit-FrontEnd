import { FC } from 'react'
import { Field } from 'formik'

interface Props {
  label: string
  type: string
  name: string
  placeholder: string
}

const FieldSet: FC<Props> = ({ label, ...props }) => (
  <>
    <label htmlFor={props.name} className="font-medium">
      {label}
    </label>
    <Field className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none" {...props} />
  </>
)

export default FieldSet
