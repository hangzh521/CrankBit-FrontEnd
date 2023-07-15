import { FC, HTMLProps } from 'react'

interface Props extends HTMLProps<HTMLInputElement> {
  type?: 'email' | 'password' | undefined
}
const Input: FC<Props> = ({ ...props }) => (
  <input
    className="box-border pl-[3px] w-[280px] h-11 mb-6 border border-background rounded-[5px] placeholder-shown:border-gray-500"
    {...props}
  />
)
export default Input
