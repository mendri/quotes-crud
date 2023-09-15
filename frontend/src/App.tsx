import { Route, Routes } from "react-router-dom"
import Home from "./Pages/Home"
import Login from "./Pages/Login"
import HandleUrl from "./Pages/HandleUrl"
import Register from "./Pages/Register"
import Notifications from "./Pages/Notifications"

function App() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/home" element={<Home />} />
      <Route path="/notifications" element={<Notifications />} />
      <Route path="/" element={<HandleUrl />} />
    </Routes>
  )
}

export default App
