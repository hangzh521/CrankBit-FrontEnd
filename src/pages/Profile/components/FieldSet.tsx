import React from 'react'

interface FieldSetProps {
  label: string
  htmlFor: string
  type: string
  id: string
  className: string
  placeholder: string
}
const FieldSet: React.FC<FieldSetProps> = ({ label, htmlFor, type, id, className, placeholder }) => (
  <div className="mb-4">
    <label htmlFor={htmlFor} className="my-1 text-xl font-medium font-inter">
      {label}
    </label>
    <input type={type} id={id} className={className} placeholder={placeholder} />
  </div>
)

export default FieldSet
