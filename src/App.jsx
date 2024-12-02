import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css'
import Header from "./components/Header";
import Home from "./Pages/Home";
import Erorr from "./Pages/Erorr";
import About from "./Pages/About";
import Login from "./Pages/Login";

// блокировка правой кнопки мышки (антикопировка)
document.addEventListener('contextmenu', function(e) {
  e.preventDefault();
});  


function App() {


  return (
    <>
<div className="App">
  <BrowserRouter>
  <Header/>
  <Routes>
    <Route path="/" element={<Home/>} />
    <Route path="/about" element={<About/>} />
    <Route path="/login" element={<Login/>} />
    <Route path="*" element={<Erorr/>} />
  </Routes>
  </BrowserRouter>
</div>
    </>
  )
}

export default App
