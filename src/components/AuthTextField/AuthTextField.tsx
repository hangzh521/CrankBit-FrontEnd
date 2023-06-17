import { FC } from 'react'
import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai'

type InputProps = {
  label?: string
  htmlFor?: string
  type: string
  id: string
  value: string
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  placeholder: string
  togglePasswordVisibility?: () => void
  handleKeyDown?: React.KeyboardEventHandler<HTMLInputElement>
  showPassword?: boolean
  showEyeIcon?: boolean
}

const AuthTextField: FC<InputProps> = ({
  label = undefined,
  htmlFor = undefined,
  type,
  id,
  value,
  onChange,
  placeholder,
  togglePasswordVisibility = undefined,
  handleKeyDown = undefined,
  showPassword = undefined,
  showEyeIcon = false,
}: InputProps) => (
  <div className="mb-6 w-full">
    {label && htmlFor && (
      <label htmlFor={htmlFor} className="block text-textColorBlack leading-5 font-medium text-base mb-0.5 font-inter">
        {label}
      </label>
    )}
    <div className="relative">
      <input
        type={type}
        id={id}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        required
        className={`w-full bg-white text-base text-textColorBlack leading-5 border border-secondary rounded-md  py-2 placeholder-opacity-40 ${
          showEyeIcon ? 'pl-4 pr-9' : 'px-4'
        }`}
      />
      {showEyeIcon && (
        <div
          className="absolute top-1/2 right-3 transform -translate-y-1/2 cursor-pointer"
          onClick={togglePasswordVisibility}
          onKeyDown={handleKeyDown}
          tabIndex={0}
          role="button"
        >
          {showPassword ? (
            <AiFillEyeInvisible className="text-grey-400 text-2xl" />
          ) : (
            <AiFillEye className="text-gray-400 text-2xl" />
          )}
        </div>
      )}
    </div>
  </div>
)

export default AuthTextField
