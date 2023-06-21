import { FC, ReactNode } from 'react'
import Button, { Variant } from '@/components/Button'

type InputProps = {
  children: ReactNode
  variant: Variant
  onClick?: () => void
}

const AuthButton: FC<InputProps> = ({ children, variant, onClick = undefined }) => (
  <div className="w-full flex items-center justify-center">
    <Button variant={variant} type="submit" block className="py-3 font-bold text-base leading-6" onClick={onClick}>
      {children}
    </Button>
  </div>
)

export default AuthButton
