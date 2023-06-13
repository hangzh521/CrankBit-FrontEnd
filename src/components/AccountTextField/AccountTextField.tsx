// AccountForm.tsx

import { FC } from 'react'

type InputProps = {
  label: string
  htmlFor: string
  type: string
  id: string
  value: string
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  placeholder: string
}

const AccountTextField: FC<InputProps> = ({
  label,
  htmlFor,
  type,
  id,
  value,
  onChange,
  placeholder,
}: InputProps) => (
  <div className="mb-[25px] w-full">
    <label
      htmlFor={htmlFor}
      className="block text-[#1E1E1E] leading-[1.1875rem] font-medium text-base mb-[2px] font-inter"
    >
      {label}
    </label>
    <input
      type={type}
      id={id}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      required
      className="w-full bg-white text-base leading-[1.1875rem] border border-[#03111B] rounded-[5px] px-[15px] py-[10px] placeholder-[#1E1E1E] opacity-40"
    />
  </div>
)

export default AccountTextField