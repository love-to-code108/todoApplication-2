import { Routes, Route } from "react-router-dom"
import { LandingPage } from "./Pages/landingPage"



function App() {
  

  return (
    <div>
      <Routes>
        <Route path="/" element={<LandingPage/>} />
        <Route path="/signup" element={<LandingPage/>} />
        <Route path="/signin" element={<LandingPage/>} />
        <Route path="/todoapp" element={<LandingPage/>} />
        <Route path="/todoapp/:userId" element={<LandingPage/>} />
      </Routes>
      
    </div>
  )
}

export default App
