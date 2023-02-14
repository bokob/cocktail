import "../css/Main.css";
import MagicCard from "../components/MagicCard";
import Logo from "../components/Logo";
import Galary from "../components/Galary";
import { Container, Nav, Navbar } from "react-bootstrap";
import { useNavigate, Link } from "react-router-dom";

function Main() {
  let navigate = useNavigate();
  return (
    <>
      <div className="container">
        <div className="item1">
          <nav class="dropdownmenu">
            <ul>
              <li>
                <a href="/장바구니">Cart</a>
              </li>
              <li>
                <a href="/상품">Product</a>
              </li>
              <li>
                {/* <Link
                  onClick={() => {
                    navigate("/login");
                  }}
                >
                  Login
                </Link> */}
                <a href="/login">Login</a>
              </li>
              <li>
                <a href="/">Home</a>
              </li>
            </ul>
          </nav>
        </div>
        <div className="item2">2</div>
        <div className="item3">
          <Logo style={{ float: "left" }} />
        </div>
        <div className="item4">4</div>
        <div className="item5">공백</div>
        <div className="item6">
          <Galary />
        </div>
        <div className="item7">공백</div>
        <div className="item8">공백</div>
        <div className="item9">접근정보</div>
        <div className="item10">공백</div>
      </div>
      <div></div>
    </>
  );
}

export default Main;
