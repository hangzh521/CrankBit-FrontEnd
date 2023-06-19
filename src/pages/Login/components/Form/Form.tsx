import { FC } from 'react'

const Form: FC = () => (
  <div className="flex justify-center items-center bg-white w-[640px] h-[832px]  ">
    <div className="relative text-left w-[280px] h-[356px]">
      <h1 className="text-[#1E1E1E] text-4.5 mb-5 font-medium">Welcome back, Alonso</h1>
      <div>
        <div>
          <p className="text-4 leading-5 font-medium not-italic">Work email</p>
          <input
            className="box-border pl-[3px] w-[280px] h-11 mb-6 border border-[#03111B] rounded-[5px]
             placeholder-shown:border-gray-500"
            placeholder="  Alonso@mail.com"
          />
        </div>
        <div>
          <p className="text-4 leading-5 font-medium not-italic">Your site</p>
          <input
            className="box-border pl-[3px] w-[280px] h-11 mb-6 border border-[#03111B] rounded-[5px]
             placeholder-shown:border-gray-500 "
            placeholder="                                             .crankbit.net "
          />
        </div>
        <div>
          <p className="text-4 leading-5 font-normal not-italic text-[#1E1E1E66]">
            By clicking below, you agree to the Crankbit Cloud Terms of Service and Privacy Policy.
          </p>
        </div>
      </div>

      <button
        type="button"
        className="w-[280px] h-[50px] hover:bg-sky-700 text-white bg-[#007AD3] text-4.5 leading-5 font-bold rounded-[5px] mt-5"
      >
        Agree
      </button>
    </div>
  </div>
)

export default Form
