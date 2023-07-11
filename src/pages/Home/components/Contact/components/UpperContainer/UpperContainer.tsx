import { FC } from 'react'
import { Box, Typography } from '@mui/material'
import TextInput from './components/TextField/TextInput'
import Selector from './components/Selector/Selector'
import MessageBox from './components/MessageBox'
import SubmitButton from './components/SubmitButton/SubmitButton'

const UpperContainer: FC = () => (
  <Box className="h-[670px] bg-background-light">
    <div>
      <Typography variant="h3" gutterBottom align="center" className="pt-[56px] font-bold">
        Contact
      </Typography>
    </div>
    <form action="" method="get">
      <div className="max-w-2xl mx-auto">
        <div className="flex justify-center flex-wrap min-[512px]:space-x-3 mt-[28px]">
          <TextInput labelName="Name" type="string" />
          <TextInput labelName="Email Address" type="email" />
        </div>

        <div className="flex justify-center pt-[28px]">
          <Selector labelName="Enquiry Type" />
        </div>

        <div className="flex justify-center pt-[28px]">
          <MessageBox labelName="Message" />
        </div>
      </div>

      <div className="pt-[40px]">
        <SubmitButton ButtonName="Submit" />
      </div>
    </form>
  </Box>
)

export default UpperContainer
