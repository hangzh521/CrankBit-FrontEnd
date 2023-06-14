import { createHashRouter, RouterProvider } from 'react-router-dom'
import Home from '@/pages/Home'
import SignUp from '@/pages/SignUp'
import Login from '@/pages/Login'
import Getstarted from '@/pages/Getstarted'  

const router = createHashRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/auth/signup',
    element: <SignUp />,
  },
  {
    path: '/auth/login',
    element: <Login />,
  },
  {
    path: '/getstarted',
    element: <Getstarted />
  }
  
])

const App = () => {
  return <RouterProvider router={router} />
}

export default App
