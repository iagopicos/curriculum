import { Route, Routes } from "react-router-dom";
import Home from "../Home/Home";
import Resumee from "../Resumee/Resumee";
import "../Home/Home.scss"

export default function MainContent() {
  return (
    <div className="main-content">
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/resumee' element={<Resumee />} />
      </Routes>
    </div>
  )
}
