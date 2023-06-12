import React from 'react'
import Logo from "./logo192.png"

const Getstarted = () => {
  return (
    <div className='flex'>
      <div className="w-1/2 bg-[#03111B] h-screen flex justify-center items-center">     
        <img src={Logo} className='w-32 h-32'/>     
      </div>
      <div className="w-1/2 bg-white h-screen flex justify-center items-center">
        <div className='flex flex-col space-y-4 basis-72 '>
          <div className='text-2xl '>Get Started</div> 
          
          <button className='border-4 rounded-lg border-blue-400 text-[#007AD3] hover:bg-[#007AD3] hover:text-white
          px-4 py-3 '>
            Continue with Google
          </button>
          <div className="flex items-center">
            <hr className="flex-grow border-t border-gray-300"/>
            <span className="px-4 text-gray-500">or</span>
            <hr className="flex-grow border-t border-gray-300"/>
          </div>
          <button className='border-4 rounded-lg border-blue-400 text-[#007AD3] hover:bg-[#007AD3] hover:text-white
          px-4 py-3'>
            Sign up with Email
          </button>
        </div>

      </div>
        
    </div>
  )
}

export default Getstarted