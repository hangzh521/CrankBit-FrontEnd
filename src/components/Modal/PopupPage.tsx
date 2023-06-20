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
      <div className="justify-center items-center">
        <div className="border rounded-md w-96 h-80 bg-white max-auto text-center">
          <div className="text-end">
            <IconButton onClick={handleClose} className="text-black w-12 h-12">
              <CloseRoundedIcon className="text-[32px]" />
            </IconButton>
          </div>
          <div className="flex justify-center">
            <div className="bg-[#0EA739] w-20 h-20 rounded-full">
              <IconButton>
                <CheckRounded className="text-white text-[64px]" />
              </IconButton>
            </div>
          </div>
          <div className="text-center font-semi-bold text-xl mt-12">
           Sign Up Successfully
          </div>
        </div>
      </div>
    </Container>
  )
}
export default PopupPage
