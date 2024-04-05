import { Link } from "react-router-dom";
import "./App1.css";
import img5 from "./images/img5.png";
import img6 from "./images/img6.png";

function Start() {
  return (
    <form>
      <div className="Start">
        <div class="menu_bar">
          <h1 className="logo">FareBlend</h1>
          <div className="menuNav">
            <Link className="login" to={"/login"}>
              Login
            </Link>
            <a href="#about_us">About us</a>
            <a href="#contact">Contact</a>
            {""}
            <Link class="home" to={"/"}>
              Home
            </Link>
          </div>
        </div>
      </div>

      <div class="rectangle">
        <div className="container">
          <div className="totalE">
            <h1>
              Total Expenditure
            </h1>
          </div>
          <div className="money">
            <span>₹ 00000</span>
          </div>
          <div>
            <input type="button" value={"Add Money"} />
          </div>
        </div>
        
      </div>
      <div className="container2">
        <h3>Split With:</h3>
      </div>
      <div className="hello">
        
        <div className="userContainer">
          <img src={img6} alt="" />
          <h3>AMAN Dhanesha</h3>
        </div>
        <div className="userContainer">
          <img src={img6} alt="" />
          <h3>Raj Dharaiya</h3>
        </div>
        <div className="userContainer">
          <img src={img6} alt="" />
          <h3>Uttam Vispara</h3>
        </div>
      </div>
    </form>
  );
}
export default Start;
