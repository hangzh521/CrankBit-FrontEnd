// Local imports
import HelloWorld from '../../components/HelloWorld'

// Component definition
function HomePage() {
  return (
    <HelloWorld
      box={{
        className: 'bg-blue-800 h-[100vh] flex justify-center items-center',
      }}
      text="test-only"
    />
  )
}

// Default export
export default HomePage
