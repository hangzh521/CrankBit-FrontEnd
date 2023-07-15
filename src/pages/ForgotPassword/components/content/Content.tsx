import { FC } from 'react'
import Button, { Variant } from '@/components/Button'

const Content: FC = () => (
  <div className="w-[280px]">
    <div className="text-2xl">Forgot Password?</div>
    <div className="text-darkGray my-6">Please enter your email address to reset your password</div>
    <div className="text-2xl">Email</div>
    <input type="text" placeholder="example@abc.com.." className="border w-full rounded p-2 mt-1 focus:outline-none" />
    <Button variant={Variant.Primary} className="w-full h-[50px] mt-6">
      Reset
    </Button>
  </div>
)
export default Content
