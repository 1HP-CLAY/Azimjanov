import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css'
import Header from "./components/Header";
import Erorr from "./Pages/Erorr";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import Setting from "./Pages/Setting";
import Profile from "./Pages/Profile";
import Home from "./Pages/Home";
import About from "./Pages/About";

// блокировка правой кнопки мышки (антикопировка)
document.addEventListener('contextmenu', function(e) {
  e.preventDefault();
});  


function App() {


  return (
    <>
<div className="App">
  <BrowserRouter>

  <Routes> 
  <Route path="/" element={<Register />} />
  <Route path="/home" element={<Home />} />
  <Route path="/about" element={<About />} />
          <Route path="/setting" element={<Setting />} />
          <Route path="/login" element={<Login />} />
          <Route path="/profile/:id" element={<Profile />} />
    <Route path="*" element={<Erorr/>} />
  </Routes>
  </BrowserRouter>
</div>
    </>
  )
}

export default App
