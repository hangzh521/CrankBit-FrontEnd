import { FC, useState, ChangeEvent, MouseEvent } from 'react'
import VisibilityIcon from '@mui/icons-material/Visibility'
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff'

type Props = {
  // eslint-disable-next-line
  setPasswordReset: React.Dispatch<React.SetStateAction<any>>
}

const PasswordField: FC<Props> = ({ setPasswordReset }) => {
  const [values, setValues] = useState({
    password: '',
    confirmPassword: '',
    showPassword: false,
  })
  const handleClickShowPassword = (): void => {
    setValues({
      ...values,
      showPassword: !values.showPassword,
    })
  }

  const handleMouseDownPassword = (event: MouseEvent): void => {
    event.preventDefault()
  }

  const handlePasswordChange =
    (prop: string) =>
    (event: ChangeEvent<HTMLInputElement>): void => {
      setValues({
        ...values,
        [prop]: event.target.value,
      })
    }
  return (
    <div>
      <p className="text-[16px] leading-5 font-medium">New Password</p>
      <input
        className="box-border pl-[3px] w-[280px] h-[40px] mb-[24px] mt-[4px] border border-background rounded-[5px] placeholder-shown:border-gray-500"
        type={values.showPassword ? 'text' : 'password'}
        onChange={handlePasswordChange('password')}
        value={values.password}
        name="newPassword"
      />

      <p className="text-[16px] leading-5 font-medium">Confirm Password</p>
      <div className="relative">
        <button type="button" onClick={handleClickShowPassword} onMouseDown={handleMouseDownPassword}>
          {values.showPassword ? (
            <VisibilityIcon className="absolute top-[12px] left-[240px]" />
          ) : (
            <VisibilityOffIcon className="absolute top-[12px] left-[240px]" />
          )}
        </button>

        <input
          className="box-border pl-[3px] w-[280px] h-[40px] mb-[24px] mt-[4px] border border-background rounded-[5px] placeholder-shown:border-gray-500"
          type={values.showPassword ? 'text' : 'password'}
          onChange={handlePasswordChange('confirmPassword')}
          value={values.confirmPassword}
          name="confirmPassword"
        />
      </div>

      <button
        type="submit"
        onClick={() => {
          setPasswordReset(true)
        }}
        onMouseDown={() => {
          setPasswordReset(false)
        }}
        className="w-[280px] h-[50px] hover:bg-sky-700 duration-150  text-white bg-hover text-[18px] leading-5 font-bold rounded-[5px] mt-[20px]"
      >
        Update password
      </button>
    </div>
  )
}
export default PasswordField
