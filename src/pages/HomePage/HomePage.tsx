// Local imports
import HelloWorld from '../../components/HelloWorld'
import { useAppSelector } from '../../app/hooks'

// Component definition
function HomePage() {
  const { user } = useAppSelector((state) => state.auth)

  if (!user)
    return (
      <h3>
        Please <a href="/auth/signup">register</a> or <a href="/auth/login">login</a>
      </h3>
    )

  return (
    <HelloWorld
      box={{
        className: 'bg-blue-500 h-[100vh] flex justify-center items-center',
      }}
      text="hello-world"
    />
  )
}

// Default export
export default HomePage
