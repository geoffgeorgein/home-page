import { Link } from "react-router-dom";
import "./navbar.scss";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navContainer">

        <div className="logo"> <Link to={'/'}>ServCL+</Link> </div>
        <ul>
          <li>About us</li>
          <li>News</li>
          <li>Contact us</li>
        </ul>

        <div className="Contact">
          <h3>Having trouble ?</h3>
          <button>Get help</button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
