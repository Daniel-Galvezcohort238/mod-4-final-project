import './App.css'
import Login from './pages/login';
import Register from './pages/register';
import Hometree from './pages/hometree';
import { Navigate, Route, Routes } from "react-router-dom";


function App() {

  return (
  <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/" element={<Hometree />} />

      </Routes>
  )
}

export default App
