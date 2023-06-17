import { FC } from 'react'
import { BiFile } from 'react-icons/bi'

const AuthHero: FC = () => (
  <div className="bg-background w-full flex items-center justify-center h-screen">
    <div className="flex flex-col items-center">
      <BiFile className="inline-block text-primary p-0 w-authHeroLogoWidth h-authHeroLogoHeight" />
      <div className="text-white text-2xl font-inter font-normal leading-6">Form Builder</div>
    </div>
  </div>
)

export default AuthHero
