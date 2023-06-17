import { FC, CSSProperties } from 'react'
import Button from '@/components/Button'

const ContactPage: FC = () => {
  const boxSizing: 'border-box' | 'content-box' = 'border-box'
  const containerStyle: CSSProperties = {
    display: 'flex',
    flexDirection: 'row',
    padding: '0 100px',
  }

  const tableStyle: CSSProperties = {
    boxSizing,
    width: '392px',
    height: '300px',
    background: '#FFFFFF',
    border: '1px solid rgba(3, 17, 27, 0.4)',
    borderRadius: '10px',
    padding: '0px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around',
    margin: '0 10px',
  }

  const iconStyle: CSSProperties = {
    textAlign: 'center',
    background: '#03111B',
    margin: '0px 0px 16px 0px',
  }

  const chatIconStyle: CSSProperties = {
    ...iconStyle,
    background: '#000000',
    margin: '0px 0px 50px 0px',
  }

  return (
    <div style={containerStyle}>
      <div style={tableStyle}>
        <div className="text-black font-bold flex ml-4 text-xl mt-5 text-base">Contact</div>
        <div>
          <div style={iconStyle}>📞</div>
          <div className="flex flex-col justify-center items-center text-black text-base">
            <div>+91 9983XX7898</div>
            <div>+91 9983XX7897</div>
          </div>
        </div>
        <div>
          <div style={iconStyle}>✉️</div>
          <div className="flex flex-col text-black text-base">
            <a href="mailto:support@crankbit.com" className="flex justify-center">
              support@crankbit.com
            </a>
            <a href="mailto:help@crankbit.com" className="flex justify-center">
              help@crankbit.com
            </a>
          </div>
        </div>
      </div>
      <div style={tableStyle}>
        <div>
          <div className="text-black font-bold flex ml-4 text-xl mt-5 text-base">Chat with our Experts</div>
        </div>
        <div className="">
          <div style={chatIconStyle}>💬</div>
          <div className="text-black ml-6 mr-4 text-base">
            Chat with one of our experts. They can answer, guide and resolve your issues.
          </div>
          <div className="flex justify-center mt-10">
            <Button className="w-[200px] h-[40px] hover:bg-[#007AD3] text-sm">Start a Chat Now </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ContactPage
