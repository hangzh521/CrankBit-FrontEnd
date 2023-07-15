import { FC } from 'react'
import { IoMdChatbubbles } from 'react-icons/io'
import { MdLocalPhone } from 'react-icons/md'
import { LuMail } from 'react-icons/lu'
import UserLayout from '@/layouts/CompanyLayout'
import Button, { Variant } from '@/components/Button'

const HelpSupport: FC = () => (
  <UserLayout>
    <div className="bg-userContent min-h-screen flex justify-center items-center">
      <div className="max-h-[720px] w-3/4">
        <div>
          <h1 className="text-3xl font-bold">Help & Support</h1>
          <div className="border border-gray rounded-lg my-4">
            <h2 className="text-2xl p-4 border-b border-gray ">Frequently Asked Questions</h2>
            <p className="p-4 border-b border-gray ">Will you be adding more templates later?</p>
            <p className="p-4 border-b border-gray ">Can I create custom report from scratch?</p>
            <p className="p-4">{`How to remove your "Form created using Forms Ocean" tag?`}</p>
          </div>
        </div>
        <div className="flex justify-evenly">
          <div className="border border-gray w-1/2 mr-4 rounded-lg text-left">
            <h2 className="text-2xl font-bold border-b p-4 border-gray">Get in touch with us</h2>
            <p className="p-8 border-b border-gray">
              <MdLocalPhone className="inline-block mr-4 text-[44px]" />
              +91 888382198
            </p>

            <p className="p-8 border-gray overflow-x-scroll">
              <LuMail className="inline-block mr-4 text-[44px]" />
              support@crankbit.com
            </p>
          </div>

          <div className="border border-gray w-1/2 rounded-lg text-center">
            <h2 className="text-2xl font-bold border-b p-4 border-gray">Chat with our experts</h2>
            <IoMdChatbubbles className="inline-block text-[68px] my-4" />
            <p className="mb-2 px-4">Chat with one of our experts. They can answer, guide, and resolve your issues.</p>
            <Button className="w-2/3 bg-userContent" variant={Variant.PrimaryOutline}>
              Start a Chat Now
            </Button>
          </div>
        </div>
      </div>
    </div>
  </UserLayout>
)

export default HelpSupport
