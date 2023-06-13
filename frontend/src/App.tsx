import { Route, Routes } from "react-router-dom"
import Home from "./Pages/Home"
import Login from "./Pages/Login"
import HandleUrl from "./Pages/HandleUrl"

function App() {
  return (
    <Routes>
      <Route path="/login" element={<Login />}></Route>
      <Route path="/home" element={<Home />}></Route>
      <Route path="/" element={<HandleUrl />}></Route>
    </Routes>
  )
}

export default App
