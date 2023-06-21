import { FC, useState } from 'react'
import { Link } from 'react-router-dom'
import { Box, Container, Typography } from '@mui/material'
import { registerUser } from '@/features/auth/authSlice'
import { useAppDispatch } from '@/app/hooks'
import AuthButton from '@/components/AuthButton/AuthButton'
import { Variant } from '@/components/Button'
import AuthTextField from '@/components/AuthTextField/AuthTextField'

const Form: FC = () => {
  const [fullName, setFullName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)

  const dispatch = useAppDispatch()

  const handleRegister = (): void => {
    const newUser = {
      name: fullName,
      email,
      password,
    }

    dispatch(registerUser(newUser))
  }

  const togglePasswordVisibility = (): void => {
    setShowPassword(!showPassword)
  }

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>): void => {
    if (event.key === 'Enter') {
      togglePasswordVisibility()
    }
  }

  return (
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      height="100%"
      className="mx-[6.25rem]"
    >
      <Container>
        <Typography
          variant="h4"
          sx={{
            fontSize: '22px',
            color: '#1E1E1E',
            fontFamily: 'Inter',
            fontWeight: '500',
            lineHeight: '1.6875rem',
            marginBottom: '25px',
          }}
          gutterBottom
        >
          Create Account
        </Typography>
        <form>
          <AuthTextField
            label="Full Name"
            htmlFor="username"
            type="text"
            id="username"
            value={fullName}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setFullName(e.target.value)}
            placeholder="Enter your username.."
          />

          <AuthTextField
            label="Email Address"
            htmlFor="email"
            type="email"
            id="email"
            value={email}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}
            placeholder="Enter your email.."
          />

          <AuthTextField
            label="Password"
            htmlFor="password"
            type={showPassword ? 'text' : 'password'}
            id="password"
            value={password}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)}
            placeholder=""
            togglePasswordVisibility={togglePasswordVisibility}
            handleKeyDown={handleKeyDown}
            showPassword={showPassword}
            showEyeIcon
          />

          <AuthButton variant={Variant.Primary} onClick={handleRegister}>
            Sign Up
          </AuthButton>
        </form>
      </Container>
      <Container>
        <div className="flex items-center my-6">
          <div className="flex-grow h-0.5 bg-textColorBlack opacity-40 mr-4" />
          <span className="text-textColorBlack font-normal font-inter text-base">Already have an Account?</span>
          <div className="flex-grow h-0.5 bg-textColorBlack opacity-40 ml-4" />
        </div>
        <Link to="/auth/login">
          <AuthButton variant={Variant.PrimaryOutline}>Login</AuthButton>
        </Link>
      </Container>
    </Box>
  )
}

export default Form
