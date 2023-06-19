import { FC } from 'react'
import { Link } from 'react-router-dom'
import Button from '@mui/material/Button'
import IconButton from '@mui/material/IconButton'
import CloseIcon from '@mui/icons-material/Close'
import Container from '@/layouts/Container'
import MyForm from './components/MyForm'

const MyProfile: FC = () => (
  <Container>
    <div className="w-96 mx-auto px-4">
      <div
        style={{
          display: 'flex',
          justifyContent: 'flex-end',
        }}
      >
        <IconButton aria-label="Close" color="inherit">
          <CloseIcon />
        </IconButton>
      </div>

      <h1 className="font-bold mb-5 text-2xl font-inter">My Profile</h1>

      <div>
        <MyForm />
      </div>
      <Link to="." className="text-lg border-b border-sky-600 text-sky-600">
        Change Password
      </Link>
      <Button
        variant="contained"
        sx={{
          marginBottom: 3,
          marginTop: 3,
        }}
        fullWidth
      >
        Update Changes
      </Button>
      <hr className="border-gray-400 border-t-2" />
      <Button
        variant="outlined"
        sx={{
          marginTop: 3,
        }}
        fullWidth
      >
        Logout
      </Button>

      <Link to="/" className="text-lg border-b border-red-400 text-red-400">
        Request to Close Account
      </Link>
    </div>
  </Container>
)
export default MyProfile
