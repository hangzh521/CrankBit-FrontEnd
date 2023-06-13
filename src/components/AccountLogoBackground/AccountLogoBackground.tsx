// AccountLogoBackground.tsx

import { BiFile } from 'react-icons/bi'

const AccountLogoBackground = (): JSX.Element => (
  <div className="bg-[#03111b] w-full flex items-center justify-center h-screen">
    <div className="flex flex-col items-center">
      <BiFile className="inline-block text-[#007AD3] p-0 w-[4.8125rem] h-[6.1875rem]" />
      <span className="text-[#FFFFFF] text-[1.375rem] font-inter font-normal leading-[1.6875rem]">
        Form Builder
      </span>
    </div>
  </div>
)

export default AccountLogoBackground