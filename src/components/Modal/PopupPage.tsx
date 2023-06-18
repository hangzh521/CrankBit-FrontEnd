import { FC, useState } from 'react';
import CheckRounded from '@mui/icons-material/CheckRounded';
import IconButton from '@mui/material/IconButton';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import Container from '@/layouts/Container';

const PopupPage: FC = () => {
  const [isOpen, setIsOpen] = useState(true)
  const handleClose = ():void => {
    setIsOpen(false)
  }
  if (!isOpen) {
    return null
  }
  return (
    <Container>
      <div className="flex justify-center items-center">
        <div className="box-border border rounded-md w-96 h-80 my-10 bg-white">
          <div className="flex justify-end ">
            <IconButton
              aria-label="close"
              className="text-slack-950 w-12 h-12 bg-green-500"
              onClick={handleClose}
            >
              <CloseRoundedIcon
                className="text-black"
                style={
                {
                  fontSize: '2rem'
                }
              }
              />
            </IconButton>
          </div>
          <div className="flex justify-center items-center m-8">
            <div
              className="bg-green-600 w-20 h-20 flex justify-center rounded-full"
            >
              <IconButton
                aria-label="Check"
              >
                <CheckRounded
                  className="text-white font-inner"
                  style={{
                    fontSize: '4rem'
                  }}
                />
              </IconButton>
            </div>
          </div>
          <div
            className="font-inter font-bold text-center mt-6 mb-16 flex justify-center items-center"
          >
            <p> Sign Up Successfully </p>
          </div>
        </div>
      </div>
    </Container>
  )
}
export default PopupPage
