import { Button } from '@mui/material'
import { FC } from 'react'
import { Link } from 'react-router-dom'

const LinkButton: FC<{ ButtonName: string; Ref: string }> = ({ ButtonName, Ref }) => (
  <div className="flex justify-center items-center">
    <Button
      variant="contained"
      className="h-[48px] w-[176px] absolute text-[22px] bg-[#3a76d1] capitalize"
    >
      {' '}
      <Link to={Ref}>{ButtonName}</Link>
    </Button>
  </div>
)

export default LinkButton
