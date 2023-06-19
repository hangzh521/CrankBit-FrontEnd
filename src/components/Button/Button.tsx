import { FC, HTMLProps, ReactNode } from 'react'
import classNames from 'classnames'

export enum Variant {
  Default,
  Primary,
  PrimaryFont,
  PrimaryOutline,
}

export enum Size {
  Default,
  Large,
}

export interface Props extends HTMLProps<HTMLButtonElement> {
  children: ReactNode
  variant?: Variant
  size?: Size
  type?: 'button' | 'submit' | 'reset' | undefined
  block?: boolean
}

const Button: FC<Props> = ({
  children,
  className,
  variant = Variant.Default,
  size = Size.Default,
  type = 'button',
  block = false,
  ...props
}) => (
  <button
    // eslint-disable-next-line react/button-has-type
    type={type}
    className={classNames(
      'disabled:opacity-20',
      'disabled:grayscale',
      'disabled:cursor-not-allowed',
      'rounded-md',
      'px-4',
      'py-1',
      variant === Variant.Default && ['bg-background', 'text-white'],
      variant === Variant.Primary && ['bg-primary', 'text-white'],
      variant === Variant.PrimaryFont && ['bg-background', 'text-primary'],
      variant === Variant.PrimaryOutline && ['bg-white', 'text-primary', 'border', 'border-primary'],
      size === Size.Default && ['h-10'],
      size === Size.Large && ['w-72', 'h-12'],
      block && ['block', 'w-full'],
      className
    )}
    {...props}
  >
    {children}
  </button>
)

export default Button
