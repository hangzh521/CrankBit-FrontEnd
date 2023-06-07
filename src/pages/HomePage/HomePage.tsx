// Local imports
import HelloWorld from '../../components/HelloWorld'

// Component definition
function HomePage() {
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
