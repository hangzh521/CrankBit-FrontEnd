// AccountButton.tsx

import { FC } from 'react'
import Button from '../Button';

type InputProps = {
  text: string
  backgroundColor: string
  textColor: string
}

const AccountButton: FC<InputProps> = ({ text, backgroundColor: background_color, textColor: text_color }) => (
  <div className="w-full flex items-center justify-center">
    <Button
      className={` bg-[${background_color}] w-full border border-[#007AD3] rounded-[5px] py-[14px] font-bold text-base text-[1.125rem] text-[${text_color}] leadding-[1.375rem]`}
      type="submit"
    >
      {text}
    </Button>
  </div>
)

export default AccountButton