import { Route, Routes } from "react-router-dom"
import Home from "./Pages/Home"
import Login from "./Pages/Login"
import HandleUrl from "./Pages/HandleUrl"
import Register from "./Pages/Register"

function App() {
  return (
    <Routes>
      <Route path="/login" element={<Login />}></Route>
      <Route path="/register" element={<Register />}></Route>
      <Route path="/home" element={<Home />}></Route>
      <Route path="/" element={<HandleUrl />}></Route>
    </Routes>
  )
}

export default App
