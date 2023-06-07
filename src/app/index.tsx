// External imports
import { Routes, Route } from "react-router-dom";

// Local imports
import HomePage from "../pages/Home";
import HomePage2 from "../pages/Home2";
import Login from "../pages/Login"

// Component definition
function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="home" element={<HomePage />} />
      <Route path="home2" element={<HomePage2 />} />
      <Route path="login" element={<Login />} />
    </Routes>
  );
}

// Default export
export default App;
