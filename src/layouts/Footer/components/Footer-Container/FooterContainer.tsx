import { FC } from 'react'
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward'
import NavLink from './components/NavLink'

const handleScrollToTop = (): void => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  })
}

const FooterContainer: FC = () => (
  <div className="bg-background text-white h-[384px] mx-auto max-w-7xl min-w-[390px]">
    <div className="text-base space-x-9 pt-[112px] flex justify-center">
      <NavLink Ref="/features" LinkName="Features" ScrollToTop={handleScrollToTop} />
      <NavLink Ref="/pricing" LinkName="Pricing" ScrollToTop={handleScrollToTop} />
      <NavLink Ref="/contact" LinkName="Contact" ScrollToTop={handleScrollToTop} />
    </div>

    <div className="text-xs pt-[64px] flex justify-center">
      © Report Builder, 2023 - All Rights Reserved
    </div>

    <div className="z-10 pt-[56px] flex justify-center">
      <div className="flex justify-center items-center h-[40px] w-[40px] bg-[#007ad333] rounded-full text-[#007AD3]">
        <button
          className="hover:cursor-pointer hover:opacity-50 ease-in-out duration-300  active:translate-y-3"
          onClick={handleScrollToTop}
          type="button"
        >
          <ArrowUpwardIcon />
        </button>
      </div>
    </div>
  </div>
)

export default FooterContainer
