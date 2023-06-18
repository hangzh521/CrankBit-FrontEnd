import { FC } from 'react'
import Logo from "./logo192.png"


const  Getstarted: FC = () => (
    
    <div className='flex'>
      <div className="w-1/2 bg-background h-screen flex justify-center items-center">     
        <img src={Logo} className='w-32 h-32'/>     
      </div>
      <div className="w-1/2 bg-white h-screen flex justify-center items-center">
        <div className='flex flex-col space-y-4 basis-72'>
          <div className='text-2xl '>Get Started</div> 

          <button type='button' className='border-4 rounded-lg border-blue-400 text-skyblue hover:bg-skyblue hover:text-white
          px-4 py-3 '>
            Continue with Google
          </button>
          <div className="flex items-center">
            <hr className="flex-grow border-t border-secondary"/>
            <span className="px-4 text-black">or</span>
            <hr className="flex-grow border-t border-secondary"/>
          </div>
          <button type='button' className='border-4 rounded-lg border-blue-400 text-skyblue hover:bg-skyblue hover:text-white
          px-4 py-3'>
            Sign up with Email
          </button>
        </div>

      </div>
        
    </div>
  )

export default Getstarted