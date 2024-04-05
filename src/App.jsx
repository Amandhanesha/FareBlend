//import logo from './logo.svg';
import "./App.css";
import img1 from "./images/img1.png";
import ReactDOM from "react-dom/client";
import homepage from "./homepage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./homepage";
import LoginPage_ from "./login2";
import Start from "./Start";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/login" element={<LoginPage_ />} />
        <Route path="/Start" element={<Start />} />
        
        
      </Routes>
    </BrowserRouter>
  );
}

export default App;
