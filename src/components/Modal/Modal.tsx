import { FC } from 'react'
import CheckRounded from '@mui/icons-material/CheckRounded'
import CloseRoundedIcon from '@mui/icons-material/CloseRounded'

interface Props {
  onClose: () => void
}
const Modal: FC<Props> = ({ onClose }) => (
  <div className="fixed top-0 left-0 bottom-0 right-0 bg-background/40 flex items-center justify-center z-50">
    <div className="rounded-[10px] w-[494px] h-[405px] pt-5 text-center bg-white shadow-md border border-background/40">
      <div className="text-end">
        <CloseRoundedIcon onClick={onClose} className="cursor-pointer mb-10 mr-5" />
      </div>
      <CheckRounded className="text-white bg-[#0EA739] w-[99px] h-[99px] rounded-full" />
      <div className="font-semi-bold text-xl mt-12">Sign Up Successfully</div>
    </div>
  </div>
)

export default Modal
