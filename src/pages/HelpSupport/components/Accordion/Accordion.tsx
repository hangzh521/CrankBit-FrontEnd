import { FC } from 'react'

const Accordion: FC = () => (
  <div className="border-box w-[800px] h-[243px] border border-opacity-40 mx-113 my-50 bg-white text-black flex flex-col justify-between rounded-10">
    <div className="flex justify-between black-border border-b-[1px] border-black text-22 font-bold items-center h-63 px-30">
      <div>Frequently Asked Questions</div>
    </div>
    <div className="flex justify-between black-border border-b-[1px] border-black text-16 items-center h-63 px-30">
      <div>Will you be adding more templates later?</div>
      <button type="button" className="mr-4">
        ▼
      </button>
    </div>
    <div className="flex justify-between black-border border-b-[1px] border-black text-16 items-center h-63 px-30">
      <div>Can I create custom report from scratch?</div>
      <button type="button" className="mr-4">
        ▼
      </button>
    </div>
    <div className="flex justify-between text-16 items-center h-63 px-30">
      <div>How to remove your “Form created using Forms Ocean” tag?</div>
      <button type="button" className="mr-4">
        ▼
      </button>
    </div>
  </div>
)

export default Accordion
