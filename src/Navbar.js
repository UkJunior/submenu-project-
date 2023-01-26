import react from "react";
import logo from "./image/logo.png";
import { FaBars } from "react-icons/fa";

const Navbar = () => {

    const displaySubmenu = (event) =>{
     const page = event.target.textContent;
     const tempBtn = event.target.getBoundingClientRect();
     const center = (tempBtn.left + tempBtn.right) / 2;
     const bottom = tempBtn.bottom - 3;
     openSubmenu(page, { center, bottom });
    }

    const handleSubmenu = (event) => {
        if(!event.target.classList.contains('link-btn')) {
            closeSubmenu();
        }
    };

  return (
    <nav className="nav" onMouseOver={handleSubmenu}>
      <div className="nav-center">
        <img src={logo} alt="log" className="nav-logo" />
        <button className="btn toggle-btn" onClick={openSidebar}>
          <FaBars />
        </button>
      </div>
      <ul className="nav-links">
        <li>
          <button className="link-btn" onMouseOver={displaySubmenu}>
            products
          </button>
        </li>
        <li>
          <button className="link-btn" onMouseOver={displaySubmenu}>contacts</button>
        </li>
        <li>
        <button className="link-btn" onMouseOver={displaySubmenu}>address</button>
        </li>
      </ul>
      <button className="btn sigin-btn">sign in</button>
    </nav>
  );
};

export default Navbar;
