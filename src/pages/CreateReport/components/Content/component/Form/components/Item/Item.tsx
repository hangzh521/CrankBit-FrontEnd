import { FC } from 'react'

interface Props {
  title: string
  info: Array<{
    label: string
    type: string
    placeholder: string
  }>
}

const Item: FC<Props> = ({ title, info }) => (
  <>
    <div className="border-b border-gray text-2xl font-bold mb-4">{title}</div>
    <div>
      {info.map(({ label, type, placeholder }) => (
        <div key={label} className="mb-4">
          <div>{label}</div>
          <input
            className="h-10 w-full border border-gray rounded px-4 focus:outline-none"
            type={type}
            placeholder={placeholder}
          />
        </div>
      ))}
    </div>
  </>
)

export default Item
