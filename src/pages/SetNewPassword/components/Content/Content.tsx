import { FC, useState } from 'react'
import Popup, { IconVariant } from '@/components/Popup/Popup'
import PasswordField from './components/PasswordField'

const Content: FC = () => {
  const [passwordReset, setPasswordReset] = useState(false)

  return (
    <div className="flex justify-center items-center bg-white w-[640px] h-[832px]  ">
      <div className="relative text-left w-[280px] h-[270px]">
        <h1 className="text-[#1E1E1E] text-[22px] font-medium mb-[25px]">Set new Password</h1>
        <form
          action=""
          onSubmit={(event) => {
            event.preventDefault()
          }}
        >
          <PasswordField setPasswordReset={setPasswordReset} />
          {passwordReset && (
            <Popup variant={IconVariant.Successful}>
              <h2 className="mt-[40px] font-bold">Your Password Has Been Reset</h2>
            </Popup>
          )}
        </form>
      </div>
    </div>
  )
}

export default Content
