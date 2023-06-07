// External imports
import { Routes, Route } from 'react-router-dom'

// Local imports
import HomePage from '../pages/HomePage'
import TestPage from '../pages/TestPage'
import SignUp from "../pages/SignUpPage";
import Login from "../pages/LoginPage";

// Component definition
const App = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/test" element={<TestPage />} />
      <Route path="/auth/signup" element={<SignUp />} />
      <Route path="/auth/login" element={<Login />} />
    </Routes>
  )
}

// Default export
export default App
