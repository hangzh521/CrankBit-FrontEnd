import { FC, ReactNode } from 'react'
import Button, { Variant } from '@/components/Button'

type InputProps = {
  children: ReactNode
  variant: Variant
}

const AuthButton: FC<InputProps> = ({ children, variant }) => (
  <div className="w-full flex items-center justify-center">
    <Button variant={variant} type="submit" block className="py-3 font-bold text-base leading-6">
      {children}
    </Button>
  </div>
)

export default AuthButton
