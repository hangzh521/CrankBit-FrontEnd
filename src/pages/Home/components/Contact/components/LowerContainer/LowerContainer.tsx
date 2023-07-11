import { FC } from 'react'
import { Box, Typography } from '@mui/material'
import LinkButton from './components/LinkButton/LinkButton'

const LowerContainer: FC = () => (
  <Box className="relative h-[300px] bg-primary-dark">
    <div>
      <Typography gutterBottom align="center" className="pt-[80px] text-white">
        Get Started by creating an account for FREE!
      </Typography>
    </div>

    <div className="flex justify-center items-center h-[160px]">
      <LinkButton Ref="/auth/signup" ButtonName="Let's Do IT!" />
    </div>
  </Box>
)

export default LowerContainer
