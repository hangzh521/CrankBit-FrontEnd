import { FC, ReactNode } from 'react'
import classNames from 'classnames'
import Container from '@/layouts/Container'
import FileLogo from '@/components/FileLogo'
import SideNavigation from '@/components/SideNavigation'

interface Props {
  children: ReactNode
  variant: PageVariant
}

export enum PageVariant {
  AuthPage,
  UserPage,
  CompanyPage,
}

const FlexLayout: FC<Props> = ({ children, variant }) => (
  <Container className="flex min-h-screen">
    <div
      className={classNames(
        'bg-background',
        'text-white',
        variant === PageVariant.AuthPage && ['w-1/2 flex items-center justify-center'],
        variant === PageVariant.UserPage && ['w-[305px]']
      )}
    >
      {variant === PageVariant.AuthPage && <FileLogo className="h-[100px]" />}
      {variant === PageVariant.UserPage && <SideNavigation />}
      {variant === PageVariant.CompanyPage && <SideNavigation isCompanySide />}
    </div>

    <div
      className={classNames(
        variant === PageVariant.AuthPage && ['w-1/2'],
        variant === PageVariant.UserPage && ['w-full'],
        variant === PageVariant.CompanyPage && ['w-full']
      )}
    >
      {variant === PageVariant.UserPage && children}
      {variant === PageVariant.CompanyPage && children}
      {variant === PageVariant.AuthPage && (
        <div className="flex items-center justify-center bg-white h-screen">{children}</div>
      )}
    </div>
  </Container>
)

export default FlexLayout
