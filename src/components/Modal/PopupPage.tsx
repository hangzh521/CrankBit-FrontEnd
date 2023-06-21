import { FC, useState } from 'react'
import CheckRounded from '@mui/icons-material/CheckRounded'
import IconButton from '@mui/material/IconButton'
import CloseRoundedIcon from '@mui/icons-material/CloseRounded'
import Container from '@/layouts/Container'

const PopupPage: FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(true)
  const handleClose = (): void => {setIsOpen(false)}
  if (!isOpen) {
    return null
  }
  return (
    <Container>
        <div className="border rounded-md w-[494px] h-[405px] max-auto text-center">
          <div className="text-end pr-5 pt-5 mb-8">
              <CloseRoundedIcon onClick={handleClose} className="text-[32px] cursor-pointer" />
          </div>
          <div className="flex justify-center">
              <IconButton className="bg-[#0EA739] w-[99px] h-[99px] rounded-full">
                <CheckRounded className="text-white text-[64px]" />
              </IconButton>
          </div>
          <div className="text-center font-semi-bold text-xl mt-12">
           Sign Up Successfully
          </div>
        </div>
    </Container>
  )
}
export default PopupPage
