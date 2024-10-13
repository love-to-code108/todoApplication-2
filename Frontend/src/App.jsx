import { Routes, Route } from "react-router-dom"
import { LandingPage } from "./Pages/landingPage"
import { SignUpPage } from "./Pages/SignUpPage"
import { SignInPage } from "./Pages/SignInPage"
import { MainTodoPage } from "./Pages/mainTodoPage"




function App() {
  

  return (
    <div>
      <Routes>
        <Route path="/" element={<LandingPage/>} />
        <Route path="/signup" element={<SignUpPage/>} />
        <Route path="/signin" element={<SignInPage/>} />
        <Route path="/todoapp" element={<MainTodoPage/>} />
        <Route path="/todoapp/:userId" element={<LandingPage/>} />
      </Routes>
      
    </div>
  )
}

export default App
