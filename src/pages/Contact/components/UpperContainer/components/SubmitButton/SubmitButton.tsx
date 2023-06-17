import { Button } from '@mui/material'
import { FC } from 'react'

const SubmitButton: FC<{ ButtonName: string }> = ({ ButtonName }) => (
  <div className="flex justify-center items-center">
    <Button
      type="submit"
      variant="contained"
      className="h-[48px] w-[176px] absolute text-[22px] bg-[#3a76d1] capitalize"
      value="Submit"
    >
      {' '}
      {ButtonName}
      {' '}
    </Button>
  </div>
)

export default SubmitButton
