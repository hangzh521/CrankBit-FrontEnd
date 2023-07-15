import React, { useState, FC, ChangeEvent, FormEvent } from 'react'
import AuthLayout from '@/layouts/AuthLayout'

interface Props {
  onClose?: () => void
}

const ResetPassword: FC<Props> = () => {
  const [email, setEmail] = useState('')
  const [, setEmailSent] = useState(false)

  const handleEmailChange = (e: ChangeEvent<HTMLInputElement>): void => {
    setEmail(e.target.value)
  }

  const handleSubmit = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault()
    // Perform the password reset request here using the email
    // Show a success message or redirect to another page
    setEmailSent(true)
  }
  // import from modal insted of this
  //
  // if (emailSent) {
  //   return (
  //     <AuthLayout>
  //       <div className="fixed top-0 left-0 bottom-0 right-0 bg-background/40 flex items-center justify-center z-50">
  //         <div className="flex items-center justify-center min-h-screen">
  //           <div className=" text-center rounded-[10px] bg-white w-[490px] h-[400px] ">
  //             <div className="text-end">
  //               <CloseRoundedIcon className="cursor-pointer mt-5 mr-5" onClick={onClose} />
  //             </div>
  //             <div className="text-2xl font-bold mt-5">
  //               Check your email
  //               <div />
  //               <MarkEmailUnreadOutlined className="w-[99px] h-[99px] text-white rounded-full bg-[#6F6F6F] mt-10 " />
  //               <div className="text-center text-xl font-medium p-10">
  //                 An email regarding your password change has been sent to your email address.
  //               </div>
  //             </div>
  //           </div>
  //         </div>
  //       </div>
  //     </AuthLayout>
  //   )
  // }

  return (
    <AuthLayout>
      <div className="bg-userContent flex justify-center items-center w-full h-screen">
        <div className="w-1/2">
          <div className="text-xl font-bold mb-5">Forgot Password?</div>
          <div className="font-bold text-gray mb-10">Please enter your email address to reset your password</div>
          <form onSubmit={handleSubmit}>
            <div className="text-xl">
              <label htmlFor="email" className="block">
                Email:
              </label>
              <input
                type="email"
                id="email"
                className="w-full px-4 py-2 mb-20 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={email}
                onChange={handleEmailChange}
                required
              />
            </div>

            <button
              type="submit"
              className="w-full px-4 py-2 bg-primary text-white text-xl font-bold rounded hover:bg-blue-800"
            >
              Reset
            </button>
          </form>
        </div>
      </div>
    </AuthLayout>
  )
}

export default ResetPassword
