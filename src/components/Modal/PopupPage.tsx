import { FC, useState } from 'react'
import CheckRounded from '@mui/icons-material/CheckRounded'
import IconButton from '@mui/material/IconButton'
import CloseRoundedIcon from '@mui/icons-material/CloseRounded'
import Container from '@/layouts/Container'

const PopupPage: FC = () => {
  const [isOpen, setIsOpen] = useState(true)
  const handleClose = (): void => {
    setIsOpen(false)
  }
  if (!isOpen) {
    return null
  }
  return (
    <Container>
      <div className="flex justify-center items-center">
        <div className="border rounded-md w-96 h-80 bg-white">
          <div className="text-end">
            <IconButton onClick={handleClose} className="text-black w-12 h-12">
              <CloseRoundedIcon className="text-black text-[32px]" />
            </IconButton>
          </div>
          <div className="flex justify-center">
            <div className="bg-green-600 w-20 h-20 flex justify-center rounded-full">
              <IconButton>
                <CheckRounded className="text-white font-inner text-[64px]" />
              </IconButton>
            </div>
          </div>
          <div className="text-center font-bold text-xl mt-6 mb-16">
            <p> Sign Up Successfully </p>
          </div>
        </div>
      </div>
    </Container>
  )
}
export default PopupPage
