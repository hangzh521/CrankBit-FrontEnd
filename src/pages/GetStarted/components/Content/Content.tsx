import { FC } from 'react'
import { Link } from 'react-router-dom'

const Content: FC = () => (
  <div className="flex justify-center items-center bg-white w-[640px] h-[832px]  ">
    <div className="relative text-left w-[280px] h-[270px]">
      <h1 className="text-[#1E1E1E] text-[22px] font-medium">Get Started</h1>

      <button
        type="button"
        className="w-[280px] h-[50px] hover:bg-sky-700 duration-150  text-white bg-hover text-[16px] leading-5 font-bold rounded-[5px] mt-5"
      >
        Continue with Google
      </button>

      <div className="flex justify-between items-center my-[12px]">
        <hr className=" border-secondary w-28" />
        <span className="text-[19px] text-[#03111B]">or</span>
        <hr className=" border-secondary w-28" />
      </div>

      <button
        type="button"
        className="w-[280px] h-[50px] hover:bg-slate-200 duration-150 text-hover bg-white border border-hover text-[18px] leading-5 font-bold rounded-[5px]"
      >
        {/* Link url to be modified once all pages being merged */}
        <Link to="/report-s1">Sign up with email</Link>
      </button>
    </div>
  </div>
)

export default Content
